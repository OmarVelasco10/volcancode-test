import styled from "styled-components";

export const Header = styled.header`
    display: grid;
    place-items: center;
    width: 100vw;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px;
    background: ${(props) => props.theme.colors.backgroundPrimary};
    margin-bottom: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    border: none;
    width: 80vw;
    background-color: ${(props) => props.theme.colors.backgroundInput};
`;
