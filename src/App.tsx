import React from 'react'
import Content from './components/content/Content'
import Header from './components/Header/Header'
import Text from './components/Text/Text'
import {Container, Wrapper} from './style'
function App() {
  return (
    <Container className=''>
      <Wrapper>
      <Header />
      <Text />
      </Wrapper>
    
      <Content />
    </Container>
  )
}

export default App