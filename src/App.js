import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import ExpenseChart from "./Components/transactions/ExpenseChart";
import TransactionForm from "./Components/transactions/TransactionForm";
import TransactionList from "./Components/transactions/TransactionList";
import { GlobalProvider } from "./Context/GloblalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2"> 
            <div className="">
              <h1 className="text-4xl font-bold">Expense Tracker</h1>
              <IncomeExpenses/>
              <Balance/>
              <TransactionForm/>
            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart/>
              <TransactionList/>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
