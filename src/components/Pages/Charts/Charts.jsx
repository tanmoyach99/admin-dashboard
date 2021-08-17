import React from "react";
import "./Charts.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = ({ title, data, dataKey, grid }) => {
  return (
    <div className="charts">
      <h3 className="chartsTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />

          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray=" 5 5"></CartesianGrid>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
