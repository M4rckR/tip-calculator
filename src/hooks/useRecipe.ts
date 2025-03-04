type useRecipeProps = {
  people: number,
  percentaje: number,
  bill: number
}

export const useRecipe = ({people, percentaje, bill}: useRecipeProps) => {

  const totalRecipe = ((bill * (percentaje / 100)) )
  const totalPerPerson = totalRecipe / people

  return {
      totalRecipe,
      totalPerPerson
  }
  
}
