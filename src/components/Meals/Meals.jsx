import MealItem from "./MealItem";
import Error from "../Error/Error";
import { fetchMeals } from "../../utils/http";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading/Loading";

export default function Meals() {

    const {
        isFetching,
        fetchedData: meals,
        error
    } = useFetch(fetchMeals, []);

  return (
    <>
        {isFetching && <Loading loadingText="meals" />}
        {error && <Error title="An error occured!" message={error.message}/>}
        {meals && <ul id="meals">
            {meals.map(meal => (
                <MealItem key={meal.id} meal={meal}/>
            ))}
        </ul>}
    </>
  )
}