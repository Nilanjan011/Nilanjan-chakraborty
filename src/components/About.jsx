import { useState } from "react";
import bannerImage from "../assets/nilanjan2.jpg";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Web Developer & Backend Developer",
    desc1: `Experienced Full Stack Developer with over 2+ years of experience in React js, Nodejs, Laravel, MERN, MySQL AND MongoDB.`,
    desc2: ` I shown my ability to create and handle scalable, high performance web applications. I am currently looking for an exciting position where I can utilize my skills and experience to contribute to company’s success significantly.`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
      isShow:false
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-1" id="about">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="grid grid-cols-1 items-center md:flex">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-[300px] rounded-3xl"
              src={data.image}
              alt="Nilanjan Chakraborty"
            />
          </div>

          {/* text container  */}
          <div className="w-full flex justify-center mt-4 md:mt-0">
            <div className="space-y-5 w-2/3">
              <h1 className="text-2xl md:text-5xl font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              {
                data?.actionButton?.isShow &&
              
                <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                  {data.actionButton.title}
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
