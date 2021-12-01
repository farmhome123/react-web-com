import React, { useState } from "react";
import MaterialTable from "material-table";
import Swal from "sweetalert2";
import { NavLink, useHistory } from "react-router-dom";

function Listuser() {
  const history = useHistory();
  return (
    <div className="card mx-4 mt-4">
      <div className="mt-3 mx-4">
        <NavLink
          to="/usercreate"
          exact
          className="btn mb-2"
          style={{
            backgroundColor: "#598baf",
            color: "white",
            fontWeight: "bold",
          }}
        >
          เพิ่มสมาชิก
        </NavLink>
      </div>
      <MaterialTable
        title="ข้อมูลสมาชิก"
        columns={[
          { title: "Username", field: "username" },
          { title: "password", field: "password" },
          { title: "Detail", field: "userdetail" },
          { title: "Phone", field: "userphone" },
        ]}
        data={[
          {
            username: "Test1",
            password: "1111",
            userdetail: "tttttttt",
            userphone: "09191911112",
          },
          {
            username: "Test2",
            password: "22222",
            userdetail: "22",
            userphone: "0929292929",
          },
          {
            username: "Test3",
            password: "3333",
            userdetail: "333",
            userphone: "0939393939",
          },
        ]}
        actions={[
          {
            icon: "edit",
            iconProps: { fontSize: "medium", color: "action" },
            tooltip: "แก้ไขข้อมูล",
            onClick: (event, rowData) => {
              history.push("/useredit/" + rowData.id);
            },
          },
          (rowData) => ({
            icon: "delete",
            iconProps: { fontSize: "medium", color: "error" },
            tooltip: "ลบข้อมูล",
            onClick: (event, rowData) => {
              Swal.fire({
                title: "คุณต้องการลบข้อมูล?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Delete!",
              }).then((result) => {
                if (result.isConfirmed) {
                  console.log(rowData.id);
                }
              });
            },
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          headerStyle: {
            backgroundColor: "#598baf",
            color: "#FFF",
          },
        }}
      />
    </div>
  );
}

export default Listuser;
