/* eslint-disable react/prop-types */
import ChattingCard from "../ChattingCard/ChattingCard";
import { isEqual, add, startOfDay, format } from "date-fns";
import { Box, Stack, Typography } from "@mui/material";
const HistoryChat = ({ details }) => {
  const formatData = (date) => {
    const today = startOfDay(new Date());

    if (isEqual(date, today)) {
      return `Today's chats`;
    } else if (isEqual(today, add(date, { days: 1 }))) {
      return `Yesterday's chats`;
    } else {
      return format(date, "do LLL yyyy");
    }
  };
  return (
    <Box>
      <Typography fontWeight={700} mb={2}>
        {formatData(startOfDay(new Date(details.datetime)))}
      </Typography>
      <Stack spacing={{ xs: 2, md: 3 }}>
        {details.chat.map((item, index) => (
          <ChattingCard details={item} readOnly={true} key={index} />
        ))}
      </Stack>
    </Box>
  );
};

export default HistoryChat;
