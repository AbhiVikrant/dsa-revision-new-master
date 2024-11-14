import React from "react";

const Review = () => {
  const reviewItems = [
    {
      id: 1,
      content:
        "Walling helps us visually organise ideas and tasks, work collaboratively and efficiently within our team. The visual experience makes it so easy to plan content and stay on track with our projects and campaigns.",
      authorName: "Rahul Pandey",
      position: "head of development",
      img_url: "./assets/images/profiles/profile-4.png"
    },
    {
      id: 2,
      content:
        "Walling helps us visually organise ideas and tasks, work collaboratively and efficiently within our team. The visual experience makes it so easy to plan content and stay on track with our projects and campaigns.",
      authorName: "Agni Pandey",
      position: "head of development",
      img_url: "./assets/images/profiles/profile-1.png"
    },
    {
      id: 3,
      content:
        "Walling helps us visually organise ideas and tasks, work collaboratively and efficiently within our team. The visual experience makes it so easy to plan content and stay on track with our projects and campaigns.",
      authorName: "Hash Pandey",
      position: "head of engineering",
      img_url: "./assets/images/profiles/profile-2.png"
    },
    {
      id: 4,
      content:
        "Walling helps us visually organise ideas and tasks, work collaboratively and efficiently within our team. The visual experience makes it so easy to plan content and stay on track with our projects and campaigns.",
      authorName: "Shanti Pandey",
      position: "head of science",
      img_url: "./assets/images/profiles/profile-3.png"
    }
  ];
  return (
    <>
      <div className="reviewSection">
        <div className="eachReviewSection  flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2 ">
          {reviewItems.map(items => (
            <div
              key={items.id}
              className=" justify-center mx-2 my-4 border-2 rounded-lg "
            >
              <blockquote className="flex gap-2 m-2 justify-center">
                &quot;{items.content}&quot;
              </blockquote>
              <div className="flex gap-2  m-2">
                <img
                  src={items.img_url}
                  alt="author"
                  className="max-h-10 max-w-10"
                />
                <div>
                  <p className="font-lato font-bold">{items.authorName}</p>
                  <p className="font-playfair font-thin text-gray-400 capitalize">
                    {items.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
