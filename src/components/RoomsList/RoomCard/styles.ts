import styled from 'styled-components';

// export const OuterContainer = styled.div`
//   width: 100%;
//   padding-top: calc(100% / 1.65);
//   position: relative;
// `;

// export const Container = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   padding: 16px 24px;
//   border-radius: 24px;
//   background-color: #f2e7e7;

//   display: flex;
//   flex-direction: column;
// `;
// export const Name = styled.h3`
//   width: 100%;
//   margin-bottom: 16px;
//   flex-grow: 1;
//   font-size: 24px;
//   line-height: 32px;
//   overflow: hidden;
//   font-weight: 400;
// `;

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 16px 24px;
  border-radius: 24px;
  background-color: #f2e7e7;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  width: 100%;
  margin-bottom: 16px;
  flex-grow: 1;
  font-size: 24px;
  line-height: 32px;
  max-height: 96px;
  overflow: hidden;
  font-weight: 400;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LanguageAndLevelContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const DetailsText = styled.p`
  margin-left: 8px;
  font-size: 16px;

  &:nth-of-type(2) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const Flag = styled.div`
  width: 24px;
  height: 18px;
  background-color: red;
`;
export const LevelIndicator = styled.div`
  width: 24px;
  height: 18px;
  margin-left: 16px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 22%,
    rgba(255, 255, 255, 0) 22%,
    rgba(255, 255, 255, 0) 36%,
    rgba(0, 0, 0, 1) 36%,
    rgba(0, 0, 0, 1) 61%,
    rgba(255, 255, 255, 0) 61%,
    rgba(255, 255, 255, 0) 73%,
    rgba(161, 161, 161, 1) 73%,
    rgba(145, 145, 145, 1) 100%
  );
`;

export const PeopleCountContainer = styled.div`
  /* min-width: 60px; */
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & svg {
    font-size: 24px;
  }
`;
export const PeopleCountNumber = styled.p`
  margin-left: 4px;
  font-weight: 700;
`;
