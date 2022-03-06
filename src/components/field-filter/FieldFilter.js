import FieldAreaRange from "../field-area-range/FieldAreaRange";

import './FieldFilter.css'

const fieldTypes = ['No crop', 'Alfalfa', 'Beet, sugar', 'Corn, grain', 'Rapeseed, winter', 'Sunflower', 'Wheat hard, spring', 'Wheat hard, winter', 'Wintercress', 'Yerba mate'];

function FieldFilter() {
  return (
    <div className="field-filter">
      <button className="field-filter__button filter-button" type="button">
        <svg className="filter-button__icon" width="16" height="16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2a1 1 0 00-1 1v1H2v2h7v1a1 1 0 002 0V6h3V4h-3V3a1 1 0 00-1-1zM5 9a1 1 0 012 0v1h7v2H7v1a1 1 0 11-2 0v-1H2v-2h3V9z" fill="#000"/></svg>
        Filtered
        <span className="filter-button__badge">4 fields</span>
      </button>
      <button className="clear-filter-button" aria-label="Reset filter">
        <svg width="20" height="21" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.5c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10zm14.705-4.705a1 1 0 010 1.414l-3.29 3.291 3.29 3.291a1 1 0 11-1.414 1.414l-3.29-3.291-3.292 3.291a1 1 0 11-1.414-1.414L8.586 10.5l-3.29-3.291a1 1 0 111.413-1.414L10 9.086l3.291-3.291a1 1 0 011.414 0z" fill="#222"/></svg>
      </button>

      <div className="field-filter__dropdown">
        <div className="field-filter__header">
          <h3 className="field-filter__title">Field area</h3>
          <span className="field-filter__area-range">13.2 ha — 113.2 ha</span>
        </div>
        <FieldAreaRange />

        <div className="field-filter__header field-filter__header--crop">
          <h3 className="field-filter__title">Crop</h3>
          <button type="button" className="field-filter__inline-button">Select all</button>
        </div>

        <div className="field-filter__crop-types">
          <input className="field-filter__search input-search" type="search" placeholder="Search…"/>
          <ul className="field-filter__field-types-list field-types-list">
            <FieldFilterLabel/>
          </ul>
        </div>
      </div>


    </div>
  )
}

const FieldFilterLabel = (props) => {
  const labels = fieldTypes.map(item => {
    return (
      <li className="field-types-list__item">
        <label className="field-types-list__label">
          <input className="field-types-list__checkbox visually-hidden" type="checkbox" name="field-type-filter"/>
          <span className="field-types-list__name">{item}</span>
        </label>
      </li>
    );
  });
  return (
    <div>{labels}</div>
  )

}

export default FieldFilter;
