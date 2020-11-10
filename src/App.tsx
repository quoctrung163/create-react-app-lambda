import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from './redux/actions/fetchAPI';
import { RootState } from './redux/reducers';

import Quizz from './components/quizz/quizz.component';

function App() {
  const data = useSelector((state: RootState) => state.fetchAPI.data);
  const requesting = useSelector((state: RootState) => state.fetchAPI.requesting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <h2>Trắc nghiệm tính cách</h2>
      </header>
      {
        requesting ?
          <div>Loading..........</div>
          :
          (data && data.listQuestion.length > 0) ?
            <Quizz data={data} />
            : <div>Data is empty</div>
      }
    </div>
  );
}

export default App;
