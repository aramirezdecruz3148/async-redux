import { createStore, compose, applyMiddleware } from 'redux';


const logger = store => next => action => {
  console.log(action);
  next(action);
  console.log(store.getState());
};

function reducer(state = {}, action) {
  switch(action.type) {
    case 'MAKE_SOMETHING':
      return { ...state, state: [action.payload] };
    default: 
      return state;
  }
}

const composeEnhancers = compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(
    logger
  ))
);

store.dispatch({ type: 'MAKE_SOMETHING', payload: 'Hi' });
