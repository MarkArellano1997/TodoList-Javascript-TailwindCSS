const add = () => {
    let inputTask = document.getElementById('inputTask').value
    let tasksList = document.getElementById('tasksList')
    let task = document.createElement('li')

    if (inputTask !== "") {
        let classTask = ["bg-gray-200", "mt-2", "mx-4", "p-1", "flex", "justify-between"]
        task.classList.add(...classTask)
        task.innerHTML = `<span id='spanTask' class='cursor-pointer' onclick="taskComplete(this)">${formatText(inputTask)}</span><button onclick="taskDelete(this)" class="bg-red-500 rounded text-white px-1">Eliminar</button>`
        tasksList.appendChild(task)
        document.getElementById('inputTask').value = ""
    } else{
        let errorClass=["text-center", "text-red-500"]
        document.getElementById('error').classList.add(...errorClass)
        document.getElementById('error').innerHTML = 'Todos los campos son obligatorios'
        setTimeout(()=>{
            document.getElementById('error').innerHTML = ''
        },3000)
    }

}

const taskComplete = (task)=>{
    classTask=["line-through", 'opacity-50']
    task.classList.add(...classTask)
}

const formatText = (text)=>{
    return `${text[0].toUpperCase()}${text.slice(1)}`
}

const taskDelete =(task)=>{
    task.parentElement.remove()
}



