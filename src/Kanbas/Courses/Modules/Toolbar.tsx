export default function Toolbar() {
  return (
    <div className="row">
      <div className="col d-flex" style={{ justifyContent: "right" }}>
        <button className="btn btn-light me-1" type="button">
          Collapse All
        </button>
        <button className="btn btn-light me-1" type="button">
          View Progress
        </button>
        <div className="dropdown me-1">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-check-circle text-success"></i>&nbsp; Publish All
          </button>
          <ul className="dropdown-menu"></ul>
        </div>
        <button className="btn btn-danger me-1" type="button">
          <i className="fa fa-plus"></i>&nbsp; Module
        </button>
        <button className="btn btn-light" type="button">
          <i className="fa fa fa-ellipsis-v" style={{ color: "#050505" }}></i>
        </button>
      </div>
    </div>
  );
}
