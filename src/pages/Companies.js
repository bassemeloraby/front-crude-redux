import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComps } from '../features/companiesReducer';
import Table from 'react-bootstrap/Table';

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
      {/*-------start company header----------*/}
      <div className="">
        <h2 className="text-center">Company </h2>
        <div className="underline"></div>
      </div>
      {/*-------end company header----------*/}
      {/*-------start company show-------*/}
      <section className="col">
        <Table striped bordered hover>
          <thead>
            <tr style={{ backgroundColor: 'orange' }}>
              <th>Company</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {comps.map((comp) => (
              <tr key={comp._id}>
                <td>{comp.companyName}</td>
                <td>
                  <a
                    href={comp.website}
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: 'underline' }}
                  >
                    {comp.companyName}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      {/*-------end company show-------*/}
 
    </div>
  );
}

export default Companies;
