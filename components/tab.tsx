import { useState } from "react";

export default function PostTab({ title, description }) {
  const [expand, setExpand] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [expandDescription, setExpandDescription] = useState(false);

  return (
    <div>
      <div className="cursor-pointer">
        <div
          className={`bg-linear-to-r from-sky-500 to-purple-700 text-white text-lg sm:text-2xl ${
            expandDescription ? "sm:rounded-t-lg" : "sm:rounded-lg"
          } flex items-center h-11 mt-5`}
          onClick={() => {
            setRotate(true);
            setExpandDescription(!expandDescription);
            setTimeout(() => {
              setRotate(false);
              setExpand(!expand);
            }, 320);
          }}
        >
          <div className="ml-3">
            {expand ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  rotate ? "-rotate-90 transform duration-300" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  rotate ? "rotate-90 transform duration-300" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <p className="ml-2 font-inter font-semibold">{title}</p>
        </div>
        <div>{expandDescription ? description() : <></>}</div>
      </div>
    </div>
  );
}
