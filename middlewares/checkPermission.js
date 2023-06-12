module.exports = (req, _res, next) => {
    const { permissions } = req.headers;

    if (permissions === 'delete') {
        req.hasDeletePermission = true;
    }

    if (permissions === 'update') {
        req.hasUpdatePermission = true;
    }

    next();
}