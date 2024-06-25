class ServicoExercicio {
  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(
        "Não dá para somar com valores inválidos (use apenas valores númericos)"
      );
    }
    if (num2 === null) {
      throw new Error("Não é possivel somar sem preencher todos os campos");
    }
    if (num1 === "a" || num2 === "a") {
      throw new Error("Não é possivel somar com letras(insira apenas numeros)");
    }

    return num1 + num2;
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(
        "Não dá para subtrair com valores inválidos (use apenas valores númericos)"
      );
    }
    if (num2 === null) {
      throw new Error("Não é possivel subtrair sem preencher todos os campos");
    }

    return num1 - num2;
  }

  Dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(
        "Não é possível dividir com valores inválidos (use apenas valores númericos)"
      );
    }
    if (num2 === 0) {
      throw new Error(
        "Não é possivel dividir por zero, pois o resultado será infinito"
      );
    }
    if (num1 === null) {
      throw new Error("Não é possivel dividir sem preencher todos os campos");
    }

    return num1 / num2;
  }

  Multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(
        "Não dá para multiplicar com valores inválidos (use apenas valores númericos)"
      );
    }
    if (num1 === null || num2 === null) {
      throw new Error(
        "Não é possivel multiplicar sem preencher todos os campos"
      );
    }
    return num1 * num2;
  }
}

module.exports = ServicoExercicio;
