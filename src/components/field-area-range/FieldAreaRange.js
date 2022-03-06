import './FieldAreaRange.css'
const pointsData = [
  {
    color: '#DD6E6E',
    position: '0'
  },
  {
    color: '#55AB67',
    position: '32'
  },
  {
    color: '#DD6E6E',
    position: '48'
  },
  {
    color: '#E3B002',
    position: '52'
  },
  {
    color: '#DD6E6E',
    position: '78'
  },
  {
    color: '#55AB67',
    position: '81'
  },
  {
    color: '#E3B002',
    position: '82'
  },
  {
    color: '#E3B002',
    position: '83'
  },
  {
    color: '#55AB67',
    position: '86'
  },
  {
    color: '#55AB67',
    position: '90'
  },
  {
    color: '#55AB67',
    position: '98'
  },
  {
    color: '#55AB67',
    position: '100'
  }
]

function FieldAreaPoints() {
  return pointsData.map(item => {
    return (
      <div className="field-area-range__point" style={{backgroundColor: item.color, left: item.position + '%'}}></div>
    );
  });
}

function FieldAreaRange() {
  return(
    <div className="field-area-range">
      <div className="field-area-range__track">
        <FieldAreaPoints/>
      </div>
      <button type="button" className="field-area-range__pointer field-area-range__pointer--left" style={{transform: 'translateX(0)'}}>
        <svg width="12" height="23" fill="none"><path d="M0 11.81A6 6 0 012.159 7.2l8.2-6.833A1 1 0 0112 1.135V20a3 3 0 01-3 3H3a3 3 0 01-3-3v-8.19z" fill="#27AE60"/></svg>
      </button>
      <button type="button" className="field-area-range__pointer field-area-range__pointer--right" style={{transform: 'translateX(100px)'}}>
        <svg width="12" height="23" fill="none"><path d="M12 11.81A6 6 0 009.841 7.2L1.641.368A1 1 0 000 1.135V20a3 3 0 003 3h6a3 3 0 003-3v-8.19z" fill="#27AE60"/></svg>
      </button>
    </div>
  )
}

export default FieldAreaRange;
