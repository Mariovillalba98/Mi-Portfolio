import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import "./Zestilos.css";

export default function ScrollDialog({declaration, name, image}) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <span className='vermas' onClick={handleClickOpen('body')}>Ver más</span>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle sx={{backgroundColor: "#202020",color:"#1db954"}} id="scroll-dialog-title"><Stack direction="row" spacing={1}>
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
      </Stack></DialogTitle>
        <DialogContent sx={{backgroundColor: "#212121",color:"white"}} dividers={scroll === 'paper'}>
          <DialogContentText
            sx={{backgroundColor: "#212121",color:"white"}}
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {declaration}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{backgroundColor: "#212121",color:"white"}}>
          <Button sx={{backgroundColor: "#191919",color:"white"}} onClick={handleClose}>Exit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}