import React from 'react'
import Layout from '../components/Layout'
import { css } from 'react-emotion'

const NotFoundPage = () => (
  <Layout>
    <h1 className={css`text-align: center;`}>
      你找啥<span role="img" aria-label="face with raised eyebrow">🤨</span>？
      这里啥也没有啊<span role="img" aria-label="face with rolling eyes">🙄</span>!
    </h1>
  </Layout>
)

export default NotFoundPage
