export declare const handleDuplicateError: (error: any) => {
    StatusCode: number;
    message: string;
};
export declare const handleCastError: () => {
    StatusCode: number;
    message: string;
};
export declare const handleValidationError: (error: any) => {
    StatusCode: number;
    message: {
        name: string;
        errorSources: any;
    };
};
//# sourceMappingURL=mongooseError.d.ts.map