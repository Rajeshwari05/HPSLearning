import { createAction } from "@reduxjs/toolkit";

export const showLoader = createAction('SHOW_LOADER');
export const hideLoader = createAction('HIDE_LOADER');