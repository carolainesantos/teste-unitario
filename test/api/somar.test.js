const app = require("../../index");
const request = require("supertest");

describe("Teste de api pra somar", () => {
  test("Post /api/somar - deve somar dois números", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 12, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 25 }); // nao posso usar o tobe pra objetos
  });

  test("Post /api/somar - deve somar dois números, sendo que o num1 é negativo", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: -12, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 1 }); // nao posso usar o tobe pra objetos
  });
});
