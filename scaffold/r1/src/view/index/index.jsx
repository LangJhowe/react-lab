import React from 'react'
import { connect } from 'react-redux'
import globalStore from '@/store/global.js'
import userStore from '@/store/user/index.js'
import { addCount } from '@/store/user/actions.js'
class v1 extends React.Component{
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    console.log(this.props);
    console.log(process.env);
    let {pageTitle,count} = userStore.getState()
    let { addCount } = this.props
    return (
      <div>
        <h1>here is index page.</h1>
        <h2>user pageTitle: {pageTitle}</h2>
        <h2>user count: {count}</h2>

        <div>
          <h2>store example</h2>
          <div>
            <span>redux</span>
             <input type="text" value={count} onChange={e=>{
               console.log(e);
               userStore.dispatch('addCount',e)
             }}/>
          </div>
          <input type="text" onChange={(e)=>{
            console.log(userStore.getState());
            console.log(globalStore);
            console.log('getState',globalStore.getState());


            console.log(e);
          }}/>
        </div>
        <button className="square" onClick={() => {
          // userStore.dispatch('addCount')
        }}>
          -
        </button>
        <button className="square" onClick={() => {
          // userStore.dispatch('addCount')
          addCount()
        }}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      count: state.count,
    }
}
// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCount () {
      dispatch(addCount())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(v1)