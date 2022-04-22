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

const FabButton: React.FC = () => {
  return (
    <Fab
      mainButtonStyles={mainButtonStyles}
      style={style}
      icon={<RiAddFill style={iconStyles} />}
      event={'hover'}
      alwaysShowTitle={true}
      onClick={() => {}}
    >
      <Action text="Expense" style={actionExpenseStyle}>
        <RiArrowDownLine style={iconStyles} />
      </Action>
      <Action text="Income" style={actionIncomeStyle}>
        <RiArrowUpLine style={iconStyles} />
      </Action>
    </Fab>
  );
};

export default FabButton;
