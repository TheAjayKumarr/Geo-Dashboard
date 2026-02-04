# 📍 Geo Dashboard

A React-based Geo Data Dashboard that visualizes spatial and tabular project data using a paginated table and an interactive map.  
The application uses a **mock API layer** to simulate backend behavior such as pagination, sorting, and filtering while handling large datasets efficiently.

This project was built as part of an assignment to demonstrate frontend architecture, performance handling, and UI–map synchronization.

---

## 🎯 Objective

Build a React-based dashboard that:
- Consumes spatial + tabular data
- Displays data in a paginated table
- Visualizes locations on an interactive map
- Keeps table and map interactions synchronized
- Handles large datasets (5000+ records) without lag

---

## 🚀 Features

### 📊 Data Table
- Paginated table handling **5000+ records**
- Backend-like pagination via mock API
- Displays:
  - Project Name
  - Latitude
  - Longitude
  - Status
  - Last Updated
- Accurate row range display (e.g., `1–10 of 5000`)

### 🔄 Sorting
- Sorting applied **before pagination**
- Uses numeric `id` for predictable and correct ordering

### 🔍 Client-side Filtering
- Filter projects by status:
  - All
  - Active
  - Inactive

### 🗺️ Map Integration
- Interactive map built using **Leaflet**
- Plots markers using latitude & longitude
- Clicking a table row:
  - Highlights the corresponding marker
  - Automatically pans the map
- Clicking a map marker:
  - Highlights the corresponding table row

### ⚙️ Mock API Layer
- Simulates real backend logic
- Handles:
  - Pagination
  - Sorting
  - Filtering
- Easily replaceable with a real API in the future

---

## 🧠 Architectural Decisions

### Why a Mock API?
- The assignment required paginated data from a backend-like source
- The mock API simulates real-world behavior without requiring a server
- Keeps UI logic clean and separated from data logic

### Why Client-side State Only?
- The dataset is manageable (5000 rows)
- React hooks are sufficient
- Avoids unnecessary complexity (Redux)

### Why Numeric Sorting?
Sorting by `projectName` leads to incorrect ordering:
```bash
Project 1, Project 10, Project 100
```
Using a numeric `id` ensures:
- Correct ordering
- Predictable pagination
- Backend-consistent behavior

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
### This structure ensures:

- Clear separation of concerns

- Scalable and readable codebase

- Easy replacement of mock API with a real backend

---

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

## Screenshots / Demo

### Screenshots demonstrating:

- Paginated table

- Map and table synchronization

- Marker highlighting

## 📁 Location:
```bash
/screenshots
```

---

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript
- **State Management:** React Hooks
- **Map Integration:** Leaflet
- **Styling:** CSS / Tailwind CSS, MUI
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
---
## 📈 Performance Considerations

- Pagination is handled at the mock API level

- Only required records are rendered per page

- Optimized to handle large datasets (5000+ rows)

- Easily replaceable with a real backend API

- Suitable for real-world datasets

---

## ⏱️ Time Spent

**~4–5 hours**

### Includes:

- Project setup

- Mock API design

- Pagination and sorting logic

- Map integration

- UI–map synchronization

- Debugging and documentation

---

## 🔮 Future Improvements

- Replace mock API with a real backend (Node.js / Express)

- Add server-side search

- Persist filters and pagination in the URL

- Add marker clustering for dense map data

- Implement loading and error states

---

## 🧑‍💻 Author

**Ajay Kumar**  
Frontend Developer  
React | JavaScript | UI Engineering
