import React from 'react'
import styled, { keyframes } from 'styled-components'

export function Circle({ color = 'var(--light)' }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="-10.5 -12.5 60 60"
      xmlSpace="preserve"
    >
      <Path
        color={color}
        d="
      M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
      />
    </svg>
  )
}

type Props = {
  color: string
}

const CircleAnimation = keyframes`
from {
    stroke-dashoffset: 120;
}
to {
    stroke-dashoffset: 0;
}
`

const Path = styled.path<Props>`
  fill: none;
  stroke: ${p => p.color};
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 108;
  stroke-dashoffset: 50;
  animation: ${CircleAnimation} 0.3s linear forwards;
`

export default React.memo(Circle)
