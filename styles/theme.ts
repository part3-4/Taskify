import { COLORS } from '@/styles/palettes';
import { css } from 'styled-components';

export const theme = css`
  body {
    background-color: var(--bg-main);
    color: var(--text-main);
    transition: color 0.2s ease-in;
  }

  body[data-theme='light'] {
    // landingPage
    --bg-main: #fafafa;
    --bg-second: ${COLORS.VIOLET_F1};
    --bg-third: ${COLORS.VIOLET_F1};
    --bg-fourth: ${COLORS.VIOLET_15};
    --bg-footer: ${COLORS.BLACK_17};

    --text-main: ${COLORS.BLACK_00};
    --text-second: ${COLORS.BLACK_33};
    --text-third: ${COLORS.BLACK_17};

    // nav
    --nav-bg: ${COLORS.WHITE_FF};
    --nav-border: 1px solid ${COLORS.GRAY_D9};
    --nav-imgBorder: 2px solid ${COLORS.WHITE_FF};
    --nav-Dropdown-bg: ${COLORS.WHITE_FF};
    --nav-Dropdown-border: 1px solid ${COLORS.GRAY_D9};
    --nav-Dropdown-hover: #f1effd;
    --nav-Dropdown-color: ${COLORS.BLACK_17};

    // sidebar
    --sidebar-border: 1px solid ${COLORS.GRAY_D9};
    --sidebar-bg: ${COLORS.WHITE_FF};
    --sidebar-hover: #f1effd;

    --content-color: ${COLORS.WHITE_FF};
    --content-back: #fafafa;
    --content-border: 1px solid transparent;
    --content-divider: 1px solid ${COLORS.GRAY_EE};
    --content-main: ${COLORS.BLACK_33};
    --content-second: ${COLORS.GRAY_9F};

    --input-label: ${COLORS.BLACK_33};
    --input-bg: ${COLORS.WHITE_FF};
    --input-border: ${COLORS.GRAY_D9};
    --input-color: ${COLORS.GRAY_9F};
    --input-color-tag: transparent;

    --sign-bg: #fafafa;
    --sign-main: ${COLORS.GRAY_EE};

    --button-bg: ${COLORS.WHITE_FF};
    --button-color: ${COLORS.BLACK_33};
    --button-border: 1px solid ${COLORS.GRAY_D9};
    --button-hover: #f1effd;

    --modal-bg: ${COLORS.WHITE_FF};
    --modal-border: 1px solid transparent;
    --modal-title: ${COLORS.BLACK_33};

    --invite-title: ${COLORS.BLACK_33};

    --columns-border-right: 0.0625rem solid #d3d0d0;
  }

  body[data-theme='dark'] {
    // landingPage
    --bg-main: ${COLORS.BLACK_17};
    --bg-second: ${COLORS.BLACK_17};
    --bg-third: ${COLORS.BLACK_4B};
    --bg-fourth: ${COLORS.BLACK_17};
    --bg-footer: ${COLORS.BLACK_17};

    --text-main: ${COLORS.GRAY_EE};
    --text-second: ${COLORS.GRAY_9F};
    --text-third: ${COLORS.WHITE_FF};

    --nav-bg: ${COLORS.BLACK_17};
    --nav-border: 1px solid #555555;
    --nav-imgBorder: 2px solid ${COLORS.GRAY_D9};
    --nav-Dropdown-bg: ${COLORS.BLACK_17};
    --nav-Dropdown-border: 0.5px solid ${COLORS.BLACK_4B};
    --nav-Dropdown-hover: #303134;
    --nav-Dropdown-color: ${COLORS.GRAY_9F};

    --sidebar-border: 1px solid #555555;
    --sidebar-bg: ${COLORS.BLACK_17};
    --sidebar-hover: #303134;

    --content-color: #28282b;
    --content-back: ${COLORS.BLACK_17};
    --content-border: 1px solid ${COLORS.BLACK_4B};
    --content-divider: 0.5px solid ${COLORS.BLACK_4B};
    --content-main: ${COLORS.GRAY_EE};
    --content-second: ${COLORS.GRAY_EE};

    --input-label: ${COLORS.WHITE_FF};
    --input-bg: #222222;
    --input-border: ${COLORS.BLACK_4B};
    --input-color: ${COLORS.GRAY_9F};
    --input-color-tag: #222222;

    --sign-bg: ${COLORS.BLACK_17};
    --sign-main: ${COLORS.GRAY_EE};

    --button-bg: #222222;
    --button-color: ${COLORS.GRAY_D9};
    --button-border: 0.5px solid ${COLORS.BLACK_4B};
    --button-hover: #303134;

    --modal-bg: ${COLORS.BLACK_17};
    --modal-title: ${COLORS.VIOLET_55};
    --modal-border: 1px solid #4b4b4b;

    --invite-title: ${COLORS.VIOLET_55};

    --columns-border-right: 0.0625rem solid ${COLORS.BLACK_4B};
  }
`;
