type CheckFormProps = {
  children: React.ReactNode;
  type?: string;
  setPercentajeProp?: () => void;
  handleTipChangue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedTip?: number | string;
  percentaje?: number;
  customStatus?: boolean; // Para saber si el campo "Custom" está siendo editado
};

export const CheckForm = ({
  children,
  type,
  setPercentajeProp,
  selectedTip,
  percentaje,
  handleTipChangue,
  customStatus,
}: CheckFormProps) => {
  return (
    <>
      {type === "custom" ? (
        <>
          <input
            className="bg-m-cyan-grayish-light border-none placeholder:text-center placeholder:text-xl text-center placeholder:text-m-cyan-grayish"
            type="text"
            placeholder="Custom"
            onChange={handleTipChangue}
            value={percentaje} // Valor controlado por el porcentaje
          />
        </>
      ) : (
        <div
          onClick={setPercentajeProp}
          className={`${
            customStatus // Si customStatus es true, desmarcamos los botones de porcentaje
              ? "bg-m-dark-cyan w-full rounded text-center py-2 text-white text-xl cursor-pointer"
              : (percentaje === selectedTip)
              ? "bg-m-strong-cyan w-full rounded text-center py-2 text-white text-xl cursor-pointer"
              : "bg-m-dark-cyan w-full rounded text-center py-2 text-white text-xl cursor-pointer"
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};
