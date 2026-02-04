const mockData = Array.from({ length: 5000 }, (_, i) => ({
  id: i + 1,
  projectName: `Project ${i + 1}`,
  latitude: 20 + Math.random() * 10,
  longitude: 70 + Math.random() * 10,
  status: i % 2 === 0 ? "Active" : "Inactive",
  lastUpdated: `2025-01-${(i % 28) + 1}`
}));

export default mockData;
