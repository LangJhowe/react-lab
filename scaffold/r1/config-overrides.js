const {
  override,
  addWebpackAlias,
  adjustStyleLoaders
} = require('customize-cra')
const path = require('path')
const rewireSass = require('react-app-rewire-scss');

module.exports = override(
  // 路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@c': path.resolve(__dirname, 'src/components'),
    '@views': path.resolve(__dirname, 'src/views'),
    '@utils': path.resolve('src/utils'),
    '@styles': path.resolve('src/styles'),
  }),

  // style loader
  // adjustStyleLoaders(({ use: [ , css, postcss, resolve, processor ] })=>{
  //   css.options.sourceMap = true;         // css-loader
  //   postcss.options.sourceMap = true;     // postcss-loader
  //   // when enable pre-processor,
  //   // resolve-url-loader will be enabled too
  //   if (resolve) {
  //     resolve.options.sourceMap = true;   // resolve-url-loader
  //   }
  //   // pre-processor
  //   if (processor && processor.loader.includes('sass-loader')) {
  //     processor.options.sourceMap = true; // sass-loader
  //   }
  // })
)
