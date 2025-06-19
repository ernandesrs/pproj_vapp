import * as yup from 'yup';

declare module 'yup' {
    interface MixedSchema<TType = any, TContext = any, TDefault = undefined, TFlags = {}> {
        allowedMimeTypes(types: string[], errorMessage?: string): this;
    }
};

yup.addMethod(yup.mixed, 'allowedMimeTypes', function (mimeTypes: string[], message?: string) {
    return this.test('allowed-mime-types', message || 'Invalid file type', (fileOrFiles: File | File[] | null | undefined) => {
        if (!fileOrFiles) return true;

        const files = Array.isArray(fileOrFiles) ? fileOrFiles : [fileOrFiles];
        return files.every(file => {
            console.log(file.type,mimeTypes);
            return mimeTypes.includes(file.type)
        });
    });
});

const yupValidator = yup;

export {
    yupValidator
};