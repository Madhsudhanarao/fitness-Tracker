import React, { useState } from 'react';
import { 
  Box, 
  Grid, 
  Paper, 
  Typography, 
  Button,
  TextField
} from '@mui/material';

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    duration: '',
    calories: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleAddWorkout = () => {
    if (newWorkout.name && newWorkout.duration && newWorkout.calories) {
      setWorkouts([...workouts, { ...newWorkout, id: Date.now() }]);
      setNewWorkout({
        name: '',
        duration: '',
        calories: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter(workout => workout.id !== id));
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Fitness Tracker
      </Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Workout Name"
              value={newWorkout.name}
              onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Duration (minutes)"
              type="number"
              value={newWorkout.duration}
              onChange={(e) => setNewWorkout({ ...newWorkout, duration: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Calories Burned"
              type="number"
              value={newWorkout.calories}
              onChange={(e) => setNewWorkout({ ...newWorkout, calories: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={newWorkout.date}
              onChange={(e) => setNewWorkout({ ...newWorkout, date: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAddWorkout}
              fullWidth
            >
              Add Workout
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Workout History
        </Typography>
        {workouts.map((workout) => (
          <Paper 
            key={workout.id} 
            sx={{ 
              p: 2, 
              mb: 2, 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Box>
              <Typography variant="subtitle1">{workout.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Duration: {workout.duration} minutes | Calories: {workout.calories} | Date: {workout.date}
              </Typography>
            </Box>
            <Button 
              variant="outlined" 
              color="error" 
              onClick={() => handleDeleteWorkout(workout.id)}
            >
              Delete
            </Button>
          </Paper>
        ))}
      </Paper>
    </Box>
  );
};

export default Dashboard;