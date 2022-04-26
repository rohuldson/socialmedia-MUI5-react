import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add,
  DateRange,
  EmojiEmotions,
  /* EmojiFoodBeverage,
  EmojiObjects, */
  Image,
  /* Mood,
  MoodBad,
  Skateboarding, */
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import React, { useState } from "react";

const SyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "20px",
});

const AddPost = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpenModal(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" arial-label="add post">
          <Add />
        </Fab>
      </Tooltip>

      <Button onClick={(e) => setOpenModal(true)}>Open modal</Button>
      <SyledModal
        open={openModal}
        onClose={(e) => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={420}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={2}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Creat Post
          </Typography>
          <UserBox>
            <Avatar src="https://github.com/rohuldson.png" />
            <Typography variant="span" fontWeight={500}>
              Roh huldson
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            label="Open your heart here..."
            multiline
            rows={3}
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="pink" />
            <PersonAdd color="titleColor" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </SyledModal>
    </>
  );
};

export default AddPost;
