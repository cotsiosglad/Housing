import { useState, useMemo, Fragment } from 'react';
import "./AvailabilityCardsStyle.css"
import { extractFloor } from '../CommonFunctions';
import FloorCard from './FloorCard';
import ApartmentCard from './ApartmentCard';

const ApartmentListing = ({ apartmentList = [], projectFor = 'Διαμερίσματα', onExpressInterestButtonClick, onShowDocumentsClick }) => {
    const [expandedFloor, setExpandedFloor] = useState(null);

    // Process apartments based on projectFor
    const processedData = useMemo(() => {
        if (!apartmentList || apartmentList.length === 0) {
            return { type: 'apartments', data: [] };
        }

        if (projectFor === 'Κατοικίες') {
            return { type: 'apartments', data: apartmentList };
        }

        // Group apartments by floor
        const floorMap = new Map();

        apartmentList.forEach(apartment => {
            const floor = extractFloor(apartment.flatNo);
            if (!floorMap.has(floor)) {
                floorMap.set(floor, []);
            }
            floorMap.get(floor).push(apartment);
        });

        // Sort floors: numeric floors first (ascending), then 'Other'
        const sortedFloors = Array.from(floorMap.entries()).sort((a, b) => {
            if (a[0] === 'Other') return 1;
            if (b[0] === 'Other') return -1;
            return a[0] - b[0];
        });

        return { type: 'floors', data: sortedFloors };
    }, [apartmentList, projectFor]);

    const handleShowAll = (floor, apartments) => {
        setExpandedFloor(expandedFloor === floor ? null : floor);
    };

    if (!apartmentList || apartmentList.length === 0) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--muted-light)' }}>Δεν υπάρχουν διαθέσιμα διαμερίσματα</p>
            </div>
        );
    }

    return (
        <div style={{ width: '100%' }}>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />

            <div className="cards-grid">
                {processedData.type === 'apartments' ? (
                    // Render individual apartments
                    apartmentList.map((apartment, index) => (
                        <ApartmentCard key={apartment.flatNo || index} apartment={apartment} projectType={projectFor} onButtonClick={onExpressInterestButtonClick} onShowButtonClick={onShowDocumentsClick} />
                    ))
                ) : (
                    // Render floor cards
                    <>
                        {processedData.data.map(([floor, apartments]) => (
                            <Fragment key={floor}>
                                <FloorCard
                                    floor={floor}
                                    apartments={apartments}
                                    onShowAll={handleShowAll}
                                    cardIsExpanded={expandedFloor === floor ? true : false}
                                />
                                {expandedFloor === floor && (
                                    <div className="expanded-apartments" style={{ gridColumn: '1 / -1' }}>
                                        <h3 className='text-center'>Διαμερσματα Ορόφου {floor === 'Other' ? 'Άλλος' : floor}</h3>
                                        <div className="expanded-grid">
                                            {apartments.map((apartment, index) => (
                                                <ApartmentCard key={apartment.flatNo || index} apartment={apartment} projectType={projectFor} onButtonClick={onExpressInterestButtonClick} onShowButtonClick={onShowDocumentsClick} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default ApartmentListing;