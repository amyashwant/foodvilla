// import React, { lazy, Suspense, useState } from "react";
// import ReactDOM from "react-dom/client";
// import { Footer } from "./components/Footer";
// import { Header } from "./components/Header";
// import { Body } from "./components/Body";
// import About from "./components/About";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { Error } from "./components/Error";
// import Contact from "./components/Contact";
// import RestaurantMenu from "./components/RestaurantMenu";
// import Profile from "./components/Profile";
// import Shimmer from "./components/Shimmer";
// import UserContext from "./components/Utils/UserContext";
// import Cart from "./components/Cart";
// import { Provider } from "react-redux";
// import store from "./components/Utils/store";
// // import {Provider} from "redux"
// const Instamaart = lazy(() => import("./components/Instamaart"));

// const AppLayout = () => {
//   const [user, setUser] = useState({
//     name: "yashwant",
//     email: "yashwant@gmail.com",
//   });
//   return (
//     <Provider store={store}>
//     <React.Fragment>
//       <UserContext.Provider
//         value={{
//           user: user,
//           setUser: setUser,
//         }}
//       >
//         <Header />
//         <Outlet />
//         <Footer />
//       </UserContext.Provider>
//     </React.Fragment>
//     </Provider>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/", // set as a default path
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//         children: [{ path: "profile", element: <Profile /> }], //route after the parent elemnt about
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/restaurant/:id",
//         element: <RestaurantMenu />,
//       },
//       {
//         path: "/instamaart",
//         element: (
//           <Suspense fallback={<Shimmer />}>
//             <Instamaart />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
