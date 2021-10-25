export default [
  {
    header: "General",
  },
  {
    title: "Shop Profile",
    route: { name: "apps-users-view", params: { id: 21 } },
    icon: "HomeIcon",
  },
  {
    title: "Calendar",
    route: "apps-calendar",
    icon: "CalendarIcon", 
  },
  // {
  //   title: "Subscriptions",
  //   route: "apps-todo",
  //   icon: "CreditCardIcon",
  // },
  // {
  //   title: "Clients",
  //   route: "apps-users-list",
  //   icon: "UsersIcon",
  // },
  {
    header: "Accounting",
  },
  {
    title: "Dashboard",
    route: "dashboard-ecommerce",
    icon: "ActivityIcon",
  },
  {
    title: "Invoices",
    icon: "FileTextIcon",
    route: "apps-invoice-list",
  },
];
