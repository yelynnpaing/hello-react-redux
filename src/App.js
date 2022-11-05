import './App.css';
import { createRef } from 'react';
import { connect } from 'react-redux';

const Item = ({name, price}) => {
  return (
    <li>
      {name}, 
      ${price}
    </li>
  )
}

const App = props => {
  const nameRef = createRef();
  const priceRef = createRef();

const Add = () => {
    props.Add (
      props.items.length + 1,
      nameRef.current.value,
      priceRef.current.value
    )
  }

  return (
    <div>
      <ul className='App-header'>
        {props.items.map(i => (
          <Item 
            key={i.id}
            name = {i.name}
            price = {i.price}
          />
        )
        )}
        <input type="text" ref={nameRef} /> <br/>
        <input type="text" ref={priceRef} /> <br/>
        <button onClick={Add}>Add</button>
      </ul>
    </div>
  )
};

const stateToProps = state => {
  return {
    items : state
  }
}

const dispatchToProps = dispatch => {
  return {
    Add:(id, name, price) =>{
      dispatch({
        type : 'ADD',
        item : {id ,name , price}
      })
    }
  }
}

const ReduxApp = connect(stateToProps, dispatchToProps)(App);

export default ReduxApp;
