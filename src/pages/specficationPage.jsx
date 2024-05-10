import React from "react";
import { css } from "@emotion/react";
import logo from "../assets/logo.png";

export default function SpecficationPage({ resource, result }) {
  return (
    <div
      css={css`
        height: 100%;
        background-color: #788d64;
      `}
    >
      <img
        css={css`
          width: 100%;
          padding-top: 10%;
        `}
        src={logo}
        alt="로고사진"
      />
      <div
        css={css`
          height: 100%;
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            width: 80%;
            height: 70%;
            background-color: white;
            -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            -ms-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            -o-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
          `}
        >
          <div
            css={css`
              font-weight: bold;
              text-align: center;
              font-size: 35px;
              margin-top: 20px;
            `}
          >
            Request
          </div>
          <hr
            css={css`
              width: 80%;
              margin-top: 20px;
            `}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 30px;
              margin: 40px 30px;
              margin-bottom: 0px;
              font-weight: 600;
              font-size: 20px;
            `}
          >
            <div>원재료: {resource}</div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <div>원하는 결과물: </div>
              <textarea
                css={css`
                  width: 50%;
                  resize: none;
                  font-family: "BM Dohyeon";
                  background-color: #f0efef;
                  border-radius: 15px;
                  border: 0px;
                  font-size: 18px;
                  padding: 3px;
                  margin-left: 5px;
                  text-align: center;
                  align-content: center;
                `}
              />
            </div>
          </div>

          <div>
            <div
              css={css`
                font-weight: 600;
                font-size: 20px;
                margin: 0px 30px;
                margin-top: 30px;
              `}
            >
              원하는 스타일
            </div>
            <div
              css={css`
                width: 30.5vh;
                height: 30vh;
                margin-top: 10px;
                margin-left: 30px;
              `}
            >
              <textarea
                css={css`
                  width: 100%;
                  height: 90%;
                  resize: none;
                  font-family: "BM Dohyeon";
                  background-color: #f0efef;
                  border-radius: 15px;
                  border: 0px;
                  font-size: 18px;
                  padding: 20px;
                `}
              />
            </div>
            <div
              css={css`
                position: relative;
                margin: auto;
                padding: 19px 22px;
                transition: all 0.2s ease;
                width: 30.5vh;
                height: 10vh;
                margin-left: 30px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 1000;
                &:before {
                  position: absolute;
                  left: 26px;
                  content: "";
                  display: block;
                  border-radius: 28px;
                  background: #788d647f;
                  width: 64px;
                  height: 64px;
                  transition: all 0.3s ease;
                }
                &:hover:before {
                  width: 82%;
                  background: #788d64;
                }
                &:active {
                  transform: scale(0.96);
                }
              `}
            >
              <div
                css={css`
                  color: black;
                  font-size: 5vh;
                  font-weight: 1000;
                  z-index: 1;
                `}
              >
                Confirm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
