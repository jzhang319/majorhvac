import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllImages } from "../../store/image";

function PictureComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllImages());
  }, [dispatch]);

  const images = useSelector((state) => Object.values(state.images));

  return (
    <>
      <div className="w-full text-center text-gray-700 my-5 font-light sm:text-xl text-3xl">
        Gallery of Completed Jobs
      </div>
      <hr className="my-5 border-t-2 border-gray-300" />
      {images?.map((image) => (
        <div key={image.id} className="flex flex-col items-center border-b  mx-10">
          <img
            src={image.image_url}
            alt={image.caption}
            className="w-full h-auto object-cover sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-96 lg:h-96"
          />
          <div className="text-center mt-2">Location: {image.location}</div>
          <div className="text-center mt-2 mb-10">Description: {image.caption}</div>
        </div>
      ))}
    </>
  );
}

export default PictureComponent;
