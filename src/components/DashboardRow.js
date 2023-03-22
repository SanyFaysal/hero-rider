import React from "react";

const DashboardRow = ({ user }) => {
  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
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
              <div
                className={`text-sm   capitalize 
                  
                }`}
              >
                <span
                  className={`px-2 rounded-lg ${
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
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default DashboardRow;
