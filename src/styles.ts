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
      margin-top: ${DS.gutters.xxl}px;
      margin-bottom: ${DS.gutters.xl}px;
      width: 480px;
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
    }

    button span {
      background-color: #000;
      padding: ${DS.gutters.sm/2}px;
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
