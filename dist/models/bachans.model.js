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
class Bachans {
    constructor(norm) {
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
    deleteBachans(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('deleteBachans ----->', req.body);
            let bachanCtrl = model.controller;
            let resp = yield bachanCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    //update bachans
    updateBachans(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('updateBachans ----->', req.body);
            let bachanCtrl = model.controller;
            let resp = yield bachanCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    //create bachans
    createBachans(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('createBachans ----->', req.body);
            let bachanCtrl = model.controller;
            let resp = yield bachanCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // get bachans
    getAllBachans(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let bachanCtrl = model.controller;
            let resp = yield bachanCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getBachansById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let bachanCtrl = model.controller;
            let resp = yield bachanCtrl.get(req, null, null);
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
exports.Bachans = Bachans;
