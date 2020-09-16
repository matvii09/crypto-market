/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* config-overrides.js */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  config => {
    // config.module.rules.push({
    //   loader: 'webpack-ant-icon-loader',
    //   enforce: 'pre',
    //   include: [require.resolve('@ant-design/icons/lib/dist')],
    // });
    return config;
  },
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style: true,
  }),
  fixBabelImports('formik-antd', {
    libraryName: 'formik-antd',
    // style: 'css',
    style: true,
    // style: 'css',
    libraryDirectory: 'es',
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // '@primary-color': '#ffbb00',
      // '@secondary-color': '#ffbb00',
      // '@text-color': '#000000',
      // '@layout-sider-background': '#343A47',
      // '@layout-header-background': '#343A47',
      '@padding-sm': '16px',
      '@input-height-base': '40px',
      '@btn-height-base': '40px',
      '@btn-font-weight': '600',
      '@form-item-trailing-colon': false,
      '@btn-font-size-sm': '16px',
      '@btn-font-size-lg': '16px',
      // '@border-color-base': '#dedede',
      '@font-family': `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol'`,
      // '@heading-color': '#fff',
      // @primary-color: #1890ff; // primary color for all components
      // @link-color: #1890ff; // link color
      // @success-color: #52c41a; // success state color
      // @warning-color: #faad14; // warning state color
      // @error-color: #f5222d; // error state color
      // @font-size-base: 14px; // major text font size
      // @heading-color: rgba(0, 0, 0, 0.85); // heading text color
      // @text-color: rgba(0, 0, 0, 0.65); // major text color
      // @text-color-secondary : rgba(0, 0, 0, .45); // secondary text color
      // @disabled-color : rgba(0, 0, 0, .25); // disable state color
      // @border-radius-base: 4px; // major border radius
      // @border-color-base: #d9d9d9; // major border color
      // @box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // major shadow for layers
    },
  }),
);
