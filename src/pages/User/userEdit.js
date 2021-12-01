import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function Edituser(props) {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    userdetail: "",
    userphone: "",
  });
  const onSubmit = () => {
    alert(JSON.stringify(user));
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="card card-info mt-4">
          <div
            className="card-header"
            style={{ backgroundColor: "#598baf", color: "white" }}
          >
            <h3 className="card-title">แก้ไขข้อมูลสมาชิก</h3>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <div className="card-body">
              <div className="form-group">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-3 col-form-label"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="กรุณากรอกชื่อสมาชิก"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-3 col-form-label"
                >
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="กรุณากรอกรหัสผ่าน"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <div className="form-group ">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-3 col-form-label"
                >
                  Detail
                </label>
                <textarea
                  type="area"
                  className="form-control"
                  id="userdetail"
                  placeholder="กรุณากรอกรายละเอียด"
                  onChange={(e) =>
                    setUser({ ...user, userdetail: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-3 col-form-label"
                >
                  Phone
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="กรุณากรอกเบอร์โทรศัทพ์"
                  onChange={(e) =>
                    setUser({ ...user, userphone: e.target.value })
                  }
                />
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button
                type="submit"
                className="btn btn-info"
                style={{ backgroundColor: "#598baf", color: "white" }}
              >
                Save
              </button>
              <button
                type="button"
                onClick={(e) => {
                  history.push("/userlist");
                }}
                className="btn btn-default float-right"
              >
                Cancel
              </button>
            </div>
            {/* /.card-footer */}
          </form>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default Edituser;
