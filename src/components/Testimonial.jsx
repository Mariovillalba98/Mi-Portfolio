import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Avatar from '@mui/material/Avatar';
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Stack from '@mui/material/Stack';
import ScrollDialog from "./ScrollDialog";

const Testimonial = ({name, ocupation, declaration, image, id, link, country, recortado}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#212121",
        padding: 3,
        border: "1px solid 	#1db954",
        borderRadius: "10px",
        maxWidth: "315px",
        position: "relative",
        mx: 3,
      }}
    >
      
      <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
       <span>{recortado}...<ScrollDialog declaration={declaration} name={name} image={image} /></span> 

      </Typography>
      <Stack direction="row" spacing={1}>
        <Avatar
        alt={name}
        src={image}
        sx={{ width: 30, height: 30 }}
      />
      

      <Typography variant="h6">
        <span style={{ color: "#1db954", fontWeight: "bold" }}>
          {name}
        </span>
      </Typography>
      </Stack>
      <Typography variant="body2">
        <span style={{ color: "#7B89A8" }}>{ocupation}, {country}</span>
      </Typography>
      <FormatQuoteIcon
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          color: "#1db954",
          height: "50px",
          width: "50px",
        }}
      />
    </Box>
  );
};

export default Testimonial;
