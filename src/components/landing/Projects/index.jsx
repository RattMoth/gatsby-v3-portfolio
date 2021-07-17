import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
  const {
    allProjectsJson: { edges },
  } = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            name
            description
            languagesArray
            screenshotArray {
              image {
                childrenImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `);

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
            {edges.map((project) => (
              <Item key={project.node.id} theme={theme}>
                <ItemModal
                  showModal={showModal}
                  handleClose={handleClose}
                  project={project.node}
                />
                <Card theme={theme}>
                  <GatsbyImage
                    onClick={handleShow}
                    image={getImage(
                      project.node.screenshotArray[0].image
                        .childrenImageSharp[0].gatsbyImageData
                    )}
                    placeholder="blurred"
                    width={1908}
                    height={987}
                    alt={`Screenshot for ${project.node.name}`}
                  />
                  <Content>
                    <h4>Cat {project.node.name || 'noname'}</h4>
                    <div>This is a placeholder cat. How nice!</div>
                  </Content>
                  <TitleWrap>
                    <Stats theme={theme}>
                      {project.node.languagesArray.map((language) => (
                        <Languages>
                          <span key={`${project.node.id}_key`}>{language}</span>
                        </Languages>
                      ))}
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
