import { Request, Response, NextFunction } from 'express';
export declare class Book {
    _model: any;
    constructor(norm: any);
    deleteBook(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    updateBook(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    createBook(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getAllBooks(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getBookById(model: any): (req: Request<import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/akaljotgujjar/Desktop/BachansAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
