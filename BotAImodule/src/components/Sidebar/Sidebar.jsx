/* eslint-disable react/prop-types */

import { Box, Button, Stack, Typography } from "@mui/material";
// import { useContext } from "react"
// import { ThemeContext } from "../../Theme/ThemeContext"
// import CloseIcon from '@mui/icons-material/Close';
import edit from "../../assets/EditIcon.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Sidebar = ({ setChat, closeMenu }) => {
  // const { mode, setMode} = useContext(ThemeContext)
  // const isMobile = useMediaQuery('(max-width:800px)')
  //  const handleMode =()=>{
  //   setMode(prev => prev === 'light' ? 'dark' : 'light')
  //  }
  return (
    <Box>
      {/* {!isMobile &&(
        <Button
        // endIcon={<CloseIcon />}
        sx={{
            width: 1,
            justifyContent: 'flex-end',
            color: mode == 'light' ? 'primary.dark' :'text.primary'
        }}
        onClick={closeMenu}
        >
         close
        </Button>
      )} */}
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Stack
          onClick={() => {
            setChat([]);
            closeMenu();
          }}
          sx={{
            bgcolor: "primary.main",
            "&:hover ": {
              bgcolor: "primary.bg",
            },
          }}
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={2}
          px={{ xs: 2, md: 3 }}
        >
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Box
              component={"img"}
              src={logo}
              height={42}
              width={42}
              borderRadius={5}
              boxShadow={4}
              flexShrink={0}
            />
            <Typography
              variant={"h5"}
              fontSize={{ xs: 16, md: 20 }}
              color={"text.primary"}
              alignItems={"center"}
              fontWeight={800}
            >
              New Chat
            </Typography>

            <Box
              component={"img"}
              src={edit}
              height={42}
              width={42}
              borderRadius={5}
              boxShadow={4}
              flexShrink={0}
            />
          </Stack>
        </Stack>
      </Link>
      <Box p={{ xs: 2, md: 3 }}>
        <Link to={"/history"}>
          <Button variant="contained" sx={{ width: 1 }} onClick={closeMenu}>
            Past Conversations
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
