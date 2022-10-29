import IMask from 'imask';
import gameSettings from '../game-config.json';

const masked = IMask.createMask({
  mask: `${gameSettings.currency}num`,
  blocks: {
    num: {
      mask: Number,
      thousandsSeparator: ',',
    },
  },
});

const utilFormatMoney = (value?: number | string): string => {
  if (value === undefined) return '';
  if (Number.isNaN(Number(value))) return String(value);
  return `${masked.resolve(`${value}`)}`;
};

export default utilFormatMoney;
