import React from "react";

const ContentSection = () => {
  return (
    <>
      <div className="content_section   flex flex-col justify-between sm:mx-8 mt-8  gap-2">
        <div className="tile_of_content_section flex justify-center font-bold text-3xl leading-3 font-Quicksand text-color-text  mt-12">
          <h1>What&apos;s Included</h1>
        </div>
      </div>
      <div className="book-include-cover gap-2 flex flex-col sm:mx-8">
        <img src="./assets/images/dsa-2.png" alt="dsa-include-cover" />
      </div>
    </>
  );
};

export default ContentSection;
