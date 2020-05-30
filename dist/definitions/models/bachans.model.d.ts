import { Request, Response, NextFunction } from 'express';
export declare class Bachans {
    _model: any;
    constructor(norm: any);
    deleteBachans(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    updateBachans(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    createBachans(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getAllBachans(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getBachansById(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
