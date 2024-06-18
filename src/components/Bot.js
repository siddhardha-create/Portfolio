import React from "react";
import ChatBot from "react-simple-chatbot";
//import { Segment } from "semantic-ui-react";

function bot() {
  const steps = [
    {
      id: "Greet",
      message: "hello, welcome to my website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, How can I help you?",
      trigger: "HelpOptions",
    },
    {
      id: "HelpOptions",
      options: [
        { value: "projects", label: "Projects", trigger: "Projects" },
        {
          value: "about myself",
          label: "About Myself",
          trigger: "AboutMyself",
        },
        { value: "contact me", label: "Contact Me", trigger: "ContactMe" },
        { value: "my skills", label: "My Skills", trigger: "MySkills" },
      ],
    },
    {
      id: "Projects",
      message:
        "Some of my project names which are:\n1. Image denoising using deep learning\n2. Adversarial attacks\n3. Man in the middle attack\nFurther info about the project will be provided on the projects page.",
      trigger: "FurtherQuestions",
    },
    {
      id: "ContactMe",
      message: "Please visit my contact page.",
      trigger: "FurtherQuestions",
    },
    {
      id: "MySkills",
      message: "1. Programming in Java and C\n2. React JS\n3. HTML and CSS",
      trigger: "FurtherQuestions",
    },
    {
      id: "AboutMyself",
      message:
        "Name: Siddhardh\nAge: 21\nEducation: Gmr\nStatus: Fresher\nFor further info, please visit my about page.",
      trigger: "FurtherQuestions",
    },
    {
      id: "FurtherQuestions",
      message: "Do you have any further questions?",
      trigger: "FurtherOptions",
    },
    {
      id: "FurtherOptions",
      options: [
        { value: "yes", label: "Yes", trigger: "HelpOptions" },
        { value: "no", label: "No", trigger: "EndMessage" },
      ],
    },
    {
      id: "EndMessage",
      message: "Thank you for visiting! Have a great day!",
      end: true,
    },
    {
      id: "NotFound",
      message:
        "Sorry, we can't find the answer. Please visit my portfolio for further info.",
      trigger: "FurtherQuestions",
    },
  ];
  return <ChatBot steps={steps} />;
}

export default bot;
