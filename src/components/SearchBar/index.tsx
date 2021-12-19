import React, { useEffect, useState } from 'react';
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

interface Props {
  keyword: string | null;
  onSearchChange: (newKeyword: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const { keyword, onSearchChange } = props;
  const [q, setQ] = useState<string>(keyword || '');
  useEffect(() => {
    setQ(keyword || '');
  }, [keyword]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <Input
      placeholder="หาที่เที่ยวแล้วไปกัน..."
      value={q}
      onChange={onChange}
    />
  );
};

export default SearchBar;
