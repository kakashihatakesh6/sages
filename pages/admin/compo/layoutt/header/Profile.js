import React, { useEffect, useState } from "react"
import { useTheme } from "@mui/material/styles"
import {
  Box,
  Menu,
  Avatar,
  Typography,
  Divider,
  Button,
  IconButton,
  ListItemButton,
  List,
  ListItemText
} from "@mui/material"

import {
  IconChevronDown,
  IconCreditCard,
  IconCurrencyDollar,
  IconShield
} from "@tabler/icons-react"
import { useRouter } from "next/router"
import axios from "axios"

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null)

  const handleClick2 = event => {
    setAnchorEl2(event.currentTarget)
  }
  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  const theme = useTheme()
  const primary = theme.palette.primary.main
  const primarylight = theme.palette.primary.light
  const error = theme.palette.error.main
  const errorlight = theme.palette.error.light
  const success = theme.palette.success.main
  const successlight = theme.palette.success.light

  /*profile data*/
  const profiledata = [
    {
      href: "/",
      title: "My Profile",
      subtitle: "Account Settings",
      icon: <IconCurrencyDollar width="20" height="20" />,
      color: primary,
      lightcolor: primarylight
    },
    {
      href: "/",
      title: "My Inbox",
      subtitle: "Messages & Emails",
      icon: <IconShield width="20" height="20" />,
      color: success,
      lightcolor: successlight
    },
    {
      href: "/",
      title: "My Tasks",
      subtitle: "To-do and Daily Tasks",
      icon: <IconCreditCard width="20" height="20" />,
      color: error,
      lightcolor: errorlight
    }
  ]

  const router = useRouter();
  // Handle Logout
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    router.push('/admin/login');
  }

  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/getuser`;
      const res = await axios.post(endpoint, {token: token});
      const result = res.data;
      console.log("res =>", result);
      if (result.success) {
        setUser(result.user);
      }
    }
    fetchUser();
    
  }, [])
  



  return (
    <Box>
      <IconButton
        size="large"
        aria-label="menu"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            borderRadius: "9px"
          })
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={"/images/users/user2.jpg"}
          alt={"ProfileImg"}
          sx={{
            width: 30,
            height: 30
          }}
        />
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex"
            },
            alignItems: "center"
          }}
        >
          <Typography
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            sx={{ ml: 1 }}
          >
            Hi,
          </Typography>
          <Typography
            variant="h6"
            fontWeight="700"
            sx={{
              ml: 1
            }}
          >
            {user ? user.name.split(" ")[0] : "Admin"}
            
          </Typography>
          <IconChevronDown width="20" height="20" />
        </Box>
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "360px",
            p: 2,
            pb: 2,
            pt: 0
          }
        }}
      >
        <Box pt={0}>
          <List>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Edit Profile" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Account" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Change Password" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="My Settings" />
            </ListItemButton>
          </List>
        </Box>
        <Divider />
        <Box mt={2}>
          <Button fullWidth variant="contained" onClick={handleLogout} className="bg-blue-600 hover:bg-white text-white hover:text-blue-600">
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  )
}

export default Profile
