import { promptQuestion } from '#Lib/promtQuestion.js';

(async () => {
    // 1 capturar la entrada del usuario por consola
    const userAnswer = await promptQuestion('introduce tu opertación \n');
    console.log(userAnswer);
    // 2 validar la entrada y separar las partes de la misma en operando y operador
    // 3 realizar la operacion
    // 4 mostrar el resultado por consola
})();
