import React from 'react'
import styled from 'styled-components';
import JobCard from '../components/JobCard';
import SearchArea from '../components/SearchArea';
import CustomButton from '../components/CustomButton';
import { Container, Layout } from '../theme/style';

const Jobs = () => {
  return (
    <Layout>
      <Container>
        <SearchArea />
        <JobList>
          <JobCard />
          <JobCard />
          <JobCard />
        </JobList>
        <Button 
          primary 
          text="Load More"
          />
      </Container>
    </Layout>
  )
}

const JobList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 0 2rem 0;
`;

const Button = styled(CustomButton)`
  margin: 0 auto;
  display: table;
`
export default Jobs
