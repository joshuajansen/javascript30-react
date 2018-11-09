import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div `
  width: 200px;
  height: calc(100% - 40px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  color: rgba(0,0,0,0.15);
  box-shadow: inset 0 0 0 10px rgba(0,0,0,0.15);

  &:nth-child(9n+1) { background: dodgerblue;}
  &:nth-child(9n+2) { background: goldenrod;}
  &:nth-child(9n+3) { background: paleturquoise;}
  &:nth-child(9n+4) { background: gold;}
  &:nth-child(9n+5) { background: cadetblue;}
  &:nth-child(9n+6) { background: tomato;}
  &:nth-child(9n+7) { background: lightcoral;}
  &:nth-child(9n+8) { background: darkslateblue;}
  &:nth-child(9n+9) { background: rebeccapurple;}

  &:nth-child(even) { transform: scaleX(1.31) rotateY(40deg); }
  &:nth-child(odd) { transform: scaleX(1.31) rotateY(-40deg); }
`

export default function Item(props) {
  return (
    <StyledItem>{props.id}</StyledItem>
  )
}
