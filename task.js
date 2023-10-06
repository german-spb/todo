const text = document.getElementById('task__input')
const task = document.getElementById('tasks__list')
const remove = document.querySelectorAll('.task__remove')

text.addEventListener('keydown', (e) => {                           // добавление по нажатию клавиши Enter
    if (e.key == 'Enter' && text.value.length != 0){
        task.innerHTML += 
         `<div class="task">
            <div class="task__title">
              ${text.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`
        text.value = null
    } 
})

document.addEventListener('click', delTask)                        // удаление задачи
function delTask (event) {
    let tar = event.target
    if (Array.from(tar.classList).includes('task__remove')){
      tar.parentElement.remove()
    }
}

const btn = document.getElementById('tasks__add')                  // добавлене задачи по клику на кнопку "Добавить"
btn.addEventListener('click', addTask)
function addTask () {
    if (text.value.length !=0){
        task.innerHTML += 
         `<div class="task">
            <div class="task__title">
              ${text.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`
        text.value = null
    }
}