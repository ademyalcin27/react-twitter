import React from 'react';
import cb from 'classnames';

import styles from './photo.module.css';


function Photo({ src = "https://pbs.twimg.com/profile_images/1283712793259257856/OPV191cE_400x400.jpg", alt }) {
  return <div className={cb(styles.photo)}>
    <img className={cb(styles.img)} src={src} alt={alt} />
  </div>
}

export default Photo;