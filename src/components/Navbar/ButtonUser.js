import React, {useState, useEffect,useContext} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AuthContext } from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';


export default function ButtonUser() {
  const [user] = useContext(AuthContext);
  const {logout} = useAuth()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div >
      <Button
        color='inherit'
        onClick={handleClick}
        variant='outlined'
        endIcon={<ArrowDropDownIcon />}
        size='large'
    >
        {
            //TODO: Change to user name
        }
        Hola {user.firstName}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
      >
        <MenuItem onClick={()=>logout()}>Cerrar sesión</MenuItem>
        
      </Menu>
    </div>
  );
}