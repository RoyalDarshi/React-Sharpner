import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenseItems = [
        {id: 1, date: new Date(2023, 7, 1), location: "Bangalore", title: "Insurance", price: 50},
        {id: 2, date: new Date(2023, 3, 21), location: "Delhi", title: "Book", price: 10},
        {id: 3, date: new Date(2023, 11, 18), location: "Hyderabad", title: "Pen", price: 5},
        {id: 4, date: new Date(2023, 2, 25), location: "Mumbai", title: "Laptop", price: 100},
    ]
    return (<div>
        <Expenses expenses={expenseItems}/>
    </div>);
}

export default App;
