import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import styled from 'styled-components';
import CustomButton from './CustomButton';
import CustomCheckbox from './CustomCheckbox';
import CustomIconInput from './CustomIconInput';


const SearchArea = () => {
  return (
    <Search>              
      <SearchCol>
        <CustomIconInput 
          icon={faSearch}
          iconColor="#5965e0"
          iconSize="lg"
          placeHolder="Filter by title, companies, expertise..."              
        />
      </SearchCol>
      <SearchCol>
        <CustomIconInput 
          icon={faMapMarkerAlt}
          iconColor="#5965e0"
          iconSize="lg"
          placeHolder="Filter by location..."              
        />
      </SearchCol>
      <SearchCol>
        <CustomCheckbox>Full Time Only</CustomCheckbox>
        <CustomButton 
          primary
          text="Search"
        />
      </SearchCol>
    </Search>
  )
}

const Search = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 0.4rem;
  background-color: ${({theme}) => theme.boxColor};
  display: flex;
  align-items: center;  
`;

const SearchCol = styled.div`  
  height: 100%;
  border-right: 1px solid ${({theme}) => theme.searchBorderColor};
  flex: 1;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &:last-child{
    border-right: 0;
  }
`

export default SearchArea
