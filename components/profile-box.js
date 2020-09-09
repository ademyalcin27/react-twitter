import React from 'react';
import cb from 'classnames';
import Photo from './photo';
import Button from './button';
import TextBody from './text-body';
import styles from './profile-box.module.css';
import { ArrowBottom } from './icons';

function ProfileBox({ slug = 'ad3myalcin', name = "Adem YALÇIN" }) {
  return <Button className={cb([styles.box])}>
    <Photo />
    <div className={styles.body}>
      <TextBody bold>{name}</TextBody>
      <TextBody className={styles.slug}>@{slug}</TextBody>
    </div>
    <ArrowBottom className={styles.icon} />
  </Button>
}

export default ProfileBox;