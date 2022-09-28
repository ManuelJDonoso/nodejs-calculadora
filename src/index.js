import { InvalidInputError } from '#Errors/invalidInputError.js';
import { getOperator } from '#Lib/getOperator.js';
import { promptQuestion } from '#Lib/promtQuestion.js';

(async () => {
    try {
        // 1 capturar la entrada del usuario por consola
        const userAnswer = await promptQuestion('introduce tu opertación \n');

        // 2 validar la entrada y separar las partes de la misma en operando y operador
        const standarizeInput = userAnswer.trim();
        if (standarizeInput === '') throw new InvalidInputError();

        const operator = getOperator(standarizeInput);

        if (!operator) throw new InvalidInputError();
    } catch (error) {
        if (error instanceof InvalidInputError) console.log(error.message);
        else
            console.log(
                `Error no controlado: ${error.message}.Stack: ${error.stack}`
            );
    }

    // 3 realizar la operacion
    // 4 mostrar el resultado por consola
})();
