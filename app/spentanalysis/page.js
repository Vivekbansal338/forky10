"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/app/firebase.config";
import Barspentchart from "@/components/charts/Barspentchart";
import "./page.css";

function SpentAnalysis(props) {
  const user = useSelector((state) => state.userauth.user);
  const uid = user ? user.uid : null;
  const [selectedyear, setselectedYear] = useState(-1); // -1 means all years
  const [yearsavailable, setyearsavailable] = useState(0);

  const [data, setData] = useState([
    {
      name: "Jan",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sep",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Oct",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Dec",
      monthlyspent: 0,
      monthlysavings: 0,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ]);

  function handleYearChange(year) {
    setselectedYear(year);
  }

  useEffect(() => {
    let unsubscribe;

    if (uid) {
      const orderhistoryRef = collection(db, "users", uid, "orderhistory");
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          monthlyspent: 0,
          monthlysavings: 0,
        }))
      );
      unsubscribe = onSnapshot(orderhistoryRef, (querySnapshot) => {
        const uniqueYears = new Set();
        querySnapshot.forEach((doc) => {
          const historydata = doc.data();
          const date = historydata.Date.toDate();
          const month = date.getMonth();
          const year = date.getFullYear();
          uniqueYears.add(year);

          setData((prevData) =>
            prevData.map((item, index) => {
              if (selectedyear === -1) {
                if (index === month - 1) {
                  return {
                    ...item,
                    monthlyspent:
                      item.monthlyspent + historydata.totalamountpaid,
                    monthlysavings:
                      item.monthlysavings + historydata.discountgiven,
                  };
                }
              } else {
                if (index === month - 1 && year === selectedyear) {
                  return {
                    ...item,
                    monthlyspent:
                      item.monthlyspent + historydata.totalamountpaid,
                    monthlysavings:
                      item.monthlysavings + historydata.discountgiven,
                  };
                }
              }
              return item;
            })
          );
        });
        setyearsavailable(Array.from(uniqueYears).sort((a, b) => b - a));
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [uid, selectedyear]);

  return (
    <div className="spent-analysis-container">
      <div className="page_title_container">
        <h1 className="page_title">Spent Analysis</h1>
      </div>
      <div className="charts_container">
        <div className="monthlyspentbarchart">
          <Barspentchart
            data={data}
            handleYearChange={handleYearChange}
            yearoptions={yearsavailable}
          />
        </div>
      </div>
    </div>
  );
}

export default SpentAnalysis;
