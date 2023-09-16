

import InfoText from "../../common/InfoText"
import "./info.css"
import { homeDescription } from "../../data/Data"
import image from "../../images/vision-fotor-bg-remover-20230903171531.png"

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

export default ()=>{
    return(
        <section className="info padding">
            <div className="container">
                <div className="row">
                    {/* <div className="col-6">
                        <InfoText title={homeDescription.title} text={homeDescription.text}/>
                    </div> */}
                    <div className="col-md-6 info-text">
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
                </div>
            </div>
        </section>
    )
}

