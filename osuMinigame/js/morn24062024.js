// ПОИСК ПО СЕЛЕКТОРУ
const contSrch = document.querySelector('.container')
const scoreSrch = document.querySelector('.score')
// const tabloSrch = document.querySelector('.tablo')
const scoreText = document.querySelector('.scoreText')
const restarts = document.querySelector('.restart-button')

const scoreTab = document.querySelector('.scoreTab')

let count = 0
let resetCount = 0


//ФУНКЦИИ/////////////////////////////////////////
// function scoreListAdd(){
//   const listCreate = document.querySelector('.listScores')
//   const listCr = document.createElement('li')
//   listCreate.append(listCr)
//   listCr.textContent = count
// }



function circleOnclick(circleCr, tabloSrch){
    circleCr.classList.add('hidden')
    count++
    scoreSrch.textContent = count
    if (scoreSrch.textContent >= 42){
      scoreText.textContent = 'YOU WON!!!'
    }
}


function circleCreate(){
    const circleCr = document.createElement('div')
    circleCr.classList.add('circle')
    contSrch.append(circleCr)
    circleCr.addEventListener('mousedown', ()=> circleOnclick(circleCr))
}

// function saveRecords(){
//   const saveButton = document.querySelector('.save')
//   saveButton.addEventListener('click', scoreListAdd)
// }




function resetAll(){
  count = 0
  scoreSrch.textContent = count
  scoreText.textContent = 'Score:'
  const resClass = document.querySelectorAll('.hidden')
  resClass.forEach((item)=>{
    item.classList.remove('hidden')
  })
}
restarts.addEventListener('click', resetAll)




function scoreListAdd(){
  const listCreate = document.querySelector('.listScores')
  const listCr = document.createElement('li')
  listCreate.append(listCr)
  listCr.textContent = count
  // const saveButton = document.querySelector('.save')
  // saveButton.addEventListener('click', scoreListAdd)
}

function saveRecords(){
  const saveButton = document.querySelector('.save')
  saveButton.addEventListener('click', scoreListAdd)
}
saveRecords()



//ЗаLOOPы//////

for(let i = 0;i < 42;i++){
  circleCreate()
}