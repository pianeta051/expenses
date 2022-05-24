import { FC } from 'react';
import { Expense } from '../../types/types';
import { ExpensesListItem } from './ExpensesListItem';

type ExpensesListProps = {
  expenses: Expense[];
};

export const ExpensesList : FC<ExpensesListProps> = ({
  expenses,
}) => (
  <ul>
    {
      expenses.map((expense) => (
        <ExpensesListItem
          key={expense.name}
          {...expense}
        />
      ))
    }
  </ul>
);
