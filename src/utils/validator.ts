import * as yup from 'yup';

declare module 'yup' {
    interface StringSchema<TType = string, TContext = any, TDefault = undefined, TFlags = {}> {
        confirmedPassword(errorMessage?: string): this;
    }

    interface MixedSchema<TType = any, TContext = any, TDefault = undefined, TFlags = {}> {
        allowedMimeTypes(types: string[], errorMessage?: string): this;
        maxSize(mb: number, errorMessage?: string): this;
        minSize(mb: number, errorMessage?: string): this;
    }
};

yup.addMethod(yup.string, 'confirmedPassword', function (message?: string) {
    return this.test('confirmed-password', message || "The passwords entered don't match", (password, context) => {
        const confirmation = context.parent?.password_confirmation;

        if (!confirmation) {
            return context.createError({ path: 'password', message: 'Requires password confirmation' });
        }

        return confirmation === password;
    });
});

yup.addMethod(yup.mixed, 'allowedMimeTypes', function (mimeTypes: string[], message?: string) {
    return this.test('allowed-mime-types', message || 'Invalid file type', (fileOrFiles: File | File[] | null | undefined) => {
        if (!fileOrFiles) return true;

        const files = Array.isArray(fileOrFiles) ? fileOrFiles : [fileOrFiles];
        return files.every(file => {
            return mimeTypes.includes(file.type)
        });
    });
});

yup.addMethod(yup.mixed, 'minSize', function (mb: number, message?: string) {
    const bytes = mb * 1024 * 1024
    return this.test('file-size', message || `Min file size is ${mb}MB`, (fileOrFiles: File | File[] | null | undefined) => {
        if (!fileOrFiles) return true;

        const files = Array.isArray(fileOrFiles) ? fileOrFiles : [fileOrFiles];
        return files.every(file => file.size >= bytes);
    });
});

yup.addMethod(yup.mixed, 'maxSize', function (mb: number, message?: string) {
    const bytes = mb * 1024 * 1024
    return this.test('file-size', message || `Max file size is ${mb}MB`, (fileOrFiles: File | File[] | null | undefined) => {
        if (!fileOrFiles) return true;

        const files = Array.isArray(fileOrFiles) ? fileOrFiles : [fileOrFiles];
        return files.every(file => file.size <= bytes);
    });
});

const yupValidator = yup;

export {
    yupValidator
};