import React from 'react';

interface FilterControlsProps {
  nameFilter: string;
  cityFilter: string;
  highlightOldest: boolean;
  uniqueCities: string[];
  onNameFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCityFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onHighlightOldestChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  nameFilter,
  cityFilter,
  highlightOldest,
  uniqueCities,
  onNameFilterChange,
  onCityFilterChange,
  onHighlightOldestChange
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={nameFilter}
        onChange={onNameFilterChange}
      />
      <select value={cityFilter} onChange={onCityFilterChange}>
        <option value="">All Cities</option>
        {uniqueCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <label>
        Highlight Oldest
        <input
          type="checkbox"
          checked={highlightOldest}
          onChange={onHighlightOldestChange}
        />
      </label>
    </div>
  );
};

export default FilterControls;
