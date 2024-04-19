import { Box, Button, Center, Flex, Image } from "@chakra-ui/react";
import React, { useRef, useState,useEffect } from "react";
import Webcam from "react-webcam";
import { useDispatch, useSelector } from 'react-redux'
import { startinterviewApi } from "../../Redux/Start interview/start_interview";
import QuestionSpeaker from "./QuestionSpeaker";
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const raw_data = {
  technologyStack: "React js",
  userId: localStorage.getItem("userId") || null 
};


const videoConstraints = {
  facingMode: "user",
};


function StartInterview() {

  const {question:{questions}} = useSelector((store)=>store?.startInterviewReducer);


  const dispatch = useDispatch();

  const handleStartInterview = async () =>{
     dispatch(startinterviewApi(raw_data));
  }

  let  commands = [
    {
      command: 'complete ai',
      callback: ()=>{
        handleUserResponse(finalTranscript)
      }
    },
    {
      command: 'next',
      callback: ()=>{
        askNextQuestion();
      }
    }
   ]
  
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState([]);
    const { speak } =  useSpeechSynthesis();
    const { finalTranscript, resetTranscript, listening } = useSpeechRecognition({commands});
    
  
    useEffect(() => {
      SpeechRecognition.startListening({ continuous: true });
      return () => {
        SpeechRecognition.stopListening();
      };
    }, []);
  
    const askNextQuestion = async () => {
      console.log("askque============>",responses);
       resetTranscript();
      if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
         await speak({
          text:question,
          rate:0.6,
          pitch:0.8
        });   
         if(questions.length === question.length-1){
          console.log("Answer Submitted");
         }   
      } else {
        console.log(responses);
        console.log("All questions have been asked.");
      }
    };
  
    const handleUserResponse = (response) => {
      console.log("inside handleUserResponse======>");
      console.log("response===>", response);
      setResponses([...responses,response]);
      console.log(responses);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    };
  
  
  
  
  
    useEffect(() => {
          if (questions && questions.length > 0) {
            askNextQuestion();
          }
     
    }, [currentQuestionIndex]); // Ask the first question when the component mounts

    useEffect(() => {
      if (questions && questions.length > 0) {
        askNextQuestion();
      }
    }, [questions]);

  
  return (
    <Box height="100vh" border="1px solid black">
      <Flex mt="100px" height="60vh">
        <Flex
          m="10px"
          justifyContent="center"
          borderRadius="20px"
          alignItems="center"
          width="50%"
          border="1px solid black"
        >
          <Image
            height="100px"
            width="100px"
            borderRadius="50%"
            src="https://avatars.githubusercontent.com/u/110078755?v=4"
          />
        </Flex>
        <Box m="10px" borderRadius="20px" border="1px solid black" width="50%">
           <Webcam
            mirrored="true"
            audio={false}
            style={{
              height: "100%",
              width: "100%",
              background: "black",
              borderRadius: "20px",
            }}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          ></Webcam>
        </Box>
      </Flex> 
      <Center mt="40px">
        <Button onClick={handleStartInterview} colorScheme="blue">Start Interview</Button>
      </Center> 
       {
        console.log(questions)
       }
      <QuestionSpeaker  responses={responses} />
    </Box>
  );
}

export default StartInterview;
