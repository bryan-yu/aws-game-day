import { sign } from "./signer";
import { Event, Payload, Response } from "./types";
import { wrapError } from "./wrapError";
import { APIGatewayProxyResult } from "aws-lambda";

const reverser = async (event: Event): Promise<APIGatewayProxyResult> => {
  console.log(`Event ${JSON.stringify(event)}`);

  const payload: Payload = JSON.parse(event.body);

  const message = payload.Message.split("")
    .reverse()
    .join("");

  const response: Response = {
    Message: message,
    Signature: [sign(message)]
  };

  console.log(`Response ${JSON.stringify(response)}`);

  return { body: JSON.stringify(response), statusCode: 200 };
};

export default wrapError(reverser);
