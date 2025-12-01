export default function SubAdminRolesAdd() {
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Add Role</h4>
        </div>
        <form>
          <div className="form-group">
            <label>Role Name</label>
            <input className="form-control" />
          </div>
          <button className="Button">Save</button>
        </form>
      </div>
    </div>
  );
}
