import {Icon} from '@iconify/react';
import React, {useState} from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 504px;
  min-height: 148px;
  margin-top: 24px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const BubbleContainer = styled.div`
  position: relative;
  padding: 16px;
  padding-right: 48px;
  border-radius: 24px;
  background-color: #4369f0;
  display: flex;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
`;

const TextWrapper = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Text = styled.p`
  font-size: 20px;
  color: #fff;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 22px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button<{isBubbleVisible?: boolean}>`
  /* z-index: 1; */
  position: relative;
  top: ${({isBubbleVisible}) => (isBubbleVisible ? '-20px' : 'unset')};
  width: 66px;
  height: 56px;
  /* margin-top: ${({isBubbleVisible}) => (isBubbleVisible ? '-20px' : '0')}; */
  border-radius: 28px;
  border: none;
  background-color: #5f7eeb;
  color: #fff;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #5574e4;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: 96px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #fff;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

const CallTopicAdviser = () => {
  const [topic, setTopic] = useState<string>(
    'What’s your craziest travelling story you’ve ever had?'
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

  return (
    <Container>
      {isVisible && (
        <BubbleContainer>
          <CloseButton onClick={handleClose}>
            <Icon icon="fluent:dismiss-12-regular" />
          </CloseButton>
          <IconWrapper>
            <Icon icon="fluent:lightbulb-filament-16-regular" />
          </IconWrapper>
          <TextWrapper>
            <Text>{topic}</Text>
          </TextWrapper>
        </BubbleContainer>
      )}
      <ButtonWrapper>
        <Button isBubbleVisible={isVisible} onClick={handleOpen}>
          <Icon icon="fluent:lightbulb-filament-16-regular" />
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default CallTopicAdviser;
