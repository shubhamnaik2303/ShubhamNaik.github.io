import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    tf,
    git,
    figma,
    docker,
    aiml,
    Reacticon,
    mic,
    dfinity,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning Expert ",
      icon: backend,
    },
    {
      title: "Web 3 Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TensorFlow",
      icon: tf,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Dfinity",
      icon: dfinity,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "ReactJs",
      icon: Reacticon,
      iconBg: "#383E56",
      
      points: [
        "Developed a exciting website for managing placement and internship drives with distinct Student Panel and Admin Panel using ReactJs on Frontend.",
        "Features ( Admin Panel ) : Send a Notification to Student Panel, Comapany Classification based on package offered, Matching Students to Companies based on thier skillset, Backlog Recruitment, Sorting Students based on thier GPA.",
        "Features ( Student Panel ) : Matching Companies with student's skillset, Companies Hiring Backlog Students, Dynamic Student Dashboard.",
      
        "Developed Decentralised DBANK App with ReactJs Frontend.",
        
      ],
    },
    {
      title: "AI-ML Enthusiast",
      company_name: "Artificial Inteliigence and Machine Learning",
      icon: aiml,
      iconBg: "#E6DEDD",
      
      points: [
        "Developed a robust model capable of accurately forecasting bulldozer prices based on historical data(Time Series).",
        "Demonstrated proficiency in data preprocessing, feature engineering, model selection, and evaluation techniques.",
        "Pursuing Specialization in AI-ML at Symbiosis Institute of Technology"
       
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Knowledge Distributor",
      company_name: "Lecturer",
      icon: mic,
      iconBg: "#E6DEDD",
      
      points: [
        "Hosted a hands-on workshop on the topic Backend Development with NodeJs and ExpressJs with 35+ attendees at Symbiosis Institute of Technology.",
        "Expertly orchestrated an engaging and impactful online induction session, captivating participants with an immersive learning experience on HTML and CSS",
        "Web Master of ACM (Association of Computing and Machinery) Student Chapter at Symbiosis Institute of Technology",
        "Blockchain Technical Co-Head at CBC (Cyber Blockchain Club) at Symbiosis Institute of Technology .",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Great web design without functionality is like a sports car with no engine.",
      name: "Shubham",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };