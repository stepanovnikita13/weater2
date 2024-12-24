import { Flex, Layout, theme } from 'antd';
import styled, { css } from 'styled-components';
const token = theme.getDesignToken();

export namespace S {
  export const Header = styled(Layout.Header)<{ $dropShadow: boolean }>(
    ({ $dropShadow }) => css`
      padding: 1rem 0;
      height: auto;
      z-index: 100;
      ${$dropShadow && 'box-shadow:' + token.boxShadowTertiary};
    `
  );

  export const SearchWrapper = styled(Flex)`
    align-items: center;
    height: inherit;
  `;
}
