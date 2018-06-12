import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';

import { grey } from '../../../styles/colors';

const StudentCard = styled.div`
  position: relative;
  width: 45%;
  height: 10.7rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    &:nth-child(n+2):nth-child(odd) {
    border-top: 2px solid #f4f5f7;
    }
    &:nth-child(odd) {
      border-right: 2px solid #f4f5f7;
    }
    &:nth-child(n+3):nth-child(even) {
      border-top: 2px solid #f4f5f7;
    }
  }

  @media (max-width: 874px) {
    width: 80%;
    margin-bottom: 1rem;
    box-shadow: 0 3px 10px rgba(0,0,0,0.10), 0 3px 10px rgba(0,0,0,0.10);
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const StudentProfile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  margin-left: 1.5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StudentName = styled.span`
  font-size: 0.9rem;
  margin: 0.1rem;
`;

const StudentPosition = styled.span`
  color: ${grey};
  font-size: 0.9rem;
`;

const StudentCompany = styled.img`
  width: 7rem;
  margin: 0;
  justify-self: flex-end;
`;

const StudenComment = styled.p`
  color: ${grey};
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.86;
`;

export default () => (
  <StudentCard>
    <StudentProfile>
      <Avatar src="" />
      <StyledSpan>
        <StudentName>Jane Doe</StudentName>
        <StudentPosition>SW Engineer, SomeWhere</StudentPosition>
      </StyledSpan>
      <StudentCompany src="" />
    </StudentProfile>
    <StudenComment>
      “Hello World”
    </StudenComment>
  </StudentCard>
);
