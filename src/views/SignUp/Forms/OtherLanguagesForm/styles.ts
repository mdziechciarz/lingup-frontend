import styled from 'styled-components';

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  flex-wrap: wrap;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin-top: 8px;
    padding-top: 16px;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ef473a;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 3px;
      background-color: #efefef;
    }
  }
`;

export const ButtonsContainer = styled.div`
  padding: 0 40px;
  margin-top: 16px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
  }
`;

export const Language = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
  padding: 1px;
  align-items: center;
  margin-left: 12px;
  margin-right: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin-left: 80px;
    margin-right: 52px;
    margin-bottom: 12px;
  }
`;

export const LanguageDropdownsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  & > div:first-child {
    margin-bottom: 8px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8px;
  }
`;

export const DeleteLanguageButton = styled.button`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 8px;
  background-color: #c4c4c4;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  cursor: pointer;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    order: 1;
    margin-right: 0;
    margin-left: 8px;
    transition: 0.2s;
    opacity: 0;

    div:hover > & {
      opacity: 1;
    }
  }
`;

export const AddLanguageButton = styled.button`
  margin: 8px 40px 0;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  background-color: #f2f2f2;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:first-child {
    margin-top: 0;
  }

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    font-size: 20px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin: 8px 80px 0;
  }
`;
