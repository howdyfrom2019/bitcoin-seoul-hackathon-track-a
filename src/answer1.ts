import axios from "axios";

// Function to get block hash by height using BlockCypher's API
async function getBlockHashByHeight(height: number): Promise<string> {
  try {
    const url = `https://api.blockcypher.com/v1/btc/test3/blocks/${height}`;
    const response = await axios.get(url);
    const blockHash = response.data.hash;
    return blockHash;
  } catch (error) {
    console.error("Error fetching block data:", error);
    throw error;
  }
}

// Replace with the actual block height you are interested in
const blockHeight = 2817663; // Example block height

getBlockHashByHeight(blockHeight)
  .then((hash) => {
    console.log(`Block hash for height ${blockHeight}: ${hash}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
