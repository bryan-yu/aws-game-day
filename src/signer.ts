import { createHmac } from "crypto";

export const sign = (message: string) =>
  createHmac("sha256", "b322c5404751")
    .update(message)
    .digest("base64");
