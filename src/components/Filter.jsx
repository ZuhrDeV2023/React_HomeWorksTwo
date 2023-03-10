import React from 'react'

function Main() {
  return (
<div class="row mt-5">
      <div class="col-3">
        <h2 class="h3 mb-4 text-success">Filter</h2>
        <form class="filter" action="#">
          <div class="mb-3">
            <label for="search" class="form-label text-success">Search</label>
            <input type="search" class="form-control text-success" id="search" placeholder="Falonchi" />
          </div>
          <div class="mb-3">
            <label class="form-label text-success">Mark</label>
            <div class="row">
              <div class="col-6">
                <input type="number" class="form-control text-success" id="from" min="0" aria-label="From" placeholder="From" />
              </div>
              <div class="col-6">
                <input type="number" class="form-control text-success" id="to" min="0" aria-label="To" placeholder="To" />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="sortby" class="form-label text-success">Sort by</label>
            <select class="form-select" id="sortby">
              <option value="1">Name</option>
              <option value="2">Mark: to lowest</option>
              <option value="3">Mark: to highest</option>
              <option value="4">Marked date</option>
            </select>
          </div>

          <button id="btnFilter" class="btn btn-success h5 d-block w-100 py-2">Filter</button>
        </form>

      </div>
      <section class="col-9 text-success">
        <div class="d-flex justify-content-between  align-items-baseline">
          <h2 class="h4 mb-4 text-success">Students list</h2>
          <p class="count text-success">Count: 0</p>
        </div>
        <p class="text-end">Average mark: 0%</p>

        <table id="students-table" class="table text-success table-striped align-middle">
          <thead class="align-middle">
            <tr>
              <th class="text-center">ID</th>
              <th>Name & Lastname</th>
              <th>Marked date</th>
              <th class="text-center">Mark</th>
              <th class="text-center">Status</th>
              <th class="text-center">Edit</th>
              <th class="text-center">Delete</th>
            </tr>
          </thead>
          <tbody id="students-table-body"></tbody>
        </table>
      </section>
    </div>
)
}

export default Main
