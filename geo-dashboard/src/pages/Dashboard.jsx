import { useEffect, useMemo, useState } from "react";
import { fetchGeoData } from "../api/geoData";
import DataTable from "../components/DataTable";
import MapView from "../components/MapView";

function Dashboard() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortKey, setSortKey] = useState("id");

  const rowsPerPage = 10;

  useEffect(() => {
    fetchGeoData({
      page,
      limit: rowsPerPage,
      sortBy: sortKey,
      sortOrder: "asc",
      status: statusFilter,
    }).then((res) => {
      setData(res.data);
      setTotal(res.total);
    });
  }, [page, sortKey, statusFilter]);

  return (
    <div className="grid text-white m-auto items-center">
      <div className="h-screen grid grid-cols-2">
        <div className="p-4 space-y-3 overflow-auto">
          {/* Filters */}
          <div className="flex gap-4">
            <select
              className="border px-3 py-1 rounded"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <select
              className="border px-3 py-1 rounded"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
            >
              <option value="id">Project ID</option>
              <option value="status">Status</option>
            </select>
          </div>

          <DataTable
            rows={data}
            page={page}
            rowsPerPage={rowsPerPage}
            total={total}
            onPageChange={setPage}
            onRowClick={setSelectedId}
            selectedId={selectedId}
          />
        </div>

        <div className="h-full">
          <MapView
            data={data}
            selectedId={selectedId}
            onMarkerClick={setSelectedId}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
