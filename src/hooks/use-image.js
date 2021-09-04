import { graphql, useStaticQuery } from "gatsby";

export default function useImage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "header/profile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return data.file.childImageSharp.fluid;
}
