"use client";
import axios from "axios";
import React, { useState } from "react";

import { Button } from "react-bootstrap";

export default function page() {
  const [image, setImage] = useState("");
  const [createObjectURL, setCreateObjectURL] = useState("");

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  // let nameData: any = { name: "Sanket" };

  let imgData: any = image;

  let imgName: string = imgData.name;

  const uploadToServer = async (event: any) => {
    console.log("image ", image);
    console.log("image name ", imgName);
    const body = new FormData();
    body.append("file", image);
    body.append("TheName", "Sanket");
    body.append("xxx", "yyy");

    const res = await upload(body);
  };

  const upload = async (body: any) => {
    try {
      const response = await axios.post("api/fileUpload/FileUpload", body);
      console.log("::::::: response", response);
    } catch (error) {
      console.log("::::::: Error is", error);
    }
  };

  let extension: string = imgName?.substring(
    imgName?.lastIndexOf("."),
    imgName?.length
  );

  return (
    <>
      <div className="px-10 flex justify-center f-column items-center h-[400] w-[100%]">
        <div>
          <input
            style={
              {
                // marginTop: 200, marginBottom: 100,
                //  display: "block"
              }
            }
            type="file"
            onChange={uploadToClient}
          />
        </div>
        <div>
          <Button onClick={uploadToServer}> Upload </Button>
        </div>
        {/* {extension === "mp4" ? (
          <video src={image}></video>
        ) : (
          <img
            style={{ height: 200, width: 200 }}
            src={createObjectURL}
            alt="No Image"
          />
        )} */}
      </div>
    </>
  );
}
