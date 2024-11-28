//NODE-MODULES
import React from 'react';
//---------------------------------------------------------------------------------

export type TTabControlTabData = {
  id: number;
  tabLabel: string;
  isDisabled?: boolean;
  className?: string;
};
export type TTabControlContentData = {
  id: number;
  content: React.ReactElement;
};
