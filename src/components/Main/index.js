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
        svg.github{
            fill:#fff;
            position: absolute;
            right: 0;
            top: 0;
            margin: 25px 30px 0 0;
        }
        footer{
            position:absolute;
            bottom:0;
            ${customMedia.lessThan("mobile")`
                padding-bottom: 5px;
            `};
            p{
                width:100vw;
                display:flex;
                justify-content:center;
            }
    }
`;

export default Main;