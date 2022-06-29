import { Button } from "@mui/material";
import { Container } from "./style";

function Text() {
  return (
    <Container>
      <div className=" flex items-center justify-center flex-col   ">
        <h1 className="text-8xl font-bold sm:text-white text-white font-mono text-center sm:text-6xl ">
          best welding & metal works
        </h1>
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
