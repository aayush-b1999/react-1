import Chart from "../Charts/Chart";

function ExpenseChart(props) {
  const monthlyexpenses = [
    { label: "JAN", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "JUN", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEP", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];

  for (let expense of props.expenses) {
    // console.log(expense);
    const month = expense.date.getMonth();
    monthlyexpenses[month].value += expense.amount;
  }
  //   console.log(props.expenses);

  return <Chart dataPoints={monthlyexpenses} />;
}

export default ExpenseChart;
