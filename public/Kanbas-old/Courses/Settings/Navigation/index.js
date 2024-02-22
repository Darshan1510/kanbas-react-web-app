function SettingsNavigation(location) {
  const links = [
    {
      name: "Course Details",
      url: "/Kanbas/Courses/Settings/CourseDetails/screen.html",
    },
    {
      name: "Sections",
      url: "#",
    },
    {
      name: "Navigation",
      url: "/Kanbas/Courses/Settings/Navigation/screen.html",
    },
    {
      name: "Apps",
      url: "#",
    },
    {
      name: "Feature Options",
      url: "#",
    },
    {
      name: "Integrations",
      url: "#",
    },
  ];

  return `
    <table>
        <tbody>
            <tr>
            ${links
              .map((link) => {
                return `
                <td><a style="color:${link.name === location ? "red" : "black"}" href="${
                  link.url
                }">${link.name}</a></li>
                    `;
              })
              .join("")}
    
              </td>
              </tbody>
            </table>
            `;
}
