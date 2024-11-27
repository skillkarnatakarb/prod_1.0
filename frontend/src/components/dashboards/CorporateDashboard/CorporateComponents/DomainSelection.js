import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: '24px', flexGrow: 1, marginLeft: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function DomainSelection() {
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);

  const handleHorizontalChange = (event, newValue) => {
    setHorizontalValue(newValue);
    setVerticalValue(0);
  };

  const handleVerticalChange = (event, newValue) => {
    setVerticalValue(newValue);
  };

  const verticalTabContent = [
    ["Full Stack Developer", "Backend Engineer", "Frontend Engineer"],
    ["Support Role", "Customer Success", "Technical Support"],
    ["Data Entry", "Document Control", "Operations"]
  ];

  return (
    <Box style={{ width: '100%', marginTop: '16px' }}>
      <Box style={{ borderBottom: '1px solid #ddd', marginBottom: '16px' }}>
        <Tabs value={horizontalValue} onChange={handleHorizontalChange} aria-label="domain selection tabs" centered variant="fullWidth">
          <Tab label="Technical" {...a11yProps(0)} />
          <Tab label="Non-Technical" {...a11yProps(1)} />
          <Tab label="Non-IT" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {verticalTabContent.map((contentArray, horizontalIndex) => (
        <TabPanel value={horizontalValue} index={horizontalIndex} key={horizontalIndex}>
          <Box style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={verticalValue}
              onChange={handleVerticalChange}
              aria-label={`Vertical tabs for ${horizontalIndex}`}
              style={{ borderRight: '1px solid #ddd', minWidth: '200px' }}
            >
              {contentArray.map((label, verticalIndex) => (
                <Tab key={verticalIndex} label={label} {...a11yProps(verticalIndex)} />
              ))}
            </Tabs>
            <Box style={{ padding: '24px', flexGrow: 1, marginLeft: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
              {contentArray.map((content, verticalIndex) => (
                <TabPanel value={verticalValue} index={verticalIndex} key={verticalIndex}>
                  <Typography variant="h6" style={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '8px', fontSize: '1.2rem' }}>{content}</Typography>
                  <Typography variant="body1" style={{ color: '#666', lineHeight: '1.5' }}>
                    This section contains detailed information about the {content} role. Here you can add specific details relevant to this position.
                  </Typography>
                </TabPanel>
              ))}
            </Box>
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
}
