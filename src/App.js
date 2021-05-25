import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function App() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { add, subtract } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => add(1)}>+</button>
      <button onClick={() => subtract(1)}>-</button>
    </div>
  );
}

export default App;
