import React, { useEffect, useState } from "react";
import {
  useGetAllUsersQuery,
  useUpdateUsersRoleMutation,
} from "../../features/auth/authApi";
import DashboardRow from "../../components/DashboardRow";
import Pagination from "../../components/Pagination";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";
import FIlterDashboard from "../../components/FIlterDashboard";
import { FiArrowLeft } from "react-icons/fi";

export default function AdminDashboard() {
  const [pagination, setPagination] = useState();
  const [select, setSelect] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    ageRange: { gte: 0, lte: 100 },
    limit: 10,
  });

  const { data, isLoading, isSuccess, isError, error } = useGetAllUsersQuery({
    page: pagination,
    limit: filter.limit,
    ageRange: filter.ageRange,
    search: filter.search,
  });
  const users = data?.data || [];
  const [
    updateUserRole,
    { data: result, isSuccess: success, isError: isErr, error: err },
  ] = useUpdateUsersRoleMutation();

  useEffect(() => {
    if (success) {
      toast.success("Successfully blocked", { id: "block" });
      setSelect([]);
    }
    if (isErr) {
      toast.error(err?.message, { id: "block" });
    }
  }, [success, isErr, err]);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <p className="mx-5 my-3">
        <FiArrowLeft className="inline" /> Back to Home
      </p>
      <FIlterDashboard filter={filter} setFilter={setFilter} />
      <div className="overflow-x-auto border rounded-lg mx-5 ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <span
                  onClick={() => updateUserRole(select)}
                  className={`${
                    select.length === 0
                      ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                      : "bg-orange-500 cursor-pointer"
                  }  px-2 py-1 rounded-lg `}
                >
                  Block
                </span>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <DashboardRow
                user={user}
                key={user.email}
                select={select}
                setSelect={setSelect}
              />
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
