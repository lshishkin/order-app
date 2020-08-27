export const types = {
  SET_LOAD: "SET_LOAD",
  SET_ERROR_MODAL: "SET_ERROR_MODAL",
};

export interface ApplicationReducerInterface {
  load: boolean;
  viewErrorModal: boolean;
}
