import {Request, Response, NextFunction} from 'express';
import { stringify } from 'querystring';

export class Bachans {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            title: { type: String, maxlength: 1000 },
            date: { type: String, maxlength: 24 },
            cityName: { type: String, maxlength: 50 },
            country: { type: String, maxlength: 99 },
            link_url: { type: String, maxlength: 1000000 },
            user_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'User', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store user bachans',
        [
            {
                route: '/get-all-bachans',
                method: 'POST',
                callback: this.getAllBachans,
                requireToken: true,
            },
            {
                route: '/get-bachans-by-id/:id',
                method: 'POST',
                callback: this.getBachansById,
                requireToken: true,
            },
            {
                route: '/create-bachans',
                method: 'POST',
                callback: this.createBachans,
                requireToken: true,
            },
            {
                route: '/update-bachans/id/:id',
                method: 'PUT',
                callback: this.updateBachans,
                requireToken: true,
            },
            {
                route: '/delete-bachans/id/:id',
                method: 'DELETE',
                callback: this.deleteBachans,
                requireToken: true,
            }
        ]];
    }

    //delete bachans

    deleteBachans(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('deleteBachans ----->', req.body);
            let bachanCtrl = model.controller;
            let resp = await bachanCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    //update bachans

    updateBachans(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('updateBachans ----->', req.body);
            let bachanCtrl = model.controller;
            let resp = await bachanCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    //create bachans

    createBachans(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('createBachans ----->', req.body);
            let bachanCtrl = model.controller;
            let resp = await bachanCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    // get bachans

    getAllBachans(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*']
            }
            let bachanCtrl = model.controller;
            let resp = await bachanCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getBachansById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            }
            let bachanCtrl = model.controller;
            let resp = await bachanCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

}