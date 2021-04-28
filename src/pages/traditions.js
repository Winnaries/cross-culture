import React from "react"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import Seo from "../components/seo"
import Sparkles from "../components/sparkles"
import { NavBar, Menu, MenuButton, PageTitle } from "../components/navbar"
import { graphql } from "gatsby"

const Traditions = ({ data }) => {
  const baan0 = data.baan0.childImageSharp.fluid
  const baan1 = data.baan1.childImageSharp.fluid
  const baan2 = data.baan2.childImageSharp.fluid
  const baanBg = data.baanBg.childImageSharp.fixed

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
      <Spacer />
      <Main>
        <Container>
          <Title>Traditions</Title>
          <Canvas>
            <LeftImage>
              <Img fluid={baan1} fadeIn={true} />
            </LeftImage>
            <BigImage>
              <Img fluid={baan0} fadeIn={true} />
            </BigImage>
            <RightImage>
              <Img fluid={baan2} fadeIn={true} />
            </RightImage>
          </Canvas>
          <Text>
            Like other universities, students are separated into many faculties.
            However, it can be observed that many students in Chulalongkorn
            University socialize with many people from other faculties despite
            being divided into many faculties. One of the reasons is that there
            are many traditions that are shared among all Chulalongkorn
            Students.
          </Text>
          <Text>
            One of the very first traditions that the freshman will have is Baan
            Rub Nong. <Highlight>Baan Rub Nong</Highlight> is a tradition that
            gives all freshmen a chance to socialize with other freshmen and
            sophomores from other faculties by doing activities that the
            sophomores and juniors planned. These activities involve playing
            games, dancing, singing, freshy night concert and more activities
            based on the theme of the Baan. There are 36 Baans in total for the
            freshmen to choose. Each Baan has a different size of capacity of
            members, making them have different feelings and experiences. Baans
            with bigger size have better variations in people due to their large
            size, giving the members an opportunity to get to know people from
            other faculties. On the other hand, Baans with smaller size give an
            easier opportunity to make a deeper bond with other members due to
            their size. Therefore, freshmen should choose the house according to
            their preferred social interactions style. Another factor that the
            freshmen should consider is each Baans’ specialties. For example,
            Baan Rang and Baan Yim are known for their{" "}
            <Sparkles>cute girls</Sparkles>.
          </Text>
          <ScrollingWrapper>
            <ScrollingBackground>
              <Img fixed={baanBg} />
            </ScrollingBackground>
          </ScrollingWrapper>
          <Text>
            Another tradition for the freshman is the{" "}
            <Highlight>Oath of Allegiance Ceremony</Highlight>. It is a ritual
            that has been passed through each generation of Chulalongkorn
            University. The ceremony involves freshmen from each faculty to pay
            respect to King Rama I and King Rama VI Statues in front of the
            auditorium and make an oath that he/she will use the knowledge
            gained from the university to contribute to the country. Since the
            university acknowledges that there are many people with different
            religions and political points of view. This activity is not
            required to be done by every freshmen nor does prevent people with
            different beliefs from attending.
          </Text>
          <Text>
            Another one of the most famous traditions is the Chula-Thammasat
            Traditional Football Match, or commonly known as CU-TU Ball. As its
            name implies, <Highlight>CU-TU Ball</Highlight> is a football match
            between members of Chulalongkorn University and Thammasat
            University, allowing members of both universities to share their
            cultures. It is held every year, usually in January at the
            Suphachalasai Stadium in Bangkok. Aside from the football match, the
            uniqueness of the CU-TU Ball is the{" "}
            <Highlight>politics-mocking</Highlight> sequence expressed in both
            verbal and nonverbal means by both sides of the audience via the
            card stunts and the parade. However, due to the fact that most of
            the sequences are critiques on the current government and displayed
            in a low-context manner, many people with the opposing political
            points of view will despise the said political sequences.
          </Text>
        </Container>
      </Main>
    </>
  )
}

export default Traditions

export const query = graphql`
  query TraditionsPageQuery {
    baan0: file(relativePath: { eq: "tradtions/S__21700713.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    baan1: file(relativePath: { eq: "tradtions/S__9814032.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 240, maxHeight: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    baan2: file(relativePath: { eq: "tradtions/S__9814033.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 240, maxHeight: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    baanBg: file(relativePath: { eq: "tradtions/baan.png" }) {
      childImageSharp {
        fixed(height: 120, fit: CONTAIN) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Main = styled.main`
  width: 100%;
  display: flex;
  height: auto;
  flex-flow: column;
  align-items: center;
  padding: 2rem 2rem;
`

const Container = styled.div`
  width: min(800px, 100%);
  display: flex;
  flex-flow: column;
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
`

const Spacer = styled.div`
  width: 100%;
  height: 1rem;
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
`

const Text = styled.p`
  position: relative;
`

const Highlight = styled.span`
  font-family: "Sriracha";
  font-weight: 500;
  font-size: 1rem;
  color: hsl(201, 79%, 46%);
`

const Canvas = styled.div`
  position: relative;
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: 1fr 3fr 1fr;
  width: 100%;
  margin-top: 3rem;
  grid-column-gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const BigImage = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
`

const SmallImage = styled.div`
  position: relative;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  height: min-content;

  @media (max-width: 600px) {
    display: none;
  }
`

const LeftImage = styled(SmallImage)`
  top: 0;
`

const RightImage = styled(SmallImage)`
  bottom: 0;
  place-self: flex-end;
`

const ScrollingWrapper = styled.div`
  width: 120%;
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;
  align-self: center;

  @media (max-width: 1000px) {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 125px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );

    @media (max-width: 1000px) {
      width: 75px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    height: 100%;
    width: 125px;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );

    @media (max-width: 1000px) {
      width: 75px;
    }
  }
`

const scroll = keyframes`
    0% {
        transform: translateX(800px);
    }
    100% {
        transform: translateX(-100%);
    }
`

const ScrollingBackground = styled.div`
  width: max-content;
  animation: ${scroll} 90s linear infinite both;
  opacity: 0.93;
`
