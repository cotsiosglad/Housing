import { useMemo, useCallback } from 'react';
import { formatPrice, extractNumericValue } from '../CommonFunctions';

const FloorCard = ({ floor, apartments, onShowAll, cardIsExpanded }) => {
    // const [showAllButtonIsClicked, setShowAllButtonIsClicked] = useState(false);
    const stats = useMemo(() => {
        const available = apartments.filter(apt => apt.status !== 'Πωλήθηκε');
        const internalAreas = apartments.map(apt => extractNumericValue(apt.internalArea)).filter(v => v > 0);
        const prices = apartments.map(apt => extractNumericValue(apt.price)).filter(v => v > 0);

        return {
            availableCount: available.length,
            totalCount: apartments.length,
            minArea: internalAreas.length ? Math.min(...internalAreas) : 0,
            maxArea: internalAreas.length ? Math.max(...internalAreas) : 0,
            minPrice: prices.length ? Math.min(...prices) : 0,
            maxPrice: prices.length ? Math.max(...prices) : 0,
        };
    }, [apartments]);

    const handleShowAllClick = useCallback(() => {
        // setShowAllButtonIsClicked(!showAllButtonIsClicked);
        onShowAll(floor, apartments);
    }, [floor, apartments, onShowAll]);

    const hasAvailable = stats.availableCount > 0;

    return (
        <div className={`apartment-card ${hasAvailable ? 'available-card' : 'sold-card'}`}>
            <div className={`card-accent ${hasAvailable ? 'available-accent' : 'sold-accent'}`}></div>
            {hasAvailable && (
                <div className="pulse-indicator">
                    <span className="pulse-ring"></span>
                    <span className="pulse-dot"></span>
                </div>
            )}
            <div className="card-content">
                <div className="card-header">
                    <div>
                        <span className={`card-status-badge ${hasAvailable ? 'card-available-badge' : 'card-sold-badge'}`}>
                            {hasAvailable && <span className="mobile-dot"></span>}
                            {hasAvailable ? 'Διαθεσιμο' : 'Πωληθηκε'}
                        </span>
                        <h3 className="apartment-number">
                            {floor === 'Other' ? 'Άλλος Όροφος' : `Όροφος ${floor}`}
                        </h3>
                    </div>
                    <div>
                        <p className="apartment-type">
                            {stats.availableCount} από {stats.totalCount} διαθέσιμα
                        </p>
                    </div>
                </div>

                <div className="specs-grid">
                    <div className="spec-item">
                        <span className="spec-label">Διαθεσιμα</span>
                        <span className="spec-value">
                            <span className="material-icons-outlined">apartment</span>
                            {stats.availableCount} / {stats.totalCount}
                        </span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Εσ. Χωροι</span>
                        <span className="spec-value"><span className="material-icons-outlined">square</span>
                            {stats.minArea === stats.maxArea
                                ? `${stats.minArea} m²`
                                : `${stats.minArea} - ${stats.maxArea} m²`}
                        </span>
                    </div>
                    {stats.minPrice && stats.minPrice > 0 ? (
                        <div className="spec-item" style={{ gridColumn: 'span 2' }}>
                            <span className="spec-label">Ευρος Τιμων</span>
                            <span className="spec-value spec-total">
                                {stats.minPrice === stats.maxPrice
                                    ? formatPrice(stats.minPrice)
                                    : `${formatPrice(stats.minPrice)} - ${formatPrice(stats.maxPrice)}`}
                            </span>
                        </div>
                    ) : null}

                </div>

                <div className="button-container">
                    {cardIsExpanded ? (
                        <button className="btn btn-danger" onClick={handleShowAllClick}>
                            Κλεισιμο Ολων
                        </button>
                    ) : (
                        <button className="btn-primary" onClick={handleShowAllClick}>
                            <span className="material-icons-outlined">visibility</span>
                            Εμφανιση Ολων
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
};

export default FloorCard;