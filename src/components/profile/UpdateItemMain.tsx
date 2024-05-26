import React from "react";
import UpdateItemForm from "./UpdateItemForm";

const UpdateItemMain = ({ lost, found, id }: any) => {
  return (
    <div className="flex justify-center">
      <UpdateItemForm lost={lost} found={found} id={id}></UpdateItemForm>
    </div>
  );
};

export default UpdateItemMain;
