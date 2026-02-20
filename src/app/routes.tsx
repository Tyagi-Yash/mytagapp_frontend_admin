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
import Notifications from "../pages/Notifications/Notifications";
import NotificationDetails from "../pages/Notifications/NotificationDetails";
import SubAdminDetails from "../pages/SubAdmin/SubAdminDetails";
import SubAdminRoles from "../pages/SubAdmin/SubAdminRoles";
import { useAuth } from "../features/auth/hooks/useAuth";
import NotFound from "../pages/NotFound/NotFound";
import UserFlagDetails from "../pages/Users/UserFlagDetails";
import SubAdminManagement from "../pages/SubAdmin/SubAdminManagement";
import SubAdminRolesAdd from "../pages/SubAdmin/SubAdminRolesAdd";
import SubAdminRolesEdit from "../pages/SubAdmin/SubAdminRolesEdit";
import PrivacyPolicy from "../pages/static content/PrivacyPolicy";
import TermsOfService from "../pages/static content/TermsOfService";
import StaticContent from "../pages/static content/StaticContent";

function RequireAuth() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<TermsOfService />} />

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

          <Route path="/sub-admin" element={<SubAdminRoles />} />
          <Route path="/sub-admin/:role" element={<SubAdminManagement />} />
          <Route path="/sub-admin/add/:role" element={<SubAdminRolesAdd />} />
          <Route path="/sub-admin/edit/:id" element={<SubAdminRolesEdit />} />
          <Route path="/sub-admin/details/:id" element={<SubAdminDetails />} />

          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notifications/:id" element={<NotificationDetails />} />

          <Route path="/static-content" element={<StaticContent />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
