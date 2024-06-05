
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
  { title: "product", path: "/manage-product" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

function BasicNavbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{display: "flex", justifyContent: "space-evenly"}}>
        {/* <Link to={"/"} className="nav-link fw-bold fs-4">My Shop</Link> */}
        <Typography variant="h6"
                  component={NavLink}
                  to={"/"}
                  sx={{color:"inherit", textDecoration: "none", fontSize: "1.5em"}}>My Shop</Typography>

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem key={path} component={NavLink} to={path} sx={{color: "inherit"}}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        
        <Box sx={{display: "flex"}}>

        <IconButton>
          <Badge badgeContent={4} color="warning">
            <ShoppingCart/>
          </Badge>
        </IconButton>

        <List sx={{ display: "flex"}}>
          {rightLinks.map(({ title, path }) => (
            <ListItem key={path} component={NavLink} to={path}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        </Box>


      </Toolbar>
    </AppBar>
  );
}

export default BasicNavbar;
