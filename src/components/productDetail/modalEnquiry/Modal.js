import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { TextField } from '@mui/material';
import './Modal.css'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div  style={{marginTop: "75px"}}>
      <a className='enquiry_link' onClick={handleClickOpen}>
                <ContentPasteSearchIcon /> Enquiry about product?
            </a>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <h1 className='modal_title'>Let us know abour your query!</h1>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
           
            <TextField fullWidth label="Name" className='text_input' style={{marginBottom:"25px"}}/>
           
            <TextField fullWidth label="Email" className='text_input' style={{marginBottom:"25px"}}/>
           
            <TextField fullWidth label="Phone" className='text_input' style={{marginBottom:"25px"}}/>

            <TextField fullWidth label="Subject" className='text_input' style={{marginBottom:"25px"}}/>
           
        </DialogContent>
        
        <DialogActions>
          <button className='button_design' autoFocus onClick={handleClose}>
            Save changes
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}