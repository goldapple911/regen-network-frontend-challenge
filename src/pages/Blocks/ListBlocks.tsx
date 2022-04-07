import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Spinner, Alert } from 'react-bootstrap';

import './style.scss';

import { fetchListOfBlocks } from '../../api/blocks.service';
import BlocksTable from './components/BlocksTable';
import { COLUMNS } from '../../utils/constants';

const ListBlocks = () => {
  const { isFetching, isError, data, refetch } = useQuery('problems', fetchListOfBlocks);

  const handleRetry = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    refetch();
  };

  const renderContent = () => {
    if (isFetching) {
      return (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      );
    }
    if (isError || !data) {
      return (
        <>
          <Alert variant="danger">
            <p>Couldn't get the blocks!</p>
            <p>Please click RETRY if you want to try again.</p>
          </Alert>
          <Link to="#" onClick={handleRetry} className="text-black text-decoration-none">
            RETRY
          </Link>
        </>
      );
    }
    return <BlocksTable columns={COLUMNS} blocks={data} />;
  };

  return (
    <div className="h-100 d-flex flex-column justify-content-center text-center">
      <h2 className="mb-5">Welcome to the Block Explorer!</h2>
      {renderContent()}
    </div>
  );
};

export default ListBlocks;
