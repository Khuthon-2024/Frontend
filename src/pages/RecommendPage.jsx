import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./RecommendSlide.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { css } from "@emotion/react";
import blank from "../assets/blank.png";

export default function RecommendPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99;
        `}
        onClick={handleCloseModal}
      >
        <div
          css={css`
            background: white;
            padding: 20px;
            border-radius: 20px;
            width: 75%;
            height: 35%;
          `}
        >
          <div
            css={css`
              font-size: 20px;
              margin: 20px 0px;
            `}
          >
            피드백
          </div>
          <textarea
            css={css`
              display: block; /* 블록 레벨 요소로 설정 */
              width: 100%; /* 부모 요소의 전체 너비를 차지 */
              height: 50%;
              margin-bottom: 20px; /* 밑에 여백 추가 */
              padding: 10px; /* 내부 여백 추가 */
              border-radius: 5px; /* 경계 모서리 둥글게 */
              border: 2px solid #788d64; /* 테두리 스타일 */
              font-size: 20px;
              font-weight: 1000;
              overflow: auto;
            `}
            placeholder="여기에 입력하세요..." // 사용자에게 입력 힌트 제공
          />
          <div
            css={css`
              background-color: #788d64;
              padding: 15px 30px;
              margin-bottom: 10px;
              border-radius: 15vh;
              transition: transform 0.1s ease;
              &:active {
                transform: scale(0.98);
              }
              text-align: center;
            `}
            onClick={onClose}
          >
            피드백 전송 및 다시 요청
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div
        css={css`
          font-size: 50px;
          font-weight: 1000;
          margin: 100px 0px;
          text-align: center;
          color: #788d64;
        `}
      >
        Recommend
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <img src={blank} alt="Blank" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            background-color: #788d64;
            padding: 35px 60px;
            margin-top: 65px;
            border-radius: 15vh;
            transition: transform 0.1s ease;
            &:active {
              transform: scale(0.98);
            }
            font-size: 20px;

            -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
          `}
          onClick={handleOpenModal}
        >
          피드백 및 다시 요청
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}