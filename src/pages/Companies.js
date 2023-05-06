import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComps } from '../features/companiesReducer';

function Companies() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComps());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {' '}
      <h1>Companies</h1>
      {posts.map((item) => (
        <h2 key={item._id}>{item.companyName}</h2>
      ))}
    </div>
  );
}

export default Companies;
