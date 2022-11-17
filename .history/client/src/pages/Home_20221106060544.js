import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Home = () => {
  const auth = useContext(AuthContext);
  // auth.handleRegister();
  // auth.handleLogin();
  // auth.handleLogin();
  return (
    <div className="App">
      <h1>Home</h1>
      <p>{JSON.stringify(auth)}</p>
      <button onClick={auth.handleLogin}>Login</button>
      <p onClick={auth.handleLogout}>Logout</p>
      <Link to="/protected"> Protected</Link>
    </div>
  );
};

export default Home;
