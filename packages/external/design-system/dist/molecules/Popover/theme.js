"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var theme = {
  breakpoints: [540, 760, 980, 1220, 1430, 1620, 2010],
  borderImage: {
    turqoise: 'linear-gradient(to right,#54a0c4,#42c68f)',
    crimson: 'linear-gradient(to right, #642B73, #C6426E)',
    colorWheel: 'linear-gradient(to right, #F4D03F,  #16A085, #e35d5b)'
  },
  palette: {
    primary: ['#2855de'],
    blue: ['#4f6ee4', '#3e5bcc', '#2d48b3', '#1c3494'],
    green: ['#228f70', '#1b7c60'],
    white: ['#FFF'],
    rust: ['#b34a4a'],
    orange: ['#ffa319', '#eb9617'],
    purple: ['#9983AD', '#8068A3', '#8068A3', '#252C68'],
    turquoise: ['#3ba0ac', '#00eec4', '#00d2ad', '#00b49d', '#009885'],
    //https://www.color-hex.com/color-palette/64616
    red: ['#d12c51', '#bb2445', '#a21232', '#c72c2c', '	#ba3030'],
    // https://www.color-hex.com/color-palette/7080
    // gray: [ '#e0e0e0', '#212121', '#616161', '#9e9e9e', '#bdbdbd', '#ffffff'],
    gray: ['#e9e9e9', '#d4d4d4', '#9a9a9a', '#707070', '	#454545'],
    twitter: ['#5578eb', '#2754e6'],
    google: ['#fd397a', '#fc0758'],
    facebook: ['#5867dd', '#2e40d4']
  },
  colors: {
    // Brand Color Styles
    primary: '#dc448dcf',
    secondary: '#09272a',
    tertiary: '#F45C43',
    dark: '#29323a',
    // Generic color Styles
    blue: '#3a95ee',
    blueLight: '#466fec',
    blueZodiac: '#3f4257',
    charcoal: '#4a4a4a',
    cherry: '#F45C43',
    disabled: '#c8c9d1',
    green: '#34bfa3',
    gray: '#f2f2f2',
    grayLine: '#e0e0e0',
    grayBackground: '#f3f4f8',
    grayBlue: '#9aaeb7',
    grayDark: '#9e9e9e',
    grayLight: '#f6f6f6',
    grayMute: '#d8d8d8',
    grayNavy: '#494C62',
    grayHeader: '#ebecf1',
    grayItem: '#fbfbfc',
    red: '#f4516c',
    rust: '#b34a4a',
    orange: '#c67a18',
    purple: '#716aca',
    purpleDark: '#2e2e48',
    turquoise: '#3ba0ac',
    whiteOpaque: 'rgba(255,255,255, 0.7)'
  },
  gradient: {
    // Brand Gradient Styles
    primary: ['#2855de', '#466fec'],
    seconday: ['#2855de', '#466fec'],
    tertiary: ['#2855de', '#466fec'],
    // Generic Gradient Styles
    black: ['#232526', '#414345'],
    blueOcean: ['#56ccf2', '#3a95ee', '#2f80ed'],
    bluePurple: ['#2583b0', '#7324cc'],
    blueZodiac: ['#3f4257', '#333965'],
    blueDeep: ['#343b6b', '#262a46'],
    blue: ['#46a7ec', '#282ede'],
    blueDark: [' #4f5798', '#383f7d'],
    charcoal: ['#283048', '#859398'],
    green: ['#a1c900', '#00af4e'],
    // gray: ['#e7dfdf', '#f0f0f0'],
    // gray: ['#f4f4f4', '#dddfe6'],
    gray: ['#f4f4f4', '#f2f2f2'],
    purple: ['#7d3eb4', '#e430ad'],
    purpink: ['#57489F', '#8e489f', '#433caf'],
    turquoise: ['#3ba0ac', '#3ba0ac'],
    orange: ['#ffa319', '#fb3306'],
    orangish: ['#ffb123', '#e9a100'],
    red: ['#ef473a', '#cb2d3e'],
    cloudy: ['#FFF', '#e7e3e3'],
    white: ['#FFF', '#fefefe']
  },
  textShadow: {
    0: ['1px 2px 1px rgba(93, 93, 93, 0.15)', '2px 1px 9px rgba(0,0,0, 0.0125)', '1px 2px 15px rgba(0,0,0, 0.05)', '2px 2px 1px rgba(93,93,93, 0.15)'],
    light: '0 2px 0px rgba(50,50,93,.08), 1px 0px 1px rgba(0,0,0,.20), 2px 2px 3px rgba(93,93,93,.1)',
    lightHazy: ['0px 2px 7px rgba(50,50 , 93, 0.08)', '0px 1px 9px rgba(0,0,0, 0.05)', '1px 2px 5px rgba(0,0,0, 0.15)', '0px 2px 0px rgba(93,93,93, 0.15)'],
    1: ['1px 2px 1px rgba(93', '93', '93', '0.15)', '2px 1px 4px rgba(0,0,0', '0.05)', '1px 2px 4px rgba(0,0,0', '0.05)', '2px 2px 1px rgba(20,20,20', '0.15)', '1px 1px 0px rgba(0', '0', '0', '0.05)', '1px 1px 2px rgba(93,93,93', '0.15)'],
    dark: ['0 4px 6px rgba(50,50,93, .14)', '0 1px 3px rgba(0,0,0, .275)', '1px 1px 2px rgba(0,0,0, .275)', '0 1px 5px rgba(93,93,93, .15)'],
    darkHazy: ['0px 2px 7px rgba(50,50 , 93, 0.15)', '2px 1px 12px rgba(0,0,0, 0.15)', '1px 2px 7px rgba(0,0,0, 0.175)', '0px 2px 0px rgba(93,93,93, 0.15)'],
    darkPurple: ['0 4px 6px rgba(13, 13, 150, 0.068)', '0 1px 3px rgba(87, 28, 173, 0.25)', '0 1px 5px rgba(72, 20, 222, 0.45)']
  },
  shadows: {
    0: '0 1px 3px rgba(0,0,0,0.09), 0 1px 2px rgba(0,0,0,0.14)',
    1: '0 2px 4px rgba(0,0,0,0.04), 0 2px 3px rgba(0,0,0,0.10)',
    2: '0px -3px 6px rgba(139, 139, 136, 0.09), 0px 7px 8px rgba(131, 131, 131, 0.28)',
    3: '2px 6px 9px 0px rgba(174, 174, 174, 0.29), 0px 6px 10px 0px rgba(0,0,0,0.12)',
    // 4: '0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.12)',
    4: '0 7px 14px 0 rgba(60,66,87, .12), 0 3px 6px 0 rgba(0,0,0, .12)',
    5: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    6: '0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05)',
    7: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    8: '0px 2px 20px rgba(0, 0, 0, 0.13), 2px 2px 20px rgba(0, 0, 0, 0)',
    float: '2px 12px 8px -8px #373737a3, 0px 38px 20px 3px #0c0d0d14',
    input: '0px 1px 5px rgba(0, 0, 0, 0.09)',
    cardHover: '5px 7px 26px -5px #e1e1f059, 5px -6px 17px -5px #e1e1f0ba',
    // light: '5px 7px 26px -5px #e1e1f0',
    light: '1px 3px 4px 0px #afafc06e',
    lightHover: '0 3px 16px -4px #a09ccfa3',
    darkHover: '0 13px 21px -4px #a09ccf',
    // input: '1px 1px 1px rgba(0, 0, 0, 0.22)',
    sunset: '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f',
    blue: '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #066ebe, 0px -4px 3px -2px #2cc7b1, -5px -4px 4px -6px #46eca4',
    // Inset
    insetBottom: ['inset 0 -15px 15px -15px rgba(0,0,0,0.45)', 'inset 0 -15px 15px -15px rgba(0,0,0,0.375)'],
    insetBottomLight: ['inset 0 -10px 10px -10px rgba(0,0,0,0.19)', 'inset 0 -10px 10px -10px rgba(0,0,0,0.23)'],
    insetBottomHeavy: ['inset 0 -15px 15px -15px rgba(0,0,0,0.79)', 'inset 0 -15px 15px -15px rgba(0,0,0,0.73)'],
    insetTop: ['inset 0 15px 15px -15px rgba(0,0,0,0.45)', 'inset 0 15px 15px -15px rgba(0,0,0,0.375)'],
    insetTopLight: 'inset -3px 11px 6px -18px rgba(0,0,0,0.19), inset 0px 16px 8px -15px rgba(0,0,0,0.23)',
    insetTopHeavy: ['inset 0 15px 15px -15px rgba(0,0,0,0.79)', 'inset 0 15px 15px -15px rgba(0,0,0,0.73)'],
    rightLight: ['9px 0px 10px 0px rgba(0,0,0,0.19)'],
    insetLeftLight: ['inset 10px 0px 15px 0px rgba(0, 0, 0, 0.25)'],
    insetLeftHeavy: ['inset 10px 0px 15px 0px rgba(0, 0, 0, 0.55)']
  },
  fonts: {
    body: "Open Sans' ,-apple-system,BlinkMacSystemFont,'Segoe UI',Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
    heading: "Akrobat,'Segoe UI', Roboto, Oxygen, Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    button: "Open Sans' ,-apple-system,BlinkMacSystemFont,'Segoe UI',Ubuntu,Cantarell,'Helvetica Neue',sans-serif"
  },
  fontFamily: {
    default: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    heading: "Akrobat,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    button: "Roboto,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif"
  },
  fontSizes: [10, 12, 14, 16, 22, 32, 48, 72, 92, 118]
};
var _default = theme;
exports.default = _default;