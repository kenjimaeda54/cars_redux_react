# List Cars
Pequena aplicação para inserirmos nossos   carros, podemos consultar, acompanhar o valor somado dos carros inseridos e deletar itens da lista

## Motivação
Praticar mais o uso do React Redux e Redux toolkit


## Feature
- Toda vez que precisamos atualizar nossos dados com inteção de  apenas para representar na UI não podemos modificar nosso modelo de dados
- Essa atualização não pode inferir no modelo atual, como exemplo abaixo que precisava atualizar o valor do custo
- Reforcei o conceito do reduce, quando desejamos somar algo e excelente função a ser usada
- Repara que a lógica está dentro do useSelector
- Abaixo tem alguns hacker, por exemplo, ao invés de usar um if para desembrulhar  valor possivelmente undefined usei a letra e comercial
- Para aplicar bold trabalhei na lógica inversa, na primeira vez que a pessoa inserir não ficara bold, pois e o valor corrente, mas na segunda vez se for inserido mesmo nome ele ficara bold em algum texto abaixo que  foi inserido

```javascript
 import { useSelector } from "react-redux"

export default function CarValue() {
  const value = useSelector(({ cars: { searchTerm, carsList } }) => 
  carsList.filter(it => it.name.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc, car) => acc + car.cost, 0))

  return (
    <section  >
      {value > 0 && <h3 className="text-lg text-black font-regular">Value total: R${value}</h3>}
    </section>
  )
}




//aqui vou aplicar um bold no texto caso ja exista o termo no campo ao inserir o veiculo
 const { cars, name } = useSelector(({ form: { name }, cars: { searchTerm, carsList } }) => {
    let carsFiltered = carsList.filter(it => it.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return {
      cars: carsFiltered,
      name
    }
  })
  
  
  {cars.map(it => {
            const sameNameCar = name && it.name.toLowerCase().includes(name.toLowerCase())
            return (
              <div className="flex  min-w-full items-center   justify-between" key={it.id}>
                <div className="flex gap-x-[30px]">
                  <h4 className={` ${sameNameCar ? "font-bold" : "font-medium"} text-gray-900`}  >{it.name}</h4>
                  <span>${it.cost}</span>
                </div>
                <button type="button" onClick={() => handleRemoveCar(it)} className="hover:opacity-[0.7] bg-transparent" >
                  <FcEmptyTrash size={20} />
                </button>
              </div>
            )
          })} 
  
  
  
```



