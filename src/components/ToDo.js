import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ToDo.css";
import { elementAcceptingRef } from "@mui/utils";

const getLocalStorage = () => {
  let task = localStorage.getItem("taskList");
  if (task) {
    return JSON.parse(task);
  } else {
    return [];
  }
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#565656",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#fff",
}));

const ToDo = () => {
  const [inputTask, setInput] = useState("");
  const [tasksList, setTaskList] = useState(getLocalStorage);
  const [saveButton, toggleSaveButton] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const ref = useRef(null);

  const createTask = (e) => {
    e.preventDefault();
    if (!inputTask) {
      console.log("No Task to be added.");
    } else if (inputTask && saveButton) {
      setTaskList(
        tasksList.map((curr) => {
          if (curr.id === editTask) {
            return { ...curr, name: inputTask };
          }
          return curr;
        })
      );
      toggleSaveButton(false);
      setInput("");
      setEditTask(null);
    } else {
      const inputItem = {
        id: new Date().getTime().toString(),
        name: inputTask,
      };
      setTaskList([...tasksList, inputItem]);
      setInput("");
    }
  };

  const editItem = (id) => {
    let newEditItem = tasksList.find((elem) => {
      return elem.id === id;
    });
    toggleSaveButton(true);
    setInput(newEditItem.name);
    setEditTask(id);
    ref.current.focus();
  };

  const deleteItem = (id) => {
    const updatedItems = tasksList.filter((curr) => curr.id !== id);
    setTaskList([...updatedItems]);
    toggleSaveButton(false);
    setInput("");
  };

  const deleteAll=()=>{
    setTaskList([]);
  }

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasksList));
  }, [tasksList]);

  return (
    <>
      <div className="heading">
        <h1 style={{ color: "#141414" }}>To Do React App</h1>
      </div>
      <h2 style={{ color: "#141414" }}>Create Task</h2>
      <form action="none">
        <Box sx={{ width: "100%" }}>
          <Grid container >
            <Grid xs={11}>
              <input
                ref={ref}
                className="addTaskInput"
                type="text"
                value={inputTask}
                onChange={(e) => setInput(e.target.value)}
              />
            </Grid>
            <Grid xs={1}>
              {saveButton ? (
                <button
                  type="submit"
                  style={{
                    height: "42px",
                    margin: "0px 12px",
                    background: "#565656",
                    width: "80%",
                  }}
                  onClick={(e) => createTask(e)}
                >
                  <SaveIcon sx={{ marginRight: "2px" }} />
                </button>
              ) : (
                <button
                  type="submit"
                  style={{
                    height: "42px",
                    margin: "0px 12px",
                    background: "#565656",
                    width: "80%",
                  }}
                  onClick={(e) => createTask(e)}
                >
                  <AddIcon sx={{ marginRight: "2px" }} />
                </button>
              )}
            </Grid>
          </Grid>
        </Box>
      </form>
      {/* Next Component*/}
      <div className="mainContainer">
        <div className="heading1">
          <h1>Task List</h1>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            {tasksList.map((curr) => {
              return (
                <Grid xs={6} md={4} key={curr.id}>
                  <Card variant="outlined">
                    <Item>
                      <CardContent>
                        <Typography variant="body2">{curr.name}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          sx={{ color: "#fba92c" }}
                          onClick={(e) => editItem(curr.id)}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          size="small"
                          sx={{ color: "#fba92c" }}
                          onClick={(e) => deleteItem(curr.id)}
                        >
                          <DeleteIcon />
                        </Button>
                      </CardActions>
                    </Item>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      {
        tasksList && (
            <div className="deleteAllBtn">
           <button onClick={deleteAll}>
            Delete All
        </button>
      </div>
        )
      }
    </>
  );
};

export default ToDo;
