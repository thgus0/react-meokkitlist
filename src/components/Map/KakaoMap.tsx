import styled from '@emotion/styled'

export function KakaoMap() {
  return (
    <Wrapper>
      <MapArea id="map" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`

const MapArea = styled.div`
  width: 100%;
  height: 300px;
  background-color: #d0d0d0;
  border-radius: 10px;
`
