import React from 'react'
import styled, { css } from 'react-emotion'

const Line = styled('div')`
  position: relative;
  width: 1em;
  height: 2px;
  background: #fff;
  z-index: 201;
`

const btnBaseStyle = css`
  position: relative;
  width: 46px;
  height: 46px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.2);
  border-radius: 50%;
  cursor: pointer;
  background: #f16161;
  z-index: 200;
`

const btnOpenStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & :not(:first-child) {
    margin-top: 3px;
  }
`

const btnCloseStyle = css`
  & :first-child {
    position: absolute;
    top: 22px;
    left: 15px;
    transform: rotate(45deg);
  }
  & :last-child {
    position: absolute;
    top: 22px;
    left: 15px;
    transform: rotate(135deg);
  }
`

const NavBtn = ({isActive, clicked}) => {
  const openBtn = (
    <div className={`${btnBaseStyle} ${btnOpenStyle}`} onClick={clicked}>
      <Line />
      <Line />
      <Line />
    </div>
  )
  const closeBtn = (
    <div className={`${btnBaseStyle} ${btnCloseStyle}`} onClick={clicked}>
      <Line />
      <Line />
    </div>
  )
  return isActive ? closeBtn : openBtn
}

export default NavBtn