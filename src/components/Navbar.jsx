import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown"; // Ensure your DropDown is responsive if it includes any content that needs to adjust
import { Images } from "../assets";
import DropDownService from "./DropDownServices";
import LinkButtons from "./LinkButtons";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ServicesMobile from "./ServicesMobile";
import TrainingMobile from "./TrainingMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const trainingHandler = () => {
    setIsOpen(false);
    setTrainingOpen(!trainingOpen);
  };
  const backHandlerTraining = () => {
    setIsOpen(true);
    setTrainingOpen(false);
  };

  const servicesHandler = () => {
    setIsOpen(false);
    setServicesOpen(!servicesOpen);
  };
  const backHandler = () => {
    setIsOpen(true);
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-black h-20 sticky top-0 z-50 ${
        isScrolled ? "shadow-md" : ""
      } transition-shadow duration-200`}
    >
      <div className="flex justify-between items-center h-full px-4 md:px-8 ">
        <Link to="/">
          <img
            src={Images.cyberousWhitelogo}
            className="object-contain aspect-square w-24 lg:w-36  "
          />
        </Link>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="focus:outline-none duration-200"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 duration-200 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white duration-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`${
            isOpen ? "hidden" : "hidden"
          }  lg:flex lg:justify-end lg:items-center w-1/2`}
        >
          <div className="lg:flex lg:justify-evenly lg:items-center w-full">
            <Link to="/" className="">
              <LinkButtons links="Home" />
            </Link>
            <Link to="/training">
              <DropDown LinkButtons={LinkButtons} />
            </Link>
            <Link to="/services" className="">
              <DropDownService LinkButtons={LinkButtons} />
            </Link>
            <Link to="/about" className="">
              <LinkButtons links="About" />
            </Link>
            <Link to="blog" className="">
              <LinkButtons links="Blog" />
            </Link>
            <Link to="/career" className="">
              <LinkButtons links="Career" />
            </Link>
            <Link to="/contact" className="">
              <LinkButtons links="Contact" />
            </Link>
          </div>
          <div className="flex w-3/12 justify-between gap-3">
            <Link to={"https://www.facebook.com/cyberous.in?mibextid=dGKdO6"}>
              <img
                src={Images.facebookLight}
                alt="Facebook"
                className=" h-8 w-8 rounded-full object-contain mx-2 hover:scale-110 transition-transform duration-300"
                onMouseOver={(e) =>
                  (e.currentTarget.src = Images.facebookLight)
                }
                onMouseOut={(e) => (e.currentTarget.src = Images.facebookLight)}
              />
            </Link>
            <Link
              to={"https://www.instagram.com/cyberous_?igsh=bndreTYxMnIxemxn"}
            >
              <img
                src={Images.instagramLight}
                alt="Instagram"
                className="h-8 w-8 rounded-full object-contain mx-2 hover:scale-110 transition-transform duration-300"
                onMouseOver={(e) =>
                  (e.currentTarget.src = Images.instagramLight)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = Images.instagramLight)
                }
              />
            </Link>
            <Link to={"https://www.linkedin.com/company/cyberous"}>
              <img
                src={Images.linkedinLight}
                alt="LinkedIn"
                className="h-8 w-8 rounded-full object-contain mx-2 hover:scale-110 transition-transform duration-300"
                onMouseOver={(e) =>
                  (e.currentTarget.src = Images.linkedinLight)
                }
                onMouseOut={(e) => (e.currentTarget.src = Images.linkedinLight)}
              />
            </Link>
            <Link to={"https://twitter.com/cyberousinfosec"}>
              <img
                src={Images.xDark}
                alt="LinkedIn"
                className="h-10 w-10 rounded-full object-contain mx-2 hover:scale-110 transition-transform duration-300"
                onMouseOver={(e) => (e.currentTarget.src = Images.xDark)}
                onMouseOut={(e) => (e.currentTarget.src = Images.xDark)}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdown menu for mobile screens */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } relative  w-full bg-white h-screen shadow-md z-50`}
      >
        <div className="flex flex-col items-center">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-4 rounded-2xl border items-center justify-between w-full text-black px-3"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>

              <div className="px-2 ">Home</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>

          <div
           onClick={() => trainingHandler()}
            className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl  mt-1 duration-300 flex-row font-medium py-4 rounded-2xl border items-center justify-between w-full text-black px-3"
          >
            <div className="flex">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="px-2 ">Services</div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>

          <div
            // to="/services"
            onClick={() => servicesHandler()}
            className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-4 rounded-2xl border items-center justify-between w-full text-black px-3"
          >
            
            <div className="flex">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="px-2 ">Training</div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-4 rounded-2xl border items-center justify-between w-full text-black px-3"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="px-2 ">About</div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>

          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-4 rounded-2xl border items-center justify-between w-full text-black px-3"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                  clipRule="evenodd"
                />
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
              </svg>

              <div className="px-2 ">Blog</div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>

          <Link
            to="/career"
            onClick={() => setIsOpen(false)}
            className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-4 rounded-2xl  border items-center justify-between w-full text-black px-3"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
              </svg>

              <div className="px-2 ">Career</div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-lg flex border-green-600 absolute bottom-64 my-3 hover:bg-custom-buttonColor-Green rounded-full duration-300 font-medium py-3 border items-center text-black px-3"
          >
            <div className="flex">
             
               

              <div className="px-2 ">Contact Us</div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
          <div className="absolute bottom-0 h-64 p-2 px-7 w-full bg-slate-200">
            <p className="text-lg text-black font-medium py-2">Follow us on:</p>

            <div className="flex justify-evenly">
              <Link
                to={"https://www.facebook.com/cyberous.in?mibextid=dGKdO6"}
              >
                <img
                  src={Images.facebookLight}
                  alt="Facebook"
                  className=" h-8 w-8 rounded-full object-contain mx-2 hover:scale-110 transition-transform duration-300"
                  onMouseOver={(e) =>
                    (e.currentTarget.src = Images.facebookLight)
                  }
                  onMouseOut={(e) => (e.currentTarget.src = Images.facebookLight)}
                />
              </Link>
              <Link
                to={
                  "https://www.instagram.com/cyberous_?igsh=bndreTYxMnIxemxn"
                }
              >
                <img
                  src={Images.instagramLight}
                  alt="Instagram"
                  className="h-8 w-8 rounded-full object-contain mx-2 hover:scale-110 transition-transform duration-300"
                  onMouseOver={(e) =>
                    (e.currentTarget.src = Images.instagramLight)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = Images.instagramLight)
                  }
                />
              </Link>
              <Link to={"https://www.linkedin.com/company/cyberous"}>
                <img
                  src={Images.linkedinLight}
                  alt="LinkedIn"
                  className="h-8 w-8 rounded-full object-contain mx-2 hover:scale-110 transition-transform duration-300"
                  onMouseOver={(e) =>
                    (e.currentTarget.src = Images.linkedinLight)
                  }
                  onMouseOut={(e) => (e.currentTarget.src = Images.linkedinLight)}
                />
              </Link>
              <Link to={"https://twitter.com/cyberousinfosec"}>
                <img
                  src={Images.xDark}
                  alt="LinkedIn"
                  className="h-8 w-8 rounded-full object-contain mx-2 hover:scale-110 transition-transform duration-300"
                  onMouseOver={(e) => (e.currentTarget.src = Images.xDark)}
                  onMouseOut={(e) => (e.currentTarget.src = Images.xDark)}
                />
              </Link>
              </div>
            </div>
        </div>
      </div>
      {
        servicesOpen && (
          <ServicesMobile servicesOpen={servicesOpen} servicesHandler={servicesHandler} backHandler={backHandler} />
        )
      }
      {
        trainingOpen && (
          <TrainingMobile trainingOpen={trainingOpen} trainingHandler={trainingHandler} backHandlerTraining={backHandlerTraining} />
        )
      }
    </div>
  );
};

//           <Link to='/training'>
//           <DropDown />
//           </Link>
//           <Link to='/services'>
//             <DropDownService/>
//           </Link>
//           <Link to='/about' className="text-sm text-black  font-medium py-2.5 px-3">About</Link>
//           <Link to='/blog' className="text-sm  text-black font-medium py-2.5 px-3">Blog</Link>
//           <Link to='/career' className="text-sm  text-black font-medium py-2.5 px-3">Career</Link>
//           <Link to='/contact' className="text-sm absolute bottom-20 text-black font-medium py-2.5 px-3">Contact</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Navbar;
