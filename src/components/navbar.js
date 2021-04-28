import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3rem;
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 1px solid hsl(210, 31%, 80%);
  z-index: 1;
  padding: 0 1.5rem;
  align-items: center;
`

export const PageTitle = styled.span`
  font-weight: 600;
  color: hsl(209, 61%, 16%);
  font-size: 18px;
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  position: relative;
  margin-right: 2rem;
`

export const Menu = styled.nav`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-flow: row;
  height: 100%;
`

export const MenuButton = styled(Link)`
  display: inline-block;
  position: relative;
  appearance: none;
  border: none;
  outline: none;
  text-decoration: none;
  font-weight: 600;
  height: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;
  cursor: pointer;
  color: ${({ active }) =>
    active ? "hsl(211, 39%, 23%)" : "hsl(209, 23%, 60%)"};

  ${({ active }) => {
    if (active) {
      return css`
        &::before {
          content: "";
          width: 100%;
          position: absolute;
          bottom: -1px;
          left: 0;
          z-index: 1;
          background: hsl(330, 72%, 65%);
          height: 3px;
        }
      `
    }
  }}

  &::after {
    content: "";
    height: 100%;
    z-index: -1;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: hsl(210, 36%, 96%);
  }

  &:hover::after {
    opacity: 1;
  }
`
