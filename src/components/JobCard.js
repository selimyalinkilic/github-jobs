import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const JobCard = () => {
  return (
    <Card to="/">

      <CardRow>
        <span className="job-time">5h ago</span>
        <span className="job-type">Full Time</span>
      </CardRow>
      <CardRow>
        <h3 className="job-title">Senior Software Engineer</h3>
      </CardRow>
      <CardRow>
        <span className="job-company">So Digital Inc</span>
      </CardRow>
      <CardRow>
        <span className="job-location">Remote</span>
      </CardRow>
    </Card>
  )
}

const Card = styled(Link)`
  width: calc(33.3333333% - 1rem);
  position: relative;
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${({theme}) => theme.boxColor};
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  text-decoration: none;
  transition: all ease 0.3s;
  &:hover{
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  }
  .job-time,
  .job-type,
  .job-company{
    color: #929ca6;
    font-weight: 500;
    font-size: 0.75rem;
  }
  .job-title{
    color: ${({theme}) => theme.color};
    font-weight: 700;
    font-size: 1.125rem;    
  }
  .job-location{  
    color: #5965e0;
    font-weight: 600;
    font-size: 0.75rem;
    min-height: 2.5rem;
    max-height: 2.5rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;  
  }
`;

const CardRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.625rem;
  &:last-child{
    margin-bottom: 0;
  }  
`;

export default JobCard
