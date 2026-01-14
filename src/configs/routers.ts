import LOGIN from '../pages/login.jsx';
import REGISTER from '../pages/register.jsx';
import MEDITATION from '../pages/meditation.jsx';
import COURSES from '../pages/courses.jsx';
import SCRIPTURES from '../pages/scriptures.jsx';
import PROFILE from '../pages/profile.jsx';
import MOBILE_MEDITATION from '../pages/mobile-meditation.jsx';
import MOBILE_SCRIPTURES from '../pages/mobile-scriptures.jsx';
export const routers = [{
  id: "login",
  component: LOGIN
}, {
  id: "register",
  component: REGISTER
}, {
  id: "meditation",
  component: MEDITATION
}, {
  id: "courses",
  component: COURSES
}, {
  id: "scriptures",
  component: SCRIPTURES
}, {
  id: "profile",
  component: PROFILE
}, {
  id: "mobile-meditation",
  component: MOBILE_MEDITATION
}, {
  id: "mobile-scriptures",
  component: MOBILE_SCRIPTURES
}]