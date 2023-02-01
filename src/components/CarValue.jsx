import { useSelector } from "react-redux"

export default function CarValue() {
  const value = useSelector(({ cars: { searchTerm, carsList } }) => carsList.filter(it => it.name.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc, car) => acc + car.cost, 0))

  return (
    <section  >
      {value > 0 && <h3 className="text-lg text-black font-regular">Value total: R${value}</h3>}
    </section>
  )
}