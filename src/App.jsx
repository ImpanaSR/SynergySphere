// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./views/login";
import Signup from "./views/Signup";
import Projects from "./views/Projects";
import ProjectTasks from "./views/ProjectTasks";
import MyTasks from "./views/MyTasks";
import ProjectForm from "./views/ProjectForm";
import TaskForm from "./views/TaskForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route goes to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login & Signup - no navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Authenticated pages - show navbar */}
        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <Projects />
            </>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <>
              <Navbar />
              <ProjectTasks />
            </>
          }
        />
        <Route
          path="/my-tasks"
          element={
            <>
              <Navbar />
              <MyTasks />
            </>
          }
        />
        <Route
          path="/project-form"
          element={
            <>
              <Navbar />
              <ProjectForm />
            </>
          }
        />
        <Route
          path="/task-form"
          element={
            <>
              <Navbar />
              <TaskForm />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
