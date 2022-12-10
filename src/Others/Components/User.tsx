function Profile() {
  return (
    <div className="profile-container content-base">
      <h1 className="title-base">Profile</h1>
      <hr />
      <div className="profile-information">
        <div className="name-container">
          <input className="input-base" type="text" placeholder="First name" />
          <input className="input-base" type="text" placeholder="Last name" />
        </div>
        <div className="other-information">
          <input className="input-base" type="text" placeholder="Country" />
          <input className="input-base" type="text" placeholder="Email" />
          <input className="input-base" type="text" placeholder="User Name" />
          <input className="input-base" type="text" placeholder="Phone number" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
