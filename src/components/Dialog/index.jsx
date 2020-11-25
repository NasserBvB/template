import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Snackbar,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

export const DialogUpdate = ({
  open,
  handleClose,
  module,
  handleChange,
  data,
  handleUpdate,
  showErrors,
  handleCloseErrors,
  errors,
  Formulaire,
}) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Modifier {module}</DialogTitle>

        <Formulaire handleChange={handleChange} data={data} />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Modifier
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showErrors}
        autoHideDuration={6000}
        onClose={handleCloseErrors}
      >
        <Alert onClose={handleCloseErrors} severity="error">
          <List component="nav" aria-label="secondary mailbox folders">
            {errors.map((item, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText
                    primary={`Error ${index + 1} : ${Object.values(item)}`}
                  />
                </ListItem>
              );
            })}
          </List>
        </Alert>
      </Snackbar>
    </>
  );
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
