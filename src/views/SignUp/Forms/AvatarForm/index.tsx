import React, {useState, useContext} from 'react';
import {SignUpContext} from 'views/SignUp/SignUpContext';
import styled from 'styled-components';
import Button from 'components/Button';

import ReactAvatar from 'react-avatar-edit';

const Card = styled.div`
  margin: 24px auto 0;
  padding: 48px 0;
  width: 100%;
  max-width: 600px;
  min-height: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  padding: 0 40px;
  line-height: 1.2;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
    font-size: 28px;
  }
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px 40px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 48px 80px;
  }
`;

const ButtonsContainer = styled.div`
  padding: 0 40px;
  margin-top: 16px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-column-gap: 8px;

    & > button:first-child {
      order: 1;
    }
  }
`;

const TabsHeader = styled.div`
  margin-top: 24px;
  padding: 0 40px;
  width: 100%;
  display: flex;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
  }
`;

const TabLabel = styled.div<{isActive?: boolean}>`
  width: 50%;
  padding-bottom: 8px;
  /* padding: 0 10% 8px; */
  border-bottom: ${({isActive}) => (isActive ? '3px solid #DD3A3C' : '1px solid #949494')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabLabelText = styled.span<{isActive?: boolean}>`
  display: block;
  font-size: 12px;
  color: ${({isActive}) => (isActive ? '#DD3A3C' : '#949494')};
  font-weight: ${({isActive}) => (isActive ? 700 : 400)};
  text-transform: uppercase;
  line-height: 16px;
  white-space: pre-line;
`;

const AvatarPreview = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

const AvatarForm = () => {
  const {state, dispatch} = useContext(SignUpContext);

  // const [activeTab, setActiveTab] = useState<number>(0);

  const [isEditing, setIsEditing] = useState(!state.userInput.picture);
  const [photoSrc, setPhotoSrc] = useState(state.userInput.picture);

  const onCrop = (preview: any) => {
    setPhotoSrc(preview);
  };
  const onRemovePicture = () => {
    setPhotoSrc(null);
    console.log('REMOVING');
  };
  const handleEditPicture = () => {
    console.log('EDITING');
    setPhotoSrc(null);
    setIsEditing(true);
  };
  const handleSavePicture = () => {
    if (photoSrc) {
      console.log('SAVING');
      setIsEditing(false);
    } else window.alert('err');
  };

  const handleContinue = () => {
    if (photoSrc) dispatch({type: 'SET_PICTURE', payload: photoSrc});
  };
  const handleSkip = () => {
    dispatch({type: 'SKIP_BIO'});
  };

  return (
    <Card>
      {/* <Title>Choose your picture or create an avatar</Title> */}
      <Title>Choose your avatar!</Title>
      {/* <TabsHeader>
        <TabLabel isActive={activeTab === 0} onClick={() => setActiveTab(0)}>
          <TabLabelText isActive={activeTab === 0}>Photo</TabLabelText>
        </TabLabel>
        <TabLabel isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
          <TabLabelText isActive={activeTab === 1}>Avatar</TabLabelText>
        </TabLabel>
      </TabsHeader> */}
      {/* <TabsContent>
          {selectedTab === 0 && <TabFromForeignToLocal handleClose={handleClose} />}
          {selectedTab === 1 && <TabFromLocalToForeign handleClose={handleClose} />}
        </TabsContent> */}
      <ContentContainer>
        {isEditing && (
          <ReactAvatar width={170} height={170} onCrop={onCrop} onClose={onRemovePicture} />
        )}
        {!isEditing && !!photoSrc && <AvatarPreview onClick={handleEditPicture} src={photoSrc} />}
      </ContentContainer>
      <ButtonsContainer>
        {isEditing && (
          <Button disabled={!photoSrc} onClick={handleSavePicture} secondary={!!photoSrc}>
            {photoSrc ? 'Save' : 'Continue'}
          </Button>
        )}
        {!isEditing && (
          <Button disabled={!photoSrc} onClick={handleContinue}>
            Continue
          </Button>
        )}
        <Button ghost onClick={handleSkip}>
          Skip
        </Button>
      </ButtonsContainer>
    </Card>
  );
};

export default AvatarForm;
