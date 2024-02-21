import React from "react";
import "./WaveBackground.css";

const WaveBackground = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
                fill="#00bf18"
                fill-opacity="1"
                d="M0,32L60,58.7C120,85,240,139,360,133.3C480,128,600,64,720,32C840,0,960,0,1080,21.3C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
        </svg>
    );
};
export default WaveBackground;
