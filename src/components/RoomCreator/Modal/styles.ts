import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 48px);
  max-width: 676px;
  padding: 28px;
  transform: translate(-50%, -50%);
  background-color: white;
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const Label = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  color: #000;
`;

export const NameInput = styled.textarea`
  width: 100%;
  height: 104px;
  margin-bottom: 16px;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-family: 'Noto Sans', sans-serif;
  color: #000;
  background-color: #f2f2f2;
  resize: none;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 1px #ef473a;
  }

  &::placeholder {
    color: #808080;
  }
`;

export const DropdownsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DropdownGroup = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: calc(50% - 12px);
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 30px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  background: linear-gradient(192.86deg, #ef473a 9.27%, #cb2d3e 90.77%), #c4c4c4;
  color: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: calc(50% - 12px);
  }
`;

export const CancelButton = styled.button`
  display: none;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: calc(50% - 12px);
    height: 48px;

    border-radius: 30px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    background-color: #2d3142;
    color: white;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      margin-left: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;
  border: none;
  font-size: 28px;
  background: none;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
