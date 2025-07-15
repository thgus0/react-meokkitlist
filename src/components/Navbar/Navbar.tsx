import styled from '@emotion/styled'
import { FiChevronLeft, FiUser } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const goLogin = () => {
    navigate('/login')
  }

  return (
    <NavWrapper>
      <LeftIcon onClick={goBack}>
        <FiChevronLeft size={24} />
      </LeftIcon>
      <Title>먹킷리스트</Title>
      <RightIcon onClick={goLogin}>
        <FiUser size={24} />
      </RightIcon>
    </NavWrapper>
  )
}

const NavWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background-color: white;
  position: relative;
`

const LeftIcon = styled.div`
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
`

const RightIcon = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Title = styled.h1`
  margin: 0 auto;
  font-size: 18px;
  font-weight: 700;
`
