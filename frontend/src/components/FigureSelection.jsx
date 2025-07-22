import React from 'react';

const FigureSelection = ({ onSelectFigure }) => {
  const figures = ['Grandma', 'Tiger', 'Samurai'];

  return (
    <div className="figure-selection">
      <h2>Select Your Figure</h2>
      <div className="figures">
        {figures.map((figure) => (
          <button key={figure} onClick={() => onSelectFigure(figure)}>
            {figure}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FigureSelection;
