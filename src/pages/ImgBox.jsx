import { useState } from "react";
import { css } from '@emotion/react';

export default function DetailBox({ data, steps, showDetail, hideDetail }) {
  const handleOpenDetail = () => showDetail(<Detail isOpen={ true } onClose={ handleCloseDetail } steps={ steps }/>)
  const handleCloseDetail = () => hideDetail()

  const Detail = ({ isOpen, onClose, steps }) => {
    if (!isOpen) return null;

    return (
      <div
        css={ css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99;
        ` }
        onClick={ handleCloseDetail }
      >
        <div
          css={ css`
            background: white;
            padding: 20px;
            border-radius: 20px;
            width: 75%;
            height: 35%;
            display: flex;
            flex-direction: column;
            gap: 15px;
          ` }
          onClick={ (e) => {
            e.stopPropagation();
          } }
        >
          <div css={ css`
            display:flex;
            flex-direction:column;
            gap:10px;
            margin-top: 50px;
          ` }>
            { steps.map((step, index) => (
              <div key={ index }>{ step }</div>
            )) }</div>

          <div
            css={ css`
              background-color: #788d64;
              padding: 15px 30px;
              margin-top : 20px;
              margin-bottom: 10px;
              border-radius: 15vh;
              transition: transform 0.1s ease;
              &:active {
                transform: scale(0.98);
              }
              text-align: center;
            ` }
            onClick={ onClose }
          >
            확인
          </div>
        </div>
      </div>
    );
  };

  return (
    <div css={ css`
      width: 100%;
      height: 100%;
      background-image: url(${ data });
      background-size: cover;
    ` }
         onClick={handleOpenDetail}
    >
    </div>
  );
}
