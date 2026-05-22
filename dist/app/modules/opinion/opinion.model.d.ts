import mongoose from "mongoose";
import type { IOpinion } from "./opinion.interface";
export declare const MOpinion: mongoose.Model<IOpinion, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, IOpinion, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<IOpinion, mongoose.Model<IOpinion, any, any, any, any, any, IOpinion>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    id?: mongoose.SchemaDefinitionProperty<string | undefined, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    name?: mongoose.SchemaDefinitionProperty<string, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    bpNumber?: mongoose.SchemaDefinitionProperty<string, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    email?: mongoose.SchemaDefinitionProperty<string | undefined, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    phone?: mongoose.SchemaDefinitionProperty<string | undefined, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    workplace?: mongoose.SchemaDefinitionProperty<string, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    websiteName?: mongoose.SchemaDefinitionProperty<string | undefined, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    features?: mongoose.SchemaDefinitionProperty<string[], IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    comments?: mongoose.SchemaDefinitionProperty<string | undefined, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createdAt?: mongoose.SchemaDefinitionProperty<Date | undefined, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    updatedAt?: mongoose.SchemaDefinitionProperty<Date | undefined, IOpinion, mongoose.Document<unknown, {}, IOpinion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IOpinion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IOpinion>, IOpinion>;
//# sourceMappingURL=opinion.model.d.ts.map