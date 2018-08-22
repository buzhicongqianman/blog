import React from 'react'
import {css} from 'react-emotion'
import Layout from '../components/Layout'
import { Link } from '@reach/router'
import deer from '../images/deer.svg'
import bu from '../images/bu.png'
import zhi from '../images/zhi.png'
import cong from '../images/cong.png'
import qian from '../images/qian.png'
import man from '../images/man.png'

const homepageStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`

const fontImgStyle = css`
  width: 2em;
`

const deerImgStyle = css`
  height: 100vh;
`

export default () => (
  <Layout>
    <div className={homepageStyle}>
      <img src={bu} alt="不" className={fontImgStyle} />
      <img src={zhi} alt="知" className={fontImgStyle} />
      <img src={cong} alt="从" className={fontImgStyle} />
      <img src={qian} alt="前" className={fontImgStyle} />
      <img src={man} alt="慢" className={fontImgStyle} />
      <img src={deer} alt="Deer" className={deerImgStyle} />
      <Link to="/posts/">查看文章</Link>
    </div>
  </Layout>
)
