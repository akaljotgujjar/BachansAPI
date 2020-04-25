"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingCart {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                name: { type: String, maxlength: 24 },
                author: { type: String, maxlength: 24 },
                isbn: { type: String, maxlength: 24 },
                description: { type: String, maxlength: 99 },
                image_url: { type: String, maxlength: 1000 },
                quantity: { type: String, maxlength: 10 },
                price: { type: String, maxlength: 20 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store shopping cart',
            [
                {
                    route: '/get-shoppingcart',
                    method: 'POST',
                    callback: this.getshoppingcart,
                    requireToken: true,
                },
                {
                    route: '/add-shoppingcart',
                    method: 'POST',
                    callback: this.addshoppingcart,
                    requireToken: true,
                },
                {
                    route: '/deleteallcart',
                    method: 'DELETE',
                    callback: this.deleteallcart,
                    requireToken: true,
                },
                {
                    route: '/deletecartbook/id/:id',
                    method: 'DELETE',
                    callback: this.deletecartbook,
                    requireToken: true,
                }
            ]];
    }
    getshoppingcart(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    addshoppingcart(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    deletecartbook(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    deleteallcart(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.ShoppingCart = ShoppingCart;
