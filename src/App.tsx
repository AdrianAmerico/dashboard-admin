import * as React from "react"
import { Chart } from 'react-google-charts'
import _ from "lodash"
import './index.scss'

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7]
]
interface IManufacture {
  manufacturer: string,
  year: number,
  color: string,
  price: number
}

const App = () => {
  const [chartData, setChartData] = React.useState<(string | number)[][]>([])

  const loadData = React.useCallback((data: IManufacture[]) => {
    const values = _.groupBy(data, (value) => value.manufacturer
    )

    const result = _.map((values), (__, key) => [key, _.sumBy(values[key], (v) => v.price)]
    )
    setChartData([['Manufacturer', 'Sales'], ...result])
  }, [])

  React.useEffect(() => {
    const data: IManufacture[] = [
      { manufacturer: "Ford", year: 2012, color: "red", price: 20000 },
      { manufacturer: "Chevy", year: 2013, color: "yellow", price: 30000 },
      { manufacturer: "Chevy", year: 2014, color: "white", price: 40000 },
      { manufacturer: "Ford", year: 2015, color: "black", price: 50000 },
      { manufacturer: "Chevy", year: 2016, color: "red", price: 60000 },
      { manufacturer: "Ford", year: 2017, color: "red", price: 70000 },
      { manufacturer: "Chevy", year: 2018, color: "yellow", price: 80000 },
      { manufacturer: "Ford", year: 2019, color: "black", price: 90000 },
      { manufacturer: "Chevy", year: 2020, color: "red", price: 100000 },
      { manufacturer: "Ford", year: 2021, color: "red", price: 110000 },
      { manufacturer: "Chevy", year: 2022, color: "yellow", price: 120000 },
      { manufacturer: "Ford", year: 2023, color: "black", price: 130000 },
      { manufacturer: "Chevy", year: 2024, color: "red", price: 140000 },
      { manufacturer: "Ford", year: 2025, color: "red", price: 150000 },
      { manufacturer: "Chevy", year: 2026, color: "yellow", price: 160000 },
      { manufacturer: "Ford", year: 2027, color: "black", price: 170000 },
      { manufacturer: "Chevy", year: 2028, color: "red", price: 180000 },
      { manufacturer: "Ford", year: 2029, color: "red", price: 190000 },
      { manufacturer: "Ferrari", year: 2030, color: "yellow", price: 200000 },
      { manufacturer: "Ford", year: 2031, color: "black", price: 210000 },
      { manufacturer: "Chevy", year: 2032, color: "red", price: 220000 },
    ]
    loadData(data)
  }, [data, loadData])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Chart chartType="PieChart" data={chartData} width={"100%"} height="400px" />
    </div>
  )
}

export default App
