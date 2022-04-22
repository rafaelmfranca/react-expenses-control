import React from 'react';
import { RiAddFill, RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { Fab, Action } from 'react-tiny-fab';
import {
  mainButtonStyles,
  style,
  actionExpenseStyle,
  actionIncomeStyle,
  iconStyles
} from './styles';

type FabButtonProps = {
  onOpenTransactionModal: (type: string) => void;
};

const FabButton: React.FC<FabButtonProps> = ({ onOpenTransactionModal }) => {
  return (
    <Fab
      mainButtonStyles={mainButtonStyles}
      style={style}
      icon={<RiAddFill style={iconStyles} />}
      event={'hover'}
      alwaysShowTitle={true}
    >
      <Action
        text="Expense"
        style={actionExpenseStyle}
        onClick={() => onOpenTransactionModal('expense')}
      >
        <RiArrowDownLine style={iconStyles} />
      </Action>
      <Action
        text="Income"
        style={actionIncomeStyle}
        onClick={() => onOpenTransactionModal('income')}
      >
        <RiArrowUpLine style={iconStyles} />
      </Action>
    </Fab>
  );
};

export default FabButton;
