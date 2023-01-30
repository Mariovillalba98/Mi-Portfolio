import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";
import React from "react";
import "./Zestilos.css";
import Linka from '@mui/material/Link';


const Project = ({ title, description, tags, img, link, deploy }) => {
  return (
    <Card sx={{ maxWidth: 375, margin: "1rem", backgroundColor: "#212121" }} className="efecto" >
      <CardActionArea>
      <Linka sx={{textDecoration:"none"}} href={deploy} target="_blank" rel="noopener noreferrer">  
        <CardMedia component="img" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {title}
          </Typography>
          <Typography variant="body2" color="#b3b3b3">
            {description}
          </Typography>
        </CardContent>
        </Linka>
      </CardActionArea>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            mx: "auto",
            mb: 3,
          }}
        >
        <Linka sx={{textDecoration:"none"}} href={link} target="_blank" rel="noopener noreferrer">
          <Button
              size="small"
              style={{ backgroundColor: "#1db954" }}
              variant="contained"
            >
              Source Code
            </Button>
        </Linka>  
        <Linka sx={{textDecoration:"none"}} href={deploy} target="_blank" rel="noopener noreferrer">  
          <Button
            size="small"
            style={{ backgroundColor: "#1db954" }}
            variant="contained"
          >
            Live Version
          </Button>
        </Linka> 
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            mb: 2,
          }}
        >
          {tags.map((tag) => (
            <Chip label={tag} variant="outlined" key={tag} sx={{ color: "white" }} />
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default Project;
