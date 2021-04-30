/* eslint-disable react/no-danger */
import React, { useContext } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
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

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
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
  const edges = [1, 1, 1, 1, 1, 1];

  return (
    <Wrapper id="projects">
      <ProjectWrapper as={Container}>
        <FoldableContainer headerText="Projects">
          <Grid>
            {/* <StaticImage
          width={410}
          height={250}
          src="../../../../static/screenshots/face-recognition-screenshot.png"
          alt="test"
        /> */}
            {edges.map((item, index) => (
              <Item key={Math.random()} theme={theme}>
                <Card theme={theme}>
                  <StaticImage
                    placeholder="blurred"
                    width={600}
                    height={450}
                    src="https://placekitten.com/600/450"
                    alt="kittiey"
                  />
                  <Content>
                    <h4>kat</h4>
                    {/* <div dangerouslySetInnerHTML={{ __html: node.html }} /> */}
                    <div>this is a katty</div>
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
