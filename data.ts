import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { IProject, IService, ISkill } from './type'
import { BsCircleFill } from 'react-icons/bs'


export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title: 'Front End Dev',
        about: 'I can build a beautifull and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React Js</b>',
    },
    {
        Icon: FaServer,
        title: 'Back End Dev',
        about: 'handle database, server, api using <b>Express</b> and other popular frameworks',
    },
    {
        Icon: AiOutlineApi,
        title: 'API Development',
        about: 'Develop robust REST API using <b>Node API</b>',
    },
    {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX Designer',
        about: 'creative user interface design using <b>Figma</b> and <b>Framer</b>',
    },
]

export const languages:ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'Java',
        level: '70%',
    },
    {
        Icon: BsCircleFill,
        name: 'Java Script',
        level: '80%',
    },
    {
        Icon: BsCircleFill,
        name: 'React',
        level: '80%',
    },
    {
        Icon: BsCircleFill,
        name: 'Bootstrap',
        level: '70%',
    },
    {
        Icon: BsCircleFill,
        name: 'Tailwind',
        level: '70%',
    },
]

export const tools: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'Figma',
        level: '80%',
    },
    {
        Icon: BsCircleFill,
        name: 'Photoshop',
        level: '50%',
    },
    {
        Icon: BsCircleFill,
        name: 'Framer',
        level: '60%',
    },
    {
        Icon: BsCircleFill,
        name: 'Git',
        level: '60%',
    },
]

export const projects: IProject[] = [
    {   
        id:1,
        name: "E-Commerce Project",
        description:
        "This is E-commerce project build with vanilla javascript with cart function.",
        image_path: "/images/aru.jpg",
        deployed_url: "https://aru-corner.web.app",
        github_url: "https://github.com/greylicht/aru-corner",
        category:["javascript"],
        key_techs:["Javascript", "Bootstrap"],
    },
    {
        id:2,
        name: "Student Evaluation",
        description:
        "This desktop app is created with netbeans and mysql for lecturer to evaluate their student.",
        image_path:"/images/mhs.jpg",
        deployed_url:"https://github.com/greylicht/PenilaianMhs",
        github_url:"https://github.com/greylicht/PenilaianMhs",
        category:["java"],
        key_techs:["Java", "Netbeans", "MySql"],
    },
    {   
        id:3,
        name: "Web Chat",
        description:
        "This is web based real-time chat app using GetStream.io API",
        image_path:"/images/chat.jpg",
        deployed_url:"https://fz-chat.netlify.app",
        github_url:"https://github.com/greylicht/Web-Chat",
        category:["react", "express"],
        key_techs:["React", "Express"],
    },
]