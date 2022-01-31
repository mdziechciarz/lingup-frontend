import React from 'react';
import {Languages} from 'types';
import Select, {components, OptionProps} from 'react-select';
import ReactCountryFlag from 'react-country-flag';
import {customStyles, customTheme, IconContainer} from './styles';

interface IOption {
  value: string;
  label: string;
  flagCode: string;
}

const options: IOption[] = Object.values(Languages).map(lang => ({
  value: lang.name,
  label: lang.name,
  flagCode: lang.flagCode,
}));

const {Option, ValueContainer} = components;

const CustomOption = (props: OptionProps<IOption>) => (
  <Option {...props}>
    {props.data.flagCode && (
      <IconContainer>
        <ReactCountryFlag countryCode={props.data.flagCode} />
      </IconContainer>
    )}
    {props.data.label}
  </Option>
);

const CustomValueContainer = ({children, ...props}: any) => {
  return (
    <ValueContainer {...props}>
      {props.hasValue && (
        <IconContainer>
          <ReactCountryFlag countryCode={props.getValue()[0].flagCode} />
        </IconContainer>
      )}
      {children}
    </ValueContainer>
  );
};

const Dropdown = () => {
  return (
    <Select
      options={options}
      components={{Option: CustomOption, ValueContainer: CustomValueContainer}}
      styles={customStyles}
      theme={customTheme}
    />
  );
};

export default Dropdown;
