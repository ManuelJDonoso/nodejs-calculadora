import { closeInterface } from '#Lib/promtQuestion.js';
import { bootstrap } from './lib/bootstrap.js';

const main = async () => {
    let stopFlag = false;
    while (!stopFlag) {
        const flag = await bootstrap();
        stopFlag = flag;
    }
    closeInterface();
};

main();
