import userImg from "../../assets/images/user.png";
export default function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <h6>Logo</h6>
      </div>

      <div className="Navigation">
        <div className="Avater">
          <a href="javascript:void(0);">
            <figure>
              <img src={userImg} alt="avatar" />
            </figure>
            Admin
          </a>
          <ul>
            <li>
              <figure>
                <img src={userImg} alt="avatar" />
              </figure>
              <h4>
                Admin <span>Administrator</span>
              </h4>
            </li>
            <li>
              <a>
                <span>
                  <i className="fa fa-sign-out" />
                </span>
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}
