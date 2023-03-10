import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  IconButton,
  Divider,
  Typography,
  OutlinedInput,
  ListItem,
} from "@mui/material";
import { deleteSavedJoke, editSavedJoke } from "../saved/SavedActions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const SavedItem = ({ jokeData, joke }) => {
  const [editOn, setEditOn] = useState(false);
  const [jokeNewValue, setJokeNewValue] = useState();
  const dispatch = useDispatch();

  const handleEditOn = () => {
    setEditOn(true);
  };

  const handleEdit = () => {
    dispatch(editSavedJoke(jokeData, jokeNewValue));
    setEditOn(false);
  };

  const handleEditOff = () => {
    setEditOn(false);
  };

  const handleDelete = () => {
    dispatch(deleteSavedJoke(jokeData));
  };

  return (
    <>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {editOn && (
          <OutlinedInput
            fullWidth
            type="text"
            defaultValue={joke}
            style={{
              border: "1px red",
              padding: "5px",
            }}
            onChange={(event) => setJokeNewValue(event.target.value)}
          >
            {joke}
          </OutlinedInput>
        )}
        {!editOn && <Typography variant="h5">{joke}</Typography>}
        <Box sx={{ display: "flex" }}>
          {!editOn && (
            <>
              <IconButton
                aria-label="edit joke"
                component="label"
                onClick={handleEditOn}
              >
                <EditIcon style={{ color: "#00ABB3" }} fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="delete saved joke"
                component="label"
                onClick={handleDelete}
              >
                <DeleteIcon style={{ color: "#00ABB3" }} fontSize="large" />
              </IconButton>
            </>
          )}
          {editOn && (
            <>
              <IconButton
                aria-label="save edited joke"
                component="label"
                onClick={() => handleEdit()}
              >
                <SaveIcon style={{ color: "#00ABB3" }} fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="cancel edit joke"
                component="label"
                onClick={handleEditOff}
              >
                <CancelIcon style={{ color: "#00ABB3" }} fontSize="large" />
              </IconButton>
            </>
          )}
        </Box>
      </ListItem>
      <Divider sx={{ color: "#3C4048" }} />
    </>
  );
};

export default SavedItem;
