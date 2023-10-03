import React, { useState } from "react";
import Image from "next/image";
import { post } from "@/config/axiosConfig";

const AddToGallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section>
      <label className="flex flex-col items-center bg-[#ff6b07] text-white justify-center rounded-md w-full h-11 cursor-pointer text-lg">
        + Add Images
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png,image/jpeg,image/webp"
          className="hidden"
        />
      </label>
      <span className="flex justify-center text-sm mt-2">up to 7 images</span>

      {selectedImages.length > 0 &&
        (selectedImages.length > 7 ? (
          <p className="error text-center ">
            You can't upload more than 7 images! <br />
            <span className="text-[red]">
              please delete <b>{selectedImages.length - 7}</b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn block mx-auto  p-2 rounded-full w-40 h-12 bg-green text-[green]"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="flex flex-wrap justify-start grid grid-cols-3">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image m-2 shadow-md ">
                <div className="">
                  <Image src={image} width={200} height={200} alt="upload" />
                  <div className="flex justify-between items-center">
                    <p className="p-2">{index + 1}</p>
                    <button
                      onClick={() => deleteHandler(image)}
                      className="flex justify-center items-center bg-red-400 rounded-full w-[25px] h-[25px] p-2 text-white border-none cursor-pointer"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AddToGallery;
