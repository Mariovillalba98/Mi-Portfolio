import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";
import Linka from '@mui/material/Link';
import "./Zestilos.css";
const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        borderTop: "1px solid #7B89A8",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          PAGES
        </Typography>

        <Link
          to="home"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Home
        </Link>
        <Link
          to="experience"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Experience
        </Link>
        <Link
          to="about"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          About
        </Link>

        {/* 

        <Typography
          variant="body2"
          sx={{ color: "white", my: 1, cursor: "pointer" }}
        >
          Home
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", my: 1, cursor: "pointer" }}
        >
          Experience
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", my: 1, cursor: "pointer" }}
        >
          About
        </Typography> */}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          SOCIAL
        </Typography>

        <Linka sx={{textDecoration:"none"}} href='https://github.com/Mariovillalba98' target="_blank" rel="noopener noreferrer">
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <GitHubIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            GitHub
          </Typography>
        </Box>
        </Linka>
        <Linka sx={{textDecoration:"none"}} href="mailto:villalbamario18@gmail.com?subject=Contacto%20Portfolio&body=Hola%20Mario%2C%20me%20gustar%C3%ADa%20pactar%20una%20entrevista%20ya%20que%20me%20gust%C3%B3%20tu%20perfil." target="_blank" rel="noopener noreferrer">
        <Box sx={{display: "flex", alignItems: "center", cursor: "pointer", }}>
          <EmailIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            Villalbamario18@gmail.com
          </Typography>
        </Box>
        </Linka>
        <Linka sx={{textDecoration:"none"}} href='https://www.linkedin.com/in/mario-villalba-8b7136179/' target="_blank" rel="noopener noreferrer">
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <LinkedInIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            LinkedIn
          </Typography>
        
        </Box>
        </Linka>
      </Box>
    </Box>
  );
};

export default Footer;
