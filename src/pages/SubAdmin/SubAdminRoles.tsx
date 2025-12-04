import { Link } from "react-router-dom";
import DriverImg from "../../assets/images/Driver.png";
import { useGetAvailableRolesQuery } from "../../features/subadmin/subAdminApi";

export default function SubAdminRoles() {
  const { data: roles, isLoading } = useGetAvailableRolesQuery();

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Sub Admin Management</h4>
          <button className="TitleLink">Add Role</button>
        </div>

        <div className="Small-Wrapper">
          <div className="DriverCountList">
            <div className="row gy-4">
              {isLoading ? (
                <div>Loading roles...</div>
              ) : (
                (roles ?? []).map((r) => (
                  <div className="col-lg-4" key={r.id}>
                    <div className="DriverCountBox">
                      <Link to={`/sub-admin/${encodeURIComponent(r.roleName)}`}>
                        <span className="Icon">
                          <img src={DriverImg} />
                        </span>
                        <span className="Text">{r.roleName}</span>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
