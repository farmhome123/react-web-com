import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import faker from "faker";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

function Dartboard() {
  return (
    <div className="">
      {" "}
      <div className="row">
        <div className="col-md-5 mx-4 mt-4">
          <div className="card ">
            <div
              className="card-header "
              style={{ backgroundColor: "#598baf" }}
            >
              <h3 className="card-title" style={{ color: "white" }}>
                Line Chart
              </h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart">
                <Line
                  options={options}
                  data={data}
                  style={{
                    minHeight: 300,
                    height: 300,
                    maxHeight: 300,
                    maxWidth: "100%",
                  }}
                />
              </div>
            </div>
            {/* /.card-body */}
          </div>
        </div>

        <div className="col-md-5 mx-4 mt-4">
          <div
            className="card bg-gradient"
            style={{ backgroundColor: "#598baf" }}
          >
            <div className="card-header border-0">
              <h3 className="card-title" style={{ color: "white" }}>
                <i className="fas fa-th mr-1" />
                ตั้งค่าระบบ
              </h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-sm"
                  data-card-widget="collapse"
                  style={{ color: "white" }}
                >
                  <i className="fas fa-minus" />
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn  btn-sm"
                  data-card-widget="remove"
                  style={{ color: "white" }}
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="setting1"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="setting2"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="setting3"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="setting4"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="setting5"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="setting6"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="setting7"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="setting8"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="setting9"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-4"></div>
                <div className="col-4">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="setting10"
                  />
                </div>
                <div className="col-4"></div>
              </div>
            </div>

            <div className="card-footer bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dartboard;
