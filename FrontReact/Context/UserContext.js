import { createContext } from 'react';

const UserContext = createContext({
  userEmail: '', // Current user's email
  setUserEmail: () => {}, // Function to set the current user's email
});

export default UserContext;
