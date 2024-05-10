import {useState} from "react";
import { css } from '@emotion/react';

export default function DetailBox({ data }) {
  const [isDetailOpen, setisDetailOpen] = useState(false);

  const handleOpenDetail = () => setisDetailOpen(true);
  const handleCloseDetail = () => setisDetailOpen(false);

  const Detail = ({ isOpen, onClose, steps }) => {
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
        onClick={handleCloseDetail}
      >
        <div
          css={css`
            background: white;
            padding: 20px;
            border-radius: 20px;
            width: 75%;
            height: 35%;
          `}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {steps.map((step, index) => (
            <div key={index}>{step}</div>
          ))}

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
      <img src={data} alt="image" onClick={handleOpenDetail} />
      <Detail isOpen={isDetailOpen} onClose={handleCloseDetail} steps={steps} />
    </div>
  );
}
