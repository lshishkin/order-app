import { Reducer } from "redux";
import { types, ApplicationReducerInterface } from "./types";

const initialState = {
  load: false,
  viewErrorModal: false,
};

export const applicationReducer: Reducer<
  ApplicationReducerInterface,
  { type: string; payload: boolean }
> = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOAD: {
      return {
        ...state,
        load: action.payload,
      };
    }
    case types.SET_ERROR_MODAL: {
      return {
        ...state,
        viewErrorModal: action.payload,
      };
    }

    default:
      return state;
  }
};
