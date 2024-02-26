import MealItem from "./MealItem";
import Error from "../Error/Error";
import { fetchMeals } from "../../utils/fetchFunctions";
import { useFetch } from "../../hooks/useFetch";

export default function Meals() {

    const {
        isFetching,
        fetchedData: meals,
        error
    } = useFetch(fetchMeals, []);

  return (
    <>
        {isFetching && <p>Fetching meals...</p>}
        {error && <Error title="An error occured!" message={error.message}/>}
        {meals && <ul id="meals">
            {meals.map(meal => (
                <MealItem key={meal.id} meal={meal}/>
            ))}
        </ul>}
    </>
  )
}