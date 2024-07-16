// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const admin_leads = {
  id: 'admin_leads',
  title: 'Leads',
  type: 'group',
  children: [
    {
      id: 'admin-leads',
      title: 'Leads Index',
      type: 'item',
      url: '/leadsIndex',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
        id: 'admin-leads',
        title: 'Following Leads Index',
        type: 'item',
        url: '/flwLeadsIndex',
        icon: icons.IconTypography,
        breadcrumbs: false
      }
  ]
};

export default admin_leads;
