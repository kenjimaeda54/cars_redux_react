# List Cars
Pequena aplicacao para criarmos nossas listas de carros,podemos consultar nossas listas,acompanhar o valor total e deletar itens da lista

## Motivacao
Praticar mais o uso do react redux e redux toolkit


## Feature
- Toda vez que precisamos atualizar nossos dados apenas para representar na UI nao criamos modificacoes nosso modelo de dados
- Essa atualizacao nao pode inferir nosso modelo atual, como exemplo abaixo que preicsava atualizaer o valor do custo
- Reforcei o conceito do redux, quando desejamos soma e execlente funcao a ser usada
- Repara que a logica esta dentro do useSelector
- Abaixa tem alguns hacker por exemplo ao invez de usar um if para desembrulhar um valor possivelmente undefined usei a letra e comercial
- E o bold trabalha na logica inversa na primeria vez que a pessoa inserir nao ficara bold pois e o valor corrente,mas na segunda vez se for inserido mesmo nome ele ficara bold em algum texto abaixo anteior

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



