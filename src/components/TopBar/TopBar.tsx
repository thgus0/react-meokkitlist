import styled from '@emotion/styled'

export function TopBar() {
  return (
    <TopBarWrapper>
      <TopBarHeader>
        <Logo>먹킷리스트</Logo>
        <AuthButtons>
          <AuthButton>로그인</AuthButton>
          <AuthButton>회원가입</AuthButton>
        </AuthButtons>
      </TopBarHeader>

      <SearchArea>
        <LeftControls>
          <Button>📍 위치 동기화</Button>
          <RadiusSelect>
            <option value="500">500m</option>
            <option value="1000">1km</option>
          </RadiusSelect>
        </LeftControls>
        <SearchInput placeholder="검색어 입력..." />
        <Button>🔍 검색</Button>
      </SearchArea>
    </TopBarWrapper>
  )
}

const TopBarWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`

const TopBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`

const Logo = styled.h1`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`

const AuthButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

const AuthButton = styled.button`
  padding: 0.4rem 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #0077cc;
  background-color: white;
  color: #0077cc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0077cc;
    color: white;
  }
`

const SearchArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`

const LeftControls = styled.div`
  display: flex;
  gap: 0.5rem;
`

const RadiusSelect = styled.select`
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  cursor: pointer;
`

const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
`

const Button = styled.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  cursor: pointer;
`
