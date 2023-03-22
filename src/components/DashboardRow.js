import React from "react";

const DashboardRow = ({ user, setSelect, select }) => {
  const handleSelect = (email) => {
    const isSelected = select?.find((s) => s === email);
    if (isSelected) {
      return setSelect([...select.filter((s) => s !== email)]);
    }
    if (!isSelected) {
      return setSelect([...select, email]);
    }
  };
  return (
    <>
      <tr>
        <th>
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={
                select.find((email) => email === user.email) ? true : false
              }
              onChange={() => handleSelect(user.email)}
            />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={`http://localhost:5000/${user.profilePicture[0][0].path}`}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold capitalize">{user.fullName}</div>
              <div className={`capitalize }`}>
                <span
                  className={`px-2 rounded font-semibold ${
                    user.role === "learner"
                      ? "bg-orange-50 text-orange-500"
                      : user.role === "admin"
                      ? "bg-purple-100 text-purple-500"
                      : "bg-sky-100 text-sky-500"
                  }`}
                >
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.age}</td>
        <th>
          <span
            className={`
            px-2 rounded text-md capitalize font-medium
            ${
              user.status === "active"
                ? " text-green-500"
                : user.status === "blocked"
                ? " text-red-500"
                : " text-gray-500"
            }`}
          >
            {user.status}
          </span>
        </th>
      </tr>
    </>
  );
};

export default DashboardRow;
