/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
import "../css/global.css";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Navigation from '/src/components/Navigation/Navigation';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navigation siteTitle={data.site.siteMetadata.title}/>
      <Container maxWidth="lg">
        <Box component="main">
          { children }
        </Box>
      </Container>
    </>
  )
}

export default Layout
