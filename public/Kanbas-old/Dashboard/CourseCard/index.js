function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "&hellip;" : str;
}

function CourseCard() {
  const courses = [
    {
      title: "Web Development",
      text: "React JS, Node JS, MongoDB",
      url: "/Kanbas/Courses/Home/screen.html",
      image: "/images/reactjs.webp",
    },
    {
      title: "Information Retrieval",
      text: "Effective search techniques, Elastic search",
      url: "/Kanbas/Courses/Home/screen.html",
      image: "/images/elasticsearch.png",
    },
    {
      title: "Program Design Paradigm",
      text: "Object oriented design, Java, Design patterns",
      url: "/Kanbas/Courses/Home/screen.html",
      image: "/images/java.png",
    },
    {
      title: "Machine Learning",
      text: "Supervised and Unsupervised machine learning",
      url: "/Kanbas/Courses/Home/screen.html",
      image: "/images/ml.jpg",
    },
    {
      title: "Deep Learning",
      text: "CNN, RNN, ANN, Neural Networks",
      url: "/Kanbas/Courses/Home/screen.html",
      image: "/images/dl.jpg",
    },
    {
      title: "Cloud Computing",
      text: "AWS, Azure, GCP, K8",
      url: "/Kanbas/Courses/Home/screen.html",
      image: "/images/cloud.webp",
    },
    {
      title: "Software Engineering",
      text: "Software Development Lifecycle, Java, Flask, MongoDB",
      url: "/Kanbas/Courses/Home/screen.html",
      image: "/images/se.jpg",
    },
    {
      title: "Algorithms",
      text: "Binary search, Sort, Greedy algorithms",
      url: "/Kanbas/Courses/Home/screen.html",
      image: "/images/algo.webp",
    },
  ];
  return `
        <div class="row row-cols-1 row-cols-md-5 g-4">
            ${courses
              .map((course) => {
                return `
                <div class="col" style="width: 300px">
                <div class="card h-100">

                  <button class="btn position-absolute top-0 end-0 me-2 mt-1"">
                    <i class="fa fa-ellipsis-v" style="font-size:20px; color: white"></i>
                  </button>

                  <img src=${course.image} class="card-img-top" style="height: 150px" />
                  
                  <div class="card-body">
                 
                    <a
                      class="card-title text-primary"
                      href=${course.url}
                      style="text-decoration: none; color: light-blue; font-weight: bold"
                    >
                      ${course.title}</a
                    >
                    <p class="card-text">${truncate(course.text, 25)}</p>
                    <div class="d-flex">
                      <i class="fa fa-bullhorn fa-1x text-secondary"></i>
                      <i class="fa fa-file-text-o fa-1x text-secondary mx-4"></i>
                      <i class="fa fa-folder fa-1x text-secondary mx-2"></i>
                    </div>
                  </div>
                </div>
              </div>`;
              })
              .join("")}

          </div>
            `;
}
