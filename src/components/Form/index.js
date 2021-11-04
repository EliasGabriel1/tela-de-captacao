import styled from 'styled-components';
import { generateMedia } from "styled-media-query";


const customMedia = generateMedia({
    desktop: "78em",
    tablet: "60em",
    mobile: "46em"
  });

const Form = styled.form`
    background: #ffffff17;
    border-right: 1px solid #ffffff5c;
    height: 100vh;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    ${customMedia.lessThan("mobile")`
    max-width: 100%;
  `};
`;

export default Form;