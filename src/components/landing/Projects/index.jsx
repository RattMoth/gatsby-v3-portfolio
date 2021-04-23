// /* eslint-disable react/no-danger */
// import React, { useContext } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import { ThemeContext } from 'providers/ThemeProvider';
// import { Container, Card, TitleWrap } from 'components/common';
// import { StaticImage } from 'gatsby-plugin-image';
// import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

// export const Projects = () => {
//   const { theme } = useContext(ThemeContext);
//   const {
//     allMarkdownRemark: { edges },
//   } = useStaticQuery(graphql`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             id
//             frontmatter {
//               title
//               alt
//               tags
//               img
//             }
//             html
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <Wrapper as={Container} id="projects">
//       <h2>Projects</h2>
//       <Grid>
//         <StaticImage
//           width={410}
//           height={250}
//           src="../../../../static/screenshots/face-recognition-screenshot.png"
//           alt="test"
//         />
//         {/* {edges.map(({ node }) => (
//           <Item key={node.id} theme={theme}>
//             <Card theme={theme}>
//               <StaticImage
//                 placeholder="blurred"
//                 width={400}
//                 height={250}
//                 src="../../../../static/screenshots/face-recognition-screenshot.jpg"
//                 alt={node.frontmatter.alt}
//               />
//               <Content>
//                 <h4>{node.frontmatter.title}</h4>
//                 <div dangerouslySetInnerHTML={{ __html: node.html }} />
//               </Content>
//               <TitleWrap>
//                 <Stats theme={theme}>
//                   {node.frontmatter.tags.map((tag, i) => (
//                     <Languages>
//                       <span key={i}>{tag}</span>
//                     </Languages>
//                   ))}
//                 </Stats>
//               </TitleWrap>
//             </Card>
//           </Item>
//         ))} */}
//       </Grid>
//     </Wrapper>
//   );
// };

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
