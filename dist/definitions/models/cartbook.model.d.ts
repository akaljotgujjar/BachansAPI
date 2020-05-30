import { Request, Response, NextFunction } from 'express';
export declare class ShoppingCart {
    _model: any;
    constructor(norm: any);
    getshoppingcart(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    addshoppingcart(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    deletecartbook(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    deleteallcart(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
