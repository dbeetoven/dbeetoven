{
  /* <Div3>
      <SocialIcons
        href="https://github.com/dbeetoven"
        target="_blank"
        aria-label="Github"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://linkedin.com/in/dbeetoven/"
        target="_blank"
        aria-label="Linkedin"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://twitter.com/dbeetoven"
        target="_blank"
        aria-label="Twitter"
        rel="noopener noreferrer"
      >
        <AiFillTwitterCircle accentHeight="20" size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://dev.to/dbeetoven"
        target="_blank"
        aria-label="Dev.TO"
        rel="noopener noreferrer"
      >
        <FaDev accentHeight="20" size="3rem" />
      </SocialIcons>
    </Div3> */
}

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;
