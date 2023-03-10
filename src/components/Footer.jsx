import React from "react";
import fd360fb from "../assets/Socials/fd360fb.png";
import fd360twitter from "../assets/Socials/fd360twitter.png";
import fd360insta from "../assets/Socials/fd360insta.png";
import fd360yt from "../assets/Socials/fd360yt.webp";
import fd360linkedin from "../assets/Socials/fd360linkedin.png";
import fd360reviews from "../assets/Socials/fd360reviews.png";

const Footer = () => {
  return (
    <div className="bg-transparent flex justify-between">
      <div className="bg-transparent font-custom h-10 flex ml-5">
        <a
          href="https://www.facebook.com/Future-Digital-139609266115071/"
          target="_blank"
        >
          <img src={fd360fb} className="h-10" />
        </a>
        <a href="https://twitter.com/FutureDigitalUS" target="_blank">
          <img src={fd360twitter} className="h-10" />
        </a>
        <a href="https://www.instagram.com/futuredigital360/" target="_blank">
          <img src={fd360insta} className="h-10" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCdNnEp0_dlTDM-DeoOAIUiA"
          target="_blank"
        >
          <img src={fd360yt} className="ml-4 h-10" />
        </a>
        <a
          href="https://www.linkedin.com/company/futuredigital360"
          target="_blank"
        >
          <img src={fd360linkedin} className="ml-4 h-10" />
        </a>
      </div>
      <div className="font-custom bg-transparent">
        <a href="" target="_blank">
          <img src={fd360reviews} className="h-10 ml-4 mr-5" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
