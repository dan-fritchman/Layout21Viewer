import * as proto from "../proto";
const Library = proto.layout21.raw.Library;

const API_PORT = process.env.PORT || 5000;
const API_URL =
  process.env.REACT_APP_API_URL || `http://localhost:${API_PORT}/api`;

console.log(`API_URL: ${API_URL}`);

/// Load and decode our proto-encoded sample layout library
export const loadSample = async () => {
  console.log(`Fetching sample library from ${API_URL}`);
  const tstart = performance.now();
  const resp = await fetch(API_URL);
  const tfinish = performance.now();
  console.log(`Fetched layout in ${(tfinish - tstart).toFixed(2)} ms`);

  console.log("Decoding sample library");
  const t0 = performance.now();
  const buf1 = await resp.arrayBuffer();
  const buf = new Uint8Array(buf1);
  const rv = Library.decode(buf);
  const t1 = performance.now();
  console.log(`Decoded layout in ${(t1 - t0).toFixed(2)} ms`);

  return rv;
};
