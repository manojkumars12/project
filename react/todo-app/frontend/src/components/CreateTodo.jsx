export function CreateTodo(){
    return <div>
        <input type="text" placeholder="title"></input><br/>
        <input type="text" placeholder="description"></input><br/>
        <button onClick={() => {
            fetch("http://localhost:3000/todos").then(
                async function(res){
                  const json = await res.json();
                  setTodos(json.todos);
                })
        }}>Add a todo</button>
    </div>
}
