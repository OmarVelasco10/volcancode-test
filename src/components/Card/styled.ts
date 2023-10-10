import styled from "styled-components";

interface DotProps {
  status: string;
}

export const CardContainer = styled.div`
  width: 540px;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  background-color:  ${(props) => props.theme.colors.tertiaryColor};
  max-height: 220px;
`;

export const ImageContainer = styled.div`
  max-width: 220px;
  max-height: 220px;
  img {
    height: 100%;
    border-radius: 10px;
  }
`;

export const ContentContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    font-size: 1.2rem;
  }
`;

export const Dot = styled.span<DotProps>`
  width: 10px;
  height: 10px;
  background-color: ${({ status }) => (status === "Alive" ? "green" : "red")};
  border-radius: 10px;
`;

export const Label = styled.p`
  color:  ${(props) => props.theme.colors.secondaryColor};
  font-size: 1.2rem;
`;

export const Name = styled.p`
  font-size: 2rem;
  margin-top: 10px;
  font-weight: bold;
`;

export const Information = styled.p`
    font-size: 1.2rem;
`;
