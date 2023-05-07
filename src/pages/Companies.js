import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComps, createComp, deleteComp } from '../features/companiesReducer';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Companies() {
  const [companyName, setCompanyName] = React.useState('');
  const { comps, loading } = useSelector((state) => state.company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComps());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createComp({ companyName }));
    setCompanyName('');
  };

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
      {/*-------start company add----------*/}
      <div className="Add-company">
        <form onSubmit={onSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter a company"
              type="text"
              name="text"
              value={companyName}
              autoFocus
              autoComplete="off"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </InputGroup>
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </form>
      </div>
      {/*-------end company add----------*/}
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
                <td>
                  <button
                    onClick={() => dispatch(deleteComp(comp._id))}
                    className="btn btn-block"
                  >
                    delete Goal
                  </button>
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
