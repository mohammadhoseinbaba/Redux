import { useDispatch, useSelector } from "react-redux"
import { addCar, changeCost, changeName } from "../Store"

const CarForm = () => {


    const dispatch = useDispatch()

    const name = useSelector((state) => {
        return state.form.name
    })


    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost))
    }

    const cost = useSelector((state) => {
        return state.form.cost
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addCar({name,cost}))

    }

    return <div className="car-form panle">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className='field'>
                    <label className="lable">Name</label>
                    <input className="input is-expanded" value={name} onChange={handleNameChange} />
                </div>
                <div className='field'>
                    <label className="lable">cost</label>
                    <input className="input is-expanded" value={cost || ""} type="number" onChange={handleCostChange} />
                </div>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
}
export default CarForm