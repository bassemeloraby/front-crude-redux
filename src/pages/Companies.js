import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComps } from '../features/companiesReducer';

function Companies() {
  const { comps, loading } = useSelector((state) => state.company);
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
      {comps.map((item) => (
        <h2 key={item._id}>{item.companyName}</h2>
      ))}
    </div>
  );
}

export default Companies;
