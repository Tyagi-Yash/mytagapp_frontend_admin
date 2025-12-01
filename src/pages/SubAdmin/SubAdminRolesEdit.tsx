export default function SubAdminRolesEdit() {
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Edit Role</h4>
        </div>
        <form>
          <div className="form-group">
            <label>Role Name</label>
            <input className="form-control" defaultValue="Editor" />
          </div>
          <button className="Button">Update</button>
        </form>
      </div>
    </div>
  );
}
