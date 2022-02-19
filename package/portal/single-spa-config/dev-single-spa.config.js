/**
 * 注册用不同框架为主单页应用开发的每个部分。
 * 每调用一次 registerApplication 都会注册一个新的应用，它接受三个参数：
  应用的名称
  要加载的函数（要加载的入口点）
  用来激活的函数（用于告知是否加载应用的逻辑）
 */

import { registerApplication, start } from 'single-spa'
/**
 * 子应用入口js拉取 这里我们将各个子应用打包后的js放入到public中来mock线上的环境
 * 如果你需要root本地开发 联调某个子应用时，可以通过import项目入口文件的方式
 */
registerApplication(
  'project1', 
  // () => import('../../project1/entry.js'), // 本地开发 root 联调 project1项目时
  // @ts-ignore
  () => System.import('/project1/js/main.js'),
  () => location.pathname.startsWith('/project1') ? true : false
);

registerApplication(
  'project2',
  // () => import('../../project2/entry.js'),
  // @ts-ignore
  () => System.import('/project2/main.js'),
  () => location.pathname.startsWith('/project2')  ? true : false
);
start();