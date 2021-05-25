# redux-revision

action: contains type and payload.

reducer: interprets action and manipulates the state.

store: contains createStore(reducer, state).

useSelector: to access the store's state.

useDispatch: to dispatch an action.

bindActionCreators: to bind actions with dispatch.

combineReducers: to combine multiple reducers into 1 object.

thunk: for async (add ,applyMiddleware(thunk) in createStore)