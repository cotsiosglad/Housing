import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
// import Pricing from "../pricing/Pricing"
import Projects from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
// import AdminLogin from "../admin/AdminLogin"
// import AdminMainPage from "../admin/AdminMainPage"
// import AdminMenu from "../admin/AdminMenu"
import ProjectDetails from "../home/recent/ProjectDetails"


// Layout component with Header and Footer
const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// Layout component for AdminLogin without Header and Footer
const AdminLoginLayout = ({ children }) => <>{children}</>;

//Layout for admin home page
// const AdminHomePage = ({ children }) => {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <nav className="col-md-2 d-md-block bg-light sidebar">
//           <AdminMenu />
//         </nav>
//         <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

const Pages = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* Routes with DefaultLayout */}
          <Route exact path="/" render={() => <DefaultLayout><Home /></DefaultLayout>} />
          <Route exact path="/about" render={() => <DefaultLayout><About /></DefaultLayout>} />
          <Route exact path="/services" render={() => <DefaultLayout><Services /></DefaultLayout>} />
          <Route exact path="/projects" render={() => <DefaultLayout><Projects /></DefaultLayout>} />
          {/* <Route exact path="/pricing" render={() => <DefaultLayout><Pricing /></DefaultLayout>} /> */}
          <Route exact path="/contact" render={() => <DefaultLayout><Contact /></DefaultLayout>} />

          {/* Route for AdminLogin with AdminLoginLayout */}
          {/* <Route exact path="/admin" render={() => <AdminLoginLayout><AdminLogin /></AdminLoginLayout>} />
          <Route exact path="/admin/home" render={() => <AdminHomePage><AdminMainPage /></AdminHomePage>} /> */}
          {/* <Route path="/projects/:id">
            <DefaultLayout>
              <ProjectDetails />
            </DefaultLayout>
          </Route>  */}
          <Route path="/projects/:id" component={ProjectDetails} />
        </Switch>
      </Router>
    </>
  )
}

export default Pages
