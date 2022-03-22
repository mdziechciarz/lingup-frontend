import React, {ReactNode} from 'react';
import {Card, Title, Description} from './styles';

interface IProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const FormTemplate = ({title, description, children}: IProps) => {
  return (
    <Card>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {children}
    </Card>
  );
};
export default FormTemplate;
