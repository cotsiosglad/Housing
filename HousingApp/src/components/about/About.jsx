import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";
import ScrollToTop from "../../customHelperComponents/ScrollToTop";
import { isBrowser, isMobile, isTablet } from "react-device-detect";

const About = () => {
  if (isMobile && !isTablet) {
    return (
      <>
        <ScrollToTop />
        <section className="about">
          {/* <Back name='About Us' title='About Us - Who We Are?' cover={img} /> */}
          <Back name='Για Εμάς' title='Σχετικά με εμάς - Ποιοί είμαστε;' cover={img} />
          <div className='about-content container mtop' >
            <div className='row'>
              <div className="col-md-6 about-content-text">
                <Heading title="Ποιοι Είμαστε" subtitle="" />

                <p className="text-justify">
                  H <b>Domus Alba</b> είναι µία νέα εταιρεία που έρχεται να επαναπροσδιορίσει το τι σημαίνει αγορά ακινήτου, κατοικίας ή διαμερίσματος: σημαίνει επένδυση. “Domus alba” θα πει «Λευκός οίκος». Θα πει ότι εκεί όπου σήμερα άλλοι δεν βλέπουν τίποτα, στην <b>Domus Alba</b> βλέπουμε τρόπους να επενδύσουμε στο αύριο. Αξιοποιώντας ό,τι πιο καινοτόμο έχει να προσφέρει η αγορά ακινήτων, είτε πρόκειται για ιδιοκατοίκηση είτε για αξιοποίηση και εκμετάλλευση ακινήτου, προσφέρουμε ολοκληρωμένες προτάσεις και εξειδικευμένες λύσεις για όλα τα κοινωνικά στρώματα
                </p>
              </div>
              <div
                className="col-md-6"
                data-aos="flip-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src="./who.jpg" alt="" />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-6 about-content-text">
                <Heading title="Γιατί Εμάς" subtitle="" />
                <p className="text-justify">
                  Κάθε στέλεχος της <b>Domus Alba</b> προσφέρει, με την πολυετή
                  εμπειρία του στον χώρο, την εξειδίκευση και την
                  εμπεριστατωμένη ματιά που απαιτεί κάθε έργο. Όλοι οι μέτοχοι,
                  καθώς και το εργατικό προσωπικό, διευθυντές, εργολάβοι και
                  σύμβουλοι μελετητές, έχουν άμεση επαφή με όλους τους τομείς
                  των αρμοδιοτήτων τους και εποπτεύουν πλήρως την πρόοδο κάθε
                  έργου σε κάθε στάδιο ανάπτυξής του.
                </p>
              </div>
              <div
                className="col-md-6"
                data-aos="flip-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src="./whyus.jpg" alt="" />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-6 about-content-text">
                <Heading title="Το Όραμα μας" subtitle="" />
                <p className="text-justify">
                  Το όραμά μας στην <b>Domus Alba</b> είναι ένα: με την πολυετή
                  τεχνογνωσία των έμπειρων στελεχών μας και την αστείρευτη
                  ανάγκη μας για γνώση και εξέλιξη κατορθώνουμε να ανοίγουμε τον
                  δρόμο ώστε κάθε δική σας αγορά να αποδεικνύεται μία
                  προσοδοφόρα επένδυση. Σ’ αυτό βασίζεται η δική μας επιτυχία:
                  γιατί... αγορά ακινήτου σημαίνει επένδυση!
                </p>
                <p className="text-justify">
                  Όσον αφορά τα έργα της εταιρείας, όλα γίνονται με ίδια
                  κεφάλαια και είναι άμεσα μεταβιβάσιμα με την υπογραφή του
                  αγοραπωλητήριου εγγράφου. Επιπλέον, κανένα έργο δεν έχει
                  εμπράγματο βάρος, συνεπώς καμία υποθήκη.
                </p>
              </div>
              <div
                className="col-md-6"
                data-aos="flip-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src="./vision.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <ScrollToTop />
        <section className="about">
          {/* <Back name='About Us' title='About Us - Who We Are?' cover={img} /> */}
          <Back name='Για Εμάς' title='Σχετικά με εμάς - Ποιοί είμαστε;' cover={img} />
          <div className='about-content container mtop' >
            <div className='row'>
              <div className="col-md-6">
                <Heading title="Ποιοι Είμαστε" subtitle="" />

                <p>
                  H <b>Domus Alba</b> είναι µία νέα εταιρεία που έρχεται να επαναπροσδιορίσει το τι σημαίνει αγορά ακινήτου, κατοικίας ή διαμερίσματος: σημαίνει επένδυση. “Domus alba” θα πει «Λευκός οίκος». Θα πει ότι εκεί όπου σήμερα άλλοι δεν βλέπουν τίποτα, στην <b>Domus Alba</b> βλέπουμε τρόπους να επενδύσουμε στο αύριο. Αξιοποιώντας ό,τι πιο καινοτόμο έχει να προσφέρει η αγορά ακινήτων, είτε πρόκειται για ιδιοκατοίκηση είτε για αξιοποίηση και εκμετάλλευση ακινήτου, προσφέρουμε ολοκληρωμένες προτάσεις και εξειδικευμένες λύσεις για όλα τα κοινωνικά στρώματα
                </p>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src="./who.jpg" alt="" />
              </div>
            </div>
            <div className="row pt-5">
              <div
                className="col-md-6"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src="./whyus.jpg" alt="" />
              </div>
              <div className="col-md-6">
                <Heading title="Γιατί Εμάς" subtitle="" />
                <p>
                  Κάθε στέλεχος της <b>Domus Alba</b> προσφέρει, με την πολυετή
                  εμπειρία του στον χώρο, την εξειδίκευση και την
                  εμπεριστατωμένη ματιά που απαιτεί κάθε έργο. Όλοι οι μέτοχοι,
                  καθώς και το εργατικό προσωπικό, διευθυντές, εργολάβοι και
                  σύμβουλοι μελετητές, έχουν άμεση επαφή με όλους τους τομείς
                  των αρμοδιοτήτων τους και εποπτεύουν πλήρως την πρόοδο κάθε
                  έργου σε κάθε στάδιο ανάπτυξής του.
                </p>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-6">
                <Heading title="Το Όραμα μας" subtitle="" />
                <p>
                  Το όραμά μας στην <b>Domus Alba</b> είναι ένα: με την πολυετή
                  τεχνογνωσία των έμπειρων στελεχών μας και την αστείρευτη
                  ανάγκη μας για γνώση και εξέλιξη κατορθώνουμε να ανοίγουμε τον
                  δρόμο ώστε κάθε δική σας αγορά να αποδεικνύεται μία
                  προσοδοφόρα επένδυση. Σ’ αυτό βασίζεται η δική μας επιτυχία:
                  γιατί... αγορά ακινήτου σημαίνει επένδυση!
                </p>
                <p>
                  Όσον αφορά τα έργα της εταιρείας, όλα γίνονται με ίδια
                  κεφάλαια και είναι άμεσα μεταβιβάσιμα με την υπογραφή του
                  αγοραπωλητήριου εγγράφου. Επιπλέον, κανένα έργο δεν έχει
                  εμπράγματο βάρος, συνεπώς καμία υποθήκη.
                </p>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src="./vision.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default About;
