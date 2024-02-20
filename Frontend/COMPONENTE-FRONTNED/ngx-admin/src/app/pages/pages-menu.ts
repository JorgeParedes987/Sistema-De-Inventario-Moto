import { NbMenuItem } from '@nebular/theme';
import { link } from 'fs';

export const MENU_ITEMS: NbMenuItem[] = [

     {
       title: 'Inicio',
      icon: 'home-outline',
     link: '/pages/iot-dashboard',
    },
     {
       title: 'Carpetas',
       icon: 'layers-outline',
       link: '/pages/dashboard',
       home: true,
       children: [
          {
            title: 'LOGIN',
            link: '/pages/seguridad/login',
          },

         {
           title: 'Administrador',
           link: '/pages/administradores/listar',
         },
         {
           title: 'Productos',
           link: '/pages/productos/listar',
         },
         {
           title: 'Proveedor',
           link: '/pages/proveedores/listar',
         },
         {
           title: 'Inventario',
           link: '/pages/inventarios/listar',
         },
        //  {
        //    title: 'Inventario-producto',
        //    pathMatch: 'prefix',
        //    link: '/pages/inventarioproducto/listar',
        //  },
       ],
     },
  //    {
  //       title: 'CRUD',
  //       icon: 'layers-outline',
  //       link: '/pages/dashboard',
  //       home: true,

  //  },
  //  {
  //    title: 'Inicio',
  //    icon: 'home-outline',
  //    link: '/pages/iot-dashboard',
  //  },
   
  //   title: 'Marcas',
  //   group: true,
  // },
  // // {
  // //   title: 'CRUD',
  // //   icon: 'layers-outline',
  // //   children: [
  // //     {
  // //       title: 'Administrador',
  // //       link: '/pages/layout/stepper',
  // //     },
  // //     {
  // //       title: 'Productos',
  // //       link: '/pages/layout/list',
  // //     },
  // //     {
  // //       title: 'Proveedor',
  // //       link: '/pages/layout/infinite-list',
  // //     },
  // //     {
  // //       title: 'Inventario',
  // //       link: '/pages/layout/accordion',
  // //     },
  // //     {
  // //       title: 'Inventario-producto',
  // //       pathMatch: 'prefix',
  // //       link: '/pages/layout/tabs',
  // //     },
  // //   ],
  // // },
  // {
  //   title: 'Yamaha',
  //   icon: 'arrowhead-right-outline',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/pages/forms/datepicker',
  //     },
  //   ],
  // },
  // {
  //   title: 'Honda',
  //   icon: 'arrow-right-outline',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },
  // {
  //   title: 'Hero',
  //   icon: 'arrowhead-right-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // // {
  // //   title: 'Kawasaki',
  // //   icon: 'arrow-right-outline',
  // //   children: [
  // //     {
  // //       title: 'Calendar',
  // //       link: '/pages/extra-components/calendar',
  // //     },
  // //     {
  // //       title: 'Progress Bar',
  // //       link: '/pages/extra-components/progress-bar',
  // //     },
  // //     {
  // //       title: 'Spinner',
  // //       link: '/pages/extra-components/spinner',
  // //     },
  // //     {
  // //       title: 'Alert',
  // //       link: '/pages/extra-components/alert',
  // //     },
  // //     {
  // //       title: 'Calendar Kit',
  // //       link: '/pages/extra-components/calendar-kit',
  // //     },
  // //     {
  // //       title: 'Chat',
  // //       link: '/pages/extra-components/chat',
  // //     },
  // //   ],
  // // },
  // {
  //   title: 'Susuki',
  //   icon: 'arrowhead-right-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Bajaj',
  //   icon: 'arrow-right-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'AKT',
  //   icon: 'arrowhead-right-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //   },
  //     {
  //     title: 'CKEditor',
  //      link: '/pages/editors/ckeditor',
  //     },
  //  ],
  // },
  // //{
  // //  title: 'Tables & Data',
  // //  icon: 'grid-outline',
  // //  children: [
  // //    {
  //   //    title: 'Smart Table',
  //   //    link: '/pages/tables/smart-table',
  //   //  },
  //    // {
  //      // title: 'Tree Grid',
  //      // link: '/pages/tables/tree-grid',
  //     //},
  //  // ],
  // //},
  // //{
  // //  title: 'Miscellaneous',
  //  // icon: 'shuffle-2-outline',
  //  // children: [
  //    // {
  //      // title: '404',
  //      // link: '/pages/miscellaneous/404',
  //    // },
  //   //],
  // //},
  // {
  //   title: 'Autenticacion',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
