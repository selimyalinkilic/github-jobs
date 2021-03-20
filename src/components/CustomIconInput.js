import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';

const CustomIconInput = (props) => {
  return (
    <IconInputGroup>
      <FontAwesomeIcon icon={props.icon} color={props.iconColor} size={props.iconSize} />
      <Input placeholder={props.placeHolder} />
    </IconInputGroup>
  )
};

const IconInputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  margin-left: 0.5rem;
  padding: 0 0.5rem;
  font-weight: 400;
  font-size: 1rem;
  color: #9e9ea0;
  width: 100%;
  background-color: transparent;
  &::placeholder{
    color: #9e9ea0;
  }
  &:focus{
    outline: 0;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export default CustomIconInput
