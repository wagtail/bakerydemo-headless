import { ImageBlockImage } from './ImageBlock';
import type { RecipeBlock } from './types';

type Cell =
  RecipeBlock<'typed_table_block'>['value']['rows'][number]['values'][number];

function renderCell(cell: Cell) {
  if (cell === null) return null;
  switch (typeof cell) {
    case 'string':
      return <div dangerouslySetInnerHTML={{ __html: cell }} />;
    case 'number':
      return cell.toString();
    case 'object':
      return <ImageBlockImage value={cell} />;
  }
}

export default function TypedTableBlock({
  block: { value },
}: {
  block: RecipeBlock<'typed_table_block'>;
}) {
  const { caption, columns, rows } = value;

  return (
    <figure>
      <table>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={i}>{column.heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.values.map((cell, j) => (
                <td key={j}>{renderCell(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
