Experiment 5:
Experiment 5.1: Component Lazy Loading Using React.lazy and Suspense

Aim
To implement component lazy loading in a React application using React.lazy() and Suspense in order to improve performance and reduce initial bundle size.

Theory
In large React applications, loading all components at once increases the initial bundle size and slows down the application.
Lazy loading is a technique where components are loaded only when they are needed.

React provides:
React.lazy() → to dynamically import components
Suspense → to display fallback UI while loading
React.lazy() uses JavaScript’s dynamic import() function to split the code into separate bundles.
Suspense shows a fallback UI (like “Loading…”) until the component finishes loading.

This technique improves:
Initial load performance
Application efficiency
User experience

Technologies Used:
React (Vite or Create React App)
JavaScript (JSX)
CSS



Installation Steps:
Create React App (Using Vite)
``
npm create vite@latest my-app
cd my-app
npm install``

Run the Application
``npm run dev``

Procedure
Create a React application.
Create a component (Dashboard.jsx).
Replace normal import with React.lazy().
Wrap the lazy component inside Suspense.
Provide fallback UI.
Run the application.
Observe loading message before component appears.

Working
Initially, only the main bundle loads.
When Dashboard component is required, it loads dynamically.
While loading, "Loading..." message is displayed.
After loading completes, the Dashboard component renders.
This reduces the initial JavaScript bundle size.

Advantages
Improves initial load time
Supports code splitting
Better performance
Efficient resource usage

Limitations
Slight delay during first-time load
Requires error boundaries for production use

Result
The experiment was successfully implemented.
The Dashboard component was loaded dynamically using React.lazy() and Suspense, improving frontend performance.

Conclusion
Component lazy loading in React helps optimize application performance by loading components only when required. It is an essential technique for building scalable and efficient React applications.

