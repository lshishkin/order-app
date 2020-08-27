import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { IApplicationState } from "../../store/types";
import { applicationActions } from "../../store/application/action";

export default function AlertDialog() {
  const dispatch = useDispatch();
  const viewErrorModal = useSelector(
    (state: IApplicationState) => state.application.viewErrorModal
  );

  const handleClickOpen = () => {
    dispatch(applicationActions.setErrorModal(true));
  };

  const handleClose = () => {
    dispatch(applicationActions.setErrorModal(false));
  };

  return (
    <div>
      <Dialog
        open={viewErrorModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Произошла ошибка запроса. Извините за неудобства.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
