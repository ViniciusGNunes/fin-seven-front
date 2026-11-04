import { ExpenseStatus } from "@/app/Enums/FinSevenEnums";

export interface IExpenseRead {
  expenseID: number;
  transactionID: number;
  amount: number;
  paidAmount: number;
  remainingAmount: number;
  dueDate: string;
  paidDate?: string | null;
  currentInstallment: number;
  status: ExpenseStatus;
}