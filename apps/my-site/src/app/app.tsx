import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { PageTitle } from '@nx-sandbox/ui-header';
import { MessageRoute, Message, API_URL } from '@nx-sandbox/api-interface';

export function App() {
  const [message, setData] = useState<Message>({text: "no fetch yet"});

  useEffect(() => {
    const getMessage = async () => {
      const res = await fetch(`${API_URL}${MessageRoute.GET_INIT_MESSAGE}`);
      const body = await res.json() as Message;
      setData(body);
    };
    getMessage();
  }, []);

  return (
    <div>
      <PageTitle />
      {message.text}
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
