import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../Store";


const CarSearch = () => {

    const dispatch = useDispatch()

    const search = useSelector((state) => {
        return state.cars.changeSearchTerm
    })

    const handleSearchChange = (event) => {

        dispatch(changeSearchTerm(event.target.value))
    }


    return <div>
        <h3>My cars</h3>
        <div>
        <p>Search</p>
        <input onChange={handleSearchChange} value={search} />
        </div>
    </div>
}
export default CarSearch;