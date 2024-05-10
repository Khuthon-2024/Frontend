import { useRef } from 'react'
import { css } from '@emotion/react'

import LogoImage from './assets/logo.png'
import MainBackgroundImage from './assets/main-bg.png'

import './slider.css'

//@TODO
function InspirationsSlider({ className }) {
  return (
    <div
      css={ css`
        height: 5%;
        width: 100%;
      
        font-size: 24px;
        
        z-index: 2;
        
        margin-bottom: 2px;
      `}
      className={ className }>
      <div className="slider">
        <span className="slide">청바지로 만든 지갑</span>
        <span className="slide">비닐봉투로 만든 방석</span>
        <span className="slide">의자 등받이로 만든 옷걸이</span>
        <span className="slide">스케이트보드로 만든 반지</span>
        <span className="slide">커피 찌꺼기로 만든 점토</span>
      </div>
    </div>
  )
}

function StartButton({ updateOriginItemImage }) {
  const fileInputHandle = useRef(null)

  return (
    <div
      onClick={ () => fileInputHandle.current?.click() }
      css={ css`
        
        width: 70%;
        height: 8.5%;
      
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        border: 1px solid grey;
        border-radius: 50px;
        padding: 3px;
        cursor: pointer;
        
        box-shadow: 3px 6px 7px grey;
        
        transition: background-color 0.5s, box-shadow 0.5s;
        
        :hover {
          background-color: #90aa77;
          box-shadow: 0px 0px;
        }
        
        :hover #onhover {
          display: inline;
        }
        
        :hover #nothover {
          display: none;
        }
        
        #onhover {
          display: none;
        }
      ` }
    >
      <input
        ref={ fileInputHandle }
        type='file'
        accept='image/*'
        onChange={ ({ target: { files } }) => {
          if (files.length >= 1) updateOriginItemImage(files[0])
        } }
        css={ css`display: none;` }
      />
      <span id='nothover'>어떤 물건을 변신시키고 싶으신가요?</span>
      <span id='onhover'>터치해서 사진을 업로드하고 시작해봐요.</span>
    </div>
  )
}

function Entrance({ updateOriginItem }) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        
        background-image: url(${MainBackgroundImage});
        background-size: 120vh;
        background-repeat: no-repeat;
        background-position: center 350px;
        
        background-color: ivory;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 80%;
          
          display: flex;
          justify-content: center;
          align-items: center;
        
          flex-direction: column;
        `}
      >
        <img
          css={ css`
            width: 100%;
            position: relative;
            bottom: 4%;
        ` }
          src={ LogoImage }/>
        <InspirationsSlider />
        <StartButton updateOriginItem={ updateOriginItem }/>
      </div>
    </div>
  )
}

export default Entrance