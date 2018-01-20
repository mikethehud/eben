import Home from "./containers/Home";
import Resume from "./containers/Resume";
import Projects from "./containers/Projects";
import CaseStudy from "./containers/CaseStudy";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/resume",
    component: Resume
  },
  {
    path: "/projects",
    component: Projects
  },
  {
    path: "/study/:slug",
    component: CaseStudy
  }
]

export default routes;
