import { graphql } from "gatsby"
import * as React from "react"
import "../components/layout.css"
import Img from "gatsby-image"
import styled from "styled-components"
import Seo from "../components/seo"
import Sparkles from "../components/sparkles"
import { NavBar, Menu, MenuButton, PageTitle } from "../components/navbar"

const IndexPage = ({ data }) => {
  const arch001 = data.arch001.childImageSharp.fluid
  const arch002 = data.arch002.childImageSharp.fluid
  const arch003 = data.arch003.childImageSharp.fluid

  const eng001 = data.eng001.childImageSharp.fluid
  const eng002 = data.eng002.childImageSharp.fluid
  const eng003 = data.eng003.childImageSharp.fluid
  const eng004 = data.eng004.childImageSharp.fluid

  const med001 = data.med001.childImageSharp.fluid
  const med002 = data.med002.childImageSharp.fluid
  const med003 = data.med003.childImageSharp.fluid

  const dent001 = data.dent001.childImageSharp.fluid
  const dent002 = data.dent002.childImageSharp.fluid
  const dent003 = data.dent003.childImageSharp.fluid

  const bascii001 = data.bascii001.childImageSharp.fluid
  const bascii002 = data.bascii002.childImageSharp.fluid
  const bascii003 = data.bascii003.childImageSharp.fluid

  const bba001 = data.bba001.childImageSharp.fluid
  const bba002 = data.bba002.childImageSharp.fluid
  const bba003 = data.bba003.childImageSharp.fluid

  return (
    <>
      <Seo title="Cultural Identity" />
      <NavBar>
        <PageTitle>CU Cultural Identities</PageTitle>
        <Menu>
          <MenuButton active>Faculty</MenuButton>
          <MenuButton to="/traditions">Traditions</MenuButton>
        </Menu>
      </NavBar>
      <ArchitectSection>
        <Container>
          <TopSpacer />
          <Grid>
            <CanvasWrapper>
              <SectionTitle>
                <Sparkles>
                  Faculty of <br />
                  Architecture
                </Sparkles>
              </SectionTitle>
            </CanvasWrapper>
            <TextWrapper>
              <Text>
                The faculty of Architecture is a very large faculty, filled with
                people with artistic and creative brains. You may think that
                because of the large population size, peers will likely be
                studying together or helping each other work, but it’s quite the
                opposite. In this faculty, there are almost no exams, and the
                main focuses are <Highlight>individual projects</Highlight>{" "}
                involving one’s creativity or projects within small groups. This
                is very understandable, since everyone has their own unique
                creativity which needs to be applied individually and not shared
                among others. According to how much time, effort, and workload
                needed to put up with in this faculty, students barely go out
                with friends because most of the people in this faculty are
                individualistic citizens, striving towards making the best out
                of their own projects, are always in their own bubble, and don’t
                feel the need of leaning towards peers for comfort or help,
                therefore, barely spending money on meals with friends because
                most of the food students eat are at the faculty.
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
                anchored towards <Highlight>real life creativity</Highlight>{" "}
                rather than graded with a strict syllabus and understanding of
                textbooks. Because of this, students are not worried about their
                GPA at all, but are worried about the projects and ideas that
                make up their ports instead. Since a lot of projects are
                involved and guidelines from each professor are different, the
                bond between students from different years (age groups) are
                tightly knitted and students from older years guide the students
                from younger years all the time, making the event “rub nong”
                last for almost a whole year. The most popular sport amongst the
                students is <Highlight>rugby</Highlight>.
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
      </ArchitectSection>
      <DentistSection>
        <Container>
          <Grid>
            <LeftCanvasWrapper>
              <SectionTitle>
                <Sparkles color="hsl(334, 86%, 67%)">
                  Faculty of <br /> Dentistry
                </Sparkles>
              </SectionTitle>
            </LeftCanvasWrapper>
            <TextWrapper>
              <Text>
                A faculty that involves medicine and art is known as faculty of
                dentistry. This faculty is smaller than the faculty of medicine
                so people in a friend group will range around{" "}
                <Highlight>6-8 people</Highlight>. This faculty is also a very
                stressful faculty because, even with all the workload they have,
                there are also some art skills and projects involved as well.
                Since majority of the dental students don’t have prior knowledge
                about hand skills needed to carve teeth, etc, students from the
                older years will help aid them with what to do making this
                somewhat a <Highlight>collectivistic</Highlight> society because
                the younger years respect the older years because the older
                years teach them things that will help them graduate in time of
                6 years (that’s the majority goal).
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <Dent001>
                <ImageId>DENT-001</ImageId>
                <Img fluid={dent001} fadeIn={true} />
                <ImageLabel>
                  <ImageTitle>Faculty of Dentistry</ImageTitle>
                  <ImageAlt>Entrance Building</ImageAlt>
                </ImageLabel>
              </Dent001>
            </RightCanvasWrapper>
            <LeftCanvasWrapper>
              <Dent002>
                <ImageId>DENT-002</ImageId>
                <Img fluid={dent003} fadeIn={true} />
                <ImageLabel>
                  <ImageTitle>Paragon</ImageTitle>
                </ImageLabel>
              </Dent002>
            </LeftCanvasWrapper>
            <TextWrapper>
              <Text>
                However, it is very competitive in their own grade. Because they
                have to balance out studying, and projects involving hand
                skills, they barely have time to hangout with each other,
                therefore they only hangout during lunch breaks and after
                classes since the faculty is located at Siam Paragon. The amount
                of money they spend on food per meal is around 200-30 baht no
                more. GPA is also considered a very important topic in this
                faculty because it is needed to be used in their portfolio after
                they graduate and want to attend their masters degree and become
                dental specialists. Since the grading also depends on their
                classmates and isn’t standardized, this makes them extremely
                concerned about their <Highlight>grades</Highlight>.
              </Text>
            </TextWrapper>
            <TextWrapper>
              <Text>
                The learning environment here is overall very stressful and
                requires extremely <Highlight>good time management</Highlight>{" "}
                to balance out between the materials and contents that are
                learnt, and also applying artistic skills into patients as well.
                This faculty also involves dentists to have very good
                communication skills since they need to communicate with future
                patients. So overall, this faculty portrays characteristics of
                an individualistic society, but it also teaches dentists to
                become collectivist when treating their patients.
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <Dent003>
                <ImageId>DENT-003</ImageId>
                <Img fluid={dent002} fadeIn={true} />
                <ImageLabel>
                  <ImageTitle>Time Management</ImageTitle>
                </ImageLabel>
              </Dent003>
            </RightCanvasWrapper>
          </Grid>
        </Container>
      </DentistSection>
      <DoctorSection>
        <Container>
          <Grid>
            <CanvasWrapper>
              <SectionTitle>
                <Sparkles>
                  Faculty of <br /> Medcine
                </Sparkles>
              </SectionTitle>
            </CanvasWrapper>
            <TextWrapper>
              <Text>
                Known to be the most challenging faculty leaves no other than
                the faculty of medicine. This faculty involves a lot of
                studying, losing lots of sleep from all the workload, and
                importantly, extremely stressful. This faculty is a large sized
                faculty since it combines both international curriculum and Thai
                curriculum in 1. The friend group in this faculty is around 10
                people. Even though they want to study and share ideas with each
                other, there is a lot of content to cover in a short amount of
                time considering how many{" "}
                <Highlight>tests and quizzes</Highlight> they have per week.
                Usually, they will study alone first and then sit in groups to
                discuss the materials before doing an exam. However, the
                environment in the faculty of medicine is mainly
                <Highlight> individualistic</Highlight>.
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <Med001>
                <ImageId>MED-001</ImageId>
                <Img fluid={med001} alt="" fadeIn={true} />
                <ImageLabel>
                  <ImageTitle>Best way to read a book</ImageTitle>
                  <ImageAlt>Tony Tran</ImageAlt>
                </ImageLabel>
              </Med001>
            </RightCanvasWrapper>
            <LeftCanvasWrapper>
              <Med002>
                <ImageId>MED-002</ImageId>
                <Img fluid={med002} alt="" fadeIn={true} />
                <ImageLabel>
                  <ImageTitle>Coffee = Ultra learning</ImageTitle>
                </ImageLabel>
              </Med002>
            </LeftCanvasWrapper>
            <TextWrapper>
              <Text>
                As they gradually grow older, they will reach a point where they
                have to be trained in order to become doctors in real life.
                Therefore, they each get a special case from different patients.
                They cannot depend on each other to evaluate what diseases the
                patient has etc. They have to work on their own. The culture
                here is also <Highlight>highly competitive</Highlight> since the
                grades aren’t standardized. It is based on other students as
                well. According to this, they won’t be 100% with each other in
                sharing ideas with each other since they also don’t want to fail
                and are also VERY serious about their GPA and being top of the
                class.
              </Text>
            </TextWrapper>
            <TextWrapper>
              <Text>
                Apart from the stressful and competitive side, in their
                freetime, they like to go to{" "}
                <Highlight>cafes to relax or go to cooking class</Highlight> at
                central in order to relieve their stress. The unique cultural
                trait in this faculty is they learn so much and it’s super
                stressful for a consecutive 6 years. They also have to handle
                situations that require life and death so it’s more serious than
                other faculties in terms of life applications. So to conclude,
                their studying plan is a very individualistic culture unlike
                their freetime plan. In their freetime, they hangout and bond
                with their friends showing a more of a collectivist side.
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <Med003>
                <ImageId>MED-003</ImageId>
                <Img fluid={med003} fadeIn={true} />
                <ImageLabel>
                  <ImageTitle>Relaxing cooking</ImageTitle>
                </ImageLabel>
              </Med003>
            </RightCanvasWrapper>
          </Grid>
        </Container>
      </DoctorSection>
      <InnovativeSection>
        <Container>
          <Grid>
            <LeftCanvasWrapper>
              <SectionTitle>
                <Sparkles color="hsl(197, 92%, 61%)">
                  BASCii <br />
                  Faculty of <br />
                  Innovation
                </Sparkles>
              </SectionTitle>
            </LeftCanvasWrapper>
            <TextWrapper>
              <Text>
                BASCII is a new faculty joining Chulalongkorn University.
                Students from this faculty are usually students from
                international schools who are interested in learning about new
                innovations and technologies that are going to be introduced in
                the near future. BASCII is an innovation faculty that revolves
                around start ups, or businesses that are going to help solve
                real world problems. This faculty has a fair size of students
                but not as much compared to older faculties making peer groups
                have around 5-8 people. The interesting thing about the culture
                of friend groups in this faculty is that each friend group is
                <Highlight> bonded closely</Highlight> together but rarely
                interacts with other friend groups. People in their own friend
                group very oftenly go out with each other to eat, party, and
                hangout right in the heart of bangkok, whether it would be at
                Michelin star restaurants, go on private yachts, etc. This shows
                that the culture of this faculty has a class of its own. The
                learning environment of this faculty involves having a
                combination of tests and projects projecting a different kind of
                stress compared to other faculties. The learning material gets
                harder as the year progresses. There are many aspects of unique
                cultural characteristics in this faculty, since it involves
                different factors from other different faculties.
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <Bascii001>
                <ImageId>BASC-001</ImageId>
                <Img fluid={bascii001} />
                <ImageLabel>
                  <ImageTitle>Innovative</ImageTitle>
                  <ImageAlt>JJ Jordan</ImageAlt>
                </ImageLabel>
              </Bascii001>
            </RightCanvasWrapper>
            <LeftCanvasWrapper>
              <Bascii002>
                <ImageId>BASC-002</ImageId>
                <Img fluid={bascii002} />
                <ImageLabel>
                  <ImageTitle>Design Thinking</ImageTitle>
                </ImageLabel>
              </Bascii002>
            </LeftCanvasWrapper>
            <TextWrapper>
              <Text>
                For BASCII, it is like a combination of Engineering and BBA.
                Creative ideas need to be put into{" "}
                <Highlight>innovative projects</Highlight>. And everytime,
                something evolves around creativity, it portrays an
                individualistic characteristic because creativity of one person
                varies from another. On the other hand, it also shows
                collectivist characteristics because students from this faculty
                tend to study together in their friend group. Aside from
                everyone having their own thoughts and ideas put into their
                innovative projects, this faculty promotes and believes that
                creativity will spark from a good learning environment. Whether
                it would be, large meeting rooms designed like a business
                meeting, or the characteristic of each eager teacher wanting
                students to take the knowledge that they learnt and put it into
                real life practice and use. In order to promote social thinking
                and reduce stress towards students, there is a{" "}
                <Highlight>pingpong table</Highlight> and relaxing activities
                for the students to participate in during their free time.
              </Text>
            </TextWrapper>
            <TextWrapper>
              <Text>
                A unique difference from BASCII and BBA with projects is that,
                BBA will do Business cases which involves just stating the
                problems in the business, but BASCII has a business model, this
                model then solves the problem in the business not just pointing
                it out. So in conclusion, BASCII holds both a{" "}
                <Highlight>collectivist and individualistic</Highlight> society.
                The collectivist society happens in their own friend group and
                are usually prone to spending more money hanging out with each
                other than any other faculty. However, the individualistic
                society happens between each of the friend groups since they
                rarely hang out with other groups other than their own.
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <Bascii003>
                <ImageId>BASC-003</ImageId>
                <Img fluid={bascii003} />
                <ImageLabel>
                  <ImageTitle>Innovative</ImageTitle>
                </ImageLabel>
              </Bascii003>
            </RightCanvasWrapper>
          </Grid>
        </Container>
      </InnovativeSection>
      <EngineeringSection>
        <Container>
          <Grid>
            <LeftCanvasWrapper>
              <SectionTitle>
                <Sparkles color="hsl(360, 83%, 62%)">
                  Faculty of <br /> Engineering
                </Sparkles>
              </SectionTitle>
            </LeftCanvasWrapper>
            <TextWrapper>
              <Text>
                The Faculty of Engineering revolves around a lot of fun but also
                serious in terms of <Highlight>work and exams</Highlight>. There
                are around 10 people in a friend group and the studying they do
                is based on notes from older engineering students that they use
                as a guideline. A common goal among engineering students is to
                collect experience and knowledge needed to start a business of
                their own. Therefore the learning environment can be very
                stressful. Even though the materials needed for understanding in
                this faculty is very hard, the lecturers don’t cover enough
                topics that are taught making the exams extremely difficult
                among the students. So in order to fix the problem, they usually
                spend more time learning and understanding about the materials
                on their own rather than attending lectures since a lot of
                thinking and a clear understanding is needed. Because of the
                stressful environment, they tend to loosen up their stress by
                having peer comfort in both studying and going out which is a
                characteristic of a <Highlight>collectivistic</Highlight>{" "}
                environment.
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <Eng001>
                <ImageId>ENG-001</ImageId>
                <Img fluid={eng001} alt="" />
                <ImageLabel>
                  <ImageTitle>Guys, can you do this?</ImageTitle>
                  <ImageAlt>Raeng</ImageAlt>
                </ImageLabel>
              </Eng001>
            </RightCanvasWrapper>
            <LeftCanvasWrapper>
              <Eng003>
                <ImageId>ENG-002</ImageId>
                <Img fluid={eng003} alt="" fadeIn={true} />
                <ImageLabel>
                  <ImageTitle>Robotics and Mechanics</ImageTitle>
                </ImageLabel>
              </Eng003>
              <Eng004>
                <Img fluid={eng004} alt="" fadeIn={true} />
              </Eng004>
            </LeftCanvasWrapper>
            <TextWrapper>
              <Text>
                The time duration between the midterm exams and final exams are
                about 2 months. They typically spend the first 3 weeks having as
                much fun as possible (eg. going to parties and getting
                <Highlight> drunk</Highlight>). And after the first 3 weeks,
                they would often go to study at cafes after class because they
                can ask each other questions on the materials that they learn.
                The environment in this faculty is not competitive at all
                because students help each other to maintain a GPA around 3.25.
              </Text>
            </TextWrapper>
            <TextWrapper>
              <Text>
                The unique culture in this faculty is that students work with a
                lot of physical things rather than just learning about theories.
                By doing this, information or tasks they learn can be applied to
                real life scenarios when they work in the future. This faculty
                is also very chill since students can wear{" "}
                <Highlight>flip flops</Highlight> to class almost everyday apart
                from lab days. It's an easy learning environment apart from the
                workload. Gradually, there will be more project-oriented
                assignments each year rather than a lot of theories and
                textbooks compared to the first year. So to conclude, this
                faculty is overall a collectivistic faculty. This is because
                peers hangout with each other with non work related activities
                and also help each other with learning materials as well.
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <Eng002>
                <ImageId>ENG-003</ImageId>
                <Img fluid={eng002} alt="" />
                <ImageLabel>
                  <ImageTitle>After Exam</ImageTitle>
                  <ImageAlt>Motoki Tonn</ImageAlt>
                </ImageLabel>
              </Eng002>
            </RightCanvasWrapper>
          </Grid>
        </Container>
      </EngineeringSection>
      <BbaSection>
        <Container>
          <Grid>
            <LeftCanvasWrapper>
              <SectionTitle>
                <Sparkles color="hsl(356, 75%, 53%)">
                  Faculty of <br />
                  Business <br />
                  Administration
                </Sparkles>
              </SectionTitle>
            </LeftCanvasWrapper>
            <TextWrapper>
              <Text>
                BBA, known as Bachelor of Business Administration, is a large
                faculty making peer groups commonly around 10-20 people. Since
                there are quizzes in almost every single class and the exams are
                extremely stressful and hard, students usually study in groups
                to share their knowledge with each other to get through the
                year. They usually <Highlight>study together</Highlight> at
                Samyan Mitrtown and other malls making the price of each meal
                range around 500-600 baht per person. This may seem like a
                collectivist society to an extent, according to how much peer
                time is involved. However, it can be a highly competitive
                individualistic faculty since students here are extremely
                concerned about their GPA, trying to answer questions first to
                get their participation scores, and in common cases, being too
                possessive about sharing the knowledge they have. Because this
                is a Business administration, students have to do{" "}
                <Highlight>business cases</Highlight> making them have to find
                internships while learning as well. This is to be more
                knowledgeable in their field of study and to make sure there are
                jobs available and waiting for them post graduation.
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <Bba001>
                <ImageId>BBA-001</ImageId>
                <Img fluid={bba001} alt="" />
                <ImageLabel>
                  <ImageTitle>Business</ImageTitle>
                  <ImageAlt>Pollock & Vita</ImageAlt>
                </ImageLabel>
              </Bba001>
            </RightCanvasWrapper>
            <LeftCanvasWrapper>
              <Bba003>
                <ImageId>BBA-003</ImageId>
                <Img fluid={bba003} alt="" />
                <ImageLabel>
                  <ImageTitle>Golfing</ImageTitle>
                  <ImageAlt>Juan Gomez</ImageAlt>
                </ImageLabel>
              </Bba003>
            </LeftCanvasWrapper>
            <TextWrapper>
              <Text>
                All of this is achieved through{" "}
                <Highlight>connections</Highlight>. In order to find
                connections, they strictly go to dinners, cafes, and golf with
                people whom they believe can bring them their spot of
                internships, whether it would be with their friends, their
                friend’s parents, or sometimes they even tour business companies
                themselves with a minimum of 4 times a month. You see, the
                unique factor about this faculty is the amount of effort they
                put in to find connections. They do activities and have to keep
                up with their studies as well. So in conclusion, students in
                this faculty have to acquire traits of a collectivist, such as
                having good verbal and physical communication like, manners,
                reputation, and flexibility in fitting in with diverse groups of
                people, so they can achieve their own individualistic goals in
                the future.
              </Text>
            </TextWrapper>
            <RightCanvasWrapper>
              <Bba002>
                <ImageId>BBA-002</ImageId>
                <Img fluid={bba002} alt="" />
                <ImageLabel>
                  <ImageTitle>Reading News</ImageTitle>
                  <ImageAlt>Adeolu Eletu</ImageAlt>
                </ImageLabel>
              </Bba002>
            </RightCanvasWrapper>
          </Grid>
        </Container>
      </BbaSection>
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
    eng001: file(
      relativePath: { eq: "engineerings/thisisengineering-raeng.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eng002: file(relativePath: { eq: "engineerings/motoki-tonn.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eng003: file(
      relativePath: {
        eq: "engineerings/thisisengineering-raeng-Kar3dF1gsz8-unsplash.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 120, maxHeight: 300, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eng004: file(
      relativePath: {
        eq: "engineerings/thisisengineering-raeng-x4EDVVNGdMU-unsplash.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    med001: file(relativePath: { eq: "medicines/tony-tran.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    med002: file(relativePath: { eq: "medicines/jojo-sharemyfoodd.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 400, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    med003: file(relativePath: { eq: "medicines/max-delsid.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 180, maxHeight: 180, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dent001: file(
      relativePath: { eq: "dentists/chula-faculty-dentistry.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dent002: file(relativePath: { eq: "dentists/icons8-team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 180, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dent003: file(relativePath: { eq: "dentists/kath-barcinas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 180, maxHeight: 350, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bascii001: file(relativePath: { eq: "innovation/jj-jordan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 450, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bascii002: file(relativePath: { eq: "innovation/kelly-sikkema.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 180, maxHeight: 300, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bascii003: file(relativePath: { eq: "innovation/daria-nepriakhina.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 350, maxHeight: 240, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bba001: file(relativePath: { eq: "business/sean-pollock.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 270, maxHeight: 180, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bba002: file(relativePath: { eq: "business/adeolu-eletu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 270, maxHeight: 180, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bba003: file(relativePath: { eq: "business/juan-gomez.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 400, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Highlight = styled.span`
  font-family: "Sriracha";
  font-weight: 500;
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
  height: 2rem;
`

const Container = styled.div`
  width: min(1200px, 100%);
  height: auto;
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
  width: max-content;
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
const Eng001 = styled(CanvasWrapper)``

const Eng002 = styled(CanvasWrapper)`
  width: 100%;
  right: 0;
`

const Med002 = styled(CanvasWrapper)`
  width: 200px;
  right: 0;
  position: absolute;
`

const Med001 = styled(CanvasWrapper)`
  width: min(275px, 100%);
  position: absolute;
`

const Med003 = styled(CanvasWrapper)`
  width: 180px;
  height: 180px;
  position: relative;
`

const Eng003 = styled(CanvasWrapper)`
  position: absolute;
  width: 120px;
  top: -60px;
  right: 0;
`

const Eng004 = styled(CanvasWrapper)`
  position: absolute;
  width: 120px;
  right: 140px;
  top: 40px;
`

const Dent001 = styled(CanvasWrapper)`
  position: relative;
  width: min(350px, 100%);
  height: 200px;
`

const Dent002 = styled(CanvasWrapper)`
  position: absolute;
  width: 150px;
  height: 300px;
  right: 0;
`

const Dent003 = styled(CanvasWrapper)`
  position: relative;
  width: 250px;
  height: 180px;
`

const Bascii001 = styled(CanvasWrapper)`
  position: absolute;
  width: min(250px, 90%);
  height: auto;
`

const Bascii002 = styled(CanvasWrapper)`
  position: absolute;
  right: 0;
  width: 180px;
  height: 270px;
`

const Bascii003 = styled(CanvasWrapper)`
  position: absolute;
  width: 340px;
  height: auto;
`

const Bba001 = styled(CanvasWrapper)`
  position: relative;
  width: 270px;
  height: 180px;
`

const Bba002 = styled(CanvasWrapper)`
  position: absolute;
  width: 270px;
  height: 180px;
`

const Bba003 = styled(CanvasWrapper)`
  position: absolute;
  width: 200px;
  height: auto;
  top: -100px;
  right: 0;
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
  width: max-content;
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

const ArchitectSection = styled(Main)`
  ${Highlight} {
    color: hsl(201, 79%, 46%);
  }
`

const EngineeringSection = styled(Main)`
  background-color: hsl(341, 100%, 98%);

  ${SectionTitle},
  ${Text} {
    color: hsl(322, 93%, 27%);
  }

  ${ImageLabel},
  ${ImageId} {
    color: hsl(324, 48%, 60%);
  }

  ${Highlight} {
    color: hsl(354, 85%, 44%);
  }
`

const DentistSection = styled(Main)`
  background-color: hsl(186, 100%, 94%);

  ${Text} {
    color: hsl(184, 91%, 15%);
  }

  ${SectionTitle} {
    color: hsl(185, 84%, 25%);
  }

  ${ImageLabel},
  ${ImageId} {
    color: hsl(185, 81%, 29%);
  }

  ${Highlight} {
    color: hsl(334, 86%, 67%);
  }
`

const DoctorSection = styled(Main)`
  background-color: hsl(152, 68%, 96%);

  ${Text} {
    color: hsl(170, 97%, 15%);
  }

  ${SectionTitle} {
    color: hsl(168, 80%, 23%);
  }

  ${ImageLabel},
  ${ImageId} {
    color: hsl(168, 60%, 40%);
  }

  ${Highlight} {
    color: hsl(42, 87%, 55%);
  }
`

const InnovativeSection = styled(Main)`
  background-color: hsl(49, 100%, 96%);

  ${Text} {
    color: hsl(15, 86%, 30%);
  }

  ${SectionTitle} {
    color: hsl(22, 82%, 39%);
  }

  ${ImageLabel},
  ${ImageId} {
    color: hsl(29, 80%, 44%);
  }

  ${Highlight} {
    color: hsl(197, 92%, 61%);
  }
`

const BbaSection = styled(Main)`
  background-color: hsl(240, 100%, 97%);

  ${Text} {
    color: hsl(245, 100%, 27%);
  }

  ${SectionTitle} {
    color: hsl(245, 86%, 40%);
  }

  ${ImageLabel},
  ${ImageId} {
    color: hsl(245, 64%, 70%);
  }

  ${Highlight} {
    color: hsl(356, 75%, 53%);
  }
`
