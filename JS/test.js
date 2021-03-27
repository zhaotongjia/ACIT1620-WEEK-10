let todoList = [
    {
        todo : ["clone repo for starter code", "link css and java to html"],
    },
    {
        status: ["complete", "started"]
    }
]

let completedTodos = []

for (select_object of todoList) {
    if (select_object.status === "complete"){
        completedTodos.push(select_object)
    }
}



let todoList = [
    {
        todo : ["clone repo for starter code", "link css and java to html"],
        status: ["complete", "started"]
    }
]

joy = todoList[0]
typeof(joy)

