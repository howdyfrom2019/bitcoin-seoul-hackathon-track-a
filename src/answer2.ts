import * as bitcoinMessage from "bitcoinjs-message";

const address = "1E9YwDtYf9R29ekNAfbV7MvB4LNv7v3fGa";
const message = "1E9YwDtYf9R29ekNAfbV7MvB4LNv7v3fGa";
const signature =
  "HCsBcgB+Wcm8kOGMH8IpNeg0H4gjCrlqwDf/GlSXphZGBYxm0QkKEPhh9DTJRp2IDNUhVr0FhP9qCqo2W0recNM=";

function verifyMessage(
  address: string,
  message: string,
  signature: string
): boolean {
  try {
    return bitcoinMessage.verify(message, address, signature);
  } catch (error) {
    console.error("Error verifying message:", error);
    return false;
  }
}

const isValid = verifyMessage(address, message, signature);

console.log(`Is the signature valid? ${isValid}`);
