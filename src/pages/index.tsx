import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';
import Item from '../components/Item';

import { Trip } from '../interfaces';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  color: #2c9cdb;
  font-size: 3.5em;
  font-weight: 300;
  text-align: center;
`;

const SearchBarWrapper = styled.div`
  width: 30%;
`;

const HomePage: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/trips').then((res) => {
      if (res.status === 200) {
        const { data } = res;
        setTrips(data);
      }
    });
  }, []);

  return (
    <Container>
      <Header>เที่ยวไหนดี</Header>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      {trips.map((trip) => (
        <Item {...trip} key={trip.eid} />
      ))}
    </Container>
  );
};

export default HomePage;
