import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
class StylePage extends React.Component{
  render() {
    return (
      <div>
        <div>style page</div>
        <Wrapper>
          <Title>
            Hello World!
          </Title>
        </Wrapper>
      </div>
    )
  }
}
export default StylePage