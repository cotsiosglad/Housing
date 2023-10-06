import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import ScrollToTop from "../../customHelperComponents/ScrollToTop";

const About = () => {
  return (
    <>
    <ScrollToTop />
      <section className='about' >
        {/* <Back name='About Us' title='About Us - Who We Are?' cover={img} /> */}
        <Back name='About Us' title='Σχετικά με εμάς - Ποιοί είμαστε;' cover={img} />
        <div className='about-content container mtop' >
          <div className='row'>
            <div className="col-md-6">
              <Heading title='Ποιοι Είμαστε' subtitle='' />
            
              <p>Το όραμά μας στην Domus Alba είναι ένα: με την πολυετή τεχνογνωσία των έμπειρων στελεχών μας και την αστείρευτη ανάγκη μας για γνώση και εξέλιξη κατορθώνουμε να ανοίγουμε τον δρόμο ώστε κάθε δική σας αγορά να αποδεικνύεται μία προσοδοφόρα επένδυση. Σ’ αυτό βασίζεται η δική μας επιτυχία: γιατί... αγορά ακινήτου σημαίνει επένδυση!Όσον αφορά τα έργα της εταιρείας, όλα γίνονται με ίδια κεφάλαια και είναι άμεσα μεταβιβάσιμα με την υπογραφή του αγοραπωλητήριου εγγράφου. Επιπλέον, κανένα έργο δεν έχει εμπράγματο βάρος, συνεπώς καμία υποθήκη.</p>
            
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true">  
              <img src='./who.jpg' alt='' />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-6" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true">  
              <img src='./whyus.jpg' alt='' />
            </div>
            <div className="col-md-6">
              <Heading title='Γιατί Εμάς' subtitle='' />
              <p>Κάθε στέλεχος της <b>Domus Alba</b> προσφέρει, με την πολυετή εμπειρία του στον χώρο,
              την εξειδίκευση και την εμπεριστατωμένη ματιά που απαιτεί κάθε έργο. Όλοι οι μέτοχοι,
              καθώς και το εργατικό προσωπικό, διευθυντές, εργολάβοι και σύμβουλοι μελετητές, έχουν
              άμεση επαφή με όλους τους τομείς των αρμοδιοτήτων τους και εποπτεύουν πλήρως την πρόοδο
              κάθε έργου σε κάθε στάδιο ανάπτυξής του.</p>
            </div>
            
          </div>
          <div className="row pt-5">
            <div className="col-md-6">
            <Heading title='Το Όραμα μας' subtitle='' />
              <p>
                Το όραμά μας στην <b>Domus Alba</b> είναι ένα:
                με την πολυετή τεχνογνωσία των έμπειρων στελεχών μας και την
                αστείρευτη ανάγκη μας για γνώση και εξέλιξη κατορθώνουμε να
                ανοίγουμε τον δρόμο ώστε κάθε δική σας αγορά να αποδεικνύεται
                μία προσοδοφόρα επένδυση. Σ’ αυτό βασίζεται η δική μας επιτυχία:
                γιατί... αγορά ακινήτου σημαίνει επένδυση!
              </p>
              <p>
                Όσον αφορά τα έργα της εταιρείας, όλα γίνονται με ίδια κεφάλαια
                και είναι άμεσα μεταβιβάσιμα με την υπογραφή του αγοραπωλητήριου
                εγγράφου. Επιπλέον, κανένα έργο δεν έχει εμπράγματο βάρος,
                συνεπώς καμία υποθήκη.
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true">  
              <img src='./vision.jpg' alt='' />

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
