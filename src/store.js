const store ={
    state:{
        todoList:[
            'สวัสดี',
            'มาก',
        ],
        
    },
    addtodo(todo){
        this.state.todoList.push(todo)
        localStorage.setItem('myTodoApp',JSON.stringify(this.state))
    },
    init(){
        const savedstate = localStorage.getItem('myTodoApp')
        if(savedstate){
            this.state = JSON.parse(savedstate) 
        }
    }
}

store.init()

export default store