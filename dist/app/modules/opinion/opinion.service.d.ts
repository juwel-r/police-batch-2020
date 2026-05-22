import type { IOpinion } from "./opinion.interface";
export declare const OpinionServices: {
    createOpinion: (payload: IOpinion) => Promise<import("mongoose").Document<unknown, {}, IOpinion, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IOpinion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getAllOpinion: () => Promise<{
        data: (import("mongoose").Document<unknown, {}, IOpinion, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IOpinion & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        })[];
        meta: {
            total: number;
        };
    }>;
    getSingleOpinion: (bpNumber: string) => Promise<(import("mongoose").Document<unknown, {}, IOpinion, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IOpinion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    getRecommendedData: () => Promise<{
        websiteNames: any[];
        features: any[];
    }>;
    updateOpinion: (bpNumber: string, payload: Partial<IOpinion>) => Promise<(import("mongoose").Document<unknown, {}, IOpinion, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IOpinion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    deleteOpinion: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IOpinion, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IOpinion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=opinion.service.d.ts.map