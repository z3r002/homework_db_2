import './TableItem.css';

//Компонент команды
function TableItem({number, teamNumber}) {
  return (
      <div className="team" style={{margin : String(number) + 'px'}}>team-{teamNumber}</div>
  );
}

export default TableItem;
