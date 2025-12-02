import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import UsersPage from "../pages/Users/Users";
import UserDetails from "../pages/Users/UserDetails";
import Market from "../pages/Market/Market";
import MarketDetails from "../pages/Market/MarketDetails";
import Job from "../pages/Job/Job";
import JobDetails from "../pages/Job/JobDetails";
import Event from "../pages/Event/Event";
import EventDetails from "../pages/Event/EventDetails";
import ContentManagement from "../pages/Content/ContentManagement";
import ContentUserDetails from "../pages/Content/ContentUserDetails";
import ContentUserPostDetails from "../pages/Content/ContentUserPostDetails";
import CategoryDetails from "../pages/Category/CategoryDetails";
import FlagDetails from "../pages/Flag/FlagDetails";
import CompanyUserDetails from "../pages/Company/CompanyUserDetails";
import CollegeUserDetails from "../pages/College/CollegeUserDetails";
import ProfessionalUserDetails from "../pages/Professional/ProfessionalUserDetails";
import StudentUserDetails from "../pages/Student/StudentUserDetails";
import TeacherUserDetails from "../pages/Teacher/TeacherUserDetails";
import Notifications from "../pages/Notifications/Notifications";
import NotificationDetails from "../pages/Notifications/NotificationDetails";
import SubAdminDetails from "../pages/SubAdmin/SubAdminDetails";
import SubAdminRoles from "../pages/SubAdmin/SubAdminRoles";
import { useAuth } from "../features/auth/hooks/useAuth";
import NotFound from "../pages/NotFound/NotFound";
import UserFlagDetails from "../pages/Users/UserFlagDetails";

function RequireAuth() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route element={<RequireAuth />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/details/:id" element={<UserDetails />} />
          <Route path="/users/report/:id" element={<UserFlagDetails />} />

          <Route path="/content" element={<ContentManagement />} />
          <Route path="/content/:id" element={<ContentUserDetails />} />
          <Route path="/content/post/:id" element={<ContentUserPostDetails />} />

          <Route path="/market" element={<Market />} />
          <Route path="/market/:id" element={<MarketDetails />} />

          <Route path="/job" element={<Job />} />
          <Route path="/job/:id" element={<JobDetails />} />

          <Route path="/event" element={<Event />} />
          <Route path="/event/:id" element={<EventDetails />} />

          <Route path="/sub-admin-roles" element={<SubAdminRoles />} />
          <Route path="/sub-admin-roles/:id" element={<SubAdminDetails />} />

          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notifications/:id" element={<NotificationDetails />} />

          <Route path="/category/:id" element={<CategoryDetails />} />
          <Route path="/flag/:id" element={<FlagDetails />} />
          <Route path="/company/:id" element={<CompanyUserDetails />} />
          <Route path="/college/:id" element={<CollegeUserDetails />} />
          <Route path="/professional/:id" element={<ProfessionalUserDetails />} />
          <Route path="/student/:id" element={<StudentUserDetails />} />
          <Route path="/teacher/:id" element={<TeacherUserDetails />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
