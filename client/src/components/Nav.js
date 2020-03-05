import React from 'react';
import styled from 'styled-components';
import { below, elevation, fixed } from '../utilities';

const Navbar = ({ className }) => (
  <nav className={className}>
    <logo id="logoLong">Santiago Martinez Vara Ortiz</logo>
    <logo id="logoShort">Santiago MVO</logo>
    <div class="linksContainer">
        <a href="/">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
    </div>
  </nav>
);

export const Nav = styled(Navbar)`
  background: ${props => props.theme.colors.secondary};
  padding: 10px 5%;
  width: 100%;
  height: 80px;
  a{
    font-size: 30px;
    padding: 8px;
    color: ${props=>props.theme.colors.primary};
  }
  logo{
    font-size: 30px;
    padding: 24px;
    color: ${props=>props.theme.colors.primary};
  }
  #logoShort{
    visibility:hidden;
  }
  ${fixed()};
  ${elevation[4]};
  ${below.m`
    height: 132px;
    #logoLong{
      visibility:hidden;
    }
    #logoShort{
      visibility:visible;
    }
  `}
`;

/*
<!-- Header -->
<div class="headerContainer">
    <div class="header clearfix">
        <span class="logo" id="logoLong">Santiago Martinez Vara Ortiz</span>
        <span class="logo" id="logoShort">Santiago MVO</span>
        <hr class="hrHeader">
        <div class="linksContainer">
            <!--<span class="nolink unselectable">About</span>-->
            <span class="link" id="aboutLink">About</span>
            <span class="link" id="portfolioLink">Portfolio</span>
            <span class="link" id="contactLink">Contact</span>
        </div>
    </div>
    <figure class="shadow"></figure>
</div>

.headerContainer {
    position: absolute;
    height: 80px;
    width: 99.99%;
    margin: 0;
    top:0;
    left:0;
    background: #2c2c54;
    position: fixed;
    top:0;
    left: 0;
    z-index: 10; 
}

.header {
    width: 960px;
    margin: auto;
}

hr.hrHeader {
    display: none;
}

.logo {
    height: 32px;
    font-size: 30px;
    padding: 24px;
    padding-left: 0;
    text-align: center;
    color: #34ace0;
    float: left;
    margin:0;
}

.linksContainer {
    float: right;
    overflow: none;
    padding-top: 33px;
}

.link { 
    text-decoration: none;
    color: #34ace0;
    margin: 30px;
    margin-right:0;
    transition: color 0.3s;
}

.link:hover, link:focus, link:active, link:visited, link:enabled{
    color: #227093;
    border: none;
    outline: none;
    cursor: pointer;
}

.nolink { 
    font-size: 18px;
    color: #706fd3;
    margin: 30px;
    margin-right:0;
}

@media screen and (max-width: 992px) {
    .header {
        width: 500px;
    }

    .link {
        margin-left: 15px;
    }

    .nolink {
        margin-left: 15px;
    }

@media screen and (max-width: 576px) {
    .headerContainer {
        height: 132px;
    }

    .header {
        width: 390px;
    }

    .logo {
        margin-left: 98px;
    }

    .linksContainer {
        padding-top: 15px;
        padding-bottom: 15px;
        margin-right: 66px;
    }

    .link {
        margin-left: 35px;
    }

    .nolink {
        margin-left: 35px;
    }

    hr.hrHeader {
        position: relative;
        display: block;
        width: 390px;
        border:0;
        border-top: 2px solid black;
        margin: -2px;
        float: left;
    }
*/