import Image from "next/image";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Supabase Client Setup
const supabase = createClient(
  "https://ozjlhirpzyynqjheidxy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96amxoaXJwenl5bnFqaGVpZHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2MDEyNzIsImV4cCI6MTk5NjE3NzI3Mn0.e-wKkdCkRf0ffHHQHp8U9nD9ekDhLW6NQS54lzQRcII"
);

export default function Dropbox({ file, setFile, loading, setLoading }) {
  const [dragId, setDragId] = useState("");
  const [sizeCheckId, setSizeCheckId] = useState("");

  // File upload function
  async function fileUpload() {
    const { data, error } = await supabase.storage
      .from("ordinal-storage")
      .upload(uuidv4() + "/" + file.name, file);
    // if (data) console.log(data);
    if (error) {
      console.log(error);
    } else {
      setLoading(false);
    }
  }

  // Highlight effect for drag and drop
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragId("image-drag");
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragId("");
  };

  // Function to handle dropping image
  const handleDrop = (event) => {
    event.preventDefault();
    setSizeCheckId("");
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile.size <= 400000) {
      setFile(droppedFile);
    } else {
      setSizeCheckId("image-error");
    }
  };

  //Function to handle browse file input
  const handleFileInput = (event) => {
    setSizeCheckId("");
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile?.size <= 400000) {
        setFile(selectedFile);
      } else {
        setSizeCheckId("image-error");
      }
    }
  };

  //Upload file on state change
  useEffect(() => {
    if (file) {
      setLoading(true);
      fileUpload();
    }
  }, [file]);

  return (
    <>
      {/* File Upload Box */}
      {!file && (
        <div
          className="image-container mt-4 md:mt-0 p-[14px] flex flex-col items-center justify-center w-fit"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <label
            id={dragId}
            className="image-label w-[250px] md:w-[350px] h-[350px] md:h-[400px] flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="flex flex-col pt-10 md:pt-20">
              <p className="image-instruction text-center p-3 md:p-5 md:px-11 mx-2 text-md md:text-xl ">
                Drag & drop or
                <span className="font-semibold text-[#6157FF]"> select </span>
                orb-supported file to start
              </p>
              <p
                id={sizeCheckId}
                className="font-[400] text-center mb-8 text-sm"
              >
                Size less than 400kb
              </p>
              <div className="opacity-[0.2] mx-auto text-sm text-left leading-7">
                <p className="">Images: jpg, png, apng, gif, svg, webp</p>
                <p className="">Documents: html, pdf, txt</p>
                <p className="">Media: flac, mp3, wav, webm</p>
              </div>
            </div>
            <input
              type="file"
              className="hidden"
              onChange={handleFileInput}
              accept=".jpg, .jpeg, .png, .apng, .gif, .svg, .webp, .html, .pdf, .txt, .flac, .mp3, .wav, .webm"
            />
          </label>
        </div>
      )}
      {/* Skeleton Screen Theme */}
      <SkeletonTheme
        width="100%"
        height="100%"
        borderRadius="20px"
        baseColor="#1e1e1e"
        highlightColor="#444"
      >
        {/* Image/Filename Display Box */}
        {file && (
          <>
            <div className="mt-10 md:mt-0 w-[250px] md:w-[350px] items-center">
              <div className="image-container h-[350px] md:h-[400px] ">
                {loading ? (
                  <Skeleton />
                ) : (
                  <>
                    {/* Display Image if Image Selected else Display Filename */}
                    {file.type.startsWith("image/") ? (
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-full object-cover object-center rounded-[24px]"
                        width={300}
                        height={350}
                      />
                    ) : (
                      <p className="pt-[55%] p-2 text-center w-full h-fit">
                        {file.name}
                      </p>
                    )}
                  </>
                )}
              </div>
              <div className="text-[15px] md:text-[17px] lg:text-[19px] flex pt-6 justify-between items-center">
                <div className="font-[500]">
                  {loading ? (
                    <Skeleton count={2} width="120px" height="15px" />
                  ) : (
                    <>
                      <p className="pb-1">Ordinal preview</p>
                      <p className="font-[400] opacity-[0.4]">
                        Order #{Math.floor(100000 + Math.random() * 900000)}
                      </p>
                    </>
                  )}
                </div>
                {loading ? (
                  <Skeleton width="80px" height="15px" />
                ) : (
                  <>
                    <label
                      className="image-change px-5 py-3 cursor-pointer"
                      onClick={() => setFile(null)}
                    >
                      Change file
                    </label>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </SkeletonTheme>
    </>
  );
}
