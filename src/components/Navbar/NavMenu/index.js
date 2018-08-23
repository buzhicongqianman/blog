import React from 'react'
import styled, { css } from 'react-emotion'
import Link from '../../../utils/MyLink'
import Modal from '../../UI/Modal'

const box = css`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    color: #909090;
  }
`

const ContactBox = styled('section')`
  ${box};
  background: #eddcdc;
`

const NavigationBox = styled('section')`
  ${box};
  background: #dbe7da;
`

const Items = styled('ul')`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
`

const Item = styled('li')`
  text-align: center;
  margin: .7em 0;
`

const linkStyle = css`
  font-size: 1.1em;
  font-weight: bold;
  text-decoration: none;
`

const NavLinkStyle = css`
  ${linkStyle};

  color: #fff;
`

const ContactLinkStyle = css`
  ${linkStyle};
  
  color: #fff;
`

const activeLinkStyle = css`
  &::before {
    display: inline-block;
    content: "";
    padding: .25em;
    margin-right: -0.5em;
    border-radius: 50%;
    background: #f3ad38;
    position: relative;
    right: 1.2em;
  }
` 

const NavMenu = ({isActive}) => {
  const navMenu = (
    <Modal>
      <NavigationBox>
        <h3>浏览</h3>
        <Items>
          <Item><Link className={NavLinkStyle} activeClassName={activeLinkStyle} to="/">首页</Link></Item>
          <Item><Link className={NavLinkStyle} activeClassName={activeLinkStyle} to="/posts">归档</Link></Item>
          <Item><Link className={NavLinkStyle} activeClassName={activeLinkStyle} to="/categories">分类</Link></Item>
        </Items>
      </NavigationBox>
      <ContactBox>
        <h3>联系</h3>
        <Items>
          <Item><Link className={ContactLinkStyle} to="mailto:buzhicongqianman@gmail.com">Email</Link></Item>
          <Item><Link className={ContactLinkStyle} to="https://www.weibo.com/buzhicongqianman">Weibo</Link></Item>
          <Item><Link className={ContactLinkStyle} to="https://github.com/buzhicongqianman">Github</Link></Item>
        </Items>
      </ContactBox>
    </Modal>
  )
  return isActive ? navMenu : null
}

export default NavMenu