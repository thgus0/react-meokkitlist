import { Layout } from '@/components/Layout/Layout'
import { KakaoMap } from '@/components/Map/KakaoMap'
import { TopBar } from '@/components/TopBar/TopBar'
import { RankingSection } from '@/components/Ranking/RankingSection'
import { ReviewSection } from '@/components/Review/ReviewSection'

export function Home() {
  return (
    <Layout>
      <TopBar />
      <KakaoMap />
      <RankingSection />
      <ReviewSection />
    </Layout>
  )
}
