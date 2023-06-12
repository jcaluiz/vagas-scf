class HttpException extends Error {

    constructor(status, message) {
        const errorMessage = typeof message === 'string' ? message : JSON.stringify(message);
        super(errorMessage);
        this.status = status || 500;
    }
}

module.exports = HttpException;
