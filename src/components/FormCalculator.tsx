
import { InputForm } from "./inputs/forms/InputForm"
import { ResultBox } from "./ResultBox"
import { tipFormat, tipTotal } from "../types/index"
import { useEffect, useState } from "react"

export const FormCalculator = () => {

  const [tipFormatInput, setTipFormatInput] = useState<tipFormat>({
    bill: 0,
    percentaje: 5,
    people: 0
  })  

  const [totalRecipe, setTotalRecipe] = useState<tipTotal>({
    tipTotal: 0,
    totalPerPerson: 0
  })

  useEffect(() => {
    if(tipFormatInput.bill > 0 && tipFormatInput.people > 0){
        setTotalRecipe({
            tipTotal: (tipFormatInput.bill * (tipFormatInput.percentaje / 100)),
            totalPerPerson: (tipFormatInput.bill * (tipFormatInput.percentaje / 100)) / tipFormatInput.people
        })
        }
    }, [tipFormatInput])
    

  return (
    <section className="bg-white rounded-lg max-w-[750px] mx-auto h-auto">
        <form className="p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="space-y-4 w-full h-full md:w-1/2">
                <InputForm
                    urlImage="/img/icon-dollar.svg"
                    label="Bill"
                    id="bill"
                    type= "inputText"
                    setTipFormatInput={setTipFormatInput}
                    tipFormatInput = {tipFormatInput}
                />      
                <InputForm
                    label="Select Tip %"
                    id="tip"
                    type = "inputRadio"
                    setTipFormatInput={setTipFormatInput}
                    tipFormatInput = {tipFormatInput}
                />
                <InputForm
                    urlImage="/img/icon-person.svg"
                    label="Number of People"
                    id="numberPeople"
                    type = "inputText"
                    setTipFormatInput={setTipFormatInput}
                    tipFormatInput = {tipFormatInput}
                />
            </div>
            <div className="w-full md:w-1/2 md:h-[354px] bg-m-dark-cyan rounded-lg">
                <ResultBox 
                    tipTotal = {totalRecipe.tipTotal}
                    totalPerPerson = {totalRecipe.totalPerPerson}
                />
            </div>
        </form>

    </section>
  )
}
 