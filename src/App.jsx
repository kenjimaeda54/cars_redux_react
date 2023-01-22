import CarForm from "./components/CarFom"
import CarList from "./components/CarList"
import CarSearch from "./components/CarSearch"
import CarValue from "./components/CarValue"

function App() {


  return (
    <div className="flex flex-col p-5 gap-4  min-w-full min-h-full" >
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  )
}

export default App
