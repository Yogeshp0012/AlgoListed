import React from 'react'
import styled from 'styled-components'
import { Line } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";

const LineChart = ({chartData, options}) => {
  return ( 
    <Container>
      <Line data={chartData} options={options}></Line>
    </Container>
  )
}

export default LineChart

const Container = styled.div`
`