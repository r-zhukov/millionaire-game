import React from 'react';
import clsx from 'clsx';
import { TIssuesCostProps } from '../../types';
import styles from './IssuesCost.module.scss';
import utilFormatMoney from '../../utils/utilFormatMoney';

function IssuesCost({ costs, currentCost }: TIssuesCostProps) {
  return (
    <div className={styles.issuesCost}>
      {costs
        .map((cost, index) => (
          <div
            data-testid="issues-cost-table"
            key={cost}
            className={clsx(
              styles.issuesCost__item,
              currentCost === index && styles.issuesCost__item__active,
              currentCost > index && styles.issuesCost__item__passed
            )}
          >
            {utilFormatMoney(cost)}
          </div>
        ))
        .reverse()}
    </div>
  );
}

export default IssuesCost;
