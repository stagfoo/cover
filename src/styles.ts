import joro from 'joro';
export const DS = {
  fontFamily: {
    default: "'Lexend Zetta', san-serif",
    alt: "'Lexend Zetta', san-serif",
  },
  fontSizes: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 64,

  },
  gutters: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 64,
  },
  colors: {
    purple: "#8D58FD",
    black: "#000000",
    white: "#ffffff",
    blue: "#58D5FD",
    green: "#83FD58",
  }
}

export const STYLES = new joro();





export function BaseStyles() {
  STYLES.add("baseStyles", `
    * {
      font-family: ${DS.fontFamily.default};
    }
    html,body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      color:  ${DS.colors.white};
      opacity: 1;
      font-family: ${DS.fontFamily.default};

    }
    body {
      background-color: ${DS.colors.black};
      background-image:url("/assets/wallpaper.png");
      background-size: cover;
      background-repeat:no-repeat;
    }
    h1 {
      font-size:${DS.gutters.xxl}px;
      letter-spacing: ${DS.gutters.xl*3}px;
      margin-left: ${DS.gutters.xxl}px;
    }
    h2 {
      font-size: ${DS.gutters.lg}px;
    }
    #cover-area {
      position:relative;
      z-index: 2;
      width: 480px;
    }
    #cover-area-cd {
      position:absolute;
      margin:0 auto;
      left:0;
      right:0;
      z-index:0;
      top: 10px;
      left: 40px;
      width: 410px;
    }
    input:focus,
    input {
      outline: none;
      border: 0;
      text-align: center;
      font-family: ${DS.fontFamily.default};
      font-size: ${DS.fontSizes.md/1.2}px;
      clear: both;
      width: 38%;
      color: #fff;
      display:block;
      margin: 0 auto;
      background: none;
      border-bottom: 2px solid #ffffff;
    }
    button {
      border: 0;
      outline: none;
      background-size: cover;
      background-image: url('/assets/button-cover.png');
      padding: ${DS.gutters.md}px;
      margin-top: ${DS.gutters.xxl}px;
      cursor: pointer;
    }
    .wrapper {
      margin: 0 auto;
      margin-top: ${DS.gutters.xxl}px;
      margin-bottom: ${DS.gutters.xxl}px;
      width: 480px;
    }
    #cover-uploader {
      position: relative;
      width: 480px;
      overflow:hidden;
    }
    #cover-uploader input {
      position: absolute;
      z-index: 4;
      width: 100%;
      opacity:0;
      height: 100%;
      right:0;
      left:0;
      margin: 0 auto;
      cursor: pointer;
    }
    .personal-cover-overlay,
    .personal-cover {
      width: ${260}px;
      left:52px;
      top:64px;
      position:absolute;
      z-index: 2;
      border-top-right-radius: 8px;
    }
    .personal-cover-overlay {
      z-index: 3;
      opacity: 0.5;
    }

    button span {
      background-color: #000;
      padding: ${DS.gutters.sm/2}px;
      cursor: pointer;
      color: #fff;
    }
    ul,li {
      list-style:none;
      margin: 0;
      padding: 0;
    }
    ul {
      margin: 0 auto;
      width: 712px;
      display:block;
    }
    li {
      display:inline-block;
      float:left;
      padding: ${DS.gutters.md}px;
    }

    #samples {
      padding-top: ${DS.gutters.xxl*2}px;
      padding-bottom: ${DS.gutters.xxl*2}px;
      display:block;
      overflow:hidden;
    }

    #track-cover {
      position: absolute;
      left:52px;
      top:64px;
      z-index:2;
      opacity:1;
      width:260px;
      height: 200px;
      background-position: -52px -65px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    .spin {
      animation-name: spin;
      animation-duration: 5000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
    }

    `)
  }

  // textarea,
  // button {
  //   display: block;
  //   clear:both;
  //   margin: ${DS.gutters.sm}px auto ${DS.gutters.sm}px auto;
  //   ${buttonStyle()}
  // }
  // textarea {
  //   width: 100%;
  //   min-height: 300px;
  //   font-size: ${DS.fontSizes.xl}px;
  // }
