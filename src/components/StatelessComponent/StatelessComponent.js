import React, { Fragment } from 'react'
import styled from 'styled-components'

const DivStyled = styled.div`
  color: red;
`

const StatelessComponent = () =>
  <Fragment>
    <Helmet>
      <title>StatelessComponent - React Boilerplate</title>
    </Helmet>

    <DivStyled>Stateless component</DivStyled>
  </Fragment>

export default StatelessComponent
