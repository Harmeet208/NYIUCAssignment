import React, { useState } from 'react';
import './Login.css';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';

const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        color: "#fff",
        overflow: 'hidden',
        borderRadius: 16,
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `#0275d8 0 0 0 2px`,
            borderColor: `#0275d8`
        },
    },
}));

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    let navigate = useNavigate();
    const obj = {
        "username": username,
        "password": password
    }

    function handleClick() {
        navigate('/dashboard')
    }
    return (
        <div style={{ height: "100%" }}>
            <div className="login-container">
                <div style={{ fontSize: "2rem", fontFamily: "sans-serif", color: "white" }}>Login</div>
                <div className="input-field">
                    <PersonIcon className="icon" />
                    <RedditTextField
                        label="Name"
                        InputLabelProps={{ className: "label-color" }}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        id="reddit-input"
                        variant="filled"
                        value={username}
                    />
                </div>
                <div className="input-field">
                    <EmailIcon className="icon" />
                    <RedditTextField
                        label="Email"
                        InputLabelProps={{ className: "label-color" }}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        id="reddit-input"
                        variant="filled"
                        value={email}
                    />
                </div>
                <div className="input-field">
                    <LockIcon className="icon" />
                    <RedditTextField
                        label="Password"
                        type="password"
                        InputLabelProps={{ className: "label-color" }}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        id="reddit-input"
                        variant="filled"
                        value={password}
                    />
                </div>
                <Button style={{ backgroundColor: "#0275d8" }} onClick={() => { handleClick() }} variant="contained" size="large">
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login
