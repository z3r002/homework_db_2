import './App.css';
import TableItem from './components/TableItem';

function App() {
  let length = 10; // количество команд

  function drawItem(length){
    let number = length;
    let arr = []; // результирующий массив

    for(let i = 0; i < Math.log2(length) + 1; i++){  //Math.log2 возвращает по основанию 2 логарифм количества команд
      let array = []; //промежуточный массив
      for(let j = 0; j < number; j++){
        array.push(j);
      }
      number /= 2; //разделение на 2 соревнующиеся команды
      arr.push(array);
    }
    return arr;
  }
  return (
    <div className="App">
       <div className="item-wrapper">
          {drawItem(length).map((item, index) => {
            let number = (20 * index) + 1; // увелечение margin для визуального представления команд
            return (<div className="round">
              {item.map(it => <TableItem className="team" teamNumber={it} number={number} />)}
            </div>);
          })}
       </div>
    </div>
  );
}

export default App;
