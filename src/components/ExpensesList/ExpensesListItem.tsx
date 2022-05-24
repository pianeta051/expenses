import { FC } from 'react';
import { Expense } from '../../types/types';

export const ExpensesListItem : FC<Expense> = ({
  day,
  month,
  year,
  name,
  price,
}) => (
  <li className="expense">
    <div className="expenseDate">
      <div className="expenseMonth">
        {month}
        {' '}
        {year}
      </div>
      <div className="expenseDay">{day}</div>
    </div>
    <div className="expenseName">{name}</div>
    <div className="expensePrice">
      $
      {price}
    </div>
  </li>
);
