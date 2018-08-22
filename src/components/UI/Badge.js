import React from 'react'
import {css} from 'react-emotion'

const defaultStyle = css`
  display: inline-block;
  padding: .5em;
  margin: .25em;
  background: #eee;
  border-radius: .5em;
  cursor: pointer;
  &:hover {
    background: #909090;
    color: #fff;
  }
`

const activeStyle = css`
  ${defaultStyle};
  background: #909090;
  color: #fff;
`

const Badge = ({children, isActive, clicked}) => {
  const classname = isActive ? activeStyle : defaultStyle
  return (
    <span className={classname} onClick={clicked}>
      {children}
    </span>
  )
}

export default Badge