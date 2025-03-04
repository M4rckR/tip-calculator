import { Dispatch, useState } from "react";
import { tipFormat } from "../../../types";
import { CheckForm } from "./CheckForm";

type InputFormProps = {
  urlImage?: string;
  label: string;
  id: string;
  type: string;
  setTipFormatInput: Dispatch<React.SetStateAction<tipFormat>>;
  tipFormatInput: tipFormat;
};

export const InputForm = ({
  urlImage,
  label,
  id,
  type,
  setTipFormatInput,
  tipFormatInput,
}: InputFormProps) => {
  const [selectedTip, setSelectedTip] = useState<number | string>(tipFormatInput.percentaje);
  const [customStatus, setCustomStatus] = useState<boolean>(false); // Estado para saber si estamos editando el campo "Custom"
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [customTip , setCustomTip] = useState<string>(""); // Estado para manejar el valor del campo Custom

  const tipPercentajes = [5, 10, 15, 20, 25];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value === "" ? 0 : parseFloat(value);

    if (id === "bill") {
      setTipFormatInput({
        ...tipFormatInput,
        bill: numericValue,
      });
    }

    if (id === "numberPeople") {
      setTipFormatInput({
        ...tipFormatInput,
        people: numericValue,
      });
    }
  };

  const handleTipSelection = (percentaje: number | string) => {
    setSelectedTip(percentaje);
    setTipFormatInput({
      ...tipFormatInput,
      percentaje: percentaje as number,
    });
  
    // Si se selecciona un porcentaje predefinido, desactivamos customStatus
    setCustomStatus(false); 
  };

  const handleTipChangue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
// Actualiza el valor del campo customTip
    setCustomStatus(true); // Se activa el estado customStatus al escribir en "Custom"
  
    // Si el valor ingresado coincide con un porcentaje predefinido, desactivamos customStatus
    if (tipPercentajes.includes(parseFloat(value))) {
      setCustomStatus(false);
    }
  
    const customValue = value === "" ? 0 : parseFloat(value);
    setTipFormatInput({
      ...tipFormatInput,
      percentaje: customValue,
    });
  
    setSelectedTip(customValue); // Actualizamos el selectedTip para reflejar el valor de "Custom"
  };

  return (
    <>
      {type === "inputText" ? (
        <div className="flex flex-col items-start">
          <label className="text-m-cyan-grayish pb-1" htmlFor="">
            {label}
          </label>
          <div className="flex items-center bg-m-cyan-grayish-very-light rounded">
            <img className="px-2" src={urlImage} alt="icon-dollar" />
            <input
              id={id}
              className="bg-m-cyan-grayish-very-light border-none focus:outline-none text-end text-m-dark-cyan text-lg"
              type="text"
              value={id === "bill" ? tipFormatInput.bill : tipFormatInput.people}
              onChange={handleInput}
              required
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start">
          <label className="text-m-cyan-grayish pb-2" htmlFor="">
            {label}
          </label>
          <div className="grid grid-cols-2 gap-2 w-full">
            {tipPercentajes.map((percentaje) => (
              <CheckForm
                key={percentaje}
                type="percentaje"
                setPercentajeProp={() => handleTipSelection(percentaje)}
                selectedTip={selectedTip}
                percentaje={percentaje}
                customStatus={customStatus} // Pasa el estado customStatus al CheckForm
              >
                {percentaje}%
              </CheckForm>
            ))}

            <CheckForm
              type="custom"
              customStatus={customStatus} // Pasa customStatus al campo "Custom"
              handleTipChangue={handleTipChangue}
              percentaje={tipFormatInput.percentaje}
            >
              Custom
            </CheckForm>
          </div>
        </div>
      )}
    </>
  );
};
