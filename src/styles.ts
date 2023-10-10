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
  #cover-app {
    width: 478px;
      height: 439px;
  }
    #cover-app #cover-area {
      position:relative;
      z-index: 2;
      width: 480px;
    }
    #cover-app #cover-area-cd {
      position:absolute;
      margin:0 auto;
      left:0;
      right:0;
      z-index:0;
      top: 10px;
      left: 40px;
      width: 410px;
    }

    #cover-app #cover-uploader {
      position: relative;
      width: 478px;
      height: 439px;
      border-radius:4px;
      overflow:hidden;
      background-color: ${DS.colors.black};
    }
    #cover-app #cover-uploader input {
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
    #cover-app .personal-cover-overlay,
    #cover-app .personal-cover {
      width: ${260}px;
      max-height: ${260}px;
      left:52px;
      top:64px;
      position:absolute;
      z-index: 2;
      border-top-right-radius: 8px;
    }
    #cover-app .personal-cover-overlay {
      z-index: 3;
      opacity: 0.5;
    }


    #cover-app #track-cover {
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
    #cover-app .spin {
      animation-name: coverAppSping;
      animation-duration: 5000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    @keyframes coverAppSping {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
    }

    `)
  }