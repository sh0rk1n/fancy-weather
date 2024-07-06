import { Dispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ScrollSaveSchema } from '@/widgets/Page/ScrollSave';

export interface StateSchema {
    scrollSave: ScrollSaveSchema;
    // async reducer
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
    state: StateSchema;
}
