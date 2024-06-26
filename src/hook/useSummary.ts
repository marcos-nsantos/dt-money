import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext.tsx";

export function useSummary() {
  const { transactions } = useContext(TransactionContext);

  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  );
}
