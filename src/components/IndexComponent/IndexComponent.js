import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'
import styled from 'styled-components'

const Header = styled.div`
  align-items: center;
  background: #E9ECEF;
  display: flex;
  height: 50vh;
  justify-content: center;
`

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  a {
    color: #007BFF;
    text-decoration: none;

    &:hover {
      color: #0062CC;
      text-decoration: underline;
    }
  }
`

const Span = styled.span``

const IndexComponent = () =>
  <Fragment>
    <Header>
      <h1>Hello, world!</h1>
    </Header>

    <Body>
      <Link
        to={{ pathname: '/stateless' }}
      >
        <Span>Stateless component</Span>
      </Link>

      <Link
        to={{ pathname: '/statefull' }}
      >
        <Span>Statefull component</Span>
      </Link>

      <Link
        to={{ pathname: '/redirect' }}
      >
        <Span>Redirect</Span>
      </Link>
    </Body>
  </Fragment>

export default IndexComponent
