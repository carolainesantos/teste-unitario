const Servico = require("../../src/services/service");

describe("Testando função divisão", () => {
  let servico = new Servico();

  it("CT16 - Deve dividir 100 / 10 e retornar 10", () => {
    const resultado = servico.Dividir(100, 10);
    expect(resultado).toBe(10);
  });

  it("CT17 - Deve dividir -100 / 10 e retornar 10", () => {
    const resultado = servico.Dividir(-100, 10);
    expect(resultado).toBe(-10);
  });

  it("CT18 - Deve dividir 100 / -10 e retornar -10", () => {
    const resultado = servico.Dividir(100, 10);
    expect(resultado).toBe(10);
  });

  it("CT19 - Deve dividir 0 / 10 e retornar 0", () => {
    const resultado = servico.Dividir(0, 10);
    expect(resultado).toBe(0);
  });

  it("CT20 - Deve dividir 100 / 0 e retornar infinito", () => {
    const resultado = () => servico.Dividir(100, 0); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não é possivel dividir por zero, pois o resultado será infinito"
    );
  });

  it("CT21 - Tentar dividir a / 13 e retornar 13", () => {
    const resultado = () => servico.Dividir("a", 13); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não é possível dividir com valores inválidos (use apenas valores númericos)"
    );
  });

  it("CT22 - Deve dividir 12 / a e retornar 12", () => {
    const resultado = () => servico.Dividir(12, "a"); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não é possível dividir com valores inválidos (use apenas valores númericos)"
    );
  });

  it("CT23 - Deve dividir null / 13 e retornar: Não é possivel dividir sem preencher todos os campos", () => {
    const resultado = () => servico.Dividir(null, 13); //fica em espera até o momento de execução
    expect(resultado).toThrowError(
      "Não é possivel dividir sem preencher todos os campos"
    );
  });
});
