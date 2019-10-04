import idx from 'idx'
import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styledBy from 'styled-by'
import { border, position, color, layout, flexbox, grid, background, typography, shadow, system, space } from 'styled-system'
import { variant } from 'styled-system'
import is from 'styled-is';
import Box from '../Box'
import QRDisplay from '../../organisms/QRDisplay'

const Loading = styled(Box)
`
/* ------------------- */
/* Ripple              */
/* ------------------- */
  &.loading-ripples {
    display: inline-block;
    position: relative;
    width: 144px;
    height: 144px;
    transform: rotate(45deg)
  }
  &.loading-ripples div {
    box-shadow: 0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f;
    border-radius: 7px;
    position: absolute;
    border: 0px solid #fff;
    opacity: 1;
    animation: loading-ripples 2.6s cubic-bezier(0, 0.2, 0.8, 1) 3;
  }
  &.loading-ripples div:nth-child(2) {
    animation-delay: -3.5s;
  }
  @keyframes loading-ripples {
    0% {
      border: 2px solid #fff;
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      border: 0px solid #fff;
      top: -1px;
      left: -1px;
      width: 140px;
      height: 140px;
      opacity: 0;
    }
  }

/* ------------------- */
/* Ring           */
/* ------------------- */
&.loading-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
&.loading-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
&.loading-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
&.loading-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
&.loading-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loading-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ------------------- */
/* Ellipsis            */
/* ------------------- */
&.loading-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 35px;
}
&.loading-ellipsis div {
  background: #FFF;
  background: ${styledBy('bgLoading')};
  position: absolute;
  top: 13px;
  width: 11px;
  height: 11px;
  border-radius: 1px;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
&.loading-ellipsis div:nth-child(1) {
  left: 6px;
  animation: loading-ellipsis1 0.6s infinite;
}
&.loading-ellipsis div:nth-child(2) {
  left: 6px;
  animation: loading-ellipsis2 0.6s infinite;
}
&.loading-ellipsis div:nth-child(3) {
  left: 26px;
  animation: loading-ellipsis2 0.6s infinite;
}
&.loading-ellipsis div:nth-child(4) {
  left: 45px;
  animation: loading-ellipsis3 0.6s infinite;
}
@keyframes loading-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loading-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loading-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}

/* ------------------- */
/* Grid                */
/* ------------------- */
&.loading-grid {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
&.loading-grid div {
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation: loading-grid 1.2s linear infinite;
}
&.loading-grid div:nth-child(1) {
  top: 6px;
  left: 6px;
  animation-delay: 0s;
}
&.loading-grid div:nth-child(2) {
  top: 6px;
  left: 26px;
  animation-delay: -0.4s;
}
&.loading-grid div:nth-child(3) {
  top: 6px;
  left: 45px;
  animation-delay: -0.8s;
}
&.loading-grid div:nth-child(4) {
  top: 26px;
  left: 6px;
  animation-delay: -0.4s;
}
&.loading-grid div:nth-child(5) {
  top: 26px;
  left: 26px;
  animation-delay: -0.8s;
}
&.loading-grid div:nth-child(6) {
  top: 26px;
  left: 45px;
  animation-delay: -1.2s;
}
&.loading-grid div:nth-child(7) {
  top: 45px;
  left: 6px;
  animation-delay: -0.8s;
}
&.loading-grid div:nth-child(8) {
  top: 45px;
  left: 26px;
  animation-delay: -1.2s;
}
&.loading-grid div:nth-child(9) {
  top: 45px;
  left: 45px;
  animation-delay: -1.6s;
}
@keyframes loading-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* ------------------- */
/* Heart               */
/* ------------------- */
&.loading-heart {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  transform-origin: 32px 32px;
}
&.loading-heart div {
  top: 23px;
  left: 19px;
  position: absolute;
  width: 26px;
  height: 26px;
  background: #fff;
  animation: loading-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
&.loading-heart div:after,
&.loading-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 26px;
  height: 26px;
  background: #fff;
}
&.loading-heart div:before {
  left: -17px;
  border-radius: 50% 0 0 50%;
}
&.loading-heart div:after {
  top: -17px;
  border-radius: 50% 50% 0 0;
}
@keyframes loading-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
`

Loading.defaultProps = {
  as: 'span',
  type: 'ripples',
  width: 'auto'
}

Loading.propTypes = {
  as: PropTypes.string,
  type: PropTypes.oneOf([
    'ring',
    'ripples',
    'ellipsis',
    'grid',
    'heart'
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ])
}

export default ({ type, ...props}) =>({
  ring: <Loading {...props} className={`loading-${type}`}><div></div><div></div><div></div><div></div></Loading>
  ,ripple: <Loading {...props} className={`loading-ripples`}><div></div><div></div></Loading>
  ,ellipsis: <Loading {...props} className={`loading-${type}`}><div></div><div></div><div></div><div></div></Loading>
  ,heart: <Loading {...props} className={`loading-${type}`}><div></div></Loading>
  ,grid: <Loading {...props} className={`loading-${type}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></Loading>
}[type])

