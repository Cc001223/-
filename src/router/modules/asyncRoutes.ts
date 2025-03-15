import { upgradeLogList } from '@/mock/upgradeLog'
import { RoutesAlias } from './routesAlias'
import { MenuListType } from '@/types/menu'

/**
 * 菜单列表、异步路由
 *
 * 支持两种模式:
 * 1. 前端静态配置 - 直接使用本文件中定义的路由配置
 * 2. 后端动态配置 - 后端返回菜单数据，前端解析生成路由
 *
 * 菜单标题（title）:
 * 可以是 i18n 的 key，也可以是字符串，比如：'用户列表'
 */
export const asyncRoutes: MenuListType[] = [
 

  {
    id: 1,
    name: 'HomeView',
    path: '/home',
    component: RoutesAlias.Home,
    meta: {
      title: '首页',
      icon: '&#xe721;',
      keepAlive: false
    },
    children: [
      {
        id: 101,
        path: '/',
        name: 'HomeBaby',
        component: RoutesAlias.HomePage,
        meta: {
          title: 'Home',
          keepAlive: false
        }
      },
    ]
  },
  


  {
    id: 11,
    path: '/example',
    name: 'Example',
    component: RoutesAlias.Home,
    meta: {
      title: '样例',
      icon: '&#xe816;',
      keepAlive: false
    },
    children: [
      {
        id: 1010,
        path: 'example3',
        name: 'example3',
        component: RoutesAlias.Example,
        meta: {
          title: '样例Baby',
          keepAlive: true
        }
      }
    ]
  },
  
]
