class ErrorHandler {
    static handle(error, _req, res, next) {
        const { status, message } = error instanceof HttpException 
            ? error : new HttpException(500, error.message);
        res.status(status || 500).json({ message });
        next();
    }
}

module.exports = ErrorHandler;
