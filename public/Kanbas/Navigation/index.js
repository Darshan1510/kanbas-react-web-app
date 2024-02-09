function KanbasNavigation(location) {
  const links = [
    {
      name: "Account",
      url: "/Kanbas/Account/Profile/screen.html",
      icon: "fa fa-user-circle",
    },
    {
      name: "Dashboard",
      url: "/Kanbas/Dashboard/screen.html",
      icon: "fa fa-tachometer",
    },
    {
      name: "Courses",
      url: "/Kanbas/Courses/Home/screen.html",
      icon: "fa fa-fax",
    },
    {
      name: "Calendar",
      url: "#",
      icon: "fa fa-calendar",
    },
    {
      name: "Inbox",
      url: "#",
      icon: "fa fa-inbox",
    },
    {
      name: "History",
      url: "#",
      icon: "fa fa-history",
    },
    {
      name: "Studio",
      url: "#",
      icon: "fa fa-toggle-right",
    },
    {
      name: "Commons",
      url: "#",
      icon: "fa fa-share-square-o",
    },
    {
      name: "Help",
      url: "#",
      icon: "fa fa-question-circle",
    },
  ];
  return `
          <ul class="wd-kanbas-navigation">
            <li>
              <a href="http://northeastern.edu">
                  <img src="https://imgur.com/TFsDSJy.jpg" alt="Northeastern University Logo">
              </a>
            </li>
          ${links
            .map((link) => {
              return `
              <li class="${link.name === location ? "wd-active" : ""}">
              <a href="${link.url}"> ${
                link.icon
                  ? `<i class="${link.icon}" style=${
                      link.name === "Account" ? "color:white" : ""
                    }></i><br/>`
                  : ""
              } ${link.name}</a></li>
                  `;
            })
            .join("")}
  
        </ul>
          `;
}
