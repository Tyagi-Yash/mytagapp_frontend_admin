import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

// import Login from "./pages/Login/Login";
import Login from "./pages/login/Login";
import LoginForgot from "./pages/login/LoginForgot";
import LoginOtp from "./pages/login/LoginOtp";
import LoginResend from "./pages/login/LoginResend";
import LoginReset from "./pages/login/LoginReset";
import LoginSuccess from "./pages/login/LoginSuccess";
import LoginSupport from "./pages/login/LoginSupport";
import ProtectRoute from "./components/ProtectRoute";
import AppAfterLogin from "./layout/AppAfterLogin";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/user/Users";
import TeacherUser from "./pages/user/TeacherUser";
import StudentUser from "./pages/user/StudentUser";
import SchoolUser from "./pages/user/SchoolUser";
import ProfessionalUser from "./pages/user/ProfessionalUser";
import CompanyUser from "./pages/user/CompanyUser";
import CollegeUser from "./pages/user/CollegeUser";
import FlagDetails from "./pages/user/FlagDetails";
import SubadminManage from "./pages/subadmin/SubadminManage";
import SubadminDetails from "./pages/subadmin/SubadminDetails";
import SubadminRoles from "./pages/subadmin/SubadminRoles";
import SubadminRolesAdd from "./pages/subadmin/SubadminRolesAdd";
import SubadminRolesEdit from "./pages/subadmin/SubadminRolesEdit";
import Notification from "./pages/notification/Notification";
import NotificationDetails from "./pages/notification/NotificationDetails";
import Market from "./pages/marketplace/Market";
import MarketDetails from "./pages/marketplace/MarketDetails";
import Job from "./pages/job/Job";
import JobDetails from "./pages/job/JobDetails";
import Event from "./pages/event/Event";
import EventDetails from "./pages/event/EventDetails";
import store from "./reduxToolkit/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login-forgot" element={<LoginForgot />} />
          <Route path="/login-otp" element={<LoginOtp />} />
          <Route path="/login-resend" element={<LoginResend />} />
          <Route path="/login-reset" element={<LoginReset />} />
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route path="/login-support" element={<LoginSupport />} />
          <Route element={<ProtectRoute />}>
            <Route element={<AppAfterLogin />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/teacher-user-details" element={<TeacherUser />} />
              <Route path="/student-user-details" element={<StudentUser />} />
              <Route path="/school-user-details" element={<SchoolUser />} />
              <Route path="/professional-user-details" element={<ProfessionalUser />} />
              <Route path="/company-user-details" element={<CompanyUser />} />
              <Route path="/college-user-details" element={<CollegeUser />} />
              <Route path="/flag-details" element={<FlagDetails />} />
              <Route path="/subadmin-manage" element={<SubadminManage />} />
              <Route path="/subadmin-details/:id" element={<SubadminDetails />} />
              <Route path="/subadmin-roles/:roleName" element={<SubadminRoles />} />
              <Route path="/subadmin-rolesadd" element={<SubadminRolesAdd />} />
              <Route path="/subadmin-rolesedit/:id" element={<SubadminRolesEdit />} />
              <Route path="/notifications" element={<Notification />} />
              <Route path="/notification-details" element={<NotificationDetails />} />
              <Route path="/market" element={<Market />} />
              <Route path="/market-details" element={<MarketDetails />} />
              <Route path="/job" element={<Job />} />
              <Route path="/job-details" element={<JobDetails />} />
              <Route path="/event" element={<Event />} />
              <Route path="/event-details" element={<EventDetails />} />
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </Provider>
    </>
  );
}

export default App;
