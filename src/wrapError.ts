export const wrapError = <A extends unknown[], B>(
  f: (...as: A) => Promise<B>
) => (...as: A) =>
  f(...as).catch(error => ({ statusCode: 500, body: JSON.stringify(error) }));
