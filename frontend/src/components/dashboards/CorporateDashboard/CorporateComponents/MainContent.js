import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MainContent = () => (
  <div style={{ padding: '20px' }}>
    {['Selected', 'Projects Received', 'Scheduled (Pending)'].map((title, index) => (
      <Card key={index} style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          {/* Insert chart or image here */}
        </CardContent>
      </Card>
    ))}
  </div>
);

export default MainContent;
