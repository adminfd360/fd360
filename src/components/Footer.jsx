import React from "react";
import fd360fb from "../assets/Socials/fd360fb.png";
import fd360twitter from "../assets/Socials/fd360twitter.png";
import fd360insta from "../assets/Socials/fd360instagram.png";
import fd360yt from "../assets/Socials/fd360youtube.png";
import fd360linkedin from "../assets/Socials/fd360linkedin.png";
import fd360reviews from "../assets/Socials/fd360reviews.png";
import fd360footer from "../assets/fd360footer.jpg";
import fd360logo from "../assets/FD360-with-website.png";

const Footer = () => {
  return (
    <footer
      className=" font-custom bg-cover bg-center bg-no-repeat md:h-96 flex flex-col items-center justify-center p-5"
      style={{
        backgroundImage: `url(${fd360footer})`,
        backgroundPosition: "center bottom",
      }}
    >
      <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full p-10">
        <div className="flex flex-col md:w-1/3 w-full justify-center text-center md:items-center items-center text-black font-bold mb-6 sm:mb-0 sm:mr-10 bg-white rounded-md bg-opacity-50 bg-clip-padding backdrop-opacity-50 h-full p-10">
          <h4 className="text-2xl text-blue-700 font-bold mb-5">
            Emerging Technology News & Updates
          </h4>
          <p className="text-md mb-5">
            We search so you don't have to. Stay up to date with us for all your
            business needs
          </p>
          <button className="bg-blue-700 p-2 rounded-lg mb-5 text-white">
            Lates News!
          </button>
          <p className="text-md">Customer Service : 855.55-FD360 (3.3360)</p>
          <p className="text-md">Tech Support : 480.809.6328</p>
        </div>
        <div className="flex flex-col md:w-1/3 w-full md:items-center items-center text-white mb-6 sm:mb-0 sm:mr-10 bg-white rounded-md bg-opacity-50 bg-clip-padding backdrop-opacity-50 h-full p-10">
          <h4 className="text-2xl font-bold">About Us</h4>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col md:w-1/3 w-full md:items-center items-center text-white bg-white rounded-md bg-opacity-50 bg-clip-padding backdrop-opacity-50 h-full p-10">
          <img src={fd360logo} alt="Logo" className="h-32 mb-6" />
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.facebook.com/Future-Digital-139609266115071/"
              target="_blank"
            >
              <img src={fd360fb} alt="fd360 Facebook" className="h-8" />
            </a>
            <a href="https://twitter.com/FutureDigitalUS" target="_blank">
              <img src={fd360twitter} alt="fd360 Twitter" className="h-8" />
            </a>
            <a
              href="https://www.instagram.com/futuredigital360/"
              target="_blank"
            >
              <img src={fd360insta} alt="fd360 Instagram" className="h-8" />
            </a>
            <a href="https://www.linkedin.com/company/2964202/" target="_blank">
              <img src={fd360linkedin} alt="fd360 Instagram" className="h-8" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCdNnEp0_dlTDM-DeoOAIUiA"
              target="_blank"
            >
              <img src={fd360yt} alt="fd360 Youtube" className="h-8" />
            </a>
            <a
              href="https://www.google.com/search?q=futuredigital360+google+reviews&oq=futuredigital360+google+reviews&aqs=chrome..69i57.6727j0j7&sourceid=chrome&ie=UTF-8#lrd=0x872b743eaf36b50b:0xbcbeef0088c124bc,1,,,,"
              target="_blank"
            >
              <img
                src={fd360reviews}
                alt="fd360 Google Reviews"
                className="h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <div className="bg-transparent flex justify-between">
//       <div className="bg-transparent font-custom h-10 flex ml-5">
//         <a
//           href="https://www.facebook.com/Future-Digital-139609266115071/"
//           target="_blank"
//         >
//           <img src={fd360fb} className="h-10" />
//         </a>
//         <a href="https://twitter.com/FutureDigitalUS" target="_blank">
//           <img src={fd360twitter} className="h-10" />
//         </a>
//         <a href="https://www.instagram.com/futuredigital360/" target="_blank">
//           <img src={fd360insta} className="h-10" />
//         </a>
//         <a
//           href="https://www.youtube.com/channel/UCdNnEp0_dlTDM-DeoOAIUiA"
//           target="_blank"
//         >
//           <img src={fd360yt} className="ml-4 h-10" />
//         </a>
//         <a
//           href="https://www.linkedin.com/company/futuredigital360"
//           target="_blank"
//         >
//           <img src={fd360linkedin} className="ml-4 h-10" />
//         </a>
//       </div>
//       <div className="font-custom bg-transparent">
//         <a href="" target="_blank">
//           <img src={fd360reviews} className="h-10 ml-4 mr-5" />
//         </a>
//       </div>
//     </div>
//   );
// };
