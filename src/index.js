import { operations } from '#Constants/operations.js';
import { BINARY_OPERATORS } from '#Constants/operators.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import {
    getBinaryOperatings,
    getSingleOperatings,
} from '#Lib/getOperatings.js';
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

        // devuelve un array por el operador
        const splittedInput = standarizeInput.split(operator);

        let firstOperating, secondOperating;

        if (BINARY_OPERATORS.includes(operator)) {
            [firstOperating, secondOperating] =
                getBinaryOperatings(splittedInput);
        } else {
            [firstOperating] = getSingleOperatings(splittedInput);
        }

        // 3 realizar la operacion
        const result = operations[operator](firstOperating, secondOperating);
        const roundedResult = Number(Math.round(result + 'e+5') + 'e-5');

        // 4 mostrar el resultado por consola
        if (isNaN(roundedResult) || !isFinite(roundedResult))
            console.log('operacion no valida');
        else console.log(`El resultado es: ${roundedResult}`);
    } catch (error) {
        if (error instanceof InvalidInputError)
            console.log(error.message, error.stack);
        else
            console.log(
                `Error no Esperado: ${error.message}.Stack: ${error.stack}`
            );
    }
})();
