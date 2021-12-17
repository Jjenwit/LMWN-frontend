import styled from 'styled-components';

const Input = styled.input`
  font-family: 'Prompt', sans-serif;
  font-size: 0.9em;
  font-weight: 400;
  text-align: center;
  width: 100%;
  padding: 5px;
  background-color: white;
  border: none;
  border-bottom: solid var(--grey) 1px;
  outline: none;
  &:focus {
    border-bottom: solid var(--blue) 1px;
  }
  &::placeholder {
    color: var(--grey);
  }
`;

const SearchBar: React.FC = () => {
  return <Input placeholder="หาที่เที่ยวแล้วไปกัน..." />;
};

export default SearchBar;
