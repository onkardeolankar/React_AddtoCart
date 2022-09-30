import React from 'react';
import D1 from './D1';
import D2 from './D2';
import D3 from './D3';
import D4 from './D4';
import D5 from './D5';
import D6 from './D6';
import D7 from './D7';
import D8 from './D8';


export default function Section(params) {
    

  return (
<section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
           <D1 />
           <D2 setCount={params.setCount}/>
           <D3 setCount={params.setCount}/>
           <D4 setCount={params.setCount}/>
           <D5 setCount={params.setCount}/>
           <D6 />
           <D7 setCount={params.setCount}/>
           <D8 setCount={params.setCount}/>
        </div>
    </div>
</section>
  )
}
