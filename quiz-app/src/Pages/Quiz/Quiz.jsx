import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const [questionID, setQuestionID] = useState(1);
  const [question, setQuestion] = useState({});

  useEffect(() => {
    getQuestion(questionID);
  }, [questionID]);
  const getQuestion = async (id) => {
    if (id <= 5) {
      axios
        .get(`http://localhost:8080/questions/${id}`)
        .then((res) => setQuestion(res.data))
        .catch((err) => console.log(err));
    } else {
      navigate("/result");
    }
  };

  const optionClick = () => {};

  return (
    <Box p={4} h="100vh" backgroundColor={"#6B6FBC"}>
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        color={"white"}
        justifyContent={"center"}
        alignItems={"center"}
        py={10}
      >
        <Box position={"absolute"} top={"0"} left={"0"}>
          <Heading as="h2" size="xl">
            <Text display={"inline"} color={"rgba(0, 0, 0, 0.3)"}>
              {questionID}
            </Text>
            /5
          </Heading>
        </Box>
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
          gap={"20px"}
        >
          <Box>
            <Image
              margin={"auto"}
              maxWidth={"400px"}
              src={question.questionImage}
              alt=""
            />
          </Box>
          <Text lineHeight={"1.3"} fontSize={" 2em"} fontWeight={"500"} mt={5}>
            {question.question}
          </Text>
          <Flex
            gap="10px"
            m={"auto"}
            mt={5}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
          >
            <Image maxWidth={"80px"} src={question.option1Img} alt="" />
            <Image maxWidth={"80px"} src={question.option1Img} alt="" />
            <Image maxWidth={"80px"} src={question.option1Img} alt="" />
            <Image maxWidth={"80px"} src={question.option1Img} alt="" />
          </Flex>
        </Box>
      </Stack>
      <button onClick={() => setQuestionID(questionID + 1)}>+</button>
    </Box>
  );
};

export default Quiz;
