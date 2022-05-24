import { ExpensesList } from './components/ExpensesList/ExpensesList';
import { Header } from './components/Header/Header';
import { getExpenses } from './services/expenses';
import { getNavItems } from './services/header';

export const App = () => {
  const expenses = getExpenses();
  const navItems = getNavItems();
  return (
    <div>
      <Header navItems={navItems} />
      <ExpensesList expenses={expenses} />
    </div>
  );
};
