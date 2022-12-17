import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';

const Header = (props) => {
  const { title } = props;
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
          style={{ textDecoration: 'none' }}
        >
          {title}
        </Typography>
        <Button variant="outlined" size="middle" component={Link} to="/login">
          <LoginIcon sx={{ mr: 1 }} />
          ログイン
        </Button>
        <Button
          variant="outlined"
          size="middle"
          component={Link}
          sx={{ ml: 1 }}
          to="/signup"
        >
          <PersonIcon sx={{ mr: 1 }} />
          新規登録
        </Button>
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
