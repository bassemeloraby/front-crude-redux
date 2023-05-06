import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../features/companiesReducer';

function Companies() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {' '}
      <h1>Companies</h1>
      {posts.map((item) => (
        <h2>{item.companyName}</h2>
      ))}
    </div>
  );
}

export default Companies;
