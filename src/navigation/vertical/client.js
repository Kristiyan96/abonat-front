export default [
  {
    header: "General",
  },
  {
    title: "Profile",
    route: { name: "apps-users-view", params: { id: 21 } },
    icon: "HomeIcon",
  },
  {
    title: "Subscriptions",
    route: "apps-todo",
    icon: "CreditCardIcon",
  },
  {
    header: "Accounting",
  },
  {
    title: "Invoices",
    icon: "FileTextIcon",
    route: "apps-invoice-list",
  },
];
