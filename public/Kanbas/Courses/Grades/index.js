function StudentList() {
  const students = [
    {
      name: "Alice Wonderland",
      a1: 85,
      a2: 90,
      a3: 100,
      a4: 100,
      a5: 98,
      a6: 99,
    },
    {
      name: "Charlie Brown",
      a1: 90,
      a2: 100,
      a3: 89,
      a4: 100,
      a5: 95,
      a6: 100,
    },
    {
      name: "Luke Skywalker",
      a1: 100,
      a2: 100,
      a3: 98,
      a4: 100,
      a5: 99,
      a6: 100,
    },
    {
      name: "Han Solo",
      a1: 96,
      a2: 100,
      a3: 83,
      a4: 100,
      a5: 92,
      a6: 88,
    },
  ];
  return `
  <div class="table-responsive">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>A1 SETUP<br />Out of 100</th>
          <th>A2 HTML<br />Out of 100</th>
          <th>A3 CSS<br />Out of 100</th>
          <th>A4 BOOTSTRAP<br />Out of 100</th>
          <th>A5 JAVASCRIPT<br />Out of 100</th>
          <th>A6 REACT<br />Out of 100</th>
        </tr>
      </thead>
      ${students
        .map((student) => {
          return `
            <tr>
              <td>${student.name}</td>
              <td>${student.a1}%</td>
              <td>${student.a2}%</td>
              <td>
                  <div class="d-flex">
                      <input class="form-control" value="100" />&nbsp;<i
                          class="fa fa-arrow-circle-right"
                      ></i>
                  </div>
              </td>
              <td>${student.a4}%</td>
              <td>${student.a5}%</td>
              <td>${student.a6}%</td>
              </tr>`;
        })
        .join("")}
      </table>
              `;
}
