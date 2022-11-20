import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  return (
    <Box backgroundColor="#6B6FBC">
      <Flex
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        color={"white"}
        justifyContent={"center"}
        alignItems={"center"}
        py={10}
        flexDirection={"column"}
      >
        <Box display={"flex"} flexDir="column" gap={5}>
          {" "}
          <Stack>
            <Text>Tests • ntellectual</Text>
          </Stack>
          <Stack>
            <Text fontSize="4xl">IQ Test for kids from 7 to 16 year old</Text>
          </Stack>
          <Flex
            _hover={{
              bg: "none",
              padding: "20px",
              borderRadius: "5px",
              border: "2px solid white",
            }}
            margin={"auto"}
            fontWeight={"bold"}
            cursor={"pointer"}
            borderRadius={"5px"}
            padding={"22px"}
            color={"white"}
            height={"48px"}
            gap={5}
            px={"20px"}
            bg={"rgba(0, 0, 0, 0.2)"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            onClick={() => navigate("/quiz/1")}
          >
            <i className="fa-solid fa-rotate-right"></i>
            Take the test again
          </Flex>
        </Box>
      </Flex>
      <Flex bg={"white"}>
        <Stack
          direction={["column", "column", "row"]}
          as={Container}
          maxW={"6xl"}
          bg={"white"}
          color={"#5D5C73"}
          py={10}
          gap={"25px"}
        >
          <Box
            minW={"75%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"25px"}
          >
            <Text textAlign={"left"} fontWeight={"500"} fontSize={"18px"}>
              Your result:
            </Text>
            <Text textAlign={"left"} fontWeight={"400"} fontSize={"18px"}>
              Test time: 00:04:13, average users 00:09:23.
            </Text>
            <Text textAlign={"left"} fontWeight={"400"} fontSize={"18px"}>
              Your IQ is 65. This corresponds to a below average level IQ. In
              this test you have 2 correct answers from 30. This is not a very
              good result for your age 11.
            </Text>
            <Text textAlign={"left"} fontWeight={"400"} fontSize={"18px"}>
              Please note that the first four questions of the test were only
              the practice questions and they do not count towards the final
              result.
            </Text>
          </Box>
          <Box
            minW={"25%"}
            display={"flex"}
            flexDirection={"column"}
            color={"red"}
          >
            <Text textAlign={"left"} fontWeight={"400"} fontSize={"18px"}>
              Please note that the first four questions of the test were only
              the practice questions and they do not count towards the final
              result.
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Result;
