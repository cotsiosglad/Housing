

import InfoText from "../../common/InfoText"
import "./info.css"
import { homeDescription } from "../../data/Data"
import image from "../../images/vision-fotor-bg-remover-20230903171531.png"
import Heading from "../../common/Heading"
import { isMobile } from "react-device-detect"
import { FaMedapps, FaRulerCombined, FaHandshake, FaLaptopHouse, FaPoll } from "react-icons/fa";

// Innovative Cyprus real estate development
// High-quality residential projects
// At the forefront of innovation in the real estate sector
// Strong industry partnerships
// Meticulous attention to detail
// Market trend foresight
// Ongoing commitment to innovation
// Timeless, successful building designs
// Distinctive architectural collaborations
// Responsive to evolving market demands

// Καινοτόμα ανάπτυξη ακινήτων στην Κύπρο
// Έργα υψηλής ποιότητας κατοικιών
// Στο πυρήνα της καινοτομίας στον χώρο των ακινήτων
// Ισχυρές συνεργασίες στον κλάδο
// Αποστολή στη λεπτομέρεια
// Προβλέψη τάσεων στην αγορά
// Διαρκής δέσμευση στην καινοτομία
// Χρονικά ανθεκτικά, επιτυχημένα σχέδια κτιρίων
// Συνεργασίες με διακεκριμένους αρχιτέκτονες
// Ανταπόκριση στις μεταβαλλόμενες αγοραστικές απαιτήσεις

export default () => {
    return (

        <section className="info padding">
            <div className="container">
                <Heading title='Επενδύστε στην αγορά ακινήτου' subtitle='' />
                <Heading title='επενδύστε στο αύριο' subtitle='∆εν είναι απλή αγορά ακινήτου είναι επένδυση' />
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                        <div className="info-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src="/images/info-img.png" />
                        </div>
                    </div>
                    <div className="col-lg-6 info-text" data-aos={isMobile?"fade-in":"fade-up"} data-aos-delay="600" data-aos-once="true">
                        <p>H <b>Domus Alba</b> είναι μία νέα εταιρεία που έρχεται να επαναπροσδιορίσει
                            το τι σημαίνει αγορά ακινήτου, κατοικίας ή διαμερίσματος:
                            σημαίνει επένδυση.
                            <b>"Domus alba"</b> θα πει <b>«Λευκός οίκος»</b>. Θα πει ότι εκεί όπου σήμερα άλλοι
                            δεν βλέπουν τίποτα, στην <b>Domus Alba</b> βλέπουμε τρόπους να επενδύσουμε
                            στο αύριο. Αξιοποιώντας ό,τι πιο καινοτόμο έχει να προσφέρει η αγορά
                            ακινήτων, είτε πρόκειται για ιδιοκατοίκηση είτε για αξιοποίηση και
                            εκμετάλλευση ακινήτου, προσφέρουμε ολοκληρωμένες προτάσεις
                            και εξειδικευμένες λύσεις για όλα τα κοινωνικά στρώματα.
                        </p>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-6 info-cards">
                        <div className="info-card"data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
                            <ul>
                            <li>Καινοτόμα ανάπτυξη ακινήτων στην Κύπρο</li>
                            <li>Έργα υψηλής ποιότητας κατοικιών</li> 
                            <li>Στο πυρήνα της καινοτομίας στον χώρο των ακινήτων</li>
                            <li>Ισχυρές συνεργασίες στον κλάδο</li>
                            <li>Αποστολή στη λεπτομέρεια</li>
                            </ul>
                        </div>
                        <div className="info-card info-card-front" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000" data-aos-once="true">
                            <ul>
                            <li>Προβλέψη τάσεων στην αγορά</li>
                            <li>Διαρκής δέσμευση στην καινοτομία</li>
                            <li>Χρονικά ανθεκτικά, επιτυχημένα σχέδια κτιρίων</li>
                            <li>Συνεργασίες με διακεκριμένους αρχιτέκτονες</li>
                            <li>Ανταπόκριση στις μεταβαλλόμενες αγοραστικές απαιτήσεις</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <div className="row mt-4">
                    <div className="info-box col-12 col-md-6 col-lg-6 d" data-aos={isMobile?"fade-in":"fade-right"} data-aos-delay="800" data-aos-duration="1000" data-aos-once="true">
                        <div className="card d-flex align-items-center flex-column" >
                            <div className="info-box-img">
                                <FaMedapps />
                            </div>
                            <div className="info-box-text">
                                <h5>Kαινοτομία</h5>
                                <p>Διαρκής δέσμευση στην καινοτομία και ανάπτυξη ακινήτων στην Κύπρο. Η αφοσίωσή μας στην καινοτομία διαμορφώνει την ανάπτυξη ακινήτων στην Κύπρο</p>
                            </div>
                        </div>
                    </div>
                    <div className="info-box col-12 col-md-6 col-lg-6 d" data-aos={isMobile?"fade-in":"fade-left"} data-aos-delay="800" data-aos-duration="1000" data-aos-once="true">
                        <div className="card -flex align-items-center flex-column" >
                            <div className="info-box-img">
                                <FaLaptopHouse />
                            </div>
                            <div className="info-box-text">
                                <h5>Ποιότητα </h5>
                                <p>Τα έργα μας αντιπροσωπεύουν επιτυχημένα, ανθεκτικά σχέδια κτιρίων και υψηλή ποιότητα</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-4">
                    <div className="info-box col-12 col-md-6 col-lg-6" data-aos={isMobile?"fade-in":"fade-right"} data-aos-delay="800" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
                        <div className="card d-flex align-items-center flex-column">
                            <div className="info-box-img">
                                <FaHandshake />
                            </div>
                            <div className="info-box-text">
                                <h5>Συνεργασίες</h5>
                                <p>Ισχυρές συνεργασίες στον κλάδο με διακεκριμένους αρχιτέκτονες για εξαιρετικά αποτελέσματα</p>
                            </div>
                        </div>
                    </div>
                    <div className="info-box col-12 col-md-6 col-lg-6" data-aos={isMobile?"fade-in":"fade-left"} data-aos-delay="700" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
                        <div className="card d-flex align-items-center flex-column" >
                            <div className="info-box-img">
                                <FaPoll />
                            </div>
                            <div className="info-box-text ">
                                <h5>Kαινοτομία</h5>
                                <p>Παρακολουθούμε και προβλέπουμε τις τάσεις στην αγορά για να βρισκόμαστε στην επικράτεια της καινοτομίας στον χώρο των ακινήτων</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>



    )
}

