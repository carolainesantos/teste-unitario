const Servico = require("../../src/services/service");

describe("Testando função subtrair", () => {
  let servico = new Servico();

  it("CT09 - Deve subtrair 12 - 13 e retornar -1", () => {
    const resultado = servico.Subtrair(12, 13);
    expect(resultado).toBe(-1);
  });

  it("CT10 - Deve subtrair -12 - 13 e retornar -25", () => {
    const resultado = servico.Subtrair(-12, 13);
    expect(resultado).toBe(-25);
  });

  it("CT11 - Deve subtrair 12 - (-13) e retornar 25", () => {
    const resultado = servico.Subtrair(12, -13);
    expect(resultado).toBe(25);
  });

  it("CT12 - Deve subtrair 0 - 13 e retornar -13", () => {
    const resultado = servico.Subtrair(0, 13);
    expect(resultado).toBe(-13);
  });

  it("CT13 - Deve subtrair apenas o a - 12", () => {
    const resultado = () => servico.Subtrair(12); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não dá para subtrair com valores inválidos (use apenas valores númericos)"
    );
  });

  it("CT14 - Deve subtrair apenas o 12 - a", () => {
    const resultado = () => servico.Subtrair(12); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não dá para subtrair com valores inválidos (use apenas valores númericos)"
    );
  });

  it("CT15 - Tentar subtrair 12 - null não deve subtrair", () => {
    const resultado = () => servico.Subtrair(12, null); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não é possivel subtrair sem preencher todos os campos"
    );
  });
});
