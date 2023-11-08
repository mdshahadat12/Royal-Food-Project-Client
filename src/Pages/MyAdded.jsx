import AddedFoodCard from "../Components/AddedFood/AddedFoodCard";


const MyAdded = () => {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <AddedFoodCard></AddedFoodCard>
            <AddedFoodCard></AddedFoodCard>
            <AddedFoodCard></AddedFoodCard>
            <AddedFoodCard></AddedFoodCard>
        </div>
    );
};

export default MyAdded;