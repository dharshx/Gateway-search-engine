// import React from 'react';
// import NameCard from '../components/NameCard';
// import '../components/ResultsContainer.css';

// const ResultsContainer = ({suggestedNames}) => {
//     const suggestNameJsx = suggestedNames.map((suggestedName) => {
//         return 
//         <NameCard key={suggestedName} suggestedName={suggestedName} />;
//     });

//     return <div className="results-container">{suggestNameJsx}</div>;
    
// };
// export default ResultsContainer;
import React from 'react';
import NameCard from '../components/NameCard';
import '../components/ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestNameJsx}</div>;
};

export default ResultsContainer;