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
    xs: 6,
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
      margin-bottom: ${DS.gutters.xxl*2}px;

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
    .rainbow,
    button {
      border: 0;
      outline: none;
      border-radius: 4px;
      background-size: cover;
      background-image: url('/assets/button-cover.png');
      padding: ${DS.gutters.md}px;
      margin-top: ${DS.gutters.xxl}px;
      cursor: pointer;
      transition: 1s ease all;
    }
    button:hover {
      background-image: url('/assets/button-cover.png');
      background-position: 50% 100%;
      scale: 1.05;
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
      max-height: ${260}px;
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
    .rainbow span,
    button span {
      background-color: #000;
      padding: ${DS.gutters.xs}px;
      border-radius: 4px;
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
    #samples ul {
      display: flex;
      flex-wrap: wrap;
    }
    #samples li {
      width: 50%;
      box-sizing: border-box;
    }
    #samples li a {
      padding: ${DS.gutters.md}px;
      text-decoration: none;
      background: ${DS.colors.black};
      border-radius: 4px;
      margin: 8px;
      width: 100%;
      display: flex;
      width: auto;
      text-align: center;
      justify-content: center;
      font-size: 16px;
      transition: 1s ease all;
      opacity: 0.9;
      position: relative;
    }
    #samples li a span {
      // background-color: ${DS.colors.black};
      padding: ${DS.gutters.xs}px;
      border-radius: 4px;
    }
    #samples li a:after {
      content: "";
      height: 0;
      opacity: 0;
      background-image: url('/assets/button-cover.png');
      background-size: cover;
      background-position: 50% 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transition: 0.3s ease all;
    }
    #samples li a:hover:after {
      height: 4px;
      opacity: 1;
    }

    #track-cover {
      position: absolute;
      left:52px;
      top:64px;
      z-index:2;
      opacity:1;
      width: ${250}px;
      height: ${250}px;
      background-position: -52px -65px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      transition: 0.3s ease all;
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
    @keyframes load {
      from {
          background-position: 0 0%;
      }
      to {
          background-position: 0 100%;
      }
    }
    .loading {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    top: 0px;
    z-index: 100;
    background: url(/assets/spinner.gif);
    background-size: auto;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
}
    }
    .loading.hide {
      transition: 0.3s ease all;
      opacity: 0;
    }
    .loading.show {
      transition: 0.3s ease all;
      opacity: 1;
    }
    .loading-ball {
      text-align: center;
      line-height: 460px;
      color: rgba(255, 255, 255, 0.5);
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 124px;
      left: 0px;
      right: 0;
      width: 484px;
      height: 460px;
      border-radius: 4px;
      overflow: hidden;
      margin: 0 auto;
      z-index: 100;
      background: url(/assets/wallpaper.png);
      background-size: cover;
      background-repeat: no-repeat;
      animation: load 6s cubic-bezier(0.63, -0.13, 0.74, 0.71);
    }
      .hide {
        display: none;
      }

    @media (width <= 560px) {
      .wrapper {
        width: 100%;
        margin: 0;
        height: 400px;
      }
        h1 {
        font-size: 24px;
        letter-spacing: 16px;
        margin: 64px auto 0 auto;
      }
        input {
          width: 80%;
        }
        h2 {
        font-size: 14px;
        margin: 16px;
        line-height: 2;
      }
      #samples ul {
      width: 100%;
      }
       #samples ul li {
      width: 100%;
      }
       #samples ul li img {
        width: 90%;
        margin: 0 auto;
      }
       #cover-area {
       width: 100%;
       }
       #cover-uploader {
        scale: 0.6;
        transform: translate(-100px, -50px);
       }
    }

    `, window.document.createElement('style'), true)
}