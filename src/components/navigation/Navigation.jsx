import {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';

const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Navigation({isOpen = false, onOpenCreate}) {
  const theme = useTheme();
  const [open, setOpen] = useState(isOpen);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
      sessionStorage.removeItem('user');
      handleDrawerClose();
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
            style={{position : 'fixed'}}
          >
            <ArrowForwardIosIcon />
          </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
            <Typography variant="h4" color="initial">{typeof window == 'undefined' ? null : sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).username : null}</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
            {typeof window == 'undefined' ? null : sessionStorage.getItem('user') ?  
        <List>
            <ListItem button key={"Profile"}>
              <ListItemIcon>
                <AccountCircleIcon style={{fill: "white"}}/>
              </ListItemIcon>
              <ListItemText primary={"My Profile"} />
            </ListItem>
            <ListItem button key={"Favorites"}>
              <ListItemIcon>
                <FavoriteBorderIcon style={{fill: "white"}}/>
              </ListItemIcon>
              <ListItemText primary={"Favorite Products"} />
            </ListItem>
            <ListItem button key={"Create"} onClick={onOpenCreate}>
              <ListItemIcon>
                <AddCircleOutlineIcon style={{fill: "white"}}/>
              </ListItemIcon>
              <ListItemText primary={"Create Auction"} />
            </ListItem>
        </List>
                : null}
        <Divider />
        <List>
        {typeof window == 'undefined' ? null : sessionStorage.getItem('user') ?  null :
            <List>
            <Link href="/login">
            <ListItem button key={"Login"}>
              <ListItemIcon>
              <LoginIcon style={{fill: "white"}}/>
              </ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItem>
            </Link>

            <Link href="/register">
            <ListItem button key={"Register"}>
              <ListItemIcon>
              <AppRegistrationIcon style={{fill: "white"}}/>
              </ListItemIcon>
              <ListItemText primary={"Register"} />
            </ListItem>
            </Link>
            </List>
        }
        {typeof window == 'undefined' ? null : sessionStorage.getItem('user') ?
            <ListItem button key={"Logout"} onClick={logout}>
              <ListItemIcon>
                <LogoutIcon style={{fill: "white"}}/>
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
        : null}
        </List>
      </Drawer>
    </Box>
  );
}
