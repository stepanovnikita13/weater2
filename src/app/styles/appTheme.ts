import { ThemeConfig, theme } from 'antd';

const { defaultAlgorithm, darkAlgorithm, getDesignToken } = theme;

const lightTheme = getDesignToken({
  algorithm: defaultAlgorithm,
});

const darkTheme = getDesignToken({
  algorithm: darkAlgorithm,
});

export const appTheme: ThemeConfig = {
  components: {
    Layout: {
      headerBg: lightTheme.colorBgBase,
      bodyBg: lightTheme.colorBgBase,
    },
  },
  algorithm: defaultAlgorithm,
};
