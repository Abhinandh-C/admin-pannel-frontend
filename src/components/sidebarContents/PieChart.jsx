// src/components/PieChart.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReusableChart from "./ReusableChart";

const PieChart = () => {
  const pieData1 = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Monthly Data",
        data: [80, 19, 3, 5, 2, 13, 20, 26, 49, 37, 53, 32],
        backgroundColor: [
          "rgba(255, 190, 132, 0.6)", "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)", "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)", "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  const pieData2 = {
    labels: ["New Visitor", "Returning"],
    datasets: [
      {
        label: "Visitors",
        data: [80, 19],
        backgroundColor: [
          "rgba(10, 255, 50, 0.6)",
          "rgba(254, 20, 235, 0.6)"
        ],
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["KSA", "BD", "US", "IN", "QT"],
    datasets: [
      {
        label: "# of Votes",
        data: [85, 66, 43, 35, 22],
        backgroundColor: [
          "rgba(255, 190, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(205, 116, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 190, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(205, 116, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const commonOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <Container>
      <Row>
        <Col className="border" style={{ height: "400px" }}>
          <ReusableChart type="pie" data={pieData1} options={commonOptions} />
        </Col>
        <Col className="border mx-1" style={{ height: "400px" }}>
          <ReusableChart type="pie" data={pieData2} options={commonOptions} />
        </Col>
        <Col className="border" style={{ height: "400px" }}>
          <ReusableChart
            type="bar"
            data={barData}
            options={{
              ...commonOptions,
              indexAxis: "y",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PieChart;
