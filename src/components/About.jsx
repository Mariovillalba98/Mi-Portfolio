import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import Testimonial from "./Testimonial";
import Linka from '@mui/material/Link';
import { friends } from "../constants/friends";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid white",
    borderRadius: "25px",
    color: "white",
    width: "15%",
    display: "block",
    "&:hover": {
      border: "3px solid #1db954",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  }));

  return (
    <Box sx={{ maxWidth: "1300px", my: 10, padding: 3, mx: "auto" }} id="about">
      <CustomTitleBox
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", textAlign: "center" }}
        >
          What people say about my work!
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#1db954",
            width: "50%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>
      </CustomTitleBox>

      <CustomBox sx={{ my: 7 }}>{
        friends.map(e=>(
          <Testimonial
          key={e.id}
          name={e.name}
          ocupation={e.ocupation}
          declaration={e.declaration}
          image={e.image}
          link={e.link}
          country={e.country}
          recortado={e.recortado}
          />
        ))
      }

      </CustomBox>

      <div
        style={{
          height: "5px",
          backgroundColor: "#1db954",
          width: "100%",
          mx: "auto",
          border: 0,
          borderRadius: "25px",
        }}
      ></div>

      <Typography
        variant="h4"
        sx={{ color: "white", mt: 12, textAlign: "center" }}
      >
        Interested in Working Together?
      </Typography>
      <Linka sx={{textDecoration:"none"}} href='https://www.linkedin.com/in/mario-villalba-8b7136179/' target="_blank" rel="noopener noreferrer">
      <CustomButton
        variant="outlined"
        sx={{
          mx: "auto",
          mt: 3,
          mb: 8,
        }}
      >
        Get in Touch
      </CustomButton>
      </Linka>
    </Box>
  );
};

export default About;
