import React, { Component } from "react";

import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import Store from "../../Store";
import { closeDialogs } from "../../Store/AppUi";
import { signOut } from "../../Auth";


class ConfirmationDialog extends Component {
  handleKeyPress = (event) => {
    const key = event.key;

    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    if (key === "Enter") {
      this.props.onOkClick();
    }
  };

  render() {
    // Dialog Properties
    const { open } = this.props;

    // Custom Properties
    const {
      title,
      contentText,
      cancelText,
      okText,
      disableOkButton,
      highlightOkButton
    } = this.props;

    // Dialog Events
    const { onClose } = this.props;

    // Custom Events
    const { onCancelClick, onOkClick } = this.props;

    if (!onClose) {
      return null;
    }

    return (
      <Dialog open={open} onClose={onClose} onKeyPress={this.handleKeyPress}>
        {title && <DialogTitle>{title}</DialogTitle>}

        {contentText &&
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
        </DialogContent>
        }

        {(onCancelClick || onOkClick) &&
        <DialogActions>
          {onCancelClick &&
          <Button color="primary" onClick={onCancelClick}>
            {cancelText || "Cancel"}
          </Button>
          }

          {onOkClick &&
          <Button color="primary" disabled={disableOkButton} variant={highlightOkButton && "contained"}
                  onClick={onOkClick}>
            {okText || "OK"}
          </Button>
          }
        </DialogActions>
        }
      </Dialog>
    );
  }
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,

  title: PropTypes.string,
  contentText: PropTypes.string,
  cancelText: PropTypes.string,
  okText: PropTypes.string,
  disableOkButton: PropTypes.bool,
  highlightOkButton: PropTypes.bool,

  onClose: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func,
  onOkClick: PropTypes.func
};


export class ConfirmationDialogWrapper extends React.Component { // FIXME: get rid of this
  render() {
    const { isPerformingAuthAction } = this.props;

    return <ConfirmationDialog
      open
      highlightOkButton

      title="Sign out?"
      contentText="While signed out you are unable to manage your profile and conduct other activities that require you to be signed in."
      okText="Sign Out"
      disableOkButton={isPerformingAuthAction}

      onClose={closeDialogs}
      onCancelClick={closeDialogs}
      onOkClick={signOut}
    />;
  }
}

export default Store.connect(state => ({
  isPerformingAuthAction: state.ui.isPerformingAuthAction,
}))(ConfirmationDialogWrapper);

