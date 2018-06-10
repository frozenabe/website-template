import styled from 'styled-components';

// img to div
const LogoImg = styled.div`
  display: ${({ sticky, isFirst }) => (!isFirst || sticky ? 'block' : 'none')};
  height: 2.4rem;
  color: black;
  margin-left: 1rem;
  cursor: pointer;
`;

const handleToTop = () => {
  document.body.scrollIntoView({ block: 'start', behavior: 'smooth' });
};

export default ({ sticky, isFirst }) => (
  <div>
    {isFirst ? (
      <LogoImg
        onClick={handleToTop}
        sticky={sticky}
        isFirst={isFirst}
      >
        LOGO
      </LogoImg>
    ) : (
      <a href="/">
        <LogoImg>LOGO</LogoImg>
      </a>
    )}
  </div>
);
