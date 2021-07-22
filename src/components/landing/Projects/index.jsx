/* eslint-disable react/no-array-index-key */
//
import React, { useContext, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ArrowsFullscreen } from 'react-bootstrap-icons';
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
  const [activeProject, setActiveProject] = useState(null);
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
            shortDescription
            languagesArray
            screenshotArray {
              image {
                childrenImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    height: 987
                    width: 1908
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const handleModalOpenClick = (targetProject) => {
    setActiveProject(targetProject);
    handleShow();
  };

  const projectParagraphText = `Here's a list of some of my web dev projects. At the moment it's mostly made up of my early projects that I have available on my personal GitHub. But as time goes by I'll add some more professional and/or impressive side projects. Thanks for taking a look!`;

  return (
    <Wrapper id="projects">
      {activeProject && (
        <ItemModal
          showModal={showModal}
          handleClose={handleClose}
          project={activeProject}
        />
      )}
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
                <Card theme={theme}>
                  <div className="image-container">
                    <ArrowsFullscreen className="fullscreen-icon" />
                    <GatsbyImage
                      className="gatsby-img"
                      onClick={() => handleModalOpenClick(project.node)}
                      image={getImage(
                        project.node.screenshotArray[0].image
                          .childrenImageSharp[0].gatsbyImageData
                      )}
                      placeholder="blurred"
                      width={1908}
                      height={987}
                      alt={`Screenshot for ${project.node.name}`}
                    />
                  </div>
                  <Content>
                    <h4>{project.node.name}</h4>
                    <div>{project.node.shortDescription}</div>
                  </Content>
                  <TitleWrap>
                    <Stats theme={theme}>
                      {project.node.languagesArray.map((language, index) => (
                        <Languages
                          key={`${project.node.id}-languages-key${index}`}
                        >
                          <span key={`${project.node.id}-span-key${index}`}>
                            {language}
                          </span>
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
