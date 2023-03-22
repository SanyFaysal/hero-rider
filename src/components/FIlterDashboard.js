import React from "react";
import { RxCross2 } from "react-icons/rx";

const FIlterDashboard = ({ setFilter, filter }) => {
  const handleSubmit = (e) => {
    setFilter({ ...filter, search: e.target.value.toLowerCase() });
  };
  return (
    <>
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
              onChange={(e) => {
                const age = e.target.value.split(",");
                setFilter({
                  ...filter,
                  ageRange: { gte: age[0], lte: age[1] },
                });
              }}
              id=""
              className=" border focus:outline-none px-2 py-2 rounded"
            >
              <option value={[0, 100]}>All</option>
              <option value={[0, 18]}>0 - 18 </option>
              <option value={[19, 25]}>19 - 25</option>
              <option value={[26, 30]}>26 - 30</option>
              <option value={[31, 35]}>31 - 35</option>
              <option value={[36, 40]}>36 - 40</option>
              <option value={[41, 100]}>41 - 100</option>
            </select>
          </div>

          <div>
            <p>Filter By Name, Email, Phone</p>
            <div className="input-group">
              <input
                type="text"
                name="search"
                value={filter.search}
                onChange={handleSubmit}
                className=" border focus:outline-none px-4 py-2 rounded-lg"
              />
              <button
                type="submit"
                onClick={() => setFilter({ ...filter, search: "" })}
                className="bg-red-200 border focus:outline-none px-2 py-2 rounded-lg"
              >
                <RxCross2 className="text-xl text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FIlterDashboard;
