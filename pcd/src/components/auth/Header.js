import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./header.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../ContextProvider/Context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from 'react-router-dom'

const Header = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const goDash = () => {
    history.push('/dash')
  }

  const goError = () => {
    history.push("*")
  }

  const Logoutrecep = async () => {
    let token = localStorage.getItem("recepsdatatoken")

    const res = await fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        Accept: "application/json"
      },
      credentials: "include"
    })
    const data = await res.json()
    console.log(data);

    if (data.status == 201) {
      console.log("user logout");
      localStorage.removeItem("recepsdatatoken")
      setLoginData(false)
      history.push("/")
    } else {
      console.log("error");
    }
  }

  return (
    <>
      <header style={{ backgroundColor: "white" }}>
        <nav>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1
              className="logo"
              style={{
                marginLeft: "30px",
                cursor: "pointer",
                backgroundColor: "transparent",
              }}
            >
              <span style={{ color: "blue" }}>DOC</span>SMART
            </h1>
          </Link>

          <div className="avatar" onClick={handleMenuOpen}>
            {logindata && logindata.ValidRecepOne ? (
              <Avatar
                style={{
                  backgroundColor: "salmon",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {logindata.ValidRecepOne.fname && logindata.ValidRecepOne.fname[0]}
              </Avatar>
            ) : (
              <Avatar style={{ backgroundColor: "blue" }} />
            )}
          </div>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {
              logindata && logindata.ValidRecepOne ? (
                <>
                  <MenuItem onClick={() => goDash()}>Profile</MenuItem>
                  <MenuItem onClick={() => Logoutrecep()}>Logout</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={() => goError()}>Profile</MenuItem>
                </>
              )
            }
          </Menu>
        </nav>
      </header>
    </>
  );
};

export default Header;