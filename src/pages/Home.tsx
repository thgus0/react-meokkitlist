import { Navbar } from '@/components/Navbar/Navbar'
import { Layout } from '@/components/Layout/Layout'
import { KakaoMap } from '@/components/Map/KakaoMap'
import { useEffect, useState } from 'react'

export function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/hello')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('❌ 백엔드 연결 실패:', err))
  }, [])

  return (
    <Layout>
      <Navbar />
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>🍽️ 먹킷리스트 웹앱</h1>
        <h2>백엔드에서 온 메시지 👇</h2>
        <p>{message}</p>
        <KakaoMap />
      </div>
    </Layout>
  )
}
