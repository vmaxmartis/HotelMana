import React from "react";

const Bookings = React.lazy(() =>
  import("./views/dashboard/bookings/Bookings")
);

const Users = React.lazy(() => import("./views/dashboard/users/ManagerUser"));
const Rooms = React.lazy(() => import("./views/dashboard/rooms/rooms"));
// const AddRoom = React.lazy(() => import("./views/dashboard/rooms/addRoom"));
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Services = React.lazy(() =>
  import("./views/dashboard/services/Services")
);

const ProfileAdmin = React.lazy(() =>
  import("./views/dashboard/users/ProfileAdmin")
);

//admin root page
const Hotels = React.lazy(() => import("./views/dashboard/hotels/Hotels"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
  { path: "/Bookings", exact: "exact", name: "Bookings", element: Bookings },
  { path: "/room", exact: "exact", name: "Rooms", element: Rooms },
  { path: "/", exact: "exact", name: "Rooms", element: Dashboard },
  // { path: "/addroom", exact: "exact", name: "Rooms", element: AddRoom },
  { path: "/user", exact: "exact", name: "Users", element: Users },
  { path: "/login", exact: "exact", name: "Login Admin", element: Login },
  {
    path: "/services",
    exact: "exact",
    name: "Services",
    element: Services,
  },
  { path: "/profile", name: "Profile Admin", element: ProfileAdmin },
];

const routesRoot = [{ path: "/", name: "Hotels", element: Hotels }];

export { routes, routesRoot };
