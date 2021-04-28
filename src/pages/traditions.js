import React from "react"
import Seo from "../components/seo"
import { NavBar, Menu, MenuButton, PageTitle } from "../components/navbar"

const Traditions = () => {
  return (
    <>
      <Seo title="Traditions" />
      <NavBar>
        <PageTitle>CU Cultural Identities</PageTitle>
        <Menu>
          <MenuButton to="/">Faculty</MenuButton>
          <MenuButton active>Traditions</MenuButton>
        </Menu>
      </NavBar>
    </>
  )
}

export default Traditions
