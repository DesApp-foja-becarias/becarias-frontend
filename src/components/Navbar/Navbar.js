import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {AppBar,Grid,Toolbar,Container,IconButton,Drawer,List,ListItem,ListItemIcon,ListItemText,Divider} from "@mui/material";
import { Link } from "react-router-dom";

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import becariaUnahur from '../../assets/becarias-logo.svg'
import ButtonUser from "./ButtonUser";

//import UserMenuButton from './UserMenuButton';


//TODO: pasar el Drawer a un componente propio

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  toolbar: {
    minHeight: "4.5em",
  },
  list: {
    width: "100%",
    maxWidth: "360px",
  },
  drawerMinSize: {
    width: "20em",
  },
  imageIcon: {
    display: "flex",
    height: "inherit",
    width: "inherit",
  },
  iconRoot: {
    textAlign: "center",
  },
  logoImg: {
    margin: "auto",
    width: "8em",
    height: "auto",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  }
}));

const listItems = [
  {
    name: "Pagina Principal",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Buscador",
    path: "/news",
    icon: <SearchIcon />
  },
  {
    name: "Inscribir Becaria",
    path: "/inscribirbecaria",
    icon: <GroupAddIcon />
  },
  {
    name: "Inscribir Tutor",
    path: "/",
    icon: <PersonAddIcon />
  },
  {
    name: "Configuracion",
    path: "/",
    icon: <SettingsIcon />,
  },
];


function Navbar() {
  const [openDrawer, toggleDrawer] = useState(false);
  const [openUserMenu, toggleUserMenu] = useState(false);
  
  //NOTE: AUTH QUE LE TIENE QUE CAER DE CONTEXTO PERO MIENTRAS TANTO ESTA ACA ESTE USER.
  const [user, setUser] = useState({});

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container >
            <Grid item xs={4}
            >
             { user && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(!openDrawer)}
              >
                <MenuIcon />
              </IconButton>
              )}
            </Grid>
            <Drawer open={openDrawer} onClose={() => toggleDrawer(false)}>
              <div className={classes.drawerMinSize} /> {/* ;) guiño guiño */}
              <List>
                {listItems.map((items, index) => (
                  <Container disableGutters key={index}>
                    <Link className={classes.link}to={items.path}>
                    <ListItem button>
                      <ListItemIcon>
                        {
                          items.icon
                        }
                      </ListItemIcon>
                      <ListItemText primary={items.name} />
                    </ListItem>
                    </Link>
                    <Divider />
                  </Container>
                ))}
              </List>
            </Drawer>
            <Grid item xs={4}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {/* ACA ESTA LA IMAGEN */}


              <img
                className={classes.logoImg}
                src={becariaUnahur}
                alt="icono unahur"
              />

            </Grid>
            <Grid item xs={4}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              {/* ACA ESTA EL USUARIO */
              user && (
              <ButtonUser/>
              )
            }

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
