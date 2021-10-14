import { handler, graphqlHandler } from "../src/function";

describe("[function]", () => {
  it("handler should return status 200", async () => {
    const res = await handler(null);
    expect(res).toEqual({
      statusCode: 200,
      body: '{"message":"Hello test"}',
    });
  });
});
