function productsViewed(req, res, next){
    if (!req.session.productosVistos) {
        req.session.productosVistos = [];
    }
    next();
};

module.exports = productsViewed;