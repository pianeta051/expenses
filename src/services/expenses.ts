import { Expense } from '../types/types';

export const getExpenses = () : Expense[] => [
  {
    name: 'Toilet Paper',
    price: 94.12,
    day: 14,
    month: 'August',
    year: 2020,
  },
  {
    name: 'New TV',
    price: 799.49,
    day: 12,
    month: 'March',
    year: 2021,
  },
  {
    name: 'Car Insurance',
    price: 294.67,
    day: 28,
    month: 'March',
    year: 2021,
  },
  {
    name: 'New Desk (Wooden)',
    price: 450,
    day: 12,
    month: 'June',
    year: 2021,
  },
];
