import styled from 'styled-components';

export const IconContainer = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-right: 8px;

  img {
    height: 16px;
  }
`;

export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    border: 'none',
    fontSize: '14px',
    color: '#000',
    height: 44,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    fontSize: 14,
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    display: 'flex',
    padding: '2px 16px',
  }),
};

export const customTheme = (provided: any) => ({
  ...provided,
  colors: {
    ...provided.colors,
    primary: '#EF473A',
    primary75: '#ee756c',
    primary50: '#e79892',
    primary25: '#ef463a34',
  },
});
