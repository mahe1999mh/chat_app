import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Paper } from '@mui/material';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
  
    async function fetchData() {
      try {
        const response = await axios.get('https://testapi-peach.vercel.app/api/chats');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h1>Data from External API</h1>
      {data ? (
        <Box>
          {data.map((item) => (
            <Paper key={item._id}>
              {item.users.map((user) => (
                <p key={user.email}>{user.name}</p>
              ))}
            </Paper>
          ))}
        </Box>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
