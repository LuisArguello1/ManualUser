import './Table.css';

function Table({ children, headers, data }) {
  if (headers && data) {
    return (
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="custom-table">
        {children}
      </table>
    </div>
  );
}

export default Table;
