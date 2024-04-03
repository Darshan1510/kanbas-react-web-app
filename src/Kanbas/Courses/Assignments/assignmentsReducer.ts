import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: [],
  assignment: {
    title: "New Assignment",
    course: "A101",
    points: 100,
    dueDate: "Oct 5 2023 at 5:00 PM",
    description: "Description of the assignment",
    availableFrom: "01/01/2024",
    availableUntil: "01/10/2024",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state: any, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state: any, action) => {
      state.assignments = state.assignments.map((assignment: any) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, setAssignments } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
