import React from 'react'
import './scss.scss'
class ScssPage extends React.Component{
  render() {
    return (
      <div>
        <h1>scss page</h1>
        <div className="a">
          a
          <div className="a_b">b</div>
        </div>
      </div>
    )
  }
}
export default ScssPage