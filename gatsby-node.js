/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions, graphql }) => {
    const { createRedirect } = actions

    createRedirect({
        fromPath: `/publications`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/research`,
    })

    createRedirect({
        fromPath: `/publications/`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/research`,
    })
}
