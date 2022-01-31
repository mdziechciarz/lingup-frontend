import React from 'react';
import {Levels} from 'types';
import Select, {components, OptionProps} from 'react-select';
import {customStyles, customTheme, IconContainer} from './styles';
import BegginerIcon from 'assets/levelIndicators/Begginer.svg';
import IntermediateIcon from 'assets/levelIndicators/Intermediate.svg';
import AdvancedIcon from 'assets/levelIndicators/Advanced.svg';
import AnyIcon from 'assets/levelIndicators/Any.svg';

const options = [
  {
    value: Levels.begginer,
    label: 'Begginer',
    icon: BegginerIcon,
  },
  {
    value: Levels.intermediate,
    label: 'Intermediate',
    icon: IntermediateIcon,
  },
  {
    value: Levels.advanced,
    label: 'Advanced',
    icon: AdvancedIcon,
  },
  {
    value: Levels.any,
    label: 'Any',
    icon: AnyIcon,
  },
];

const {Option, ValueContainer} = components;

const CustomOption = (props: any) => (
  <Option {...props}>
    {
      <IconContainer>
        <img src={props.data.icon} alt={props.data.label} />
      </IconContainer>
    }
    {props.data.label}
  </Option>
);

const CustomValueContainer = ({children, ...props}: any) => {
  return (
    <ValueContainer {...props}>
      {/* {props.hasValue && <IconContainer>{props.getValue().icon}</IconContainer>} */}
      {props.hasValue && (
        <IconContainer>
          <img src={props.getValue()[0].icon} alt={props.getValue()[0].label} />
        </IconContainer>
      )}
      {children}
    </ValueContainer>
  );
};

const LevelDropdown = () => {
  return (
    <Select
      options={options}
      components={{Option: CustomOption, ValueContainer: CustomValueContainer}}
      styles={customStyles}
      theme={customTheme}
    />
  );
};

export default LevelDropdown;
