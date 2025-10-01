import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
// import dashboardReducer from "./slices/dashboardSlice";
// import eventReducer from "./slices/eventSlice";
// import jobReducer from "./slices/jobSlice";
// import marketReducer from "./slices/marketSlice";
// import notificationReducer from "./slices/notificationSlice";
// import subadminReducer from "./slices/subadminSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // dashboard: dashboardReducer,
  // event: eventReducer,
  // job: jobReducer,
  // market: marketReducer,
  // notification: notificationReducer,
  // subadmin: subadminReducer,
  user: userReducer,
});
export default rootReducer;
