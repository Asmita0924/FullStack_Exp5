## Experiment 5:
## Experiment 5.1: Component Lazy Loading Using React.lazy and Suspense

## Aim
To implement component lazy loading in a React application using React.lazy() and Suspense in order to improve performance and reduce initial bundle size.

## React provides:
React.lazy() → to dynamically import components
Suspense → to display fallback UI while loading
React.lazy() uses JavaScript’s dynamic import() function to split the code into separate bundles.
Suspense shows a fallback UI (like “Loading…”) until the component finishes loading.

## Technologies Used:
React (Vite or Create React App)
JavaScript (JSX)
CSS

<img width="1902" height="1007" alt="Screenshot 2026-02-13 151531" src="https://github.com/user-attachments/assets/cc9d8447-b2cb-4b62-8e1d-947e59ddab67" />
<img width="1895" height="540" alt="Screenshot 2026-02-16 150731" src="https://github.com/user-attachments/assets/b5e01d17-c9b1-45f8-a489-c6d7da91b8a1" />

## Installation Steps:
Create React App (Using Vite)
``
npm create vite@latest my-app
cd my-app
npm install``

Run the Application
``npm run dev``

## Procedure
Create a React application.
Create a component (Dashboard.jsx).
Replace normal import with React.lazy().
Wrap the lazy component inside Suspense.
Provide fallback UI.
Run the application.
Observe loading message before component appears.

## Limitations
Slight delay during first-time load
Requires error boundaries for production use

## Result
The experiment was successfully implemented.
The Dashboard component was loaded dynamically using React.lazy() and Suspense, improving frontend performance.

## Experiment–2: Route-Based Lazy Loading in SPA

## Aim
To implement route-based lazy loading in a React Single Page Application (SPA) to improve performance and reduce initial bundle size.

## Technologies Used
React
React Router DOM
JavaScript (JSX)
CSS

<img width="1917" height="473" alt="Screenshot 2026-02-14 221027" src="https://github.com/user-attachments/assets/ae166ada-8269-40bb-826a-0944c309e7a5" />
<img width="1912" height="465" alt="Screenshot 2026-02-14 221038" src="https://github.com/user-attachments/assets/43bb0802-1c80-4b93-8c51-c50e99d2cea0" />
<img width="1914" height="638" alt="Screenshot 2026-02-14 221118" src="https://github.com/user-attachments/assets/081e4249-54c0-414c-aed8-6a70d37df570" />
<img width="1918" height="383" alt="Screenshot 2026-02-14 221327" src="https://github.com/user-attachments/assets/b5444121-e279-4336-b86c-d3dd99a499fd" />

## Procedure
Install react-router-dom.
Create multiple route components.
Apply React.lazy() to route components.
Wrap routes inside Suspense.
Run and observe dynamic loading.

## Result
Route-based lazy loading was successfully implemented. Components load only when their respective routes are accessed, improving application performance.




