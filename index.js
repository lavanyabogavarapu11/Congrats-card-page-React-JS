const element = (
  // Write your code here.
  <div className="congrats-card-container">
    <h1 className="heading"> Congratulation </h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <p className="profile-name"> Kiran V</p>
      <p className="paragraph">
        {" "}
        Vishnu Institute of Education and Technology Bhimavaram{" "}
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="profile-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
