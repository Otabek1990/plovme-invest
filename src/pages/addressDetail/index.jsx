import React from "react";
import { Button } from "@components/ui/button";
import back from "@assets/icons/backIcon.svg";
import videoRasm from "@assets/images/detailPageVid.png";
import playIcon from "@assets/icons/playIcon.svg";
import slide1 from "@assets/images/slide1.png";
import slide2 from "@assets/images/slide2.png";
import plov from "@assets/images/plov.png";
import vid1 from "@assets/images/vid1.png";
import vid2 from "@assets/images/vid2.png";
import vid3 from "@assets/images/vid3.png";
import AdsTop from "@assets/images/adsCircleTop.svg";
import AdsBottom from "@assets/images/adsCircleBottom.svg";

function AddressDetail() {
  return (
    <div className="bg-white pt-[25px] pb-[90px] pl-[30px] flex-1 rounded-20 ">
      <Button className="bg-violet-hover py-[11.88px] px-[16.64px] h-12 flex items-center gap-x-2.5 rounded-lg">
        <img src={back} alt="back icon" />
        <span className="text-white text-xl leading-[1] font-medium">
          Вернуться назад
        </span>
      </Button>
      <section className="mt-16 pl-[90px] pr-[120px] flex flex-col gap-y-10">
        <h1 className="text-black-dark text-center text-[45px] font-bold">
          Точка в Юнус Абадском районе
        </h1>
        <div className="h-fit w-full relative">
          <button
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            className="h-[52px] w-[52px] rounded-full bg-white flex items-center absolute"
          >
            <img src={playIcon} alt="play icon" />
          </button>
          <img src={videoRasm} className="w-full" alt="video" />
        </div>
        <div className="w-full flex flex-col gap-y-5">
          <p className="text-justify text-xl font-normal leading-[26px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. 
          </p>
          <p className="text-justify text-xl font-normal leading-[26px]">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </div>
      </section>
      <section className="my-[90px] mb-[100px] pl-[90px] pr-[120px] flex flex-col items-start gap-y-10">
        <h2 className="text-[35px] font-bold leading-[110%] ">
          Where does it come from?
        </h2>
        <div className="w-full grid grid-cols-2 gap-5">
          <img className="h-80" src={slide1} alt="slide1" />
          <img className="h-80" src={slide2} alt="slide2" />
        </div>
        <p className="text-xl font-normal leading-[26px] text-justify text-black">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </section>
      <section className="my-[90px] mb-[100px] pl-[90px] pr-[120px] flex flex-col items-start gap-y-10">
        <h2 className="text-[35px] font-bold leading-[110%] ">
          Where can I get some?
        </h2>
        <ul className="flex flex-col items-start gap-y-[15px] ">
          <li className="flex items-center gap-x-[15px]">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-hover"></div>
            <span
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              className="text-black-dark text-xl  font-normal leading-[26px]"
            >
              <b className="font-medium">New One: </b>
              Contrary to popular belief, Lorem Ipsum is not simply random text;
            </span>
          </li>
          <li className="flex items-center gap-x-[15px]">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-hover"></div>
            <span
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              className="text-black-dark text-xl  font-normal leading-[26px]"
            >
              <b className="font-medium">New Two: </b>
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words;{" "}
            </span>
          </li>
          <li className="flex items-center gap-x-[15px]">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-hover"></div>
            <span
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              className="text-black-dark text-xl  font-normal leading-[26px]"
            >
              <b className="font-medium">New Three: </b>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary;
            </span>
          </li>
          <li className="flex items-center gap-x-[15px]">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-hover"></div>
            <span
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              className="text-black-dark text-xl  font-normal leading-[26px]"
            >
              <b className="font-medium">New Four: </b>
              Lorem Ipsum is therefore always free from repetition.
            </span>
          </li>
        </ul>
      </section>
      <section className="my-[90px] mb-[100px] pl-[90px]  pr-[120px] w-full">
        <div
          style={{
            background: "linear-gradient(180deg, #6941D7 0%, #4F3595 100%)",
            borderRadius: "20px",
          }}
          className=" my-[90px]   mb-[100px]  pr-[120px] w-full h-[346px] relative rounded-20 p-[45px]"
        >
          <img
            className="absolute rounded-20 top-0 left-0"
            src={AdsTop}
            alt="ads top circle"
          />
          <img
            className="absolute rounded-20 bottom-0 left-0"
            src={AdsBottom}
            alt="ads bottom circle"
          />
          <img
            className="absolute right-[-50px] rounded-r-20  top-0 object-cover"
            src={plov}
            alt="plov"
          />
          <div className="flex flex-col h-full  relative z-30 justify-between items-start gap-[15px] text-white">
            <div>
              <h1 className="text-[45px] font-bold leading-[110%]">
                Современная скорость, <br /> вечные традиции
              </h1>
              <p className="text-base mt-[15px] font-medium text-white">
                Ваш путь к качественной доставке
              </p>
            </div>
            <Button className="bg-orange-hover  px-[18px] h-12 py-4 text-white text-base font-medium">
              Стать инвестором
            </Button>
          </div>
        </div>
      </section>
      <section className="my-[90px] mb-[100px] pl-[90px] pr-[120px] flex flex-col items-start gap-y-5">
        <h2 className="text-[35px] font-bold leading-[110%] mb-5 ">
          Where does it come from?
        </h2>

        <p
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          className="text-xl font-normal leading-[26px] text-justify text-black"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using{" "}
          <a className="text-purple underline font-medium" href="#">
            'Content here, content here'
          </a>{" "}
          , making it look like readable English. 
        </p>
        <p
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          className="text-xl font-normal leading-[26px] text-justify text-black"
        >
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
      </section>
      <section className="my-[90px] mb-[100px] pl-[90px] pr-[120px] flex flex-col items-start gap-y-10">
        <h2 className="text-[35px] font-bold leading-[110%] ">
          Where can I get some?
        </h2>
        <ul className="flex flex-col items-start gap-y-[15px] ">
          <li className="flex items-center gap-x-[15px]">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-hover"></div>
            <span
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              className="text-black-dark text-xl  font-normal leading-[26px]"
            >
              <b className="font-medium">New One: </b>
              Contrary to popular belief, Lorem Ipsum is not simply random text;
            </span>
          </li>
          <li className="flex items-center gap-x-[15px]">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-hover"></div>
            <span
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              className="text-black-dark text-xl  font-normal leading-[26px]"
            >
              <b className="font-medium">New Two: </b>
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words;{" "}
            </span>
          </li>
          <li className="flex items-center gap-x-[15px]">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-hover"></div>
            <span
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              className="text-black-dark text-xl  font-normal leading-[26px]"
            >
              <b className="font-medium">New Three: </b>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary;
            </span>
          </li>
          <li className="flex items-center gap-x-[15px]">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-hover"></div>
            <span
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              className="text-black-dark text-xl  font-normal leading-[26px]"
            >
              <b className="font-medium">New Four: </b>
              Lorem Ipsum is therefore always free from repetition.
            </span>
          </li>
        </ul>
      </section>
      <section className="mt-[90px]   pl-[90px] pr-5">
        <div className="grid grid-cols-3 gap-5 ">
          <div className="h-fit w-full relative">
            <button
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              className="h-[52px] w-[52px] rounded-full bg-white flex items-center absolute"
            >
              <img src={playIcon} alt="play icon" />
            </button>
            <img src={vid1} className="w-full h-[570px] " alt="video" />
          </div>
          <div className="h-fit w-full relative">
            <button
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              className="h-[52px] w-[52px] rounded-full bg-white flex items-center absolute"
            >
              <img src={playIcon} alt="play icon" />
            </button>
            <img src={vid2} className="w-full h-[570px]" alt="video" />
          </div>
          <div className="h-fit w-full relative">
            <button
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              className="h-[52px] w-[52px] rounded-full bg-white flex items-center absolute"
            >
              <img src={playIcon} alt="play icon" />
            </button>
            <img src={vid3} className="w-full h-[570px]" alt="video" />
          </div>
        </div>
      </section>
      <section className="mt-10   text-left pl-[90px] pr-[120px]">
        <p
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          className="text-xl font-normal leading-[26px] text-justify text-black"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. 
        </p>
        <Button className="bg-orange-hover mt-[65px] px-[18px] h-12 py-4 text-white text-base font-medium">
          Стать инвестором
        </Button>
      </section>
    </div>
  );
}

export default AddressDetail;
