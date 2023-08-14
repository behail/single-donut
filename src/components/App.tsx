import React from 'react'
import './ReactDonut.css'
import { ChartConfiguration } from './main'

const ReactDonut: React.FC<{ configure: ChartConfiguration }> = (props) => {
  const circumfrence: number = 2 * 3.14 * props.configure.circle.radius
  const strokeDashoffset = circumfrence - (props.configure.percentagevalue / 100) * circumfrence
  return (
    <svg width={props.configure.svg.width} height={props.configure.svg.height}>
      <circle
        cx={props.configure.circle.cx}
        cy={props.configure.circle.cy}
        r={props.configure.circle.radius}
        fill={props.configure.circle.fill}
        stroke={props.configure.circle.strokeColor1}
        strokeWidth={props.configure.circle.strokeWidth}
        strokeDasharray={circumfrence}
        strokeDashoffset={0}
      />
      <circle
        cx={props.configure.circle.cx}
        cy={props.configure.circle.cy}
        r={props.configure.circle.radius}
        fill={props.configure.circle.fill}
        stroke={props.configure.circle.strokeColor2}
        strokeWidth={props.configure.circle.strokeWidth}
        strokeDasharray={circumfrence}
        strokeDashoffset={strokeDashoffset}
      />

      <text
        fill={props.configure.text.fill}
        x={props.configure.circle.cx}
        y={props.configure.circle.cy}
        textAnchor={props.configure.text.textAnchor}
        alignmentBaseline='middle'
      >
        {props.configure.percentagevalue} %
      </text>
    </svg>
  )
}

export default ReactDonut
