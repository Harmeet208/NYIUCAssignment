import React from 'react';
import { useNavigate } from 'react-router';
import LandingPage from '../assets/images/dashboard.jpg';
import LandingVideo from '../assets/videos/Welcome.mp4';

const Dashboard = () => {
    let navigate = useNavigate();

    function handleClick() {
        document.querySelector('#landingvid').style.display = "block";
        document.querySelector('#landingimg').style.display = "none";
        document.querySelector('#landingvid').play();
    }

    return (
        <div>
            <img id="landingimg" onClick={() => handleClick()} src={LandingPage} alt="Dashboard" style={{ height: "100vh", width: "100%", cursor: "pointer" }} />
            <video
                src={LandingVideo}
                style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    display: "none",
                }}
                id="landingvid"
                autostart="false"
                onEnded={() => { navigate('/lobby') }}
            ></video>
        </div >
    )
}

export default Dashboard
