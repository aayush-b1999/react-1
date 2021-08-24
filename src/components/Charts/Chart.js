import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  // console.log(props.dataPoints);
  const monthlyValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxi = Math.max(...monthlyValues);
  // console.log(maxi);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          label={dataPoint.label}
          key={dataPoint.label}
          value={dataPoint.value}
          max={maxi}
        />
      ))}
    </div>
  );
}

export default Chart;
