import { Container } from '@/shared/ui/Container';
import { useEffect, useState } from 'react';
import { SearchLocation } from '@/features/search-location';
import { S } from './styled';
import { Overlay } from '@/shared/ui/overlay/Overlay';

export const Header: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);

  function handleSearchFocus() {
    setIsSearching(true);
  }
  function handleSearchBlur() {
    setIsSearching(false);
  }

  return (
    <>
      <S.Header $dropShadow={isSearching}>
        <Container>
          <S.SearchWrapper>
            <SearchLocation
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </S.SearchWrapper>
        </Container>
      </S.Header>
      <Overlay isOpen={isSearching} duration={0.3}>
        <Container>List</Container>
      </Overlay>
    </>
  );
};
