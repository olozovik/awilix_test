import awilix from 'awilix';
import { GetData } from './getData.js';
import { Logger } from './logger.js';

export const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
    logger: awilix.asClass(Logger),
});

const getData = new GetData();
getData.getNumber(55);
