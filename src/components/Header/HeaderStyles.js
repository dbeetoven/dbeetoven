import { Link } from 'gatsby';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 1fr;
  padding: 2rem 10%;
  gap: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
export const HeaderItem01 = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-backdrop-filter: blur(0px);
`;
export const HeaderItem02 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0%;
`;
export const StyledLogo = styled(Link)`
  margin-right: auto;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0;
  } */
`;
export const Title = styled.h1`
  font-weight: 800;
  /* font-size: ${(props) => (props.main ? '65px' : '56px')}; */
  font-size: clamp(40px, 5vw, 80px);
  line-height: ${(props) => (props.main ? '72px' : '56px')};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? '58px 0 16px' : '0')};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? '56px' : '48px')};
    line-height: ${(props) => (props.main ? '56px' : '48px')};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? '28px' : '32px')};
    line-height: ${(props) => (props.main ? '32px' : '40px')};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
    max-width: 100%;
  }
`;
export const SubTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 28px;
  line-height: 32px;
  font-weight: 600;
  line-height: 1.5;
  @media (max-width: 1080px) {
    font-size: var(--fz-sm);
  }
  @media (max-width: 768px) {
    font-size: var(--fz-xs);
  }
`;

export const HeaderContent = styled.div``;
export const HeaderDescription = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const WelcomeHeading = styled.h2`
  margin: 0 0 1.5rem 4px;
  color: var(--green);
  font-family: var(--font-mono);
  /* font-size: clamp(var(--fz-sm), 10vw, var(--fz-md)); */
  font-size: 2.5rem;
  font-weight: 600;

  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }
`;

export const ProfileImg = styled.div``;
