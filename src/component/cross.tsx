import React from 'react'
import styled, { keyframes } from 'styled-components'

export function Cross({ color = 'var(--icon-color)' }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 37 37"
      xmlSpace="preserve"
    >
      <Polyline color={color} points="12.5,24.5 24.5,12.5" />
      <Polyline color={color} points="12.5,12.5 24.5,24.5" />
    </svg>
  )
}

type Props = {
  color: string
}

const crossAnimation = keyframes`
from {
    stroke-dashoffset: 50;
}
to {
    stroke-dashoffset: 0;
}
`

const Polyline = styled.polyline<Props>`
  fill: none;
  stroke: ${p => p.color};
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: ${crossAnimation} 0.6s linear forwards;
`

export default React.memo(Cross)
