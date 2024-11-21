import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../Store"


const CarList = () => {

    const dispatch = useDispatch()

    const cars = useSelector(({cars:{data,searchTerm}}) => {
        return data.filter((car)=>{
           return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
    })
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }

    const renderedcars = cars.map((car) => {
        return <div key={car.id} className="panel ">
            <p>
                {car.name}-${car.cost}
            </p>
            <button className="button is-danger" onClick={() => { handleCarDelete(car) }}>Delete</button>
        </div>
    })
    return <div>{renderedcars}<hr/></div>
}
export default CarList