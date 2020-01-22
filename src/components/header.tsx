import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Size } from '../constants'

const Header: React.FC = () => (
  <Container
    style={{
      background: 'rebeccapurple',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Aonohi.com
        </Link>
      </h1>
    </div>
  </Container>
)

const Container = styled.div`
  height: ${Size.header.height}px;
`

export default Header
