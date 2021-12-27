import {
  Table,
  TableHead,
  Names,
  Values,
  Lines,
} from "./TransactionHistory.styled";

export default function TransactionHistory({ transaction }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <Names>Type</Names>
          <Names>Amount</Names>
          <Names>Currency</Names>
        </tr>
      </TableHead>
      <tbody>
        {transaction.map(({ id, type, amount, currency }) => {
          return (
            <Lines key={id}>
              <Values>{type}</Values>
              <Values>{amount}</Values>
              <Values>{currency}</Values>
            </Lines>
          );
        })}
      </tbody>
    </Table>
  );
}
