const Servico = require("../../src/services/service");

describe("Testando função somar", () => {
  let servico = new Servico();

  it("CT01 - Deve somar 2 + 2 e retornar 4", () => {
    const resultado = servico.Somar(2, 2);
    expect(resultado).toBe(4);
  });

  it("CT02 - Deve somar a + 2", () => {
    const resultado = () => servico.Somar("a", 2); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não dá para somar com valores inválidos (use apenas valores númericos)"
    );
  });

  it("CT03 - Deve somar 12 + a", () => {
    const resultado = () => servico.Somar(12, "a"); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não dá para somar com valores inválidos (use apenas valores númericos)"
    );
  });

  it("CT04 - Deve somar -12 + 13 e retornar 1", () => {
    const resultado = servico.Somar(-12, 13);
    expect(resultado).toBe(1);
  });

  it("CT05 - Deve somar 0 + 13 e retornar 13", () => {
    const resultado = servico.Somar(0, 13);
    expect(resultado).toBe(13);
  });

  it("CT06 - Deve somar 12 + 0 e retornar 12", () => {
    const resultado = servico.Somar(12, 0);
    expect(resultado).toBe(12);
  });

  it("CT07 - Deve somar 12 + -13 e retornar -1", () => {
    const resultado = servico.Somar(12, -13);
    expect(resultado).toBe(-1);
  });

  it("CT08 - Tentar somar 12 + null não deve somar", () => {
    const resultado = () => servico.Somar(12, null); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não é possivel somar sem preencher todos os campos"
    );
  });
});
