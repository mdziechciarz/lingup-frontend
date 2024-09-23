import styled from 'styled-components';
import {LevelIndicator} from 'components/RoomsList/RoomCard/styles';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  background-color: #2d3142;

  display: flex;

  &:hover {
    background-color: #252836;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: 416px;
    height: 56px;
  }
`;

export const IndicatorContainer = styled.div`
  position: relative;
  width: 50%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child::after {
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 100%;
    width: 1px;
    display: flex;
    content: '';
    background-color: #454959;
  }
`;

export const Text = styled.p`
  margin-left: 12px;
  font-size: 16px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledLevelIndicator = styled(LevelIndicator)`
  margin: 0;
`;

export const FlagContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
