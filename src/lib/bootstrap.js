import { operations } from '#Constants/operations.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import { extractByRegex } from './extractByregex.js';
import { promptQuestion } from './promtQuestion.js';

export const bootstrap = async () => {
    try {
        // 1 capturar la entrada del usuario por consola
        const userAnswer = await promptQuestion('introduce tu opertación: ');

        // 2 validar la entrada y separar las partes de la misma en operando y operador
        const standarizeInput = userAnswer.trim().replaceAll(',', '.');
        if (standarizeInput === '') throw new InvalidInputError();

        if (standarizeInput === 'exit') {
            return true;
        }

        const [firstOperating, secondOperating, operator] =
            extractByRegex(standarizeInput);

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
};
