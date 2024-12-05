import React from "react";
import { Button, Typography, Box, Grid, Card,Avatar, Stack } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonIcon from "@mui/icons-material/Person";

const GetCounseling = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      <Grid container spacing={4}>
        {/* Left Section - 75% */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
            Get Help. Get Better
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            Counseling is a powerful tool that can help you identify and manage your mental health issues.
            
          </Typography>
          <Card sx={{ padding: "20px", borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
            <Grid container spacing={2}>
              {/* Psychometric Test Section */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    padding: "20px",
                    borderRadius: "15px",
                    background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "#0D47A1", marginBottom: "10px" }}>
                    Psychometric Test
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555", marginBottom: "15px" }}>
                  Take our **Psychometric Test** to understand your mental health, identify strengths and areas for improvement, 
                  and manage stress effectively. Gain valuable insights into your emotional resilience and decision-making patterns. 
                  Start your journey towards better well-being today!
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/take-test"
                    sx={{
                      borderRadius: "15px",
                      padding: "6px 12px",
                      fontSize: "0.875rem",
                      alignSelf: "flex-start",
                    }}
                  >
                    Take Test
                  </Button>
                </Box>
              </Grid>

              {/* Counseling Options Section */}
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                      backgroundColor: "#E3F2FD",
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <ChatIcon sx={{ fontSize: "40px", color: "#0D47A1", marginRight: "10px" }} />
                    <Box>
                      <Typography variant="body1" fontWeight="bold" sx={{ color: "#0D47A1" }}>
                        Online Chat Sessions
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        Chat anonymously with an expert of your choice.
                      </Typography>
                    </Box>
                  </Card>

                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                      backgroundColor: "#F8BBD0",
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <VideoCallIcon sx={{ fontSize: "40px", color: "#880E4F", marginRight: "10px" }} />
                    <Box>
                      <Typography variant="body1" fontWeight="bold" sx={{ color: "#880E4F" }}>
                        Video and Voice Calls
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        Speak to our experts or get on a call with them.
                      </Typography>
                    </Box>
                  </Card>

                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                      backgroundColor: "#FCE4EC",
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <PersonIcon sx={{ fontSize: "40px", color: "#C2185B", marginRight: "10px" }} />
                    <Box>
                      <Typography variant="body1" fontWeight="bold" sx={{ color: "#C2185B" }}>
                        Face to Face Sessions
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        Connect 1-on-1 in-person with an expert of your choice.
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              </Grid>
            </Grid>

            {/* Care Plan Section */}
            <Typography variant="h6" fontWeight="bold" sx={{ marginTop: "30px", marginBottom: "10px" }}>
              Our Care Plan
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", marginBottom: "15px" }}>
              Get best-in-class professional guidance over chat at affordable rates. Buy Our Care Plan now.
            </Typography>
            <Card
              sx={{
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "15px",
                border: "1px solid #ddd",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Grid container spacing={2}>
                {/* First Section */}
                <Grid item xs={4}>
                  <Typography variant="body2">✔ 12+ Sessions</Typography>
                  <Typography variant="body2">✔ Nuanced Matching</Typography>
                  <Typography variant="body2">✔ Mood Journal</Typography>
                </Grid>

                {/* Second Section */}
                <Grid item xs={4}>
                  <Typography variant="body2">✔ Unlimited wellness content</Typography>
                  <Typography variant="body2">✔ Discussion Forum</Typography>
                  <Typography variant="body2">✔ Verified Experts</Typography>
                </Grid>

                {/* Third Section */}
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      gap: "10px",
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold" color="primary">
                      $20/month
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        borderRadius: "15px",
                        padding: "10px 20px",
                        fontWeight: "bold",
                        fontSize: "0.875rem",
                      }}
                    >
                      Get Started Now
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Card>
        </Grid>{/* Right Section */}
<Grid item xs={12} md={4}>
  <Card
    sx={{
      marginTop: "20px",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      textAlign: "left",
    }}
  >
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      Experts
    </Typography>
    <Stack direction="row" spacing={1} alignItems="center" sx={{ marginBottom: "10px" }}>
      <Avatar src="https://via.placeholder.com/40" alt="Expert 1" />
      <Avatar src="https://via.placeholder.com/40" alt="Expert 2" />
      <Avatar src="https://via.placeholder.com/40" alt="Expert 3" />
    </Stack>
    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "10px" }}>
      42 people are currently speaking to experts
    </Typography>
    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "20px" }}>
      Begin your first session. Chat right now with an expert on any topic you are seeking answers for.
    </Typography>
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "15px",
        padding: "12px 30px", // Adjusted to match "Take Test" button size
        textTransform: "none",
        fontWeight: "bold",
        width: "auto", // Ensures compact size
        alignSelf: "start",
      }}
    >
      Chat Now
    </Button>
  </Card>

  {/* Illustration */}
  <Box sx={{ textAlign: "center", marginTop: "20px" }}>
    <img
      src="https://via.placeholder.com/350x250"
      alt="Counseling Illustration"
      style={{ width: "100%", maxWidth: "550px", borderRadius: "15px" }}
    />
  </Box>
</Grid>
      </Grid>
    </Box>
  );
};

export default GetCounseling;
