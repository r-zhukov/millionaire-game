import React, { PropsWithChildren } from 'react';
import styles from './PageWrapper.module.scss';

function PageWrapper({ children }: PropsWithChildren) {
  return (
    <div data-testid="page-wrapper" className={styles.pageWrapper}>
      {children}
    </div>
  );
}

export default PageWrapper;
