const Servico = require("../../src/services/service");

describe("Testando função multiplicar", () => {
  let servico = new Servico();

  it("CT24 - Deve multilicar 100 * 10 e retornar 1.000", () => {
    const resultado = servico.Multiplicar(100, 10);
    expect(resultado).toBe(1000);
  });

  it("CT25 - Deve multilicar -100 * 10 e retornar 1.000", () => {
    const resultado = servico.Multiplicar(-100, 10);
    expect(resultado).toBe(-1000);
  });

  it("CT26 - Deve multilicar 100 * -10 e retornar -100", () => {
    const resultado = servico.Multiplicar(100, -10);
    expect(resultado).toBe(-1000);
  });

  it("CT27 - Deve multilicar 0 * 10 e retornar 0", () => {
    const resultado = servico.Multiplicar(0, 10);
    expect(resultado).toBe(0);
  });

  it("CT28 - Deve multilicar 100 * 0 e retornar 0", () => {
    const resultado = servico.Multiplicar(100, 0);
    expect(resultado).toBe(0);
  });

  it("CT29 - Deve multilicar a * 13 e retornar 13", () => {
    const resultado = () => servico.Multiplicar("a", 13); //fica em espera até o momento de execução
    expect(resultado).toThrowError("");
  });

  it("CT30 - Deve multilicar 13 * a e retornar 13", () => {
    const resultado = () => servico.Multiplicar(13, "a"); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não dá para multiplicar com valores inválidos (use apenas valores númericos)"
    );
  });

  it("CT31 - Tenta multilicar null * 12 e retornar  Não é possivel realizar essa operação", () => {
    const resultado = () => servico.Multiplicar(null, 12); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não é possivel multiplicar sem preencher todos os campos"
    );
  });

  it("CT32 - Deve multilicar   12 * null e retornar Não é possivel realizar essa operação. Favor informar todos os números", () => {
    const resultado = () => servico.Multiplicar(12, null); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não é possivel multiplicar sem preencher todos os campos"
    );
  });
});
