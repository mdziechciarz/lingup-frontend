import React from 'react';
import {UserLanguageLevels} from 'types';
import Select, {components} from 'react-select';
import {customStyles, customTheme, IconContainer} from './styles';
import BegginerIcon from 'assets/levelIndicators/Begginer.svg';
import IntermediateIcon from 'assets/levelIndicators/Intermediate.svg';
import AdvancedIcon from 'assets/levelIndicators/Advanced.svg';

const options = [
  {
    value: UserLanguageLevels.begginer,
    label: 'Begginer',
    icon: BegginerIcon,
  },
  {
    value: UserLanguageLevels.intermediate,
    label: 'Intermediate',
    icon: IntermediateIcon,
  },
  {
    value: UserLanguageLevels.advanced,
    label: 'Advanced',
    icon: AdvancedIcon,
  },
];

const getDefaultValue = (level: UserLanguageLevels) =>
  options.find(option => option.value === level);

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
      {props.hasValue && (
        <IconContainer>
          <img src={props.getValue()[0].icon} alt={props.getValue()[0].label} />
        </IconContainer>
      )}
      {children}
    </ValueContainer>
  );
};

interface IProps {
  defaultSelectedLevel?: UserLanguageLevels | null;
  onChange?: any;
}

const LevelDropdown = ({defaultSelectedLevel, onChange}: IProps) => {
  return (
    <Select
      options={options}
      components={{Option: CustomOption, ValueContainer: CustomValueContainer}}
      styles={customStyles}
      theme={customTheme}
      defaultValue={defaultSelectedLevel && getDefaultValue(defaultSelectedLevel)}
      onChange={onChange}
    />
  );
};

export default LevelDropdown;
