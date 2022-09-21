import styled from 'styled-components';

export default function Header({ children }) {
  const lastSpace = children.lastIndexOf(" ");
  const top = children.slice(0, lastSpace);
  const bottom = children.slice(lastSpace + 1);

  return (
    <StyledHeader>
      <Top>{top}</Top>
      <Bottom>{bottom}</Bottom>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: linear-gradient(
    rgb(170,180,75),
    rgb(170,180,75),
    rgb(110,120,60),
    rgb(110,120,60)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  font-size: 10em;
  line-height: 1;
  text-transform: uppercase;
`;

const Top = styled.div`
  font-size: .4em;
`;

const Bottom = styled.div`

`;