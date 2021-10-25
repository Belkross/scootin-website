import React from "react";
import Container from "@mui/material/Container";
import Layout from "../components/Layout/Layout";
import Section1 from "../components/PageIndex/Section1";
import Part1 from "../components/PageIndex/Part1";
import Part2 from "../components/PageIndex/Part2";
import { graphql } from "gatsby";

const PageIndex = ({ data }) => {
  const { page_index: content } = data.contentYaml;
  return (
    <Layout>
      <Section1 content={content.section1} />
      <Container>
        <Part1 content={content.section2} />
        <Part2 content={content.section3} />
      </Container>
    </Layout>
  );
};

export default PageIndex;

export const query = graphql`
  query page_index {
    contentYaml {
      page_index {
        section1 {
          button
          description
          illustration_desktop {
            relativePath
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
          illustration_tablet {
            relativePath
          }
          illustration_mobile {
            relativePath
          }
          illustration_alt
          title
        }
        section2 {
          title
          step1 {
            title
            description
            illustration {
              relativePath
            }
            illustration_alt
          }
          step2 {
            title
            description
            illustration_alt
            illustration {
              relativePath
            }
          }
          step3 {
            title
            description
            illustration_alt
            illustration {
              relativePath
            }
          }
        }
        section3 {
          button
          section1 {
            title
            description
            illustration_alt
            illustration {
              relativePath
            }
          }
          section2 {
            title
            description
            illustration_alt
            illustration {
              relativePath
            }
          }
          section3 {
            title
            description
            illustration_alt
            illustration {
              relativePath
            }
          }
        }
      }
    }
  }
`;
