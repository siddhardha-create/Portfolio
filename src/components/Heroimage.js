import "../css/Heroimage.css";
import React, { useEffect, useRef, useState } from "react";
import heroimg from "../assets/backgrnd.avif";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import { FaRobot } from "react-icons/fa";

const Heroimage = () => {
  const typedRef = useRef(null);
  const [showChatBot, setShowChatBot] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        '<span style="color:crimson;">Program through Java.</span>',
        '<span style="color:#00a8ff;">Immerse in the art of front-end development.</span>',
        '<span style="color:#00a8ff;">Explore the depths of Linux.</span>',
        '<span style="color:#00b894;">Master the intricacies of SQL.</span>',
        '<span style="color:#00b894;">Thrive through the energy of competitive sports.</span>',
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    // Initialize Typed instance
    const typed = new Typed(typedRef.current, options);

    // Clean up Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to my website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
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
        "Some of my project names which are:\n1.Image denoising using deep learning\n2. Adversarial attacks\n3. Man in the middle attack\nFurther info about the project will be provided on the projects page.",
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

  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={heroimg} alt="Introimg"></img>
      </div>
      <div className="content">
        <p>Hello, I'm Siddhardh, eager to</p>
        <h2 ref={typedRef} className="typing"></h2>
        <div className="buttons">
          <Link to="/Project" className="button">
            Projects
          </Link>
          <Link to="/Contact" className="button">
            Contact
          </Link>
        </div>
      </div>
      <div className="chatbot-icon" onClick={toggleChatBot}>
        <FaRobot size={30} />
      </div>
      {showChatBot && (
        <div className="chatbot-container">
          <ChatBot steps={steps} />
        </div>
      )}
    </div>
  );
};

export default Heroimage;
