import React from 'react';
import * as Icons from '../components/icons';


export default {
  title: 'Icons',
};
console.log(Icons)
export const Icon = () => (
  <div className="icons">
    {
      Object.keys(Icons).map((key) => {
        const TagName = Icons[key];
        return  <TagName key={key}/>
      })
    }
  </div>
);
