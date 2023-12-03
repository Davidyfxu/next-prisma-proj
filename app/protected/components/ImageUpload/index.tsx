"use client";
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { Button } from "@nextui-org/react";

const ImageUpload = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt={""} />
      )}
      <CldUploadWidget
        uploadPreset="apll2bn6"
        onUpload={(results, widget) => {
          console.log(results);
          if (results!.event !== "success") return;
          const info = results?.info;
          setPublicId(info?.public_id);
        }}
      >
        {({ open }) => (
          <Button color={"primary"} onClick={() => open()}>
            Upload
          </Button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default ImageUpload;
