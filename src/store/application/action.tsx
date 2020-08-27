import { types } from "./types";

export const applicationActions = {
  setLoad: (status: boolean) => ({
    type: types.SET_LOAD,
    payload: status,
  }),
  setErrorModal: (status: boolean) => ({
    type: types.SET_ERROR_MODAL,
    payload: status,
  }),
};
