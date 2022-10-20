import React from "react";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./SavedTask.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#565656',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
}));

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quibusdam doloribus! Itaque totam ullam impedit voluptatum esse aut, repudiandae consectetur.
      </Typography>
    </CardContent>
    <CardActions>
    <Button size="small" sx={{color:'#fba92c'}}><EditIcon /></Button>
      <Button size="small" sx={{color:'#fba92c'}}><DeleteIcon /></Button>
    </CardActions>
  </React.Fragment>
);

const SavedTask = ({tasksList}) => {
  return (
    <>
      <div className="mainContainer">
        <div className="heading1">
          <h1>Task List</h1>
        </div>
          <div className="taskList">
            <Box sx={{ flexGrow: 1}}>
              <Grid
                container
                spacing={1}
              >
                <Grid
                  xs={3}
                  md={3}
                >
                  <Card variant="outlined">
                    <Item>
                      {card}
                    </Item>
                  </Card>
                </Grid>
                <Grid
                  xs={3}
                  md={3}
                >
                  <Card variant="outlined">
                    <Item>
                      {card}
                    </Item>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </div>
        
      </div>
    </>
  );
};

export default SavedTask;
