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
  contracts: [],
  plugins: [
    hardhat({
      project: "../contracts",
      deployments: readDeployments(),
    }),
    actions({
      watchContractEvent: true,
      prepareWriteContract: true,
      readContract: true,
    }),
  ],
});
