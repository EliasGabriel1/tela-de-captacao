import styled from "styled-components";

const Input = styled.input`
    font-size: inherit;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom:1px solid #fff;
    background:transparent;
    color: #fff;
    font-size:20px;
    margin: 30px 0;
    padding-bottom: 10px;

    &::placeholder {
        color: #fff;
    }

    &:focus-visible {
        outline-offset: none;
    };

    &:focus-visible {
        outline: none;
    };

    :valid {color:#fff;};
    :invalid { outline: solid red 2px; };
`;

export default Input;