import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())

app.get('/', (req, res) => {
  res.send('백엔드 서버가 실행 중입니다.')
})

app.get('/hello', (req, res) => {
  res.send('안녕하세요! 👋 백엔드에서 보낸 메시지입니다.')
})

app.listen(PORT, () => {
  console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다`)
})
