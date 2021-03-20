import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';

const CustomButton = (props) => {
  return (
    <Button {...props}>
      {
        props.spinner ? <FontAwesomeIcon icon={faSpinner} size="lg" spin /> : props.text
      }

    </Button>
  )
};

const Button = styled.button`
  font-weight: 400;
  font-size: 1rem;
  padding: 0 1.5rem;
  min-width: 100px;  
  border: none;
  border-radius: 0.2rem;  
  height: 40px;  
  background-color: ${props => props.primary ? "#5965e0": props.secondary ? "#eeeffb" : "#19212d"};
  color: ${props => props.primary ? "#fff": props.secondary ? "#5965e0" : "#fff"};
  &:hover{
    cursor: pointer;
  }
`;


export default CustomButton
