function Table(props) {
  let titles = props.titles;
  let rows = props.rows;

  let buttonsStyle = {
    borderStyle: "none",
    backgroundColor: "transparent"
  }

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            {titles.map((title) => (
              <th key={title} scope="col">{title}</th>
            ))}
            <th key="edit" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} >
              {row.map((item) => (
                <td key={item}>{item}</td>
              ))}
              <td>
                <button onClick={props.showModal} style={buttonsStyle}>
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button onClick={() => props.delFunction(rows[2])} style={buttonsStyle}>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
