const app = require("../../index");
const request = require("supertest");

describe("Teste de api pra subtrair", () => {
  test("CT24 - Post /api/subtrair - Deve subtrair 12 - 13 e retornar -1", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: 12, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: -1 });
  });

  test("CT25 - Post /api/subtrair - Deve subtrair -12 - 13 e retornar -25", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: -12, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: -25 });
  });

  test("CT26 - Post /api/subtrair - Deve subtrair 12 - (-13) e retornar 25", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: 12, num2: -13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 25 });
  });

  test("CT27 - Post /api/subtrair - Deve subtrair 0 - 13 e retornar -13", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: 0, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: -13 });
  });

  test("CT28 - Post /api/subtrair - Deve subtrair apenas o 'a' - 12", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: "a", num2: 12 });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ message: "Erro ao Subtrair" });
  });

  test("CT29 - Post /api/subtrair - Deve subtrair apenas o 12 - 'a'", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: 12, num2: "a" });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ message: "Erro ao Subtrair" });
  });

  test("CT30 - Post /api/subtrair - Deve subtrair apenas o 12 - null", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: 12, num2: null });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ message: "Erro ao Subtrair" });
  });
});
