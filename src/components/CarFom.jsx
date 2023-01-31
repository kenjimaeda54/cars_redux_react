import { useDispatch, useSelector } from "react-redux"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { addCar, changeCost, changeName, clearForm } from "../store"
import { nanoid } from "@reduxjs/toolkit"


export default function CarForm() {
  const dispatch = useDispatch()

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    }
  })

  const handleChangeName = (event) => dispatch(changeName(event.target.value))

  function handleChangeCost(event) {
    const value = parseInt(event.target.value) ?? event.target.value
    dispatch(changeCost(value))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const car = {
      name,
      cost,
      id: nanoid()
    }
    dispatch(addCar(car))
    dispatch(clearForm())
  }


  return (
    <section className="flex p-3.5 gap-3 shadow-lg shadow-black-500/50 flex-col" >
      <h5>Add Car</h5>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2" >
          <label htmlFor="name" >Car name</label>
          <input className="py-2 px-3.5   outline outline-zinc-50 outline-2" placeholder="Name of car" id="name" value={name} onChange={handleChangeName} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cost"  >Cost</label>
          <input className="py-2 px-3.5   outline outline-zinc-50 outline-2" placeholder="Price" id="cost" type="number" value={cost || ""} onChange={handleChangeCost} />
        </div>
        <button type="submit" className="w-[50px] " >
          <IoIosArrowDroprightCircle size={23} color="#475569" className="ml-[-18px] hover:opacity-[0.7] " />
        </button>
      </form>
    </section>
  )
}