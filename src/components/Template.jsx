import React from 'react'

function Template() {
  return (
    <template id="student-template">
      <tr id="students-tr">
        <td class="py-3 text-center student-id"></td>
        <td class="py-3 fw-bold student-name"></td>
        <td class="py-3 student-marked-date"></td>
        <td class="py-3 text-center student-mark"></td>
        <td class="py-3 text-center">
          <p class="h5">
            <span class="badge rounded-pill student-pass-status"></span>
          </p>
        </td>
        <td class="py-3 text-center">
          <button class="btn-edit btn btn-outline-secondary student-edit" data-bs-toggle="modal" data-bs-target="#edit-student-modal"
            data-id="">
            {/* <i class="fa-solid fa-pen" style="pointer-events: none;"></i> */}
          </button>
        </td>
        <td class="py-3 text-center">
          <button class="btn btn-outline-danger student-delete" data-id="">
            {/* <i class="fa-solid fa-trash" style="pointer-events: none;"></i> */}
          </button>
        </td>
      </tr>
    </template>  )
}

export default Template
