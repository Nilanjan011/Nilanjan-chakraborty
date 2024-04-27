import { actionButton } from "./Header";

const Services = () => {
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline" id="projects">
          My Projects
        </h1>
        <div className="space-y-5 md:space-x-5 px-10 mt-12 grid grid-cols-1 gap-3 md:grid md:grid-cols-3 md:gap-2">
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4">
            <i className="text-5xl fa-solid fa-code"></i>
            <h1 className="text-4xl">E-commmerce</h1>
            <p>
              Contributed to the development of key functionalities including order processing, seamless 'Add to Cart' feature, and robust payment systems to enhance user experience and drive sales.
            </p>
            <button onClick={() => window.open(actionButton.link, '_blank')} className="services_download_btn">
              Download CV
            </button>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className=" text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">CRM</h1>
            <p>
              Implemented tailored solutions in a CRM project, focusing on streamlining customer interactions, optimizing data management, and enhancing team collaboration for improved client relationships.
            </p>
            <button onClick={()=> window.open(actionButton.link, '_blank')} className="services_download_btn">
              Download CV
            </button>
          </div>
          <div onClick={()=> window.open(actionButton.link, '_blank')} className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">E-Learning Game</h1>
            <p>
              Crafted engaging user experiences in an E-learning game project, leveraging innovative drag-and-drop functionality to foster interactive learning environments and enhance student engagement.
            </p>
            <button onClick={() => window.open(actionButton.link, '_blank')} className="services_download_btn">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
