import Joi from "joi";

export class Member {

    constructor(public _id: string,
                public name: string,
                public address: string,
                public contact: string) {
    }

    public static readonly SCHEMA = Joi.object({
        _id: Joi.string().required().regex(/^\d{9}[Vv]$/),
        name: Joi.string().required().regex(/^[A-Za-z ]+$/),
        address: Joi.string().required().min(3),
        contact: Joi.string().required().regex(/^\d{3}-\d{7}$/)
    });
}