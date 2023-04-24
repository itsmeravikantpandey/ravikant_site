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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  angularIcon,
  strapi
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angularIcon,
  },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Strapi",
    icon: strapi,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Angular Developer",
    company_name: "",
    icon: "",
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using Angular, Typescript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Translating designs and wireframes into high quality code.",
      "Optimizing components for maximum performance across a vast array of web-capable devices and browsers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: "",
    iconBg: "#383E56",
    date: "",
    points: [
      "Write well designed, testable, efficient code by using best software development practices.",
      "Create website layout/user interface by using standard HTML/CSS practices.",
      "Integrate data from various back-end services and databases.",
      "Gather and refine specifications and requirements based on technical needs.",
      "Stay plugged into emerging technologies/industry trends and apply them into operations and activities.",
      "Cooperate with web designers to match visual design intent.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "",
    icon: "",
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Work with development teams and product managers to ideate software solutions.",
      "Design client-side and server-side architecture.",
      "Build the front-end of applications through appealing visual design.",
      "Develop and manage well-functioning databases and applications.",
      "Write effective APIs.",
      "Troubleshoot, debug and upgrade software.",
      "Create security and data protection settings.",
      "Build features and applications with a mobile responsive design.",
      "Write technical documentation.",
    ],
  },
  {
    title: "Product Management",
    company_name: "",
    icon: "",
    iconBg: "#383E56",
    date: "",
    points: [
      "Understanding and representing user needs and defining a vision for a product.",
      "Aligning stakeholders around the vision for the product",
      "Manage project through JIRA/TRELLO/Goodday tools as the bug tracking system to track and maintain the history of bugs/issues on an everyday basis",
      "Prioritizing product features and capabilities",
      "Create milestones, convert big tasks to small tasks assign story points to each tasks.",
      "Assign tasks to multiple developers and maintain project code through version control tool Git.",
      "Creating a shared brain across larger teams to empower independent decision-making.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ravikant proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ravikant does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ravikant optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Property tracking software",
    description:
      "Web application that enables users to search for new and old properties, view estimate prize ranges of properties, and locate available property based on their current location.",
    tags: [
      {
        name: "react-js",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "yellow-text-gradient",
      },
    ],
    image: "",
    source_code_link: "",
  },
  {
    name: "Campaign Applications",
    description:
      "Ad management platform. This applications allow businesses to manage and track their ads across multiple platforms. Through this application we can create ads and runs on particular location in between given timeslot They may offer features like ad creation, audience targeting, and analytics to track campaign performance",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "styled-component",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "yellow-text-gradient",
      },
    ],
    image: "",
    source_code_link: "",
  },
  {
    name: "Amazone Clone",
    description:
      "It's an eCommerce app inspired by Amazon, big Basket, Grofers, grocery app, a sample Android application 📱 built to demonstrate the use of Modern Android development tools",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "styled-component",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "yellow-text-gradient",
      },
    ],
    image: "",
    source_code_link: "",
  },
  // {
  //   name: "Website Landing Page",
  //   description:
  //     "creating a interactive landing page that a user may access through an email, advertisement, or other digital source. Landing pages is very important in every content strategy to enhance conversions and drive more traffic.",
  //   tags: [
  //     {
  //       name: "Angular",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-component",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "node.js",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "",
  //   source_code_link: "",
  // }
];

export { services, technologies, experiences, testimonials, projects };
