import bannerImage from "../assets/nilanjan.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer","Full Stack Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container md:flex items-center mt-20 "
      id="home"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white mb-4">
        {/* text */}
        <div className="pl-2 pt-2 md:w-2/3 space-y-2  md:ms-10">
          <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-2xl md:text-4xl font-bold">Nilanjan Chakraborty</h1>
          <h2 className="text-base md:text-3xl">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="text-2xl py-2">
            Contact Me:
            
            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, nemo. Omnis quis reprehenderit aspernatur culpa
            inventore rem, illum iure optio et blanditiis quia alias
            consequuntur totam dicta vel molestiae. Odio laboriosam quisquam,
            exercitationem omnis numquam vero nesciunt explicabo incidunt vel
            eaque a repellat nisi, debitis repudiandae excepturi quasi
            praesentium id! */}
          </p>

          <div className="icons-container flex md:space-x-5 w-2">
            <a href="mailto:nilanjanchakraborty.nc@gmail.com"
             className="hover:bg-orange-600   border cursor-pointer  px-3 py-4 md:w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i className=" text-4xl fa-regular fa-envelope"></i>
            </a>

            <a href="https://wa.me/+918622910920" target="_blank" className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-4xl  fa-whatsapp"></i>
            </a>

            <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800" href="https://www.linkedin.com/in/nilanjan-chakraborty-web/" target="_blank">
              <i className="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
          </div>
          <br />
          {/* <a
            className=" text-2xl px-3 py-2 bg-orange-500  rounded-full shadow-lg"
            href="javascript:void(0)"
          >
            Contact Me
          </a> */}
        </div>
      </div>

      {/* second  dabba */}

      <div className="w-full flex justify-center">
        {/* image */}
        <img className="rounded-3xl my-2 shadow-lg w-3/5 h-auto" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
