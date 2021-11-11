import React, { useState } from 'react';
import "./Lobby.css";
import { useNavigate } from 'react-router';
import Iframe from 'react-iframe';
import PDF from '../assets/pdf/Agenda.pdf';
import LobbyVideo from '../assets/videos/Lobby.mp4';
import AudiVideo from '../assets/videos/Auditorium.mp4';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DoorBackIcon from '@mui/icons-material/DoorBack';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle style={{ backgroundColor: "rgb(4,21,65)", color: "white" }} sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: "white"
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const PopUp = ({ open, handleClose }) => {
    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Help Chat
                </BootstrapDialogTitle>
                <DialogContent style={{ backgroundColor: "rgb(4,21,65)" }}>
                    <Iframe src="https://the-boct.netlify.app/"
                        width="450px"
                        height="450px"
                        id="myId"
                        frameBorder="0"
                        overflow="hidden"
                        className="myClassname"
                        display="initial"
                        position="relative" />
                </DialogContent>
            </BootstrapDialog>
        </div>
    )
}

const AgendaPopUp = ({ openAgenda, handleCloseAgenda }) => {
    return (
        <div>
            <BootstrapDialog
                onClose={handleCloseAgenda}
                aria-labelledby="customized-dialog-title"
                open={openAgenda}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseAgenda}>
                    Agenda
                </BootstrapDialogTitle>
                <DialogContent style={{ backgroundColor: "rgb(4,21,65)" }}>
                    <Iframe src={PDF}
                        width="450px"
                        height="450px"
                        id="myId"
                        frameBorder="0"
                        overflow="hidden"
                        className="myClassname"
                        display="initial"
                        position="relative" />
                </DialogContent>
            </BootstrapDialog>
        </div>
    )
}

const Lobby = () => {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openAgenda, setOpenAgenda] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenAgenda = () => {
        setOpenAgenda(true);
    };
    const handleCloseAgenda = () => {
        setOpenAgenda(false);
    };

    return (
        <div>
            <nav style={{ backgroundColor: "rgb(4,21,65)", width: "100%", height: "3.5rem", display: "flex", justifyContent: "space-between", position: "fixed" }} >
                <DoorBackIcon className="dummy-icon" />
                <PermIdentityIcon className="person-icon" />
            </nav>
            <div className="lobby-container">
                <div className="sidebar">
                    <span onClick={() => { navigate('/lobby') }} className="icon-container"><HomeIcon className="icon" />Lobby</span>
                    <span onClick={() => { handleClickOpen() }} className="icon-container"><HelpOutlineIcon className="icon" /> Help Chat</span>
                    <span onClick={() => { handleClickOpenAgenda() }} className="icon-container"><InsertDriveFileIcon className="icon" /> Agenda</span>
                    <span onClick={() => { navigate('/auditorium') }} className="icon-container"><DesktopMacIcon className="icon" /> Auditorium</span>
                    <span className="icon-container"><CameraAltIcon className="icon" /> Photo Booth</span>
                    <span className="icon-container"><FlashOnIcon className="icon" /> Game Zone</span>
                    <span className="icon-container"><StarBorderIcon className="icon" /> LeaderBoard</span>
                    <span className="icon-container"><NotificationsActiveIcon className="icon" /> Announcement</span>
                </div>
                <video className="video-lobby" loop="true" autoPlay muted>
                    <source src={LobbyVideo} type="video/mp4" />
                </video>
                <video
                    className="auditorium-video"
                    src={AudiVideo}
                    autostart="false"
                    onEnded={() => { navigate('/auditorium') }}
                ></video>
                <div>
                    <div className="auditorium"
                        onClick={() => {
                            document.querySelector(".auditorium-video").style.display = "block";
                            document.querySelector(".video-lobby").style.display = "none";
                            document.querySelector(".auditorium").style.display = "none";
                            document.querySelector(".helpdesk").style.display = "none";
                            document.querySelector(".auditorium-video").play();
                        }}>
                        <span className="dot"></span>
                    </div>
                    <div className="helpdesk"
                        onClick={() => {
                            handleClickOpen()
                        }}
                    >
                        <span className="dot"></span>
                    </div>
                </div>
            </div>
            {open ? <PopUp open={open} handleClose={handleClose} /> : null}
            {openAgenda ? <AgendaPopUp openAgenda={openAgenda} handleCloseAgenda={handleCloseAgenda} /> : null}
        </div>
    )
}

export default Lobby
