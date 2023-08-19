import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import AdminLogin from "../admin/adminLogin"


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

const Pages = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* Routes with DefaultLayout */}
          <Route exact path="/" render={() => <DefaultLayout><Home /></DefaultLayout>} />
          <Route exact path="/about" render={() => <DefaultLayout><About /></DefaultLayout>} />
          <Route exact path="/services" render={() => <DefaultLayout><Services /></DefaultLayout>} />
          <Route exact path="/blog" render={() => <DefaultLayout><Blog /></DefaultLayout>} />
          <Route exact path="/pricing" render={() => <DefaultLayout><Pricing /></DefaultLayout>} />
          <Route exact path="/contact" render={() => <DefaultLayout><Contact /></DefaultLayout>} />

          {/* Route for AdminLogin with AdminLoginLayout */}
          <Route exact path="/admin" render={() => <AdminLoginLayout><AdminLogin /></AdminLoginLayout>} />
        </Switch>
      </Router>
    </>
  )
}

export default Pages
