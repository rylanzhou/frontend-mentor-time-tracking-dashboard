import React, { useState } from 'react';

import More from './assets/images/icon-ellipsis.svg';
import Avatar from './assets/images/image-jeremy.png';

import data from './assets/data.json';

import styles from './styles/App.module.scss';

function App() {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  return (
    <div className={styles.App}>
      <section className={styles.profile}>
        <div className={styles.avatar}>
          <img src={Avatar} alt="jeremy" />
          <p>
            <h4>Report for</h4>
            <h1>Jeremy Robson</h1>
          </p>
        </div>
        <div className={styles.tabs}>
          {['daily', 'weekly', 'monthly'].map((each) => (
            <span
              key={each}
              aria-current={activeTab === each}
              onClick={() => setActiveTab(each as 'daily' | 'weekly' | 'monthly')}
            >
              {each}
            </span>
          ))}
        </div>
      </section>

      {data.map((each) => (
        <div className={styles.card} key={each.title} aria-label={each.title}>
          <div className={styles.content}>
            <div className={styles.banner}>
              <span>{each.title}</span>
              <i>
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fillRule="evenodd"
                  />
                </svg>
              </i>
            </div>
            <div className={styles.data}>
              <span className={styles.current}>{each.timeframes[activeTab].current}hrs</span>
              <span className={styles.previous}>
                Last Week - {each.timeframes[activeTab].previous}hrs
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
