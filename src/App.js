import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]); //usestate 를 사용하면 component에 상택값을 추가시킬 수 있다. 빈 배열 초기값으로 둠
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState('');
  function onAdd(){
    const todo = {id: currentId, desc};
    setCurrentId(currentId+1);
    setTodoList([...todoList, todo])
  }
  //전개 연산자
  //const arr = [1,2,3];
  // const arr2 = [...arr];
  // const arr2 = [arr[0],arr[1],arr[2]]
  
  function onDelete(e){
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }
  function onSaveToServer(){}


  return (
    <div>
        <h3>할일목록</h3>
        <ul>
          {todoList.map(todo =>(
            <li key={todo.id}>
              <span>{todo.desc}</span>
              <button data-id={todo.id} onClick={onDelete}>삭제</button>
            </li>
          ))}{/* 변수를 사용하려면 중괄호를 해줘야 함. */}
        </ul>
        <input type="text" value={desc} onChange={e => setDesc(e.target.value)}/>
        <button onClick={onAdd}>추가</button>
        <button onClick={onSaveToServer}>서버에 저장</button>
    </div>
  );
}

export default App;
