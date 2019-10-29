import React from 'react';

import './spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>

  );
};

export default Spinner;

{/*<div className="lds-css">*/}
{/*loading*/}
{/*<div className="lds-double-ring">*/}
{/*<div></div>*/}
{/*<div></div>*/}
{/*</div>*/}
{/*</div>*/}