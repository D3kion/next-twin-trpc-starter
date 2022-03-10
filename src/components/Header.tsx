import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>Header</TitleContainer>
    </HeaderContainer>
  );
}

export const HeaderContainer = styled.header`
  display: flex;
  background: #00022e;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #fc86aa;
`;

export const TitleContainer = styled.div`
  margin: auto;
`;
