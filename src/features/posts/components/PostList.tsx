import { Link } from "react-router-dom";

export default function PostList() {
  // replace with RTK Query
  const items = [
    { id: 1, title: "Item A", desc: "Desc A" },
    { id: 2, title: "Item B", desc: "Desc B" },
  ];

  return (
    <div className="TableList">
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it, idx) => (
            <tr key={it.id}>
              <td>{idx + 1}</td>
              <td>{it.title}</td>
              <td>
                <div className="Actions">
                  <Link className="Blue" to="#">
                    <i className="fa-regular fa-eye" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
