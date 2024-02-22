function CourseNavigation(location) {
  const links = [
    {
      name: "Home",
      url: "/Kanbas/Courses/Home/screen.html",
    },
    {
      name: "Modules",
      url: "#",
    },
    {
      name: "Piazza",
      url: "#",
    },
    {
      name: "Zoom Meetings",
      url: "#",
    },
    {
      name: "Assignments",
      url: "/Kanbas/Courses/Assignments/screen.html",
    },
    {
      name: "Grades",
      url: "/Kanbas/Courses/Grades/screen.html",
    },
    {
      name: "Quizzes",
      url: "/Kanbas/Courses/Quizzes/screen.html",
    },
    {
      name: "People",
      url: "/Kanbas/Courses/People/screen.html",
    },
    {
      name: "Panopto Video",
      url: "#",
    },
    {
      name: "Discussions",
      url: "/Kanbas/Courses/Discussions/screen.html",
    },
    {
      name: "Announcements",
      url: "/Kanbas/Courses/Announcements/screen.html",
    },
    {
      name: "Pages",
      url: "/Kanbas/Courses/Pages/screen.html",
    },
    {
      name: "Files",
      url: "/Kanbas/Courses/Files/screen.html",
    },
    {
      name: "Rubrics",
      url: "/Kanbas/Courses/Rubrics/screen.html",
    },
    {
      name: "Outcomes",
      url: "/Kanbas/Courses/Outcomes/screen.html",
    },
    {
      name: "Collaborations",
      url: "/Kanbas/Courses/Collaborations/screen.html",
    },
    {
      name: "Syllabus",
      url: "/Kanbas/Courses/Syllabus/screen.html",
    },
    {
      name: "Settings",
      url: "/Kanbas/Courses/Settings/CourseDetails/screen.html",
    },
  ];

  return `
      <ul class="wd-course-navigation">
          ${links
            .map((link) => {
              return `
              <li class="${link.name === location ? "wd-active" : ""}"><a href="${link.url}">${
                link.name
              }</a></li>
                  `;
            })
            .join("")}
      </ul>
      `;
}
