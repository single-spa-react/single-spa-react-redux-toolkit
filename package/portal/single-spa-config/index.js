/**
 * 全部本地加载(包括子应用)
 * 
 * 对于大多数开发而言，我们只关注此应用本身， 所以我们只需要要引入build-single-spa.config即可
 */
if(process.env.NODE_ENV === 'development') {
  import('./dev-single-spa.config')
} else {
  import('./build-single-spa.config')
}