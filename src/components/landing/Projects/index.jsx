/* eslint-disable react/no-danger */
import React, { useContext } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Modal, Button } from 'react-bootstrap';
import { Container, Card, TitleWrap } from '../../common';
import { ThemeContext } from '../../../providers/ThemeProvider';

import {
  ProjectWrapper,
  Wrapper,
  Grid,
  Item,
  Content,
  Stats,
  Languages,
} from './styles';
import { FoldableContainer } from '../../common/FoldableContainer/FoldableContainer';
import useItemModal from '../../../hooks/useItemModal';
import ItemModal from '../../common/ItemModal/ItemModal';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const { showModal, handleClose, handleShow } = useItemModal();
  // const {
  //   allMarkdownRemark: { edges },
  // } = useStaticQuery(graphql`
  //   {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             title
  //             alt
  //             tags
  //             img
  //           }
  //           html
  //         }
  //       }
  //     }
  //   }
  // `);
  const edges = [1, 2, 3, 4, 5, 6];
  const projectParagraphText = `Here's a list of some of my web dev projects. At the moment it's mostly made up of my early projects that I have available on my personal GitHub. But as time goes by I'll add some more professional and/or impressive side projects. Thanks for taking a look!`;
  return (
    <Wrapper id="projects">
      <ProjectWrapper as={Container} theme={theme}>
        <FoldableContainer
          buttonTextWhenOpen="Hide Projects"
          buttonTextWhenClosed="Show Projects"
          headerText="Projects"
          paragraphText={projectParagraphText}
        >
          <Grid>
            {/* <StaticImage
          width={410}
          height={250}
          src="../../../../static/screenshots/face-recognition-screenshot.png"
          alt="test"
        /> */}
            {edges.map((project) => (
              <Item key={Math.random()} theme={theme}>
                <Card theme={theme}>
                  <ItemModal
                    showModal={showModal}
                    handleClose={handleClose}
                    project={project}
                  />
                  <StaticImage
                    onClick={handleShow}
                    placeholder="blurred"
                    width={600}
                    height={450}
                    src="https://placekitten.com/600/450"
                    alt="kittiey"
                  />
                  <Content>
                    <h4>Cat #{project}</h4>
                    {/* <div dangerouslySetInnerHTML={{ __html: node.html }} /> */}
                    <div>This is a placeholder cat. How nice!</div>
                  </Content>
                  <TitleWrap>
                    {/* <Stats theme={theme}>
                  {node.frontmatter.tags.map((tag, i) => (
                    <Languages>
                      <span key={i}>{tag}</span>
                    </Languages>
                  ))}
                </Stats> */}
                    <Stats theme={theme}>
                      <Languages>
                        <span key={Math.random * 1}>Language1</span>
                      </Languages>
                      <Languages>
                        <span key={Math.random * 1}>Language2</span>
                      </Languages>
                      <Languages>
                        <span key={Math.random * 1}>Language3</span>
                      </Languages>
                    </Stats>
                  </TitleWrap>
                </Card>
              </Item>
            ))}
          </Grid>
        </FoldableContainer>
      </ProjectWrapper>
    </Wrapper>
  );
};

/* <Wrapper as={Container} id="projects">
<h2>Projects</h2>
<Grid>
  {edges.map(({ node }) => (
    <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
      <Card theme={theme}>
        <Content>
          <h4>{node.name}</h4>
          <p>{node.description}</p>
        </Content>
        <TitleWrap>
          <Stats theme={theme}>
            <div>
              <Star color={theme === "light" ? "#000" : "#fff"} />
              <span>{node.stargazers.totalCount}</span>
            </div>
            <div>
              <Fork color={theme === "light" ? "#000" : "#fff"} />
              <span>{node.forkCount}</span>
            </div>
          </Stats>
          <Stats theme={theme}>
            <Languages>
              {
                node.languages.nodes.map(({ id, name }) => (
                  <span key={id}>
                    {name}
                  </span>
                ))
              }
            </Languages>
          </Stats>
        </TitleWrap>
      </Card>
    </Item>
  ))}
</Grid>
</Wrapper> */
