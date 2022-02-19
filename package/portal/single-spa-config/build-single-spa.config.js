/**
 * 注册用不同框架为主单页应用开发的每个部分。
 * 每调用一次 registerApplication 都会注册一个新的应用，它接受三个参数：
  应用的名称
  要加载的函数（要加载的入口点）
  用来激活的函数（用于告知是否加载应用的逻辑）
 */

import { registerApplication, start } from 'single-spa'

/**
 * 子应用入口js拉取 这里我们mock到public中
 */

registerApplication(
  'project1',
  // @ts-ignore
  () => System.import('../../project1/dist/js/main.js'),
  () => location.pathname.startsWith('/project1') ? true : false
);

registerApplication(
  'project2',
  // @ts-ignore
  () => System.import('../../project2/dist/main.js'),
  () => location.pathname.startsWith('/project2')  ? true : false
);

start();