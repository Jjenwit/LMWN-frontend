import styled from 'styled-components';

const Input = styled.input`
  font-family: 'Kanit', sans-serif;
  font-size: 0.9em;
  font-weight: 400;
  text-align: center;
  width: 100%;
  padding: 5px;
  background-color: white;
  border: none;
  border-bottom: solid #b9b9b9 1px;
  outline: none;
  &:focus {
    border-bottom: solid #2c9cdb 1px;
  }
  &::placeholder {
    color: #b9b9b9;
  }
`;

const SearchBar: React.FC = () => {
  return <Input placeholder="หาที่เที่ยวแล้วไปกัน..." />;
};

export default SearchBar;
