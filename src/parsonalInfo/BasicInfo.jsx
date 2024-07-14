import React from "react";

const BasicInfo = () => {
  return (
    <div className="flex pt-2.5">
      <ul className="">
        <li className="flex">
          <i className="fi fi-rr-employee-man-alt pl-3.5 pe-5  pb-2.5"></i>
          <h4 className="text-slate-600">Sarah Grey</h4>
        </li>
        <li className="flex">
          <i className="fi fi-rr-map-marker pl-3.5 pb-2.5 pe-5"></i>
          <h4 className="text-slate-600">Live In Dubai</h4>
        </li>
        <li className="flex">
          <i className="fi fi-rr-mobile-button pl-3.5 pb-2.5 pe-5"></i>
          <h4 className="text-slate-600">+1-234-345675</h4>
        </li>
        <li className="flex">
          <i className="fi fi-rr-envelope pl-3.5 pb-2.5 pe-5"></i>
          <h4 className="text-slate-600">Yourmail@Email.Com</h4>
        </li>
        <li className="flex">
          <i className="fi fi-rr-globe pl-3.5 pb-2.5 pe-5"></i>
          <h4 className="text-slate-600">Www.Yoursite.Com</h4>
        </li>
      </ul>
    </div>
  );
};

export default BasicInfo;
