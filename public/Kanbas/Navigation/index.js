function KanbasNavigation(location) {
  const links = [
    {
      name: "Account",
      url: "/Kanbas/Account/Profile/screen.html",
    },
    {
      name: "Dashboard",
      url: "/Kanbas/Dashboard/screen.html",
    },
    {
      name: "Courses",
      url: "/Kanbas/Courses/Home/screen.html",
    },
    {
      name: "Calendar",
      url: "#",
    },
    {
      name: "Inbox",
      url: "#",
    },
    {
      name: "History",
      url: "#",
    },
    {
      name: "Studio",
      url: "#",
    },
    {
      name: "Commons",
      url: "#",
    },
    {
      name: "Help",
      url: "#",
    },
  ];
  return `
          <ul>
          ${links
            .map((link) => {
              return `
              <li><a style="color:${link.name === location ? "red" : "black"}" href="${link.url}">${
                link.name
              }</a></li>
                  `;
            })
            .join("")}
  
        </ul>
          `;
}
