// // assets
// import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// // constant
// const icons = {
//   IconTypography,
//   IconPalette,
//   IconShadow,
//   IconWindmill
// };

// // ==============================|| UTILITIES MENU ITEMS ||============================== //

// const admin_reports= {
//   id: 'admin_report',
//   title: 'Purchase',
//   type: 'group',
//   children: [
//     {
//       id: 'admin-report',
//       title: 'Report Index',
//       type: 'item',
//       url: '/reports',
//       icon: icons.IconTypography,
//       breadcrumbs: false
//     },
//     {
//       id: 'admin-purch',
//       title: 'Add Purchase',
//       type: 'item',
//       url: '/addpurchase',
//       icon: icons.IconTypography,
//       breadcrumbs: false
//     }

//   ]
// };

// export default admin_purch;



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

const admin_reports = {
  id: 'admin_report',
  title: 'Reports',
  type: 'group',
  children: [
    {
      id: 'admin-report',
      title: 'daily wise attendance',
      type: 'item',
      url: '/reports',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'admin-report',
      title: 'purchaseReport',
      type: 'item',
      url: '/purreports',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'admin-report',
      title: 'SalesReport',
      type: 'item',
      url: '/salesreports',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    // {
    //   id: 'admin-subgroup',
    //   title: 'Subgroup Title',
    //   type: 'collapse', // Type 'collapse' to indicate it has children
    //   icon: icons.IconPalette,
    //   children: [
    //     {
    //       id: 'admin-subgroup',
    //       title: 'purchase_report',
    //       type: 'item',
    //       url: '/purreport',
    //       icon: icons.IconShadow,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'admin-subgroup',
    //       title: 'sales_report',
    //       type: 'item',
    //       url: '/salereport',
    //       icon: icons.IconWindmill,
    //       breadcrumbs: false
    //     },
    //     {
            
    //             id: 'admin-reports',
    //             title: 'employee-attendance',
    //             type: 'item',
    //             url: '/empatten',
    //             icon: icons.IconWindmill,
    //             breadcrumbs: false
              
    //     }
    //   ]
    
  ]
};

export default admin_reports;
