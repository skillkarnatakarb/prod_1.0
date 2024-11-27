import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

// Sample FAQ data
const faqData = [
  {
    question: 'What is the interview process?',
    explanation: 'The interview process typically includes a written test, followed by a technical interview and HR interview.',
  },
  {
    question: 'How do I apply for a job?',
    explanation: 'You can apply through our website by registering and submitting your resume.',
  },
  {
    question: 'What should I prepare for an interview?',
    explanation: 'Prepare for technical questions, problem-solving, and behavioral interview questions.',
  },
  {
    question: 'Do you offer remote work opportunities?',
    explanation: 'Yes, we offer remote work opportunities for certain positions.',
  },
  {
    question: 'What benefits do you offer?',
    explanation: 'We offer health insurance, paid time off, and various other employee benefits.',
  },
  {
    question: 'Can I apply for multiple positions?',
    explanation: 'Yes, you can apply for multiple positions that match your qualifications.',
  },
  {
    question: 'Is there a probation period?',
    explanation: 'Yes, there is a probation period of 3 months for all new hires.',
  },
];

function Section4() {
  return (
    <Box sx={{ p: 4, textAlign: 'center', mb: 3 }}> {/* Reduced bottom margin to avoid space between sections */}
      <Typography variant="h4" gutterBottom>
        FAQ's
      </Typography>
      <Box sx={{ maxHeight: 300, overflowY: 'auto', p: 1, mt: 2, borderRadius: '12px', boxShadow: 3 }}> {/* Adjusted height for smaller scrollbar and added modern styling */}
        <Grid container spacing={2} justifyContent="center">
          {faqData.map((faq, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={4} sx={{ padding: 3, borderRadius: '16px', backgroundColor: '#f9f9f9', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}> {/* Modern design with hover effect */}
                <Typography variant="h6" gutterBottom>
                  {faq.question}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {faq.explanation}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Section4;