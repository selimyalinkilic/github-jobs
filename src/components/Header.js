import React from 'react'
import styled from 'styled-components';
import { Container } from '../theme/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import ReactSwitch from 'react-switch';



const Header = ({themeHandler, themeCheck}) => {  
  return (
    <Head>
      <Container>
        <HeadRow>
          <Title>devjobs</Title>
          <ToggleWrapper>
            <FontAwesomeIcon icon={faSun} color="#fff" />            
            <ReactSwitch
              checked={themeCheck}
              onChange={themeHandler}
              onColor="#fff"
              offColor="#fff"
              onHandleColor="#5965e0"
              offHandleColor="#5965e0"
              handleDiameter={12}
              uncheckedIcon={false}
              checkedIcon={false}                            
              height={20}
              width={42}
              className="react-switch"
              id="material-switch"
            />
            <FontAwesomeIcon icon={faMoon} color="#fff" />
          </ToggleWrapper>
        </HeadRow>
      </Container>
    </Head>
  )
}

const Head = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;  
  background-color: #5965e0;  
  padding: 1.25rem 0;
  border-bottom-left-radius: 4rem;  
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 2rem;
  color: #fff;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  svg[data-icon="sun"]{
    margin-right: 0.5rem;
  }
  svg[data-icon="moon"]{
    margin-left: 0.5rem;
  }
`;

export default Header
