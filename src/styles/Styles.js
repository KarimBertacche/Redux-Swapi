import styled from 'styled-components';

export const StylesFetching = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #333, #fff);

  .logo {
    width: 500px;
  }

  .spinner {
    width: 400px;
    margin-top: -150px;
  }

  p {
    font-size: 3rem;
    margin-top: -80px;
  }
`;

export const StylesError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #f0f, #fff);
  font-size: 5rem;
  font-weight: bold;

  h2 {
    font-size: 3rem;
  }

  p {
    margin-top: -50px;

    &:first-child {
      font-size: 10rem;
      color: red;
      margin-bottom: -70px;
    }
  }
`; 