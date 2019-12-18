export interface Event {
  body: string;
}

export interface Payload {
  Message: string;
}

export interface Response {
  Message: string;
  Signature: string[];
}
