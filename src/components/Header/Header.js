import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tomato_logo from "./tomato.svg";

const Header = (props) => {
  // Component
  return (
    <HeaderWrapper>
      <Logo href="" target="_blank">
        <LogoImg src={tomato_logo} alt=""></LogoImg>
        <LogoText>{props.title}</LogoText>
      </Logo>
    </HeaderWrapper>
  );
};

// Utility
Header.defaultProps = {
  title: "Pomodoro & Tasks",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// Styles
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.15rem solid #f2eeed;
  padding: 0.5rem 0 0.5rem 0;
  margin-bottom: 1.25rem;
`;
const Logo = styled.div`
  color: inherit;
  text-decoration: none;
  decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 3rem;
`;
const LogoText = styled.h1`
  margin: 0 0 0 0.5rem;
  font-size: 2.5rem;
  padding-top: 0.5rem;
  font-weight: 600;
  color: #ea5e57;
`;

export default Header;
