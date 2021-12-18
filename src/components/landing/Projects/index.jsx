/* eslint-disable react/no-array-index-key */
//
import React, { useContext, useRef, useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ArrowsFullscreen } from 'react-bootstrap-icons';
import ReactTooltip from 'react-tooltip';
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
  const cardRef = useRef();
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___sortOrder }) {
        edges {
          node {
            id
            html
            frontmatter {
              sortOrder
              name
              languagesArray
              shortDescription
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
    }
  `);

  useEffect(() => {
    // Show tooltip on initial load
    // ReactTooltip.show(cardRef.current);
  }, []);

  const handleModalOpenClick = (targetProject) => {
    setActiveProject(targetProject);
    handleShow();
  };

  const projectParagraphText = (
    <span>
      Here is a small display of my past projects. While not exhaustive,
      I&apos;ve tried to select projects that highlight the skills listed in{' '}
      <Link to="/resume" target="_blank" rel="noreferrer">
        my résumé.{' '}
      </Link>
      Thanks for taking a look!
    </span>
  );

  /** TODO:
   * Add tooltip to card
   * Set first child to active/hover/whatever until user interaction
   */

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
          <ReactTooltip effect="solid" event="hover" scrollHide={false} />
          <Grid>
            {edges.map((project, i) => (
              <div key={project.node.id}>
                <Item theme={theme}>
                  <Card
                    ref={i === 0 ? cardRef : null}
                    data-tip={i === 0 ? 'Click any card for details' : null}
                    theme={theme}
                    onClick={() => handleModalOpenClick(project.node)}
                  >
                    <div className="image-container">
                      <GatsbyImage
                        className="gatsby-img"
                        image={getImage(
                          project.node.frontmatter.screenshotArray[0].image
                            .childrenImageSharp[0].gatsbyImageData
                        )}
                        placeholder="blurred"
                        width={1908}
                        height={987}
                        alt={`Screenshot for ${project.node.frontmatter.name}`}
                      />
                    </div>
                    <Content>
                      <h4>{project.node.frontmatter.name}</h4>
                      <div>{project.node.frontmatter.shortDescription}</div>
                    </Content>
                    <TitleWrap>
                      <Stats theme={theme}>
                        {project.node.frontmatter.languagesArray.map(
                          (language, index) => (
                            <Languages
                              key={`${project.node.id}-languages-key${index}`}
                            >
                              <span key={`${project.node.id}-span-key${index}`}>
                                {language}
                              </span>
                            </Languages>
                          )
                        )}
                      </Stats>
                      <ArrowsFullscreen className="fullscreen-icon" />
                    </TitleWrap>
                  </Card>
                </Item>
              </div>
            ))}
          </Grid>
        </FoldableContainer>
      </ProjectWrapper>
    </Wrapper>
  );
};
