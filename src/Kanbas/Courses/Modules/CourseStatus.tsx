import React from "react";

export default function CourseStatus() {
  return (
    <div className="col-3 d-none d-xl-block ms-1">
      <div>
        <h3>Course Status</h3>

        <button className="btn btn-light text-dark" type="button">
          <i className="fa fa-ban"></i>&nbsp; Unpublish
        </button>
        <button className="btn btn-success" type="button">
          <i className="fa fa-check-circle text-white"></i>&nbsp; Published
        </button>
      </div>
      <div>
        <button className="btn btn-light my-1 wd-course-home-btn">
          <i className="fa fa-upload mx-2"></i>Import Existing Content
        </button>
        <br />
        <button className="btn btn-light my-1 wd-course-home-btn">
          <i className="fa fa-cloud-upload mx-2"></i>Import from Commons
        </button>
        <br />
        <button className="btn btn-light my-1 wd-course-home-btn">
          <i className="fa fa-bar-chart mx-2"></i>View Course Stream
        </button>
        <br />
        <button className="btn btn-light my-1 wd-course-home-btn">
          <i className="fa fa-bullhorn mx-2"></i>New Announcement
        </button>
        <br />
        <button className="btn btn-light my-1 wd-course-home-btn">
          <i className="fa fa-bar-chart mx-2"></i>New Analytics
        </button>
        <br />
        <button className="btn btn-light my-1 wd-course-home-btn">
          <i className="fa fa-bell-o mx-2"></i>Course Notifications
        </button>
        <br />
        <br />
      </div>
      <div className="d-flex">
        <h5>Coming Up</h5>
        <a href="#" className="mx-4">
          <i className="fa fa-calendar"></i>
          Calendar
        </a>
      </div>

      <ul>
        <li>
          <a href="#">
            <div>
              <i className="fa fa-calendar"></i> Lecture
            </div>
            <div>CS5610.12631.202430</div>
            <div>Feb 8 at 11:45am</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <i className="fa fa-calendar"></i> Lecture
            </div>
            <div>CS4550.12631.202430</div>
            <div>Feb 11 at 11:45am</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <i className="fa fa-calendar"></i> CS5610 06 SP23 Lecture
            </div>
            <div>CS5610.12631.202410</div>
            <div>Feb 15 at 6pm</div>
          </a>
        </li>
      </ul>
    </div>
  );
}
