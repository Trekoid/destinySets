import React from 'react';

import xur from 'app/xur.png';

import Item from 'app/components/Item';

import styles from './styles.styl';

export default function Xur({ items, location }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <img className={styles.xurImage} src={xur} alt="" />

      <div className={styles.main}>
        <h2 className={styles.heading}>
          Xûr is selling items you haven't collected yet!
        </h2>

        <div className={styles.items}>
          {items.map((item, i) => (
            <Item className={styles.item} item={item} key={i} />
          ))}
        </div>

        {location && (
          <p>
            This week Xur has been spotted in{' '}
            <strong>
              {location.region}, {location.planet}
            </strong>.
          </p>
        )}
      </div>
    </div>
  );
}
