const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.findAll()
        .then(products => res.json(products))
        .catch(e => console.log(e));
}

exports.postProduct = (req, res, next) => {
    Product.create({
        price: parseInt(req.body.price),
        itemName: req.body.itemName,
        category: req.body.category
    })
        .then(product => res.json(product))
        .catch(e => console.log(e));
}

exports.getSingleProduct = (req, res, next) => {
    Product.findByPk(req.params.productId)
        .then(product => res.json(product))
        .catch(e => console.log(e));
}

exports.putUpdateProduct = (req, res, next) => {
    Product.update({
        price: parseInt(req.body.price),
        itemName: req.body.itemName,
        category: req.body.category
    }, {
        where: {
            id: req.params.productId
        }
    })
        .then(() => {
            return Product.findByPk(req.params.productId)
                .then()
                .catch(e => console.log(e));
        })
        .then(product => res.json(product))
        .catch(e => console.log(e));
}

exports.deleteProduct = (req, res, next) => {
    Product.destroy({
        where: {
            id: req.params.productId
        }
    })
        .then((response) => res.json(response))
        .catch(e => console.log(e));
}
