import {Request, Response, NextFunction} from 'express';
import { stringify } from 'querystring';

export class ShoppingCart {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        id: { type: Number, key: 'primary' },
        name: { type: String, maxlength: 24 },
        author: { type: String, maxlength: 24 },
        isbn: { type: String, maxlength: 24 },
        description: { type: String, maxlength: 99 },
        image_url: { type: String, maxlength: 1000 },
        quantity: {type: String, maxlength: 10},
        price: {type: String, maxlength: 20},
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

    getshoppingcart(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*']
            }
            let bookCtrl = model.controller;
            let resp = await bookCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    addshoppingcart(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let bookCtrl = model.controller;
            let resp = await bookCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    deletecartbook(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let bookCtrl = model.controller;
            let resp = await bookCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    deleteallcart(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let bookCtrl = model.controller;
            let resp = await bookCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp});
        }
    }
  
    set model(model: any) {
      this._model = model;
    }
  
    get model() {
      return this._model;
    }
  
  }