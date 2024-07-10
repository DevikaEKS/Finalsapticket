import React, { useState } from "react";
import AdminSidebar from "../Adminsidebar/Adminsidebar";
import ClientRegister from "../Clientregistration/Clientregistration";

export function Admindashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <AdminSidebar />
          </div>
          <div className="c>lg-10">
            <ClientRegister />
          </div>
        </div>
      </div>
    </>
  );
}





