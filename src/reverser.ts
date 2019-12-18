import { sign } from "./signer";
import { Event, Payload, Response } from "./types";

const reverser = async (event: Payload): Promise<Response> => {
  console.log(`Event ${JSON.stringify(event)}`);

  const message = event.Message.split("")
    .reverse()
    .join("");

  const response: Response = {
    Message: message,
    Signature: [sign(message)]
  };

  console.log(`Response ${JSON.stringify(response)}`);

  return response;
};

export default reverser;
