import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';
import Item from '../components/Item';

import { Trip } from '../interfaces';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Header = styled.h1`
  color: #2c9cdb;
  font-size: 3.5em;
  font-weight: 300;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 25px;
`;

const SearchBarWrapper = styled.div`
  width: 30%;
  margin-bottom: 35px;
`;

const ItemWrapper = styled.div``;

const HomePage: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  useEffect(() => {
    axios
      .get(
        'http://localhost:8081/api/trips/' +
          (keyword ? '?keyword=' + keyword : '')
      )
      .then((res) => {
        if (res.status === 200) {
          const { data } = res;
          setTrips(data);
        }
      });
  }, [keyword]);

  const onSearchChange = (newKeyword: string) => {
    setSearchParams({ keyword: newKeyword });
  };

  return (
    <Container>
      <HeaderWrapper>
        <StyledLink to="/">
          <Header>เที่ยวไหนดี</Header>
        </StyledLink>
      </HeaderWrapper>
      <SearchBarWrapper>
        <SearchBar keyword={keyword} onSearchChange={onSearchChange} />
      </SearchBarWrapper>
      <ItemWrapper>
        {trips.map((trip) => (
          <Item {...trip} key={trip.eid} />
        ))}
      </ItemWrapper>
    </Container>
  );
};

export default HomePage;
