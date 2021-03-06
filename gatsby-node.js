/**
 * gatsby internal api hook that will be triggered after each node is created
 * @param {Object} node is the internal gatsby node "object" that will be available in the data layer i.e graphQL layer
 * @param {Object} actions contains the set of options available.
 */
exports.onCreateNode = ({ node, actions }) => {
  // destructures the needed action
  const { createNodeField } = actions;
  //
  // checks the gatsby node type
  // in this case we are looking for the json content that exists and transformed by the gatsby-transformer-json plugin
  if (node.internal.type === 'ProjectsJson') {
    // extends the existing gatsby node with a new field, later accessible via the fields graphql node.
    createNodeField({
      node, // the current node
      name: `image`, // defines a name for the new element being added.
      value: node.screenshotArray.map(
        (image) => `./../src/images/${image.src}`
      ), // Injects the value, this will be relative to the path of the json, it will look into /src/images
    });
  }
};

/* Due to gatsby's 'SSR' approach, canvas wasn't working properly once built.
Fix was to npm i canvas and add this bit below, which ignores canvas during the build process.
*/

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
