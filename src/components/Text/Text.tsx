import { Button } from "@mui/material";
import { Container, Intro } from "./style";

function Text() {
  return (
    <Container>
      <div className="flex items-center justify-center flex-col   ">
        <Intro fontSize={90} fontWeight={900}>
          best welding & metal works
        </Intro>
        <Button
          style={{
            // borderRadius: 35,
            backgroundColor: "#ce9233",
            padding: "10px 30px",
            fontSize: "18px",
            width: "200px",
          }}
          variant="contained"
        >
          {" "}
          Get started
        </Button>
      </div>
    </Container>
  );
}

export default Text;
