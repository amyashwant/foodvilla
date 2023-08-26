// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { useOnline } from "./Utils/useOnline";
// import UserContext from "./Utils/UserContext";
// import { useSelector } from "react-redux";
// import Logo from "./foodvilla.png";

// const Title = () => (
//   <a href="/" className="href">
//     <img data-testid="logo" className="logo" alt="" src={Logo} />
//   </a>
// );

// export const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   let isOnline = useOnline;
//   const { user } = useContext(UserContext);
//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <div className="header">
//       <Title />
//       <div className="nav-items">
//         <ul>
//           <Link></Link>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/instamaart">instamaart</Link>
//           </li>
//           <li>
//             <Link to="/cart" data-testid="cart">Cart - {cartItems.length}</Link>
//           </li>
//         </ul>
//         <h1 data-testid="online-status">{isOnline ? "***" : "-----"}</h1>
//         <h1>{user.name}</h1>
//         <h1>{user.email}</h1>
//         {isLoggedIn ? (
//           <button
//             onClick={() => {
//               setIsLoggedIn(false);
//             }}
//           >
//             logOut
//           </button>
//         ) : (
//           <button
//             onClick={() => {
//               setIsLoggedIn(true);
//             }}
//           >
//             logIn
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };
