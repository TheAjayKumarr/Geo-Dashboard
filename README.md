# 📍 Geo Dashboard

A React-based dashboard that displays geospatial project data in a paginated table alongside an interactive map.  
The application uses a **mock API** to simulate backend behavior such as pagination, sorting, and client-side filtering.

---

## 🚀 Features

- 📊 **Paginated Data Table**
  - Handles large datasets (5000+ records)
  - Backend-like pagination using a mock API
  - Page navigation with accurate row ranges

- 🔄 **Sorting**
  - Sort projects by **ID**
  - Sorting is applied before pagination (backend-style behavior)

- 🔍 **Client-side Filtering**
  - Filter projects by status (Active / Inactive)

- 🗺️ **Interactive Map**
  - Displays project locations using latitude & longitude
  - Clicking a table row highlights the corresponding marker on the map
  - Map and table remain synchronized

- ⚙️ **Mock API Layer**
  - Simulates real backend logic
  - Handles pagination, sorting, and filtering
  - Easy to replace with a real API later

---

## 🧠 Project Architecture

```text
src/
│
├── api/
│   └── getData.js        # Simulated backend logic
│
├── data/
│   └── mockData.js       # Centralized mock dataset
│
├── components/
│   ├── DataTable.jsx    # Table with pagination
│   └── MapView.jsx      # Interactive map
│
├── pages/
│   └── Dashboard.jsx    # Main container
│
└── App.jsx
```
## 🗃️ Mock API Design

The mock API mimics a real backend endpoint and is designed to behave like a production-ready service.

### Function Behavior

- Accepts pagination parameters (`page`, `limit`)
- Applies sorting before pagination
- Returns paginated data along with the total record count

### Backend-like Flow

1. Receive request parameters
2. Sort data (by numeric `id`)
3. Paginate the sorted data
4. Return:
   - Current page data
   - Total number of records

This approach ensures pagination behaves realistically even when working with large datasets.

---

## 📌 Sorting Strategy

Projects are sorted using a **numeric `id` field** instead of `projectName`.

### Why?

String-based sorting leads to incorrect ordering, for example:
```bash
Project 1, Project 10, Project 100
```
Using numeric IDs ensures:

- Correct ordering
- Predictable pagination
- Backend-consistent behavior

---

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript
- **State Management:** React Hooks
- **Map Integration:** Leaflet (or similar map library)
- **Styling:** CSS / Tailwind CSS
- **Data Layer:** Custom Mock API

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate into the project
cd project-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📈 Performance Considerations

- Pagination is handled at the mock API level

- Only required records are rendered per page

- Optimized to handle large datasets (5000+ rows)

- Easily replaceable with a real backend API

## 🔮 Future Improvements

- Replace mock API with a real backend (Node.js / Express)

- Add server-side search

- Persist filters and pagination in the URL

- Add marker clustering for dense map data

- Implement loading and error states

## 🧑‍💻 Author

**Ajay Kumar**  
Frontend Developer  
React | JavaScript | UI Engineering
