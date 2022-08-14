import React from "react";

const Card = (props) => {
  return (
    <div className=" flex justify-center m-3">
    <div className={`${props.customize} rounded bg-slate-50 mt-12 drop-shadow-xls text-black border-2 w-full   flex align-center justify-between items-baseline p-3`}>{props.children}</div>
    </div>
  );
};

export default Card;
