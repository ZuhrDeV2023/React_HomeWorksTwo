import React from 'react'

function AddStudent() {
  
  return (
    <div class="modal fade" id="add-student-modal" tabindex="-1" aria-labelledby="addStudentModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addStudentModalLabel">Add student</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="add-form">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" required placeholder="Falonchi" />
              </div>
              <div class="mb-3">
                <label for="lastname" class="form-label">Lastname</label>
                <input type="text" class="form-control" id="lastname" required placeholder="Pismadonchi" />
              </div>
              <div class="mb-3">
                <label for="mark" class="form-label">Mark</label>
                <input type="number" min="0" max="150" class="form-control" id="mark" required placeholder="150" />
              </div>
              <button type="submit" class="btn btn-primary d-block w-100 p-2">Add student</button>
            </form>
          </div>
        </div>
      </div>
      <script src="./js/data.js"></script>
      <script src="./js/main.js"></script>

    </div>
  )
}

export default AddStudent