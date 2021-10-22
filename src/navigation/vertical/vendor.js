export default [
  {
    title: 'Dashboard',
    route: 'dashboard-ecommerce',
    icon: 'ActivityIcon',
  },
  {
    header: 'General',
  },
  {
    title: 'Shop Profile',
    route: { name: 'apps-users-view', params: { id: 21 } },
    icon: 'HomeIcon',
  },
  {
    title: 'Subscriptions',
    route: 'apps-todo',
    icon: 'CreditCardIcon',
  },
  {
    title: 'Clients',
    route: 'apps-users-list',
    icon: 'UsersIcon',
  },
  {
    title: 'Invoices',
    icon: 'FileTextIcon',
    route: 'apps-invoice-list',
  },  
]
