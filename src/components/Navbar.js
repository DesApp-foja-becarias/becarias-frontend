import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import iconUnahur from "../assets/unahur-isologo.svg";
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//TODO: pasar el Drawer a un componente propio

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: "3em",
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
    path: "/",
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
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(!openDrawer)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={openDrawer} onClose={() => toggleDrawer(false)}>
            <div className={classes.drawerMinSize} /> {/* ;) guiño guiño */}
            <List>
              {listItems.map((items, index) => (
                <Container disableGutters key={index}>
                  <ListItem button>
                    <ListItemIcon>
                      {
                        items.icon
                      }
                    </ListItemIcon>
                    <ListItemText primary={items.name} />
                  </ListItem>

                  <Divider />
                </Container>
              ))}
              {
                //TODO: BOTON DE SALIDA ARMARLO MAS TARDE :B
              }
            </List>
          </Drawer>
          {
            //TODO: AGREGAR LOGO Y POSICIONAR ESTO EN EL CENTRO
            <img
              className={classes.logoImg}
              src={iconUnahur}
              alt="icono unahur"
            />
          }
          <Button color="inherit">aca iria el nombre del usuario</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
