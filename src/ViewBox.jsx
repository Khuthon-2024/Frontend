import { css } from '@emotion/react'

export const ViewBox = ({ children }) => (
  <div
    css={css`
      width: 430px;
      height: 932px;
      
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      background-color: ivory;
    `}
  >
    {children}
  </div>)