import React from "react";
import Navbar from "../../components/elements/Navbar/Navbar";
import Sidebar from "../../components/elements/Sidebar/Sidebar";
// import Home from "../../pages/Home";

import { Link } from "react-router-dom";

export default function Layout({ children }) {
  // const sidebarContent = [
  //   {
  //     label: "Dashboard",
  //     target: "/",
  //     // icon: "icon/estate.svg",
  //   },
  //   {
  //     label: "Data_Nasabah",
  //     target: "/danas",
  //   },
  //   {
  //     label: "Verifikasi_Nasabah",
  //     target: "/vernas",
  //   },
  //   // {
  //   //   label: "Paket",
  //   //   target: "/paket",
  //   // },
  // ];
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* <Home />s */}
      {/* <h1>Welcome to LAYOUT</h1> */}
      {/* <div className="list-group list-group-flush m-3"> */}
      {/* {sidebarContent.map(({ target, label, icon }, i) => ( */}
      {/* <Link to={target} className="list-group-item list-group-item-action list-group-item-light p-3" key={i}> */}
      {/* <p>{icon}</p>  ini ga dipake */}
      {/* {label} */}
      {/* </Link> */}
      {/* ))} */}
      {/* </div> */}
      {children}
    </div>
  );
}
