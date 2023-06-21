// "use client";
// import { useSelector } from "react-redux";
// import { Pie } from "react-chartjs-2";
// import { useEffect, useState } from "react";
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   ArcElement,
// } from "chart.js";

// Chart.register(CategoryScale, LinearScale, PointElement, ArcElement);

// const SpentAnalysis = () => {
//   const orders = useSelector((state) => state.orderHistory.orders);

//   // Calculate total amount spent on each recipe
//   const spentOnRecipes = orders.reduce((acc, order) => {
//     order.items.forEach((item) => {
//       if (!acc[item.title]) {
//         acc[item.title] = 0;
//       }
//       acc[item.title] += item.price * item.quantity;
//     });
//     return acc;
//   }, {});

//   // Convert spentOnRecipes object to an array of { title, totalAmount } objects
//   const spentOnRecipesArray = Object.entries(spentOnRecipes).map(
//     ([title, totalAmount]) => ({
//       title,
//       totalAmount,
//     })
//   );

//   // Sort spentOnRecipesArray by totalAmount
//   spentOnRecipesArray.sort((a, b) => b.totalAmount - a.totalAmount);

//   // Get top 5 recipes by totalAmount
//   const topRecipes = spentOnRecipesArray.slice(0, 5);

//   // Convert topRecipes to Chart.js data format
//   const chartData = {
//     labels: topRecipes.map((recipe) => recipe.title),
//     datasets: [
//       {
//         label: "Total Amount Spent",
//         data: topRecipes.map((recipe) => recipe.totalAmount),
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const [updatedData, setUpdatedData] = useState(chartData);

//   useEffect(() => {
//     setUpdatedData(chartData);
//   }, [chartData]);

//   // const options = {
//   //   plugins: {
//   //     legend: {
//   //       position: "bottom",
//   //     },
//   //   },
//   // };

//   const options = {
//     plugins: {
//       title: {
//         display: true,
//         text: "Top 5 Recipes by Total Amount Spent",
//         font: {
//           size: 18,
//           weight: "bold",
//         },
//         position: "top",
//       },
//       legend: {
//         position: "bottom",
//       },
//     },
//   };

//   return (
//     <div>
//       <h2>Spent Analysis</h2>
//       {updatedData && <Pie data={updatedData} options={options} />}
//     </div>
//   );
// };

// export default SpentAnalysis;

"use client";
import { useSelector } from "react-redux";
import { Bar, Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement, // Add this import for the "Bar" element
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement
); // Register the "Bar" element

// Rest of the code...

const SpentAnalysis = () => {
  const orders = useSelector((state) => state.orderHistory.orders);

  // Calculate total amount spent on each month
  const monthlySpending = Array(12).fill(0);

  orders.forEach((order) => {
    const month = new Date(order.date).getMonth();
    monthlySpending[month] += order.totalAmount;
  });

  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Money Spent",
        data: monthlySpending,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const [updatedData, setUpdatedData] = useState(chartData);

  useEffect(() => {
    setUpdatedData(chartData);
  }, [chartData]);

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  // Calculate total amount spent on each recipe
  const spentOnRecipes = orders.reduce((acc, order) => {
    order.items.forEach((item) => {
      if (!acc[item.title]) {
        acc[item.title] = 0;
      }
      acc[item.title] += item.price * item.quantity;
    });
    return acc;
  }, {});

  // Convert spentOnRecipes object to an array of { title, totalAmount } objects
  const spentOnRecipesArray = Object.entries(spentOnRecipes).map(
    ([title, totalAmount]) => ({
      title,
      totalAmount,
    })
  );

  // Sort spentOnRecipesArray by totalAmount
  spentOnRecipesArray.sort((a, b) => b.totalAmount - a.totalAmount);

  // Get top 5 recipes by totalAmount
  const topRecipes = spentOnRecipesArray.slice(0, 5);

  // Convert topRecipes to Chart.js data format
  const pieChartData = {
    labels: topRecipes.map((recipe) => recipe.title),
    datasets: [
      {
        label: "Total Amount Spent",
        data: topRecipes.map((recipe) => recipe.totalAmount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const [updatedPieData, setUpdatedPieData] = useState(pieChartData);

  useEffect(() => {
    setUpdatedPieData(pieChartData);
  }, [pieChartData]);

  const pieOptions = {
    plugins: {
      title: {
        display: true,
        text: "Top 5 Recipes by Total Amount Spent",
        font: {
          size: 18,
          weight: "bold",
        },
        position: "top",
      },
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <h2>Spent Analysis</h2>
      <div>
        <h3>Monthly Spending</h3>
        {updatedData && <Bar data={updatedData} options={barOptions} />}
      </div>
      <div>
        <h3>Top 5 Recipes by Total Amount Spent</h3>
        {updatedPieData && <Pie data={updatedPieData} options={pieOptions} />}
      </div>
    </div>
  );
};

export default SpentAnalysis;
