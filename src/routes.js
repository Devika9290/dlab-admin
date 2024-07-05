/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
// import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import UserPage from "./views/UserPage"
import Typography from "views/Typography";
import Customer from "views/Customer";
import Icons from "views/Icons";
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/tablelist",
    name: "Labs",
    icon: "design_image",
    component: <TableList/>,
    layout: "/admin",
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "ui-1_bell-53",
  //   component: <Notifications />,
  //   layout: "/admin",
  // },
  {
    path: "/user-page",
    name: "Doctors",
    icon: "users_single-02",
    component: <UserPage />,
    layout: "/admin",
  },
  // {
  //   path: "/extended-tables",
  //   name: "Table List",
  //   icon: "files_paper",
  //   component: <TableList />,
  //   layout: "/admin",
  // },
  {
    path: "/customer",
    name: "Customers",
    icon: "users_single-02",
    component: <Customer />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Feedback",
    icon: "design-2_ruler-pencil",
    component: <Typography />,
    layout: "/admin",

  },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: <Upgrade />,
  //   layout: "/admin",
  // },
];
export default dashRoutes;

export const newPageRoute = {
  path: "/icons", // Specify the path for the new page
  component: <Icons />, 
  layout: "/admin",// Specify the component for the new page
};
