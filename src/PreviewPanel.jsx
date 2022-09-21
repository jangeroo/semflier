import styled from "styled-components";

export default function PreviewPanel() {
  return (
    <div style={{ flex: 1 }}>
      <h2>Preview</h2>

      <Preview />
    </div>
  );
}

const PreviewWrapper = styled.div`
  /* --scale used a 200% zoom on the pdf to measure sizing. 8.5 in = 1632px */
  --scaleX: calc(100% / 3264);

  width: 100%;
  aspect-ratio: 8.5/11;
  /* padding: calc(48 * var(--scale)); */
  padding: 2.94117647%; /* 96@4x */

  background-color: white;
`;

function Preview() {
  return (
    <PreviewWrapper>
      <Header>The Seminar Program</Header>
      <main></main>
      <footer></footer>
    </PreviewWrapper>
  );
}

function Header({ children }) {
  const lastSpace = children.lastIndexOf(" ");
  const top = children.slice(0, lastSpace);
  const bottom = children.slice(lastSpace + 1);

  return (
    <div>
      <div>{top}</div>
      <div>{bottom}</div>
    </div>
  );
}
