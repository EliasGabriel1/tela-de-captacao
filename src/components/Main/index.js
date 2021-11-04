import styled from 'styled-components'
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

const Main = styled.main`
width: 100vw;
height: 100vh;
display:flex;
align-items:start;
flex-direction:column;
background-repeat: no-repeat;
background-size: 100vw 100vh;
justify-content:center;
line-height: 50px;
text-align: center;
    ${customMedia.lessThan("mobile")`
        justify-content:unset;
        line-height: inherit;
        background-size: cover;
        background-position-x: center;
    `};
`;

export default Main;