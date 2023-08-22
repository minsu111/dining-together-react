import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Pretendard';
  font-weight: 100;

  src:
      url('/Pretendard-Thin.otf') format('opentype'),
      url('/Pretendard-Thin.woff') format('woff'),
      url('/Pretendard-Thin.ttf') format('truetype');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 200;

  src:
      url('/Pretendard-ExtraLight.otf') format('opentype'),
      url('/Pretendard-ExtraLight.woff') format('woff'),
      url('/Pretendard-ExtraLight.ttf') format('truetype');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 300;

  src:
      url('/Pretendard-Light.otf') format('opentype'),
      url('/Pretendard-Light.woff') format('woff'),
      url('/Pretendard-Light.ttf') format('truetype');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 400;
  font-style: normal;

  src:
      url('/Pretendard-Regular.otf') format('opentype'),
      url('/Pretendard-Regular.woff') format('woff'),
      url('/Pretendard-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 500;

  src:
      url('/Pretendard-Medium.otf') format('opentype'),
      url('/Pretendard-Medium.woff') format('woff'),
      url('/Pretendard-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 600;

  src:
      url('/Pretendard-SemiBold.otf') format('opentype'),
      url('/Pretendard-SemiBold.woff') format('woff'),
      url('/Pretendard-SemiBold.ttf') format('truetype');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 700;

  src:
      url('/Pretendard-Bold.otf') format('opentype'),
      url('/Pretendard-Bold.woff') format('woff'),
      url('/Pretendard-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 800;

  src:
      url('/Pretendard-ExtraBold.otf') format('opentype'),
      url('/Pretendard-ExtraBold.woff') format('woff'),
      url('/Pretendard-ExtraBold.ttf') format('truetype');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 900;

  src:
      url('/Pretendard-Black.otf') format('opentype'),
      url('/Pretendard-Black.woff') format('woff'),
      url('/Pretendard-Black.ttf') format('truetype');
}

body {
  font-family: 'Pretendard', sans-serif;
}

`;

export default GlobalStyle;
