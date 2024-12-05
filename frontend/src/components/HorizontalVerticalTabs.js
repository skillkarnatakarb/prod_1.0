import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Jobmodal from './Jobmodal';

function TechCard({ name, logo, onClick }) {
  return (
    <Card
      sx={{
        width: 100,
        height: 130,
        backgroundColor: '#f5f5f5',
        boxShadow: 2,
        borderRadius: 2,
        border: '0.5px solid #d0cece',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': { transform: 'scale(1.05)', boxShadow: 10 },
        m: 0.5,
      }}
      onClick={onClick}
    >
      <CardMedia component="img" height="50" image={logo} alt={name} sx={{ objectFit: 'contain', p: 0.5 }} />
      <CardContent>
        <Typography variant="caption" align="center" fontWeight="bold">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

TechCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

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
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function HorizontalVerticalTabs() {
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selectedJobId, setSelectedJobId] = React.useState(null);

// /*************  ✨ Codeium Command ⭐  *************/
//   /**
//    * Handles the change event when the horizontal tabs are changed.
//    * Updates the horizontal tab value and resets the vertical tab value to 0.
//    * @param {React.SyntheticEvent} event The event object.
//    * @param {number} newValue The new value of the horizontal tab.
//    */
// /******  59d37b81-5cf7-4288-b88a-6fdd09e4de28  *******/
  const handleHorizontalChange = (event, newValue) => {
    setHorizontalValue(newValue);
    setVerticalValue(0);
  };

  const handleVerticalChange = (event, newValue) => {
    setVerticalValue(newValue);
  };

  const handleOpen = (jobId) => {
    setSelectedJobId(jobId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJobId(null);
  };

  const companyData = {
    // Technical Section
    "Frontend Engineer": [
      { id: 1, name: "Angular Developer", logo: `${process.env.PUBLIC_URL}/Assets/angular.png` },
      { id: 2, name: "React Developer", logo: `${process.env.PUBLIC_URL}/Assets/react.png` },
      { id: 3, name: "Vue Developer", logo: `${process.env.PUBLIC_URL}/Assets/vue.png` },
      { id: 4, name: "HTML/CSS Developer", logo: `${process.env.PUBLIC_URL}/Assets/htmlcss.png` },
      { id: 5, name: "UI/UX Designer", logo: `${process.env.PUBLIC_URL}/Assets/uiux.png` },
      { id: 6, name: "JavaScript Developer", logo: `${process.env.PUBLIC_URL}/Assets/js.png` },
      // { id: 7, name: "TechMad", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
      // { id: 8, name: "TechGlobal", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
      // { id: 9, name: "TechSyllabus", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
      // { id: 10, name: "TechMath", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
      // { id: 11, name: "TechPhysics", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
      // { id: 12, name: "TechChemistry", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
      // { id: 13, name: "TechBio", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
      // { id: 14, name: "TechKan", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
      // { id: 15, name: "TechEng", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
      // { id: 16, name: "TechHin", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
      // { id: 17, name: "TechSan", logo: `${process.env.PUBLIC_URL}/Assets/meta.png` },
    ],
    "Backend Engineer": [
      { id: 1, name: "NodeJS Developer", logo: `${process.env.PUBLIC_URL}/Assets/nodejs.png` },
      { id: 2, name: "Java Developer", logo: `${process.env.PUBLIC_URL}/Assets/java.png` },
      { id: 3, name: "Python Developer", logo: `${process.env.PUBLIC_URL}/Assets/python.png` },
      { id: 4, name: "Laravel Developer", logo: `${process.env.PUBLIC_URL}/Assets/laravel.png` },
      { id: 5, name: "C# Developer", logo: `${process.env.PUBLIC_URL}/Assets/csharp.png` },
      // { id: 6, name: "LogicWorks", logo: `${process.env.PUBLIC_URL}/Assets/apple.png` },
      // { id: 7, name: "LogicWorks", logo: `${process.env.PUBLIC_URL}/Assets/apple.png` },
      // { id: 8, name: "LogicWorks", logo: `${process.env.PUBLIC_URL}/Assets/apple.png` },
    ],
    // Additional roles with 4 companies each...

    "Full Stack Developer": [
      { id: 1, name: "MERN Developer", logo: `${process.env.PUBLIC_URL}/Assets/mern.png` },
      { id: 2, name: "MEAN Developer", logo: `${process.env.PUBLIC_URL}/Assets/mean.png` }, 
      { id: 3, name: "Django Developer", logo: `${process.env.PUBLIC_URL}/Assets/django.png` },
      { id: 4, name: "LAMP  Developer", logo: `${process.env.PUBLIC_URL}/Assets/lamp.png` },
    ],

    // Non-Technical Section
    "Administrative Assistant": [
      { id: 1, name: "AdminPro", logo: `${process.env.PUBLIC_URL}/Assets/tata.png` },
      { id: 2, name: "OfficeWorks", logo: `${process.env.PUBLIC_URL}/Assets/tata.png` },
      { id: 3, name: "PaperTrail", logo: `${process.env.PUBLIC_URL}/Assets/tata.png` },
      { id: 4, name: "AdminEase", logo: `${process.env.PUBLIC_URL}/Assets/tata.png` },
    ],
    "Project Manager": [
      { id: 1, name: "ManageIt", logo: `${process.env.PUBLIC_URL}/Assets/infosys.png` },
      { id: 2, name: "ProjEx", logo: `${process.env.PUBLIC_URL}/Assets/infosys.png` },
      { id: 3, name: "PlanWise", logo: `${process.env.PUBLIC_URL}/Assets/infosys.png` },
      { id: 4, name: "TaskFlow", logo: `${process.env.PUBLIC_URL}/Assets/infosys.png` },
    ],
    // More roles...

    // Digital Section
    "Digital Marketer": [
      { id: 1, name: "AdSphere", logo: `${process.env.PUBLIC_URL}/Assets/wipro.png` },
      { id: 2, name: "MarketGurus", logo: `${process.env.PUBLIC_URL}/Assets/wipro.png` },
      { id: 3, name: "DigitalWave", logo: `${process.env.PUBLIC_URL}/Assets/wipro.png` },
      { id: 4, name: "AdCore", logo: `${process.env.PUBLIC_URL}/Assets/wipro.png` },
    ],
    // More roles...

    // Manufacturing Section
    "Manufacturing Engineer": [
      { id: 1, name: "ManuTech", logo: `${process.env.PUBLIC_URL}/Assets/ssamsung.png` },
      { id: 2, name: "ProdWise", logo: `${process.env.PUBLIC_URL}/Assets/ssamsung.png` },
      { id: 3, name: "Manufactura", logo: `${process.env.PUBLIC_URL}/Assets/ssamsung.png` },
      { id: 4, name: "ManuCore", logo: `${process.env.PUBLIC_URL}/Assets/ssamsung.png` },
    ],
    // More roles...

    // Gig Economy Section
    "Gig Worker": [
      { id: 1, name: "QuickTask", logo: `${process.env.PUBLIC_URL}/Assets/sbi.png` },
      { id: 2, name: "FreelanceHub", logo: `${process.env.PUBLIC_URL}/Assets/sbi.png` },
      { id: 3, name: "ProjectMate", logo: `${process.env.PUBLIC_URL}/Assets/sbi.png` },
      { id: 4, name: "FlexWork", logo: `${process.env.PUBLIC_URL}/Assets/sbi.png` },
    ],
    // More roles...

    // Healthcare & Hospitality Section
    "Healthcare Assistant": [
      { id: 1, name: "HealthFirst", logo: `${process.env.PUBLIC_URL}/Assets/amazon.png` },
      { id: 2, name: "MedCare", logo: `${process.env.PUBLIC_URL}/Assets/amazon.png` },
      { id: 3, name: "AssistHealth", logo: `${process.env.PUBLIC_URL}/Assets/amazon.png` },
      { id: 4, name: "CareConnect", logo: `${process.env.PUBLIC_URL}/Assets/amazon.png` },
    ],
    // More roles...
  };

  const verticalTabContent = [
    ["Frontend Engineer", "Backend Engineer","Full Stack Developer"],
    ["Administrative Assistant", "Project Manager"],
    ["Digital Marketer"],
    ["Manufacturing Engineer"],
    ["Gig Worker"],
    ["Healthcare Assistant"],
  ];

  return (
    <Box sx={{ width: '90%', margin: 'auto', mt: 3, boxShadow: 3, borderRadius: 2, p: 2, bgcolor: '#f9f9f9' }}>
      <Typography variant="h5" align="center" sx={{ mb: 1, fontWeight: 'bold' }}>
        Matching Talent Pool with Suitable Job Roles
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', borderRadius: 25, overflow: 'hidden', boxShadow: 2 }}>
          {["Technical", "Non-Technical", "Digital", "Manufacturing", "Gig Economy", "Healthcare & Hospitality"].map((label, index) => (
            <Button
              key={index}
              variant={horizontalValue === index ? 'contained' : 'outlined'}
              onClick={() => setHorizontalValue(index)}
              sx={{
                px: 1.5,
                py: 0.5,
                fontSize: '12px',
                fontWeight: 'bold',
                bgcolor: horizontalValue === index ? '#f3ec18' : 'white',
                color: horizontalValue === index ? 'black' : 'grey',
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 1 }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={verticalValue}
          onChange={handleVerticalChange}
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            minWidth: 120,
            mb: { xs: 1, md: 0 },
          }}
        >
          {verticalTabContent[horizontalValue]?.map((label, index) => (
            <Tab key={index} label={label} {...a11yProps(index)} />
          ))}
        </Tabs>

        <Box sx={{ flexGrow: 1, pl: { xs: 0, md: 2 }, maxHeight: '350px', overflowY: 'auto' }}>
          {verticalTabContent[horizontalValue]?.map((content, index) => (
            <TabPanel value={verticalValue} index={index} key={index}>
              <Grid container spacing={1}>
                {(companyData[content] || []).map((company) => (
                  <Grid item xs={6} sm={3} md={1.5} key={company.id}>

                    <TechCard name={company.name} logo={company.logo} onClick={() => handleOpen(company.id)} />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </Box>
      </Box>

      <Jobmodal open={open} handleClose={handleClose} jobId={selectedJobId}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Job Details
          </Typography>
          <Typography variant="body2" gutterBottom>
            {selectedJobId &&
              companyData[
                Object.keys(companyData).find((key) =>
                  companyData[key].some((company) => company.id === selectedJobId)
                )
              ]?.find((company) => company.id === selectedJobId)?.name}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 1 }} onClick={handleClose}>
            Apply Now
          </Button>
        </Box>
      </Jobmodal>
    </Box>
  );
}
