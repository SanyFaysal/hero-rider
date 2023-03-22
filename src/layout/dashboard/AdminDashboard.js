import React, { useEffect, useState } from "react";
import { useGetAllUsersQuery } from "../../features/auth/authApi";
import DashboardRow from "../../components/DashboardRow";
import Pagination from "../../components/Pagination";
import { FiSearch } from "react-icons/fi";

export default function AdminDashboard() {
  const [pagination, setPagination] = useState();
  const [filter, setFilter] = useState({
    search: "",
    ageRange: "",
    limit: 10,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter({ ...filter, filter: e.target.search.value });
  };
  const { data, isLoading, isSuccess, isError, error } = useGetAllUsersQuery({
    page: pagination,
    limit: filter.limit,
  });
  const users = data?.data || [];
  console.log(filter);
  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <div className="sticky top-0 z-30 border flex justify-between mx-5 my-4 px-6 py-4 rounded-lg items-center bg-gray-100 ">
        <div>
          <label htmlFor="">Limit</label>
          <select
            name=""
            onChange={(e) => setFilter({ ...filter, limit: e.target.value })}
            className=" border focus:outline-none px-2 ml-2 py-2 rounded"
          >
            <option value={5}>5</option>
            <option selected value={10}>
              10
            </option>
            <option value={15}>15</option>
          </select>
        </div>
        <div className="flex gap-x-8 items-center">
          <div>
            <p>Filter by age</p>
            <select
              onChange={(e) =>
                setFilter({ ...filter, ageRange: e.target.value })
              }
              id=""
              className=" border focus:outline-none px-2 py-2 rounded"
            >
              <option value="">All</option>
              <option value="<18">{` <18 `}</option>
              <option value="18 - 25">18 - 25</option>
              <option value="25 - 30">25 - 30</option>
              <option value="30 - 35">30 - 35</option>
              <option value="35 - 40">35 - 40</option>
              <option value=">40">{` >40`}</option>
            </select>
          </div>

          <div>
            <p>Filter By Name, Email, Phone</p>
            <form onSubmit={handleSubmit} className="input-group">
              <input
                type="text"
                name="search"
                className=" border focus:outline-none px-4 py-2 rounded-lg"
              />
              <button
                type="submit"
                className="bg-green-500 border focus:outline-none px-4 py-2 rounded-lg"
              >
                <FiSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto border rounded-lg mx-5 ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
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
