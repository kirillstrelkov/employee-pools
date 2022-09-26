import CloseIcon from "@mui/icons-material/Close";
import {Alert, Collapse, Container, IconButton} from "@mui/material";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {clearNotification} from "../actions/notification";

function Notification({notification, dispatch}) {
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    if (notification !== null) {
      setOpen(true);
    }
  }, [notification]);
  if (notification === null) {
    return "";
  }

  const {message, severity} = notification;

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(clearNotification());
    setOpen(false);
  };

  return (
    <Container>
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{mt: 2}}
        >
          {message}
        </Alert>
      </Collapse>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(mapStateToProps)(Notification);
