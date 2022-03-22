import React, {useState} from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import {Icon} from '@iconify/react';
import TabsHeader from './TabsHeader';
import TabFromForeignToLocal from './Tabs/TabFromForeignToLocal';
import TabFromLocalToForeign from './Tabs/TabFromLocalToForeign';
import {Container, CloseButton, TabsContent} from './styles';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

const TranslatorModal = ({isOpen, handleClose}: IProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const handleSelectTab = (tab: number) => setSelectedTab(tab);

  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      }}
      // onRequestClose={handleClose}
      className="_"
      contentElement={(props, children) => <Container {...props}>{children}</Container>}
    >
      <CloseButton onClick={handleClose}>
        <Icon icon="fluent:dismiss-12-regular" />
      </CloseButton>
      <TabsHeader selectedTab={selectedTab} handleSelectTab={handleSelectTab} />
      <TabsContent>
        {selectedTab === 0 && <TabFromForeignToLocal handleClose={handleClose} />}
        {selectedTab === 1 && <TabFromLocalToForeign handleClose={handleClose} />}
      </TabsContent>
    </ReactModal>
  );
};

export default TranslatorModal;
