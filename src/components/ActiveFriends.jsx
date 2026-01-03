export default function ActiveFriends() {
  return (
    <div className="card p-3 shadow-sm">
      <h5 className="mb-3 text-primary">Active Friends</h5>
      <ul className="list-unstyled">
        {["Mohamed", "Ahmed", "Ali"].map((friend, index) => (
          <li key={index} className="d-flex align-items-center mb-2">
            <span
              className="me-2"
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "green",
              }}
            ></span>
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
}
