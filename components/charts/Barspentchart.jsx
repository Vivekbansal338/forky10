import React, { useState, useCallback, useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip } from "recharts";
import "./Barspentchart.css";

const Barspentchart = (props) => {
  const { data, handleYearChange, yearoptions } = props;
  const yearsavailable = yearoptions;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = useCallback((entry, index) => {
    setActiveIndex(index);
  }, []);

  const onYearChange = (e) => {
    const year = parseInt(e.target.value);
    handleYearChange(year);
  };

  return (
    <div className="barspentchart-container">
      <div className="barspentchart">
        <div className="barcharttitle">
          <h1>Monthly Spending Analysis</h1>
        </div>
        <div className="yearselector">
          <select name="year" id="year-select" onChange={onYearChange}>
            <option value={-1}>All</option>
            {yearsavailable &&
              yearsavailable.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
        </div>
        <BarChart width={450} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Legend /> */}
          <Tooltip className="bartooltip" />
          <Bar dataKey="monthlyspent" onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                cursor="pointer"
                fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              />
            ))}
          </Bar>
          <Bar dataKey="monthlysavings" onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                cursor="pointer"
                fill={index === activeIndex ? "#8884d8" : "#82ca9d"}
              />
            ))}
          </Bar>
        </BarChart>
        {activeIndex && (
          <div>
            <p className="content">{`Total spending in ${
              activeItem.name
            }: ₹${activeItem.monthlyspent.toFixed(2)}`}</p>
            <p className="content">{`Total saving in ${
              activeItem.name
            }: ₹${activeItem.monthlysavings.toFixed(2)}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Barspentchart;
