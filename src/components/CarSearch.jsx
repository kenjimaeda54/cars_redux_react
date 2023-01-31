import { useState } from "react"
import { onSearchTerm } from "../store"
import { useDispatch, useSelector } from "react-redux"

let maxLetter = 25


export default function CarSearch() {
  const dispatch = useDispatch()
  const [quantityRow, setQuantityRow] = useState(1)
  const searchTerm = useSelector((state) => state.cars.searchTerm)

  function handleSearch(e) {
    dispatch(onSearchTerm(e.target.value))
    if (searchTerm.length > maxLetter) {
      setQuantityRow(previous => previous + 1)
      maxLetter += 25
    }
  }

  function handleKeyBoard(e) {
    if (e.key === "Backspace" && searchTerm.length < maxLetter) {
      setQuantityRow(previous => previous - 1)
      maxLetter -= 25
    }
  }

  return (
    <section className="flex justify-between my-5" >
      <h3 className="text-lg text-black font-regular" >My cars</h3>
      <div className="flex gap-3" >
        <h3 className="text-md text-black font-regular" >Search</h3>
        <textarea
          value={searchTerm}
          className=" resize-none font-normal rounded-sm border-2 border-slate-400  w-52 focus:outline-1  focus:outline focus:outline-slate-100"
          onKeyDown={handleKeyBoard}
          onChange={(e) => handleSearch(e)}
          rows={quantityRow} />
      </div>
    </section>
  )
}