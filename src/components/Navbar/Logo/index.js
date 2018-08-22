import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'
import largeLogoSrc from '../../../images/large-logo.png'

const LogoBox = styled('div')`
  max-width: 150px;
`

const imgStyle = css`
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0;
`

const Logo = ({logoSrc}) => {
  return (
    <LogoBox>
      <Link to='/'>
        <img className={imgStyle} src={largeLogoSrc} alt="不知从前慢" />
      </Link>
    </LogoBox>
  )
}



export default Logo