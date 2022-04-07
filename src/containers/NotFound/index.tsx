import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-100 text-center d-flex flex-column justify-content-center">
      <h2 className="mb-3">Page Not Found</h2>
      <Link to="/blocks" className="text-black text-decoration-none">
        Return to HomePage
      </Link>
    </div>
  );
};

export default NotFound;
