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
          if (results!.event !== "success") return;
          const public_id = results?.info?.public_id??"";
          setPublicId(public_id);
        }}
      >
        {({ open }) => (
          <Button color={"primary"} onClick={() => {
            typeof open==='function'&&open()}
          }>
            Upload
          </Button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default ImageUpload;
