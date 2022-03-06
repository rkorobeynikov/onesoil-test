import './FieldsOverview.css';
import React from "react";

const FieldsList = (props) => {
 const fields = props.fields.map((item, index) => {
   return (
     <li className="fields-list__item" key={index}>
       <button type="button" className="field-item">
         <div className="field-item__image">
           <img className="field-item__back-image" src={item.image_url} alt={item.title}/>
           <div className="field-item__shape-image" dangerouslySetInnerHTML={{__html: item.shape}}></div>
         </div>
         <div className="field-item__info">
           <div className="field-item__name">
             <h4 className="field-item__title">{item.title}</h4>
             <p className="field-item__description">{item.description}</p>
           </div>
           <p className="field-item__stats">
             <span className="field-item__percent">{item.percent}</span>
             <span className="field-item__square">{item.square}</span>
           </p>
         </div>
       </button>
     </li>
   );
 });

 return (
   <ul className="fields-list">
     {fields}
   </ul>
 )
}

const FieldChart = (props) => {
  const keys = Object.keys(props.chartSections);
  const chart = keys.map((key, item) => {
    return (
      <div
        key={item}
        className={'field-chart__section field-chart__section--' + key + (props.currentSection === key ? ' field-chart__section--current' : '')}
        style={{width: props.chartSections[key] + '%'}}></div>
    );
  });
  
  return chart;
}

const FieldsGroups = (props) => {
  const groups = props.fieldsGroups.map((item, index) => {
    return (
      <div className="field-group-item" key={index}>
        <header className="field-group-item__header">
          <h3 className="field-group-item__title">{item.heading}</h3>
          <button className="field-group-item__help-button" type="button" aria-label="Help">
            <svg width="16" height="16" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M14.125 8a6.125 6.125 0 11-12.25 0 6.125 6.125 0 0112.25 0zM7.278 9.656c0-.454.056-.815.166-1.084.11-.269.31-.533.602-.792.295-.263.491-.475.588-.637a1.01 1.01 0 00.146-.52c0-.547-.253-.821-.758-.821a.772.772 0 00-.578.223c-.143.146-.217.349-.224.608H5.81c.007-.619.207-1.103.599-1.453.395-.35.933-.525 1.613-.525.687 0 1.22.167 1.599.5.379.33.569.8.569 1.405 0 .275-.062.536-.185.782-.123.243-.339.514-.646.812l-.394.374a1.333 1.333 0 00-.423.831l-.02.297H7.279zm.078.957a.707.707 0 00-.218.535c0 .214.07.39.213.53.146.139.337.208.574.208.236 0 .426-.07.568-.208a.701.701 0 00.22-.53.7.7 0 00-.224-.535.773.773 0 00-.564-.214.79.79 0 00-.569.214z" fill="#A5B2BC"/></svg>
          </button>
          <span className="field-group-item__header-square">{item.square}</span>
        </header>
        <div className="field-group-item__chart field-chart">
          <FieldChart chartSections={item.chart} currentSection={item.chart_current}/>
        </div>
        <FieldsList fields={item.fields}/>
      </div>
    );
  });

  return groups;
}

const FieldsOverview = (props) => {
  const { fieldsGroup } = props;
  return (
    <div className="field-group-items">
      <FieldsGroups fieldsGroups={fieldsGroup}/>
    </div>
  );
}

export default FieldsOverview;
