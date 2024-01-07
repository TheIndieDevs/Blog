import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
const LoginDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
    </Dialog>
  );
};

export default LoginDialog;
