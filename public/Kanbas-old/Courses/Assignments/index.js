function AssignmentMenu(assignment) {
  const options = [
    {
      name: "Edit",
    },
    {
      name: "Speed Grader",
    },
    {
      name: "Duplicate",
    },
    {
      name: "Delete",
    },
    {
      name: "Move To...",
    },
    {
      name: "Send To...",
    },
    {
      name: "Copy To...",
    },
    {
      name: "Share to Commons",
    },
  ];

  return `
        <select>
            ${options
              .map((option) => {
                return `
                    <option>${option.name}</a></li>
                    `;
              })
              .join("")}
        </select>
        `;
}
