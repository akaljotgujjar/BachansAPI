import { Request, Response, NextFunction } from 'express';
export declare class Book {
    _model: any;
    constructor(norm: any);
    getAllBooks(model: any): (req: Request<import("../../../../../../../../../Users/aungk/Desktop/Spring 2020/IS 183/LabAssignments/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../../Users/aungk/Desktop/Spring 2020/IS 183/LabAssignments/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getBookById(model: any): (req: Request<import("../../../../../../../../../Users/aungk/Desktop/Spring 2020/IS 183/LabAssignments/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../../Users/aungk/Desktop/Spring 2020/IS 183/LabAssignments/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
