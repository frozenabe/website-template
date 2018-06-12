import styled from 'styled-components';

// div -> img
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
        src=""
        onClick={handleToTop}
        sticky={sticky}
        isFirst={isFirst}
      >
        LOGO
      </LogoImg>
    ) : (
      <a href="/">
        <LogoImg src="">
          LOGO
        </LogoImg>
      </a>
    )}
  </div>
);
