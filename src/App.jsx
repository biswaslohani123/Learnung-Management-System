import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Student/Home";
import CourseList from "./Pages/Student/CourseList";
import CourseDetails from "./Pages/Student/CourseDetails";
import MyEnrollments from "./Pages/Student/MyEnrollments";
import Player from "./Pages/Student/Player";
import Loading from "./Components/Students/Loading";
import Educator from "./Pages/educator/Educator";
import Dashboard from "./Pages/educator/Dashboard";
import AddCourse from "./Pages/educator/AddCourse";
import MyCourses from "./Pages/educator/MyCourses";
import StrudentsEnrolled from "./Pages/educator/StrudentsEnrolled";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator/>}>
          <Route path="educator" element={<Dashboard/>}/>
          <Route path="add-course" element={<AddCourse/>}/>
          <Route path="my-courses" element={<MyCourses/>}/>
          <Route path="student-enrolled" element={<StrudentsEnrolled/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
