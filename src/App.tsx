import { useQuery } from '@tanstack/react-query';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import API from 'api/methods';
import useStore from 'store/app';
import useAppStore from 'store/app';

function App() {
  const setAppData = useAppStore((store) => store.setAppData);
  useQuery(['app_data'], () => API.getAppData(), {
    onSuccess: (data) => {
      setAppData(data);
    },
  });

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
