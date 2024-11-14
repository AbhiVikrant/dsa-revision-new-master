import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentSection = () => {
  return (
    <>
      <div className="content_section   flex flex-col justify-between sm:mx-8 mt-8  gap-2 ">
        <div className="tile_of_content_section flex justify-center font-bold text-3xl leading-3 font-Quicksand text-color-text  mt-12">
          <h1>What&apos;s Included</h1>
        </div>
        <div className=" flex flex-col sm:mx-8  mt-8  gap-2 lg:grid lg:grid-cols-2">
          <div className="book-include-cover  ">
            <img src="./assets/images/dsa-2.png" alt="dsa-include-cover" />
          </div>
          <div className="list-items flex flex-col justify-center items-center sm:mx-8 mt-8  gap-2">
            <ul>
              <li className="text-color-text text-xl mb-3 leading-loose font-Quicksand font-medium ">
                <svg
                  className="svg-inline--fa fa-check-circle fa-w-16 me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="check-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                  ></path>
                </svg>
                15+ algo patterns discussed
              </li>
              <li className="text-color-text text-xl mb-3 leading-loose font-Quicksand font-medium ">
                <svg
                  className="svg-inline--fa fa-check-circle fa-w-16 me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="check-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                  ></path>
                </svg>
                Detailed solutions and explanations
              </li>
              <li className="text-color-text text-xl mb-3 leading-loose font-Quicksand font-medium ">
                <svg
                  className="svg-inline--fa fa-check-circle fa-w-16 me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="check-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                  ></path>
                </svg>
                Awesome resources, articles, blogs
              </li>
              <li className="text-color-text text-xl mb-3 leading-loose font-Quicksand font-medium">
                <svg
                  className="svg-inline--fa fa-check-circle fa-w-16 me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="check-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                  ></path>
                </svg>
                Visualizers and animations included
              </li>
              <li className="text-color-text text-xl mb-3 leading-loose font-Quicksand font-medium ">
                <svg
                  className="svg-inline--fa fa-check-circle fa-w-16 me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="check-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                  ></path>
                </svg>
                100 pages of quality content
              </li>
              <li className="text-color-text text-xl mb-3 leading-loose font-Quicksand font-medium">
                <svg
                  className="svg-inline--fa fa-check-circle fa-w-16 me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="check-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                  ></path>
                </svg>
                Concepts explained for beginners
              </li>
              <li className="text-color-text text-xl mb-3 leading-loose font-Quicksand font-medium ">
                <svg
                  className="svg-inline--fa fa-check-circle fa-w-16 me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="check-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                  ></path>
                </svg>{" "}
                All in one revision guide
              </li>
            </ul>
            <div className="download_button flex justify-center">
              <button className="bg-orange-500 text-white text-2xl from-neutral-600 text-center px-8 py-4 rounded-full font-Quicksand mb-4">
                Download for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
