import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import Image from "next/image";
import { useTheme } from "next-themes";

const Sidebar = () => {
    const openInNewTab =(url: string | URL)=> {
        const newWindow = window.open(url, '_blank','noopener, noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const { theme, setTheme } = useTheme();
    const changeTheme = ()=> {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <>
            <Image
                src="/images/cv.jpg"
                alt="avatar"
                className="mx-auto border rounded-full "
                height="128px"
                width="128px"
                layout="intrinsic"
                quality="100"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-blue-600">Hafiz</span> T. Aziz
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
                Web Developer
            </p>
            <a
                onClick={() => openInNewTab('https://drive.google.com/file/d/1mvYkyy2r6SnQGv97KNzR0B7yzXB4s41R/view?usp=sharing')}              
                download="Hafiz Resume.pdf"
                className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
            >
                <GiTie className="w-6 h-6" />
                <span>Download Resume</span>
            </a>
            <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-600 md:w-full ">
                <a onClick={() => openInNewTab('https://discord.com/users/Fz#2560')}>
                    <FaDiscord className="w-8 h-8 cursor-pointer" />
                </a>
                <a onClick={() => openInNewTab('https://www.linkedin.com/in/fizaziz/')} >
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a onClick={() => openInNewTab('https://github.com/greylicht')}>
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
                </a>
            </div>
            
            {/* Contacts */}
            <div
                className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
            >
                <div className="flex items-center justify-center">
                    <GoLocation className="mr-2" /> <span>Jakarta, Indonesia </span>
                </div>
                <p className="my-2 "> Fiz.Aziz.F@gmail.com </p>
                <p className="my-2"> +62 821 7033 8256 </p>
            </div>

            <button
                className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-500 hover:scale-105 focus:outline-none"
                onClick={() => openInNewTab("mailto:fiz.aziz.f@gmail.com")}
            >
                Email me
            </button>
            <button
                onClick={changeTheme}
                className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-500 focus:outline-none hover:scale-105 "
            >
            Toggle Theme
            </button>
        </>
    );
};

export default Sidebar;