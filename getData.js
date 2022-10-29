export class GetData {
    constructor(opts) {
        this.logger = opts.logger;
    }

    getNumber(number) {
        this.logger.log(number);
    }
}
