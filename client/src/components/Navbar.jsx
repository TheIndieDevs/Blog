import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginDialog from "./LoginDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export default function NavBar() {
  //create setUser using context to pass to createBlog
  const { setUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [signupOpen, setsignupOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setsignupOpen(false);
  }

  function handleSignup() {
    setsignupOpen(true);
  }

  function handleBlogBtn() {
    navigate("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={handleBlogBtn}
          >
            Blogs
          </Typography>
          <Button color={"inherit"}>Guest Login</Button>
          <Button color={"inherit"} onClick={handleLogin}>
            Login
          </Button>
          <Button color={"inherit"} onClick={handleSignup}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <LoginDialog open={open} onClose={handleClose} />
    </Box>
  );
}
