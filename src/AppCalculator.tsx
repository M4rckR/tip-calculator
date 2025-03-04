import { FormCalculator } from "./components/FormCalculator"

export const AppCalculator = () => {
  return (
    <main className="font-space-mono bg-m-cyan-grayish-light">
      <div className="container mx-auto h-screen">
        <div className="flex justify-center items-center py-8">
          <h1 className="text-center text-m-cyan-grayish text-2xl tracking-widest">SPLI <br />TTER</h1>
        </div>

        <FormCalculator />
      </div>
    </main>
  )
}
