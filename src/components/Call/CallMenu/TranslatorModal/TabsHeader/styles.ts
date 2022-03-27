import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const TabLabel = styled.div<{isActive?: boolean}>`
  width: 50%;
  padding-bottom: 8px;
  /* padding: 0 10% 8px; */
  border-bottom: ${({isActive}) => (isActive ? '3px solid #DD3A3C' : '1px solid #949494')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.span<{isActive?: boolean}>`
  margin-right: 8px;
  font-size: 28px;
  color: ${({isActive}) => (isActive ? '#DD3A3C' : '#949494')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span<{isActive?: boolean}>`
  display: block;
  font-size: 12px;
  color: ${({isActive}) => (isActive ? '#DD3A3C' : '#949494')};
  font-weight: ${({isActive}) => (isActive ? 700 : 400)};
  text-transform: uppercase;
  line-height: 16px;
  white-space: pre-line;
`;
