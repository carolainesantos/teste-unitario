const app = require("../../index");
const request = require("supertest");

describe("Teste de api pra dividir", () => {
  test("CT31 - Post /api/dividir - 100 / 10 e retornar 10", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: 100, num2: 10 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 10 });
  });

  test("CT32 - Post /api/dividir -100 / 10 e retornar 10", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: -100, num2: 10 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: -10 });
  });

  test("CT33 - Post /api/dividir 100 / -10 e retornar 10", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: -100, num2: 10 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: -10 });
  });

  test("CT34 - Post /api/dividir 0 / 10 e retornar 0", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: -100, num2: 10 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: -10 });
  });

  test("CT35 - Post /api/dividir 100 / 0 e retornar infinito", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: 100, num2: 0 });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ message: "Erro ao Dividir" });
  });

  test("CT36 - Post /api/dividir 'a' / 13 e retornar erro", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: "a", num2: 13 });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ message: "Erro ao Dividir" });
  });

  test("CT37 - Post /api/dividir 'null' / 13 e retornar Erro ao Dividir", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: null, num2: 13 });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ message: "Erro ao Dividir" });
  });
});
