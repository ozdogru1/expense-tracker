import {useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

 
function Donut({total,incomeTotal,expenseTotal}) {
  const [data] = useState({
    datasets: [
      {
        data: [incomeTotal,expenseTotal],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
    labels: ["income", "expense",  ],
  });
  
  return (
    <div style={{ width: "30%", height: "50%" }}>
       <Doughnut data={data} />
     </div>
  );
}

export default Donut;
