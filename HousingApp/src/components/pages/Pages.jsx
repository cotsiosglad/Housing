import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Route, Redirect, Routes } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
// import Pricing from "../pricing/Pricing"
import Projects from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import AdminLogin from "../admin/AdminLogin"
import AdminMainPage from "../admin/AdminMainPage"
import ProjectDetails from "../home/recent/ProjectDetails"
import { auth, GetAuthUser } from "../../firebase"
// import UserAuthorization from "../helper/UserAuthorization"
import NotFoundPage from "./NotFoundPage"
// Layout component with Header and Footer
const someUser = GetAuthUser();


// debugger;
const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// debugger;
const { currentUser } = auth;
// Layout component for AdminLogin without Header and Footer
const AdminLoginLayout = ({ children }) => <>{children}</>;

//Layout for admin home page
const AdminHomePage = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-md-block bg-light sidebar">

        </nav>
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
          {children}
        </div>
      </div>
    </div>
  );
}

const Pages = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Routes with DefaultLayout */}
          <Route exact path="/" Component={() => <DefaultLayout><Home /></DefaultLayout>} />
          <Route exact path="/about" Component={() => <DefaultLayout><About /></DefaultLayout>} />
          <Route exact path="/services" Component={() => <DefaultLayout><Services /></DefaultLayout>} />
          <Route exact path="/projects" Component={() => <DefaultLayout><Projects /></DefaultLayout>} />
          {/* <Route exact path="/pricing" render={() => <DefaultLayout><Pricing /></DefaultLayout>} /> */}
          <Route exact path="/contact" Component={() => <DefaultLayout><Contact /></DefaultLayout>} />

          {/* Route for AdminLogin with AdminLoginLayout */}

          {/* <Route exact path="/admin/home" render={() => someUser ? <AdminLoginLayout><AdminMainPage /></AdminLoginLayout> : <Redirect to='/admin' /> } /> */}
          {/* <UserAuthorization> */}
          {/* <Route exact path="/admin/home" render={() => <AdminLoginLayout><AdminMainPage /></AdminLoginLayout>} /> */}
          <Route exact path="/admin" Component={() => <AdminLoginLayout><AdminLogin /></AdminLoginLayout>} />
          {/* </UserAuthorization> */}
          {/* <Route exact path="/admin/home" render={() => <AdminLoginLayout><AdminMainPage /></AdminLoginLayout>} /> */}
          {/* <Route path="/projects/:id">
            <DefaultLayout>
              <ProjectDetails />
            </DefaultLayout>
          </Route>  */}
          <Route path="/projects/:id" Component={ProjectDetails} />
          <Route path='*' Component={NotFoundPage} />
        </Routes>
      </Router>
    </>
  )
}

export default Pages
