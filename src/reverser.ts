import { sign } from "./signer";
import { Event, Payload, Response } from "./types";

const reverser = async ({ body }: Event): Promise<Response> => {
  const payload: Payload = JSON.parse(body);

  const message = payload.Message.split("")
    .reverse()
    .join("");

  const response: Response = {
    Message: message,
    Signature: [sign(message)]
  };

  return response;
};

export default reverser;
