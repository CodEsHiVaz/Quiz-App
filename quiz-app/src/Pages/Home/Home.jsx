import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box p={4} h={"100vh"} backgroundColor={"#6B6FBC"}>
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        color={"white"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={6}
        py={10}
      >
        <Image
          maxWidth={"160px"}
          margin={"auto"}
          src="https://en.testometrika.com/upload/uf/066/066f89ecf51a3df5cbb83dcebebe5d7e.svg"
        ></Image>
        <Heading as="h3" size="lg">
          IQ Test for kids from 7 to 16 year old
        </Heading>
        {/* <Text color={"rgba(0, 0, 0, 0.4)"} fontSize={"xl"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        </Text> */}
        <Flex
          _hover={{
            bg: "none",
            padding: "20px",
            borderRadius: "5px",
            border: "2px solid white",
          }}
          margin={"auto"}
          width={"250px"}
          fontWeight={"bold"}
          cursor={"pointer"}
          borderRadius={"5px"}
          padding={"22px"}
          color={"white"}
          height={"48px"}
          bg={"rgba(0, 0, 0, 0.2)"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          onClick={() => navigate("/quiz/1")}
        >
          Start Test
        </Flex>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <Flex spacing={10}>
          <Text
            textAlign={"left"}
            color={"white"}
            fontSize="18px"
            fontWeight={"normal"}
          >
            Most IQ tests are not suitable for children, as they are originally
            developed for the adult population. However, if you want to know the
            IQ of a child between the ages of 7 and 16, there are several tests
            that can help you. There is an IQ test for children, developed by
            us, which, unlike similar ones, can also determine the IQ level of
            children at the age of 6 years.The child will be shown a series of
            three pictures arranged with some regularity. Children will need to
            choose pictures that are suitable for an empty cell. The first four
            questions should be answered together with the child so that he/she
            understands the essence of the task - these questions are not taken
            into account in the calculation of the child’s IQ. Let's get
            started!
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
