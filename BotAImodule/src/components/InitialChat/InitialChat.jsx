/* eslint-disable react/prop-types */
import { Box, Grid, Stack, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import Card from "../InitialChat/Card";

const InitialChat = ({ generateResponse }) => {
  // initial card data
  const InitialData = [
    {
      heading: "Hi, what is the weather",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is my location",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is the temperature",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, how are you",
      subtext: "Get immediate AI generated response",
    },
  ];

  return (
    <Stack height={1} justifyContent={"flex-end"} p={{ xs: 2, md: 3 }}>
      <Stack alignItems={"center"} spacing={2} my={5}>
        <Typography variant="h2" fontWeight={500}>
          How Can I Help You Today?
        </Typography>
        <Box component={"img"} src={logo} borderRadius={"50%"} />
      </Stack>
      <Grid container spacing={{ xs: 1, md: 3 }}>
        {InitialData.map((item) => (
          <Grid item key={item.heading} xs={12} md={6}>
            <Card
              heading={item.heading}
              subtext={item.subtext}
              handleClick={generateResponse}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default InitialChat;
