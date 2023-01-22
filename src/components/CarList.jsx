import { useSelector } from "react-redux"

export default function CarList() {
  const cars = useSelector((state) => state.cars)

  console.log(cars)

  return (
    <h1>Car list</h1>
  )
}