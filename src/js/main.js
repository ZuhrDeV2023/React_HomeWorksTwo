const TOTAL_MARK = 150
const PERCENT = 100;
const LOW_MARK = 40

const addZero = function(number){
    return number < 10 ?"0" + number : number
}

const showDate = function(dateString){
    const date = new Date(dateString);
    return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${addZero(date.getFullYear())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`
}
const studentsTemplate = document.querySelector("#student-template")

const studentFilter = document.querySelector(".filter")




const renderStudent = function(student){
    const {id, name, lastname, markedDate, mark} = student;
    const studentsTable = studentsTemplate.content.cloneNode(true);
    studentsTable.querySelector(".student-id").textContent = id;
    studentsTable.querySelector(".student-name").textContent = `${name} ${lastname}`;
    studentsTable.querySelector(".student-marked-date").textContent = showDate(markedDate);
    
    const markPercent = Math.floor(mark * PERCENT / TOTAL_MARK)
    
    studentsTable.querySelector(".student-mark").textContent = markPercent + "%";

    const studentEditBtn = studentsTable.querySelector(".student-edit")
    studentEditBtn.setAttribute("data-id", id)
    const studentDelBtn = studentsTable.querySelector(".student-delete")
    studentDelBtn.setAttribute("data-id", id)

    
    const status = studentsTable.querySelector(".student-pass-status")
    
    if(markPercent >= LOW_MARK){
        status.textContent = "PASS"
        status.classList.add("text-success")
    }
    else if(markPercent < LOW_MARK){
        status.textContent = "FAIL" 
        status.classList.add("text-danger")
    }
    return studentsTable
}

let showingStudents = students.slice()
const studentsTableBody = document.querySelector("#students-table-body");
const count = document.querySelector('.count')
const middleValue = document.querySelector('.text-end')

const renderStudents = function(){
    studentsTableBody.innerHTML = ""
    const studentsFragment = document.createDocumentFragment();
    showingStudents.forEach(student =>{
        const studentsTable = renderStudent(student);
        studentsFragment.append(studentsTable); 
    })
    studentsTableBody.append(studentsFragment);
}

function middleValueMark(studentsItem){
    const middleValueArr = []
    studentsItem.forEach(item => {
        middleValueArr.push(Math.floor(item.mark * PERCENT / TOTAL_MARK))
    })
    if(showingStudents.length <= 0){
        middleValue.textContent = 'No percent'
        count.textContent = 'No more students'
    }
    else if(showingStudents.length > 0){
        middleValue.textContent = `Average mark: ${Math.floor(middleValueArr.reduce((a,b) => a + b) / middleValueArr.length)}%`
    }
}

middleValueMark(students)

studentFilter.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    showingStudents = students.filter(item => {
        const searchRegExp = new RegExp(evt.target[0].value, "gi");
        const nameLastName = `${item.name} ${item.lastName}`
        return nameLastName.match(searchRegExp)
    })
    if(evt.target[1].value != "" && evt.target[2].value != ""){
        showingStudents = showingStudents.filter(student => evt.target[1].value <= (student.mark * PERCENT / TOTAL_MARK) &&  evt.target[2].value >= (student.mark * PERCENT / TOTAL_MARK))
    }
    if(evt.target[3].value == 1){
        showingStudents = showingStudents.sort((a,b) => a.name.localeCompare(b.name))
    }
    else if(evt.target[3].value == 2){
        showingStudents = showingStudents.sort((a,b) => b.mark - a.mark)
    }
    else if(evt.target[3].value == 3){
        showingStudents = showingStudents.sort((a,b) => a.mark - b.mark)
    }
    else if(evt.target[3].value == 4){
        showingStudents = showingStudents.sort((a,b) => new Date(b.markedDate) - new Date(a.markedDate))
    }    
    middleValueMark(showingStudents)
    countStudent(showingStudents)
    renderStudents() 
    
})

function countStudent(countTable){
    count.textContent = `count: ${countTable.length}`
}

const addForm = document.querySelector("#add-form");
const addStudentModal = document.querySelector("#add-student-modal");
const addStudentElModal = new bootstrap.Modal(addStudentModal)
const btnEdit = document.querySelectorAll('.btn-edit')

addForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nameValue = e.target[0].value;
    const lastNameValue = e.target[1].value;
    const markValue = e.target[2].value;
    
    if(nameValue && lastNameValue && markValue){
        const newStudent = {
            id: Math.floor(Math.random() * 1000),
            name: nameValue,
            lastname: lastNameValue,
            mark: markValue,
            markedDate: new Date()
        }
        students.push(newStudent)
        showingStudents.push(newStudent)
        localStorage.setItem('students', JSON.stringify(students))
    }
    renderStudents();
    e.target.reset();
    addStudentElModal.hide();
    middleValueMark(showingStudents)
    countStudent(showingStudents)
})

    
renderStudents();


const studentTable = document.querySelector("#students-table")
const editName = document.querySelector("#edit-name")
const editLastname = document.querySelector("#edit-lastname")
const editMark = document.querySelector("#edit-mark")
const editForm = document.querySelector("#edit-form")
const editStudentModal = document.querySelector("#edit-student-modal")
const editStudentElModal = new bootstrap.Modal(editStudentModal)

studentTable.addEventListener("click" , function(e){
    if(e.target.matches(".btn-outline-danger")){
        const studentDelId = +e.target.dataset.id
        const studentDelIndex = students.findIndex(item =>{
            return item.id === studentDelId
        })
        students.splice(studentDelIndex , 1)
        showingStudents.splice(studentDelIndex , 1)
        localStorage.setItem('students', JSON.stringify(students))
        countStudent(showingStudents)
        middleValueMark(showingStudents)
        renderStudents()
    }
    else if(e.target.matches(".btn-outline-secondary")){
        const editing = +e.target.dataset.id
        const studentEditIndex = students.find(student => {
            return student.id === editing
        })
        editName.value = studentEditIndex.name 
        editLastname.value = studentEditIndex.lastname 
        editMark.value = studentEditIndex.mark
        editForm.setAttribute("data-editing" , editing);
    }

});

editForm.addEventListener("submit" , function(e){
    e.preventDefault();

    const editingFormId = +e.target.dataset.editing;
    console.log(editingFormId);
    const nameValue = e.target[0].value
    const lastNameValue = e.target[1].value
    const markValue = e.target[2].value

    if(nameValue.trim() || lastNameValue.trim() || markValue.trim()){
        const newStudent = {
            id: Math.floor(Math.random() * 1000),
            name: nameValue,
            lastname: lastNameValue,
            mark: markValue,
            markedDate: new Date()
        }
        const editingItemIndex = students.findIndex(item => {
            return item.id === editingFormId
        })
        students.splice(editingItemIndex, 1 , newStudent)

        const showingStudentIndex = showingStudents.findIndex(item => {
            return item.id === editingFormId
        })
        showingStudents.splice(showingStudentIndex , 1 , newStudent)
        middleValueMark(showingStudents)
        localStorage.setItem('students', JSON.stringify(students))
    }
    editStudentElModal.hide()
    renderStudents()
})

countStudent(showingStudents)