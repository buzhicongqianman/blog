import React, { Component } from 'react'
import { css } from 'react-emotion'
import Logo from './Logo'
import NavBtn from './NavBtn';
import NavMenu from './NavMenu';

const navbarStyle = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2em;
  padding: .7em;
  z-index: 200;
`

class Navbar extends Component {
  state = {
    showNavMenu: false
  }

  onNavBtnClicked = () => {
    this.setState((prevState) => {
      return {
        showNavMenu: !prevState.showNavMenu
      }
    })
  }

  render() {
    return (
      <>
        <NavMenu isActive={this.state.showNavMenu} />
        <nav className={navbarStyle}>
          <Logo />
          <NavBtn isActive={this.state.showNavMenu} clicked={this.onNavBtnClicked} />
        </nav>
      </>
    )
  }
}

export default Navbar