import * as proto from "../proto";
const Library = proto.layout21.raw.Library;

const API_PORT = process.env.PORT || 5000;
const API_URL = process.env.API_URL || `http://localhost:${API_PORT}/api`;
// const API_URL = process.env.VERCEL
//   ? "https://layout-app2-8ushztcmf-dan-fritchman.vercel.app/api/build/server"
//   : "http://localhost:5000/api";

console.log(`API_URL: ${API_URL}`);

export const loadSample = async () => {
  // ProtoBuf Edition
  console.log("Loading sample...");
  console.log(API_URL);
  const resp = await fetch(API_URL);
  const buf1 = await resp.arrayBuffer();
  const buf = new Uint8Array(buf1);
  console.log(buf);
  console.log("Decoding sample...");
  const decoded = Library.decode(buf);
  console.log(decoded);
  const cell = decoded.cells.slice(-2)[0];
  //   const cell = decoded.cells[0];
  console.log(cell);
  return cell;
};
