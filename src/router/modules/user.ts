import type { RouteRecordRaw } from 'vue-router';
import { PeopleCommunityAdd20Regular } from '@vicons/fluent';
import { DashboardLayout } from '@src/router/constant';
import { renderIcon } from '@src/utils/renderIcon';

const routeName = 'user';

const routes: RouteRecordRaw[] = [
  {
    path: '/user',
    name: routeName,
    redirect: '/user/list',
    component: DashboardLayout,
    meta: {
      title: 'User',
      icon: renderIcon(PeopleCommunityAdd20Regular),
      permissions: ['can view user menu'],
      sort: 7
    },
    children: [
      {
        path: 'list',
        name: `${routeName}_list`,
        meta: {
          title: 'User List',
          permissions: ['can view user menu']
        },
        component: () => import('@src/views/user/index.vue')
      },
      {
        path: 'add',
        name: `${routeName}_add`,
        meta: {
          title: 'Add User',
          permissions: ['can view create user']
        },
        component: () => import('@src/components/user/AddUser.vue')
      },
      {
        path: 'edit',
        name: `${routeName}_edit`,
        meta: {
          title: 'Add User',
          permissions: ['can view update user'],
          hidden: true,
          dismissTab: true
        },
        component: () => import('@src/components/user/EditUser.vue')
      },
      {
        path: 'profile',
        name: `${routeName}_profile`,
        meta: {
          title: 'Profile',
          permissions: ['can view user profile'],
          hidden: true
        },
        component: () => import('@src/views/user/Profile.vue')
      },
      {
        path: 'assing-permission',
        name: `${routeName}_assing_permission`,
        meta: {
          title: 'Assing Permission',
          permissions: ['can view assign permission'],
          hidden: true
        },
        component: () => import('@src/components/permission/AssignPermissions.vue')
      }
    ]
  }
];

export default routes;