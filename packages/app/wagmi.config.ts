import { COFFIN_ABI, FACTORY_ABI, GHO_ABI, USDC_ABI } from "./src/abi/abis";
import { actions, hardhat } from "@wagmi/cli/plugins";

import { defineConfig } from "@wagmi/cli";
import fs from "fs";

function readDeployments() {
  console.log("Read deployments");
  const out = {};
  // Get list of folders in deployments
  const folders = fs.readdirSync("../contracts/deployments");

  // Read .chainId from each folder and set as key of out object
  folders.forEach((folder) => {
    const chainId = fs.readFileSync(`../contracts/deployments/${folder}/.chainId`).toString();

    // Loop through each JSON file found in the folder
    const files = fs.readdirSync(`../contracts/deployments/${folder}`);
    files.forEach((file) => {
      // Skip if files do not end with .json
      if (!file.endsWith(".json")) return;
      // Read the JSON file and parse it
      const json = JSON.parse(
        fs.readFileSync(`../contracts/deployments/${folder}/${file}`).toString()
      );

      // Set the key of the out object to be the contract name
      // and the value to be the address of the contract
      out[file.split(".")[0]] = {
        ...out[file.split(".")[0]],
        [chainId]: json.address,
      };
    });
  });
  return out;
}

readDeployments();

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      abi: GHO_ABI,
      address: {
        5: "0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211",
      },
      name: "GHO",
    },
    {
      abi: USDC_ABI,
      address: {
        5: "0x69305b943C6F55743b2Ece5c0b20507300a39FC3",
      },
      name: "USDC",
    },
    {
      abi: FACTORY_ABI,
      address: {
        5: "0xb528bc8C6FAcE699fD9217a2b678baC207132a82",
      },
      name: "CoffinFactory",
    },
    {
      abi: COFFIN_ABI,
      address: {
        5: "0x80b74cd7ca2ffe55fd95e8d4e9078f1b069717af",
      },

      name: "Coffin",
    },
  ],
  plugins: [
    // hardhat({
    //   project: "../contracts",
    //   deployments: readDeployments(),
    // }),
    actions({
      watchContractEvent: true,
      prepareWriteContract: true,
      readContract: true,
    }),
  ],
});
