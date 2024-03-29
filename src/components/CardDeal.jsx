import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../styles';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Get a better card deal <br className="sm:block hidden" />
        in a few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        sit amet consectetur adipisicing elit. Illo iste delectus, quia eum hic
        consequuntur velit nulla sed ab at cum distinctio aperiam beatae
        dolores.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className=" w-[100%] h-[100%] " />
    </div>
  </section>
);

export default CardDeal;
