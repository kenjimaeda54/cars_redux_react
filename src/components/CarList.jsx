import { useDispatch, useSelector } from "react-redux"
import { FcEmptyTrash } from "react-icons/fc"
import { removeCar } from "../store"

export default function CarList() {
  const dispatch = useDispatch()
  //uma maneira de filtrar sem usar regex
  const cars = useSelector(({ cars: { searchTerm, carsList } }) => carsList.filter(it => it.name.toLowerCase().includes(searchTerm.toLowerCase())))

  const handleRemoveCar = (it) => dispatch(removeCar(it.id))

  return (
    <div className="flex  my-12" >
      {cars.length === 0 ?
        <h3>Os seus carros iram aparecer aqui</h3>

        :
        <article className="flex my-1.5 gap-y-5 divide-y divide-solid  flex-col  min-w-full">
          {cars.map(it =>
            <div className="flex  min-w-full items-center   justify-between" key={it.id}>
              <div className="flex gap-x-[30px]">
                <h4>{it.name}</h4>
                <span>${it.cost}</span>
              </div>
              <button type="button" onClick={() => handleRemoveCar(it)} className="hover:opacity-[0.7] bg-transparent" >
                <FcEmptyTrash size={20} />
              </button>
            </div>
          )}
        </article>
      }
    </div>
  )
}