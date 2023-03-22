import React, { useEffect, useState } from "react";
import { useGetAllUsersQuery } from "../../features/auth/authApi";
import DashboardRow from "../../components/DashboardRow";
import Pagination from "../../components/Pagination";

export default function AdminDashboard() {
  const [pagination, setPagination] = useState();
  const { data, isLoading, isSuccess, isError, error } = useGetAllUsersQuery({
    page: pagination,
    limit: 5,
  });
  const users = data?.data || [];
  console.log(pagination);
  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <DashboardRow user={user} key={user.email} />
            ))}
          </tbody>
        </table>

        <div className="flex my-10 justify-center">
          <Pagination pageFound={data?.page} setPagination={setPagination} />
        </div>
      </div>
    </div>
  );
}
