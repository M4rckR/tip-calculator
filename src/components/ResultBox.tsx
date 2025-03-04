type ResultBoxProps = {
    tipTotal: number;
    totalPerPerson: number;
}

export const ResultBox = ({tipTotal, totalPerPerson}:ResultBoxProps) => {
  return (
    <div className="p-8 space-y-4 flex flex-col justify-between h-full">
        <div>
            <div className="flex justify-between items-center">
                <p className="text-white text-lg">Tip Amount <br />
                    <span className="text-m-cyan-grayish text-base">/ person</span>    
                </p>
                <p className="text-3xl text-m-strong-cyan">
                    {totalPerPerson.toFixed(2)}$
                </p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-white text-lg">Total <br />
                    <span className="text-m-cyan-grayish text-base">/ person</span>    
                </p>
                <p className="text-3xl text-m-strong-cyan">
                    {tipTotal.toFixed(2)}$
                </p>
            </div>
        </div>
        <button className="text-center w-full border border-transparent py-2 bg-m-strong-cyan text-m-dark-cyan rounded cursor-pointer transition-all duration-150 hover:bg-m-dark-cyan hover:border hover:border-m-strong-cyan hover:text-m-strong-cyan">Reset</button>
    </div>
  )
}
