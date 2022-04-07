import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'bootstrap/scss/bootstrap.scss';

import Layout from './containers/Layout';
import NotFound from './containers/NotFound';
import ListBlocks from './pages/Blocks/ListBlocks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/blocks" element={<ListBlocks />} />
            <Route path="/" element={<Navigate replace to="/blocks" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
