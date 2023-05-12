<script lang="ts">
  import { onMount } from "svelte";

  type Options = {
    seed?: string;
    color?: string;
    bgcolor?: string;
    size?: number;
    scale?: number;
    spotcolor?: string;
  };

  type OptionsCompleted = {
    seed: string;
    color: string;
    bgcolor: string;
    size: number;
    scale: number;
    spotcolor: string;
  };
  // The random number is a js implementation of the Xorshift PRNG
  var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

  function seedrand(seed: string) {
    for (var i = 0; i < randseed.length; i++) {
      randseed[i] = 0;
    }
    for (var i = 0; i < seed.length; i++) {
      randseed[i % 4] = (randseed[i % 4] << 5) - randseed[i % 4] + seed.charCodeAt(i);
    }
  }

  function rand() {
    // based on Java's String.hashCode(), expanded to 4 32bit values
    var t = randseed[0] ^ (randseed[0] << 11);

    randseed[0] = randseed[1];
    randseed[1] = randseed[2];
    randseed[2] = randseed[3];
    randseed[3] = randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8);

    return (randseed[3] >>> 0) / ((1 << 31) >>> 0);
  }

  function createColor() {
    //saturation is the whole color spectrum
    var h = Math.floor(rand() * 360);
    //saturation goes from 40 to 100, it avoids greyish colors
    var s = rand() * 60 + 40 + "%";
    //lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
    var l = (rand() + rand() + rand() + rand()) * 25 + "%";

    var color = "hsl(" + h + "," + s + "," + l + ")";
    return color;
  }

  function createImageData(size: number) {
    var width = size; // Only support square icons for now
    var height = size;

    var dataWidth = Math.ceil(width / 2);
    var mirrorWidth = width - dataWidth;

    var data = [];
    for (var y = 0; y < height; y++) {
      var row = [];
      for (var x = 0; x < dataWidth; x++) {
        // this makes foreground and background color to have a 43% (1/2.3) probability
        // spot color has 13% chance
        row[x] = Math.floor(rand() * 2.3);
      }
      var r = row.slice(0, mirrorWidth);
      r.reverse();
      row = row.concat(r);

      for (var i = 0; i < row.length; i++) {
        data.push(row[i]);
      }
    }

    return data;
  }

  function buildOpts(opts: Options): Options {
    var newOpts: Options = {};

    newOpts.seed = opts.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);

    seedrand(newOpts.seed);

    newOpts.size = opts.size || 8;
    newOpts.scale = opts.scale || 4;
    newOpts.color = opts.color || createColor();
    newOpts.bgcolor = opts.bgcolor || createColor();
    newOpts.spotcolor = opts.spotcolor || createColor();

    return newOpts;
  }

  function renderIcon(opts: Options, canvas: HTMLCanvasElement) {
    let optsC = buildOpts(opts || {}) as OptionsCompleted;
    var imageData = createImageData(optsC.size);
    var width = Math.sqrt(imageData.length);

    canvas.width = canvas.height = optsC.size * optsC.scale;

    var cc = canvas.getContext("2d");
    if (cc) {
      cc.fillStyle = optsC.bgcolor;
      cc.fillRect(0, 0, canvas.width, canvas.height);
      cc.fillStyle = optsC.color;

      for (var i = 0; i < imageData.length; i++) {
        // if data is 0, leave the background
        if (imageData[i]) {
          var row = Math.floor(i / width);
          var col = i % width;

          // if data is 2, choose spot color, if 1 choose foreground
          cc.fillStyle = imageData[i] == 1 ? optsC.color : optsC.spotcolor;

          cc.fillRect(col * optsC.scale, row * optsC.scale, optsC.scale, optsC.scale);
        }
      }
      return canvas;
    }
  }

  function createIcon(opts: Options) {
    var canvas = document.createElement("canvas");
    renderIcon(opts, canvas);
    return canvas;
  }

  export let id: string;

  export let options: Options = {
    // All options are optional
    seed: id, // seed used to generate icon data, default: random
    size: 10, // width/height of the icon in blocks, default: 8
    scale: 5, // width/height of each block in pixels, default: 4
    // default: random. Set to -1 to disable it. These "spots" create structures
    // that look like eyes, mouths and noses.
  };

  onMount(() => {
    console.log(id);
    var icon = createIcon(options);
    const menu = document.querySelector(`#${id}`);
    menu?.appendChild(icon); // icon is a canvas element
  });
</script>

<div class="wrapper" {id}>
  <slot />
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>
