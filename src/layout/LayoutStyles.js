import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 100%;
margin: auto;
`;


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

 export const StyledRootContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
`;
export const StyledMain = styled.main`
  counter-reset: section;
  margin: 0 auto;
  width: 100%;
  /* max-width: 1600px; */
  min-height: 100vh;
  /* padding: 200px 100px; */
`;
