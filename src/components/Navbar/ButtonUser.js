import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@mui/styles";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const useStyles = makeStyles((theme) => ({
    mainButton: {
        backgroundColor: '#000000',
        margin: '500px',
    },
})
);

export default function ButtonUser() {
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
        Hola Usuario
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
      >
        <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
        
      </Menu>
    </div>
  );
}