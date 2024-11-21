import { useSelector } from "react-redux";

const CarValue =()=>{
    const totalCost = useSelector(({cars:{data,searchTerm}})=>{
        const filterdCars= data.filter((car)=>{
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        let cost = 0 
        for (let car of filterdCars){
            cost += car.cost
        }
        return cost
    })

    return <div>
        Total cost is:${totalCost}
    </div>
}
export default CarValue;