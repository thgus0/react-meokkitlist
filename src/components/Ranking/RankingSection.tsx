import styled from '@emotion/styled'

export function RankingSection() {
  return (
    <Section>
      <h2>🍽️ 식당 랭킹</h2>
      <RankingList>
        <RankItem onClick={() => goToDetail(1)}>
          ① 🍜 고깃집 <button className="thumb">image</button>
        </RankItem>
        <RankItem onClick={() => goToDetail(2)}>
          ② ☕ 카페 <button className="thumb">image</button>
        </RankItem>
        <RankItem>③ 기타...</RankItem>
      </RankingList>
    </Section>
  )
}

function goToDetail(id: number) {
  window.location.href = `/restaurant/${id}`
}

const Section = styled.section`
  background: #fff;
  padding: 1rem;
  margin-top: 1rem;
`

const RankingList = styled.ul`
  list-style: none;
  padding: 0;
`

const RankItem = styled.li`
  background: #f3f3f3;
  margin-bottom: 0.5rem;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
