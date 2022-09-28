import { ALL_OPERATORS } from '#Constants/operators.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';

export const getOperator = (standarizeInput) => {
    let operator;

    for (const alwedOperator of ALL_OPERATORS) {
        if (standarizeInput.includes(alwedOperator)) {
            if (
                operator ||
                standarizeInput.indexOf(alwedOperator) !==
                    standarizeInput.lastIndexOf(alwedOperator)
            )
                throw new InvalidInputError();

            operator = alwedOperator;
        }
    }
    return operator;
};
