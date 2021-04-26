import { graphql } from "gatsby"
import * as React from "react"
import "../components/layout.css"
import Img from "gatsby-image"
import styled from "styled-components"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const arch001 = data.arch001.childImageSharp.fluid
  const arch002 = data.arch002.childImageSharp.fluid
  const arch003 = data.arch003.childImageSharp.fluid

  return (
    <>
      <Seo title="Cultural Identity" />
      <Main>
        <Container>
          <TopSpacer />
          <Grid>
            <CanvasWrapper>
              <SectionTitle>Faculty of Architecture</SectionTitle>
            </CanvasWrapper>
            <TextWrapper>
              <Text>
                The faculty of Architecture is a very large faculty, filled with
                people with artistic and creative brains. You may think that
                because of the large population size, peers will likely be
                studying together or helping each other work, but it’s quite the
                opposite. In this faculty, there are almost no exams, and the
                main focuses are individual projects involving one’s creativity
                or projects within small groups. This is very understandable,
                since everyone has their own unique creativity which needs to be
                applied individually and not shared among others. According to
                how much time, effort, and workload needed to put up with in
                this faculty, students barely go out with friends because most
                of the people in this faculty are individualistic citizens,
                striving towards making the best out of their own projects, are
                always in their own bubble, and don’t feel the need of leaning
                towards peers for comfort or help, therefore, barely spending
                money on meals with friends because most of the food students
                eat are at the faculty.
              </Text>
            </TextWrapper>
            <CanvasWrapper>
              <ImageId>ARCH-001</ImageId>
              <Canvas>
                <Img fluid={arch001} alt="" fadeIn={true} />
              </Canvas>
              <ImageLabel>
                <ImageTitle>Faculty of Architecture</ImageTitle>
                <ImageAlt>Entrance Building</ImageAlt>
              </ImageLabel>
            </CanvasWrapper>
            <LeftCanvasWrapper>
              <Arch002>
                <ImageId>ARCH-002</ImageId>
                <Img fluid={arch002} alt="" fadeIn={true} />
                <ImageLabel>
                  <ImageTitle>Working on Projects</ImageTitle>
                </ImageLabel>
              </Arch002>
            </LeftCanvasWrapper>
            <TextWrapper>
              <Text>
                However, even with no exams, the due dates of projects can be
                very stressful since this faculty revolves around art. It is
                unique compared to other faculties because students' grades are
                anchored towards real life creativity rather than graded with a
                strict syllabus and understanding of textbooks. Because of this,
                students are not worried about their GPA at all, but are worried
                about the projects and ideas that make up their ports instead.
                Since a lot of projects are involved and guidelines from each
                professor are different, the bond between students from
                different years (age groups) are tightly knitted and students
                from older years guide the students from younger years all the
                time, making the event “rub nong” last for almost a whole year.
                The most popular sport amongst the students is rugby.
              </Text>
            </TextWrapper>
            <TextWrapper>
              <Text>
                So to conclude, the culture in this faculty between peers in the
                same year leans towards being more individualistic since a lot
                of time and effort is needed to be put in their work and
                presentations, therefore making them have less time to bond with
                each other. But, the cultural connection between students from
                different years lean towards being a collectivistic society.
                This is because the older years have to give advice and guide
                the younger students to know what is required of them being in
                this faculty.
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <ImageId>ARCH-003</ImageId>
              <Arch003>
                <Img fluid={arch003} fadeIn={true} alt="" />
              </Arch003>
              <ImageLabel>
                <ImageTitle>Film Photography</ImageTitle>
                <ImageAlt>Annie Spratt</ImageAlt>
              </ImageLabel>
            </RightCanvasWrapper>
          </Grid>
        </Container>
      </Main>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    arch001: file(relativePath: { eq: "architects/main-building.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    arch002: file(relativePath: { eq: "architects/ryan-ancill.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    arch003: file(relativePath: { eq: "architects/annie-spratt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 240, cropFocus: SOUTH) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`

const TopSpacer = styled.div`
  width: 100%;
  height: 5rem;
`

const Container = styled.div`
  width: min(1200px, 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  flex-flow: column;

  @media (min-width: 1024px) {
    transform: translateX(90px);
  }
`

const Grid = styled.div`
  display: grid;
  position: relative;
  padding: 1rem;
  width: 100%;
  height: auto;

  grid-template-columns: 1fr 12fr minmax(0, 8fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2.5rem;

  @media screen and (min-width: 1024px) {
    padding: 3rem;
  }
`

const SectionTitle = styled.h2`
  position: absolute;
  right: 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  padding: 0;
`

const CanvasWrapper = styled.div`
  width: min(600px, 100%);
  height: auto;
  place-self: flex-start center;
  position: relative;
`

const RightCanvasWrapper = styled(CanvasWrapper)`
  grid-column: 3 / 4;
`

const Arch002 = styled(CanvasWrapper)`
  width: 240px;
  height: 500px;
  right: 0;
  position: absolute;
`

const Arch003 = styled(CanvasWrapper)`
  width: 100%;
  height: auto;
`

const Canvas = styled.div`
  width: 100%;
  height: auto;
`

const ImageLabel = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImageTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
`

const ImageAlt = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const ImageId = styled.span`
  transform: rotate(90deg);
  font-size: 16px;
  font-weight: 400;
  font-family: georgia, serif;
  position: absolute;
  right: -98px;
  transform-origin: left;
  opacity: 0.7;
  top: -5px;
  width: min-content;
`

const LeftCanvasWrapper = styled(CanvasWrapper)`
  grid-column: 1 / 2;

  ${ImageId} {
    transform: rotate(-90deg);
    position: absolute;
    transform-origin: right;
    left: -98px;
    top: -5px;
  }
`

const Text = styled.p`
  width: 100%;
  padding: 0 1rem;
  line-height: 1.4;
`

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  grid-column: 2 / 3;

  & > *:not(:first-child) {
    margin-top: 1.5rem;
  }
`
