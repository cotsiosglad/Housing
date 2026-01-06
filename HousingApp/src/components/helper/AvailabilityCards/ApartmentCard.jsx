import { formatPrice, extractNumericValue } from '../CommonFunctions';
import { useCallback } from 'react';

const ApartmentCard = ({ apartment, projectType, onButtonClick, onShowButtonClick }) => {
  const isAvailable = apartment.status !== 'Πωλήθηκε';
  const totalArea = extractNumericValue(apartment.internalArea) +
    extractNumericValue(apartment.coveredVerandas) +
    extractNumericValue(apartment.storage);

  const handleClick = useCallback(() => {
    onButtonClick(apartment);
  }, [apartment, onButtonClick]);

  const handleShowButtonClick = useCallback(() => {
    onShowButtonClick(apartment);
  }, [apartment, onShowButtonClick]);

  return (
    <div className={`apartment-card ${isAvailable ? 'available-card' : 'sold-card'}`}>
      <div className={`card-accent ${isAvailable ? 'available-accent' : 'sold-accent'}`}></div>
      {isAvailable && (
        <div className="pulse-indicator">
          <span className="pulse-ring"></span>
          <span className="pulse-dot"></span>
        </div>
      )}
      <div className="card-content">
        <div className="card-header">
          <div>
            <span className={`card-status-badge ${isAvailable ? 'card-available-badge' : 'card-sold-badge'}`}>
              {isAvailable && <span className="mobile-dot"></span>}
              {isAvailable ? 'Διαθεσιμο' : 'Πωληθηκε'}
            </span>
            <h3 className="apartment-number">{apartment.flatNo}</h3>
            {/* <p className="apartment-type">{apartment.area || 'Διαμέρισμα'}</p> */}
          </div>
          <div className="card-price-container">
            <span className={`price ${isAvailable ? 'available-price' : 'sold-price'}`}>
              {formatPrice(apartment.price)}
            </span>
            {isAvailable && <span className="price-label">Τιμη πωλησης</span>}
          </div>
        </div>

        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Δωματια</span>
            <span className="spec-value">
              <span className="material-icons-outlined">bed</span>
              {apartment.beds && apartment.beds?.toLowerCase() === 'studio' ? apartment.beds : extractNumericValue(apartment.beds)}
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Μπανια</span>
            <span className="spec-value">
              <span className="material-icons-outlined">bathtub</span>
              {extractNumericValue(apartment.baths)}
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Εσ. Χωροι</span>
            <span className="spec-value"><span className="material-icons-outlined">square</span>
              {apartment.internalArea}
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Καλ. Βεράντες</span>
            <span className="spec-value">
              <span className="material-icons-outlined">border_outer</span>
              {apartment.coveredVerandas}
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Βεραντες</span>
            <span className="spec-value"><span className="material-icons-outlined">border_clear</span>
              {apartment.verandas}
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Αποθηκη</span>
            <span className="spec-value"><span className="material-icons-outlined">warehouse</span>
              {apartment.storage}
            </span>
          </div>
          {/* <div className="spec-item">
            <span className="spec-label">Συνολο</span>
            <span className="spec-value spec-total">{totalArea.toFixed(1)} m²</span>
          </div> */}
          {projectType === "Κατοικίες" && (
            <div className="spec-item">
              <span className="spec-label">Γκαραζ</span>
              <span className="spec-value"><span className="material-icons-outlined">garage</span>
                {apartment.garage}</span>
            </div>
          )}
          <div className="spec-item">
            <span className="spec-label">Περιοχη</span>
            <span className="spec-value"><span className="material-icons-outlined">
              zoom_out_map
            </span>
              {apartment.area}
            </span>
          </div>
        </div>

        <div className="button-container">
          <button onClick={handleShowButtonClick} className={isAvailable ? 'btn-secondary' : 'btn-disabled'} disabled={!isAvailable}>
            <span className="material-icons-outlined">description</span>
            Προβολη Εγγραφων
          </button>
          <button onClick={handleClick} className={isAvailable ? 'btn-primary' : 'btn-disabled'} disabled={!isAvailable}>
            <span className="material-icons-outlined">
              {isAvailable ? 'chat' : 'block'}
            </span>
            {isAvailable ? 'Ενδιαφέρομαι' : 'Μη διαθέσιμο'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;