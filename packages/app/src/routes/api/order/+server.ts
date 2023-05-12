import { json, type RequestHandler } from "@sveltejs/kit";
import { createOrder } from "../../../lib/server/database";

const toObject = (map = new Map()): any =>
  Object.fromEntries(
    Array.from(map.entries(), ([k, v]) => (v instanceof Map ? [k, toObject(v)] : [k, v]))
  );

export const GET: RequestHandler = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/photos/1");
  // const photos = await response.json();

  const response = createOrder({ item: "a", amount: "1" });
  const obj = toObject(response);
  console.log(obj);

  return json(obj);
};

export const POST: RequestHandler = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();

  return json(photos);
};
