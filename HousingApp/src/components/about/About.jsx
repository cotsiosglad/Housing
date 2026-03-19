import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";
import ScrollToTop from "../../customHelperComponents/ScrollToTop";
import { isBrowser, isMobile, isTablet } from "react-device-detect";
import { MdCall } from "react-icons/md";

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

                <p style={{ textAlign: "justify" }}>
                  Η <b>Domus Alba</b> είναι μία νέα, δυναμικά αναπτυσσόμενη <b>οικογενειακή επιχείρηση</b>, που έρχεται να επαναπροσδιορίσει το τι σημαίνει αγορά ακινήτου, κατοικίας ή διαμερίσματος: σημαίνει <b>επένδυση</b>.</p>
                <p style={{ textAlign: "justify" }}>
                  Το όνομα <i>Domus Alba</i> σημαίνει «Λευκός Οίκος» και εκφράζει τη φιλοσοφία μας: εκεί όπου άλλοι δεν βλέπουν τίποτα, εμείς βλέπουμε δυνατότητες και προοπτικές για το αύριο. Αξιοποιώντας ό,τι πιο καινοτόμο έχει να προσφέρει η αγορά ακινήτων, είτε πρόκειται για ιδιοκατοίκηση είτε για επένδυση και αξιοποίηση ακινήτου, προσφέρουμε ολοκληρωμένες προτάσεις και εξειδικευμένες λύσεις, προσιτές σε όλα τα κοινωνικά στρώματα.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Ως οικογενειακή επιχείρηση, λειτουργούμε με διαφάνεια, προσωπική προσέγγιση και άμεση επικοινωνία, χτίζοντας σχέσεις εμπιστοσύνης με κάθε πελάτη.
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
                <p style={{ textAlign: "justify" }}>
                  Κάθε στέλεχος της Domus Alba διαθέτει πολυετή εμπειρία στον χώρο των ακινήτων και προσφέρει την εξειδίκευση και τη σφαιρική ματιά που απαιτεί κάθε έργο. Οι μέτοχοι, οι διευθυντές, οι εργολάβοι και οι σύμβουλοι μελετητές έχουν άμεση και ενεργή συμμετοχή σε όλα τα στάδια ανάπτυξης, εξασφαλίζοντας πλήρη έλεγχο της ποιότητας, του κόστους και του χρονοδιαγράμματος.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Για εμάς, κάθε έργο είναι προσωπική υπόθεση και κάθε συνεργασία αντιμετωπίζεται με υπευθυνότητα και συνέπεια.
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
                <p style={{ textAlign: "justify" }}>
                  Το όραμά μας στην Domus Alba είναι ξεκάθαρο: με την τεχνογνωσία των έμπειρων στελεχών μας και τη συνεχή μας ανάγκη για εξέλιξη και γνώση, δημιουργούμε τις προϋποθέσεις ώστε κάθε αγορά ακινήτου να αποτελεί μία ασφαλή και <b>προσοδοφόρα επένδυση</b>.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Η δική μας επιτυχία βασίζεται στη δική σας. Γιατί για εμάς, αγορά ακινήτου σημαίνει επένδυση.
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
            <div className="row pt-5">
              <div className="col-md-6 about-content-text">
                <Heading title="Διαφάνεια & Ασφάλεια Επένδυσης" subtitle="" />
                <p style={{ textAlign: "justify" }}>
                  Όλα τα έργα της εταιρείας υλοποιούνται <b>αποκλειστικά με ίδια κεφάλαια</b> και είναι <b>άμεσα μεταβιβάσιμα</b> με την εξοφληση του αγοραπωλητηρίου εγγράφου. Κανένα έργο δεν φέρει εμπράγματο βάρος ή υποθήκη, προσφέροντας απόλυτη ασφάλεια και σιγουριά στον αγοραστή.</p>
                <p style={{ textAlign: "justify" }}>
                  Για εμάς, κάθε έργο είναι προσωπική υπόθεση και κάθε συνεργασία αντιμετωπίζεται με υπευθυνότητα και συνέπεια.
                </p>
              </div>
              <div
                className="col-md-6"
                data-aos="flip-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src="./invest.jpg" alt="" />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-6 about-content-text">
                <Heading title="Η Ομάδα Μας" subtitle="Πάντα στη Διάθεσή Σας" />
                <p className="text-justify">
                  Ως οικογενειακή επιχείρηση, είμαστε πάντα δίπλα σας για οποιαδήποτε πληροφορία ή καθοδήγηση:
                </p>
                <div>
                  <ul className="d-flex flex-column gap-2" style={{ listStyleType: "disc" }}>
                    <li>
                      <b>Μαργαρίτα Χατζησυμεού</b><br />
                      Διευθύντρια
                      <br></br>
                      <MdCall /> 97685555
                    </li>
                    <li>
                      <b>Μάριος Χατζησυμεού</b><br />
                      Διευθυντής
                      <br></br>
                      <MdCall /> 96257540
                    </li>
                    <li>
                      <b>Νίκος Χατζησυμεού</b><br />
                      Τεχνικός Διευθυντής
                      <br></br>
                      <MdCall /> 99346436
                    </li>
                    <li>
                      <b>Architectural Lab</b><br />
                      Γραφείο Μελετητών Έργων
                      <br></br>
                      <MdCall /> 97729606
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="flip-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src="./team.jpg" alt="" />
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
                  Η <b>Domus Alba</b> είναι μία νέα, δυναμικά αναπτυσσόμενη <b>οικογενειακή επιχείρηση</b>, που έρχεται να επαναπροσδιορίσει το τι σημαίνει αγορά ακινήτου, κατοικίας ή διαμερίσματος: σημαίνει <b>επένδυση</b>.</p>
                <p>
                  Το όνομα <i>Domus Alba</i> σημαίνει «Λευκός Οίκος» και εκφράζει τη φιλοσοφία μας: εκεί όπου άλλοι δεν βλέπουν τίποτα, εμείς βλέπουμε δυνατότητες και προοπτικές για το αύριο. Αξιοποιώντας ό,τι πιο καινοτόμο έχει να προσφέρει η αγορά ακινήτων, είτε πρόκειται για ιδιοκατοίκηση είτε για επένδυση και αξιοποίηση ακινήτου, προσφέρουμε ολοκληρωμένες προτάσεις και εξειδικευμένες λύσεις, προσιτές σε όλα τα κοινωνικά στρώματα.
                </p>
                <p>
                  Ως οικογενειακή επιχείρηση, λειτουργούμε με διαφάνεια, προσωπική προσέγγιση και άμεση επικοινωνία, χτίζοντας σχέσεις εμπιστοσύνης με κάθε πελάτη.
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
                  Κάθε στέλεχος της Domus Alba διαθέτει πολυετή εμπειρία στον χώρο των ακινήτων και προσφέρει την εξειδίκευση και τη σφαιρική ματιά που απαιτεί κάθε έργο. Οι μέτοχοι, οι διευθυντές, οι εργολάβοι και οι σύμβουλοι μελετητές έχουν άμεση και ενεργή συμμετοχή σε όλα τα στάδια ανάπτυξης, εξασφαλίζοντας πλήρη έλεγχο της ποιότητας, του κόστους και του χρονοδιαγράμματος.
                </p>
                <p>
                  Για εμάς, κάθε έργο είναι προσωπική υπόθεση και κάθε συνεργασία αντιμετωπίζεται με υπευθυνότητα και συνέπεια.
                </p>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-6">
                <Heading title="Το Όραμα μας" subtitle="" />
                <p>
                  Το όραμά μας στην Domus Alba είναι ξεκάθαρο: με την τεχνογνωσία των έμπειρων στελεχών μας και τη συνεχή μας ανάγκη για εξέλιξη και γνώση, δημιουργούμε τις προϋποθέσεις ώστε κάθε αγορά ακινήτου να αποτελεί μία ασφαλή και <b>προσοδοφόρα επένδυση</b>.
                </p>
                <p>
                  Η δική μας επιτυχία βασίζεται στη δική σας. Γιατί για εμάς, αγορά ακινήτου σημαίνει επένδυση.
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
            <div className="row pt-5">
              <div
                className="col-md-6"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src="./invest.jpg" alt="" />
              </div>
              <div className="col-md-6">
                <Heading title="Διαφάνεια & Ασφάλεια Επένδυσης" subtitle="" />
                <p>
                  Όλα τα έργα της εταιρείας υλοποιούνται <b>αποκλειστικά με ίδια κεφάλαια</b> και είναι <b>άμεσα μεταβιβάσιμα</b> με την εξοφληση του αγοραπωλητηρίου εγγράφου. Κανένα έργο δεν φέρει εμπράγματο βάρος ή υποθήκη, προσφέροντας απόλυτη ασφάλεια και σιγουριά στον αγοραστή.</p>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-6">
                <Heading title="Η Ομάδα Μας" subtitle="Πάντα στη Διάθεσή Σας" />
                <p className="text-justify">
                  Ως οικογενειακή επιχείρηση, είμαστε πάντα δίπλα σας για οποιαδήποτε πληροφορία ή καθοδήγηση:
                </p>
                <div>
                  <ul className="d-flex flex-column gap-2" style={{ listStyleType: "disc" }}>
                    <li>
                      <b>Μαργαρίτα Χατζησυμεού</b><br />
                      Διευθύντρια
                      <br></br>
                      <MdCall /> 97685555
                    </li>
                    <li>
                      <b>Μάριος Χατζησυμεού</b><br />
                      Διευθυντής
                      <br></br>
                      <MdCall /> 96257540
                    </li>
                    <li>
                      <b>Νίκος Χατζησυμεού</b><br />
                      Τεχνικός Διευθυντής
                      <br></br>
                      <MdCall /> 99346436
                    </li>
                    <li>
                      <b>Architectural Lab</b><br />
                      Γραφείο Μελετητών Έργων
                      <br></br>
                      <MdCall /> 97729606
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src="./team.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default About;
