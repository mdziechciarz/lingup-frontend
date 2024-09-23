import React from 'react';
import {Icon} from '@iconify/react';
import {Container, TabLabel, IconContainer, Text} from './styles';

interface IProps {
  selectedTab: number;
  handleSelectTab: (tab: number) => void;
}

const TabsHeader = ({selectedTab, handleSelectTab}: IProps) => {
  return (
    <Container>
      <TabLabel onClick={() => handleSelectTab(0)} isActive={selectedTab === 0}>
        <IconContainer isActive={selectedTab === 0}>
          <Icon icon="fluent:translate-24-filled" />
        </IconContainer>
        <Text isActive={selectedTab === 0}>{'What does\nit mean?'}</Text>
      </TabLabel>
      <TabLabel onClick={() => handleSelectTab(1)} isActive={selectedTab === 1}>
        <IconContainer isActive={selectedTab === 1}>
          <Icon icon="fluent:comment-arrow-right-16-regular" />
        </IconContainer>
        <Text isActive={selectedTab === 1}>{'How to\nsay it?'}</Text>
      </TabLabel>
    </Container>
  );
};

export default TabsHeader;
