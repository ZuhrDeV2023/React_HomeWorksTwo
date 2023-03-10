import React from 'react'

function header() {
  return (
    <div class="d-flex justify-content-between">
      <h1 class="h2 text-success">Exam results</h1>

      <button class="btn btn-success px-4" data-bs-toggle="modal" data-bs-target="#add-student-modal">
        <span class="me-2 h5">Add new student</span>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>)
}

export default header
