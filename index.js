const axios = require("axios");
const url = "https://api.thegraph.com/subgraphs/name/wighawag/eip721-subgraph";

const addr = "0xe3da002794af174b285a2325ca27efe9d4ebef06";

const query = `{
  owner(id: "${addr}") {
    tokens {
      tokenURI
    }
  }
}
`;

(async () => {
  const { data: { data }} = await axios.post(url, { query });

  data.owner.tokens.forEach(({ tokenURI }) => {
    console.log(tokenURI);
  });
})();
