import React from 'react'
import styled from 'styled-components'

const CustomCheckbox = (props) => {
  return (
    <Label>
      <Checkbox />
      {props.children}
    </Label>
  )
}

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: 1rem;  
  &:hover{
    cursor: pointer;
  }
  &.checked div{
    position: relative;
  }
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 0.2rem;
  background-color: ${({theme}) => theme.searchChecboxColor};
  margin-right: 0.5rem;    
`;

export default CustomCheckbox
