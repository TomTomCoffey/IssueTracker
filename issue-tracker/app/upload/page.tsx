"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const uploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={400} height={500} alt="Something" />
      )}
      <CldUploadWidget
        uploadPreset="obmhadyp"
        options={{
            sources: [
                "local",
                "camera",
                "facebook",
                "instagram",
                "dropbox"
            ],
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") {
            return;
          }
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default uploadPage;
