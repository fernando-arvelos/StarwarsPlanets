import React, { useContext } from 'react';
import DataContext from '../context/UseContext';
import TableBody from './TableBody';

export default function Table() {
  const { data } = useContext(DataContext);
  const titles = data.length > 0 && Object.keys(data[0]);

  return (
    <div>
      {
        data.length > 0 && (
          <table>
            <thead>
              <tr>
                {
                  titles.length > 0 && titles.map((title) => (
                    <th key={ title }>{ title }</th>
                  ))
                }
              </tr>
            </thead>
            <TableBody />
          </table>

        )
      }
    </div>
  );
}
