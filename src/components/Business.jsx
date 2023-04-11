import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../styles';
import Button from './Button';

const FeatureCard = ({ icon, title, id, index, content }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index === features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="h-[50%] w-[50%] object-contain " />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 ">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1 ">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we'll handle the
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        By using the right credit card you can improve your fainancial life by
        building credit, earning rewards and saving money. But with hundrends of
        credit card in the market.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((item, index) => (
        <FeatureCard key={item.id} {...item} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
