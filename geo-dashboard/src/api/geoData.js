import mockData from "../data/mockData";

export const fetchGeoData = async ({
  page = 0,
  limit = 10,
  sortBy = "id",
  sortOrder = "asc",
  status = "All",
}) => {
  await new Promise((res) => setTimeout(res, 300));

  let data = [...mockData];

  // Filter
  if (status !== "All") {
    data = data.filter((item) => item.status === status);
  }

  // Sort (number + string safe)
  data.sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];

    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }

    return sortOrder === "asc"
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  // Pagination
  const start = page * limit;
  const paginated = data.slice(start, start + limit);

  return {
    data: paginated,
    total: data.length,
  };
};
