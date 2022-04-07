import { Table } from 'react-bootstrap';

import { getDateStringFromTimestamp, getRandomHash } from '../../../utils';
import { Block } from '../../../utils/interfaces';

export interface IProps {
  columns: { [key: string]: string };
  blocks: Block[];
}

const BlocksTable = ({ columns, blocks }: IProps): JSX.Element => {
  const preProcess = (value: string | number, column: string): string | number => {
    if (column === 'time') {
      return getDateStringFromTimestamp(value);
    }
    return value;
  };

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Object.values(columns).map((columnName) => (
            <th key={getRandomHash()}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {blocks.map((block, index) => (
          <tr key={getRandomHash()}>
            <td>{index + 1}</td>
            {Object.keys(columns).map((columnKey) => (
              <td key={getRandomHash()}>{preProcess(block[columnKey], columnKey)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BlocksTable;
