import React from "react";
import { css } from "@emotion/react";
import logo from "../assets/logo.png";

export default function SpecficationPage() {
  const resource = "상의";
  const result = "모자";

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
            <div>원하는 결과물: {result}</div>
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
                border-radius: 15px;
                background-color: #f0efef;
              `}
            ></div>
            <div
              css={css`
                position: relative;
                margin: auto;
                padding: 19px 22px;
                transition: all 0.2s ease;
                width: 30.5vh;
                height: 10vh;
                margin-top: 10px;
                margin-left: 30px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 5vh;
                font-weight: 1000;
                &:before {
                  content: "";
                  display: block;
                  border-radius: 28px;
                  background: rgba(255, 171, 157, 0.5);
                  width: 56px;
                  height: 56px;
                  transition: all 0.3s ease;
                }
                &:hover:before {
                  width: 100%;
                  background: rgba(255, 171, 157, 1);
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
