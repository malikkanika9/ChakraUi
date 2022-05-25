import { Center, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import "./styles.css";

function App() {
  return (
    <>
      <Flex
        direction={{
          base: "column",
          sm: "row"
        }}
        color="white"
      >
        <Center flex="1" bg="darkcyan">
          <Text>Nav</Text>
        </Center>
        <Center flex="2" bg="darkorange" h="150px">
          <Text>CONTENT</Text>
        </Center>
        <Center flex="1" bg="crimson">
          <Text>WIDGET</Text>
        </Center>
      </Flex>
      <br></br>
      <Grid
        h="300px"
        w="100%"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={[2, 4]} colSpan={[3, 2]} bg="mediumorchid" />
        <GridItem rowSpan={[2, 6]} colSpan={[3, 1]} bg="tomato" />
        <GridItem rowSpan={[2, 2]} colSpan={[3, 2]} bg="lightskyblue" />
      </Grid>
    </>
  );
}

export default App;
