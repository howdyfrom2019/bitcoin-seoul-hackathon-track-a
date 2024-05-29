import axios from "axios";

async function getBlockHashByHeight(height: number): Promise<string> {
  try {
    const url = `https://api.blockcypher.com/v1/btc/test3/blocks/${height}`;
    const response = await axios.get(url);
    const txcount = response.data.n_tx;
    return txcount;
  } catch (error) {
    console.error("Error fetching block data:", error);
    throw error;
  }
}

const blockHeight = 2817664; // Example block height

getBlockHashByHeight(blockHeight)
  .then((count) => {
    console.log(
      `Number of new outputs created by block at height ${blockHeight}: ${count}`
    );
  })
  .catch((error) => {
    console.error("Error from fetching outputs:", error);
  });
