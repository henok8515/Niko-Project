import { Button } from '@mui/material'
import { Container, Intro} from './style'

function Text() {

  return (
    <Container  >
        <div className='flex items-center justify-center flex-col   '>

        <Intro fontSize={90} fontWeight={900} >best welding & metal works</Intro>
        <Button   style={{
        // borderRadius: 35,
        backgroundColor: "#720e6a",
        padding: "15px 40px",
        fontSize: "18px",
        width: '300px',
    }}
    variant="contained"
    > Get started</Button>
        </div>

    </Container>
  )
}

export default Text