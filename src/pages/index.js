import React from 'react'
import {css} from 'react-emotion'
import { Link } from 'gatsby'
import deer from '../images/deer.svg'
import logoFont from '../images/logo-font.svg'

const blurStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const homepageStyle = css`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: sapce-between;
  align-items: center;
`

const logoFontStyle = css`
  flex: 1 1 20%;
  filter: blur(5px);
`

const deerImgStyle = css`
  flex: 1 1 80%;
  filter: blur(5px);
`

const linkStyle = css`
  display: inline-block;
  text-decoration: none;
  color: #f0f0f0;
  background: #f16161;
  font-size: 1.4rem;
  padding: .5em 1.5em;
  // border-radius: .5em;
  box-shadow: 2px 2px 5px rgba(0,0,0,.2);
`

export default () => (
  <>
    <div className={homepageStyle}>
      <img src={deer} alt="Deer" className={deerImgStyle} />
      <img src={logoFont} alt="不知从前慢" className={logoFontStyle} />
    </div>
    <div className={blurStyle}>
      <Link to="/posts" className={linkStyle}>查看文章</Link>
    </div>
  </>
)
