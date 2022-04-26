import React from "react";
import QuiltedImageList from "./QuiltedImageList";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
/* import { theme } from "../theme";
 */
const Rightbar = () => {
  return (
    <Box
      /* bgcolor="#f6f2ff" */
      flex={2}
      p={3}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="static" width={300}>
        <Typography variant="h6" fontWeight={400}>
          Online Friends
        </Typography>
        <AvatarGroup max={6} mr={3}>
          <Avatar
            alt="a"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="b"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="c"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="d"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="e"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="e"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="e"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="e"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={400} mt={2}>
          Latest Photos
        </Typography>
        <QuiltedImageList />
        <Typography variant="h6" fontWeight={200} mt={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
