import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import reactImg from "../media/carabyn.png";
import "./Zestilos.css";
import cv from "../media/mariovillalba.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Linka from '@mui/material/Link';
import "./Zestilos.css";


const Hero = () => {
  const [state, setState] = useState(false);
      
  
  
 const handleButtonClick = () => {
        setState((prev) => !prev)
    }

  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#1db954",
    color: "white",
    width: "20%",
    borderRadius: "25px",
    "&:hover": {
      border: "3px solid white",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));

  const CustomButton2 = styled(Button)(({ theme }) => ({
    border: "3px solid white",
    borderRadius: "25px",
    color: "white",
    width: "20%",
    "&:hover": {
      border: "3px solid #1db954",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));

  return (
    <Box
      sx={{
        mt: 8,
        mb: 12,
        p: 2,
        maxWidth: "1200px",
        mx: "auto",
      }}
      id="home"
    >
      <div className="container">
      <Typography className="hola"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
        variant="h6"
      >
        Hello, I'm Mario.
      </Typography>
      </div>
      <CustomTitle variant="h1">
        I enjoy <span style={{ color: "#1db954" }}>building</span>{" "}
        and <span  style={{ color: "	#1db954" }}>designing</span> for
        the web.
      </CustomTitle>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 150,
            width: 150,
            mt: 4,
            mb: 4,
          }}
          src={reactImg}
        />

        <CustomButton onClick={handleButtonClick}>Contact Me</CustomButton>
        {state?
                  <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}>
                      <Linka sx={{textDecoration:"none"}} href='https://www.linkedin.com/in/mario-villalba-8b7136179/' target="_blank" rel="noopener noreferrer">
                          <Box  sx={{ flexDirection:"column", display: "flex", alignItems: "center", cursor: "pointer"}}>
                            <LinkedInIcon sx={{ mr: 0, color: "white", height:40, width:40,"&:hover": {color: "#1db954",} }} />
                            <Typography className="ladecoration" variant="body2" sx={{ color: "white", my: 1, marginTop:0.5,"&:hover": {color: "#1db954",} }}>
                              LinkedIn
                            </Typography>
                          </Box>
                      </Linka>
                      <Linka sx={{textDecoration:"none"}} href='https://github.com/Mariovillalba98' target="_blank" rel="noopener noreferrer">
                          <Box  sx={{ flexDirection:"column", display: "flex", alignItems: "center", cursor: "pointer"}}>
                              <GitHubIcon sx={{ mr: 0, color: "white", height:40, width:40,"&:hover": {color: "#1db954",} }} />
                              <Typography  variant="body2" sx={{ color: "white", my: 1, marginTop:0.5,"&:hover": {color: "#1db954",}}}>
                                GitHub
                              </Typography>
                          </Box>
                      </Linka>    
                      <Linka sx={{textDecoration:"none"}} href="mailto:villalbamario18@gmail.com?subject=Contacto%20Portfolio&body=Hola%20Mario%2C%20me%20gustar%C3%ADa%20pactar%20una%20entrevista%20ya%20que%20me%20gust%C3%B3%20tu%20perfil.">
                          <Box  sx={{ flexDirection:"column", display: "flex", alignItems: "center", cursor: "pointer" }}>
                            <EmailIcon sx={{ mr: 0, color: "white", height:40, width:40,"&:hover": {color: "#1db954",}}} />
                            <Typography variant="body2" sx={{color: "white", my: 1,marginTop:0.5,"&:hover": {color: "#1db954",}}}>
                              Email
                            </Typography>
                          </Box>
                      </Linka>
                  </Box>
                  : null
        }

        <CustomButton2><a href={cv} target="_blank" rel="noopener noreferrer" download="MarioVillalba-CV.pdf"> 
      Download CV 
      </a></CustomButton2>
      <CustomButton2><a href={cv} target="_blank" rel="noopener noreferrer"> 
      View CV 
      </a></CustomButton2>
      </Box>
    </Box>
  );
};

export default Hero;
