import React from 'react';
import * as Icons from '../components/icons';
import Photo from '../components/photo';
import ProfileBox from '../components/profile-box';


export default {
  title: 'Icons',
};
export const Icon = () => (
  <div className="icons">
    {
      Object.keys(Icons).map((key) => {
        const TagName = Icons[key];
        return <TagName key={key} />
      })
    }
  </div>
);

export const ProfilePhoto = () => <Photo />
export const Box = () => <ProfileBox />
