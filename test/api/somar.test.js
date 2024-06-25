const app = require("../../index");
const request = require("supertest");

describe("Teste de api pra somar", () => {
  test("CT16 - Post /api/somar - deve somar dois números", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 2, num2: 2 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 4 }); // nao posso usar o tobe pra objetos
  });

  test("CT17 - Post /api/somar - Tentar somar letras e números - a + 2", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: "a", num2: 2 });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({
      message: "Erro ao somar",
    });
  });

  test("Post /api/somar - Tentar somar letras e números - 2 + a CT18 -", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 2, num2: "a" });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({
      message: "Erro ao somar",
    });
  });

  test("CT19 - Post /api/somar - Deve somar -12 + 13 e retornar 1", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: -12, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      result: 1,
    });
  });

  test("CT20 - Post /api/somar - Deve somar 0 + 13 e retornar 13", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 0, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      result: 13,
    });
  });

  test("CT21 - Post /api/somar - Deve somar 12 + 0 e retornar 12", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 12, num2: 0 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      result: 12,
    });
  });

  test("CT22 - Post /api/somar - Deve somar 12 + -13 e retornar -1", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 12, num2: -13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      result: -1,
    });
  });

  test("CT23 - Post /api/somar - Tentar somar 12 + null não deve somar", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 12, num2: null });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({
      message: "Erro ao somar",
    });
  });
});
