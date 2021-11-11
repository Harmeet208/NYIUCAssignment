import React from 'react';
import Iframe from 'react-iframe';

const Auditorium = () => {
    return (
        <div style={{ backgroundColor: "rgb(4,21,65)" }}>
            <Iframe url="https://player.vimeo.com/video/613383802?"
                width="100%"
                height="560px"
                display="initial"
                position="relative" />
        </div>
    )
}

export default Auditorium
