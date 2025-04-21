import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import logo from "../../assets/FD360-with-website.png";
import veteran from "../../assets/fd360_veteran_original.png";
import lexmarkLogo from "../../assets/lexmark-logo.png";
import bgLexmark from "../../assets/translation-app/bg-lexmark.png";
import fullscreen from "../../assets/translation-app/fullscreen.png";
import fullscreen2 from "../../assets/translation-app/fullscreen2.png";

import lexmarkStep1 from "../../assets/translation-app/step1.jpg";
import lexmarkStep2 from "../../assets/translation-app/step2.jpg";
import lexmarkStep3 from "../../assets/translation-app/step3.jpg";
import lexmarkStep4 from "../../assets/translation-app/step4.jpg";
import lexmarkStep5 from "../../assets/translation-app/step5.jpg";
import lexmarkStep6 from "../../assets/translation-app/step6.jpg";
import lexmarkStep7 from "../../assets/translation-app/step7.jpg";
import lexmarkStep8 from "../../assets/translation-app/step8.jpg";
import lexmarkStep9 from "../../assets/translation-app/step9.jpg";
import lexmarkStep10 from "../../assets/translation-app/step10.jpg";
import lexmarkStep11 from "../../assets/translation-app/step11.jpg";
import lexmarkStep12 from "../../assets/translation-app/step12.jpg";
import lexmarkStep13 from "../../assets/translation-app/step13.jpg";
import lexmarkStep14 from "../../assets/translation-app/step14.jpg";
import lexmarkStep15 from "../../assets/translation-app/step15.jpg";
import lexmarkStep16 from "../../assets/translation-app/step16.jpg";
import lexmarkStep17 from "../../assets/translation-app/step17.jpg";
import lexmarkStep18 from "../../assets/translation-app/step18.jpg";
import lexmarkStep19 from "../../assets/translation-app/step19.jpg";
import lexmarkStep20 from "../../assets/translation-app/step20.jpg";
import lexmarkStep21 from "../../assets/translation-app/step21.jpg";
import lexmarkStep22 from "../../assets/translation-app/step22.jpg";
import lexmarkStep23 from "../../assets/translation-app/step23.jpg";

import "swiper/css";
import "swiper/css/effect-fade";

const TranslationApp = () => {
  const swiperRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div className="border-t-4 border-[#3bf33b]">
      <div className="max-w-[1200px] m-auto p-4 pt-6 py-16 lg:pb-32">
        {/* Header logo */}
        <div className="flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-4">
            <img className="w-auto h-20" src={logo} alt="" />
            <img className="w-auto h-28" src={veteran} alt="" />
          </Link>
        </div>

        {/* Content */}
        <section className="mt-16">
          <img src={lexmarkLogo} alt="" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
            <div className="col-span-1 lg:col-span-4">
              <h1 className="text-2xl tracking-wider">Translation App</h1>
              <small className="text-sm mt-2 block">
                by{" "}
                <Link
                  target="_blank"
                  className="text-blue-600"
                  to={"https://www.appdemostore.com/user/Ian"}
                >
                  Ian
                </Link>
              </small>
              <div className="flex items-end gap-2 mt-10">
                <p className="text-3xl border-t-2 border-gray-300 text-[#29245c] tracking-wider">
                  5,344
                </p>
                <p className="uppercase tracking-wider">views</p>
              </div>
              <p className="mt-12 text-gray-500 tracking-wider">
                Demo of the Lexmark Translation app for scanning and printing
                documents to different languages.
              </p>
            </div>
            <div
              ref={containerRef}
              className={`col-span-1 lg:col-span-8 transition-all duration-300 relative ${
                isFullscreen
                  ? "fixed inset-0 w-screen h-screen z-50 bg-black flex items-center justify-center"
                  : ""
              }`}
            >
              <button
                onClick={toggleFullscreen}
                className="px-4 py-2 absolute right-0 -top-8 z-2"
              >
                {isFullscreen ? (
                  <img
                    className="w-[22px] relative top-[55px] right-[15px] [filter:invert(1)]"
                    src={fullscreen2}
                    alt="Exit fullscreen"
                  />
                ) : (
                  <img
                    className="w-[22px]"
                    src={fullscreen}
                    alt="Enter fullscreen"
                  />
                )}
              </button>
              <div
                className={`app p-[12px] bg-cover bg-no-repeat ${
                  isFullscreen
                    ? "w-full h-full flex items-center justify-center"
                    : ""
                }`}
                style={{ backgroundImage: `url(${bgLexmark})` }}
              >
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  effect="fade"
                  speed={100}
                  allowTouchMove={false}
                  fadeEffect={{
                    crossFade: true,
                  }}
                  modules={[EffectFade]}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  onSlideChange={(swiper) => {
                    if (
                      swiper.activeIndex === 4 ||
                      swiper.activeIndex === 11 ||
                      swiper.activeIndex === 13 ||
                      swiper.activeIndex === 14 ||
                      swiper.activeIndex === 19 ||
                      swiper.activeIndex === 20
                    ) {
                      setTimeout(() => {
                        swiper.slideNext();
                      }, 2000);
                    }
                  }}
                >
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep1}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[97px] h-[142px] glow_white absolute top-[245px] left-[324px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep2}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[97px] h-[120px] glow_white absolute bottom-[0px] right-0 left-0 m-auto"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep3}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[350px] h-[35px] glow_white absolute top-[145px] left-[6px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep4}
                          alt=""
                        />
                        <div className="text-center align-middle text-white font-bold text-[29px] tracking-wider absolute left-0 right-0 z-2 top-24 -ml-10">
                          8341
                        </div>
                        <div
                          className="cursor-pointer w-[50px] h-[30px] glow_white absolute bottom-[31px] left-[395px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep5}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep6}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[77px] h-[47px] glow_white absolute top-[1px] right-[38px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep7}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[77px] h-[47px] glow_white absolute top-[1px] right-[38px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep8}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[94%] h-[30px] glow_white absolute bottom-[64px] left-[5px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep9}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[77px] h-[47px] glow_white absolute top-[1px] right-[38px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep10}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[94%] h-[30px] glow_white absolute top-[110px] left-[5px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep11}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[77px] h-[47px] glow_white absolute top-[1px] right-[38px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep12}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep13}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[97px] h-[114px] glow_white absolute top-[183px] left-[432px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep14}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep15}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep16}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[77px] h-[47px] glow_white absolute top-[1px] right-[38px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep17}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[77px] h-[47px] glow_white absolute top-[1px] right-[38px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep18}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[77px] h-[47px] glow_white absolute top-[1px] right-[38px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep19}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[97px] h-[114px] glow_white absolute top-[183px] left-[432px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep20}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep21}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep22}
                          alt=""
                        />
                        <div
                          className="cursor-pointer w-[77px] h-[47px] glow_white absolute top-[1px] right-[38px]"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative max-w-[742px] m-auto">
                      <div
                        className={`relative ${
                          isFullscreen
                            ? "w-full h-full flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img
                          className={`relative top-[3px] ${
                            isFullscreen ? "max-h-[90vh] w-auto" : ""
                          }`}
                          src={lexmarkStep23}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TranslationApp;
