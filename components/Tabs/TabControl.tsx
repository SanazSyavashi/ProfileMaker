//NODE-MODULES
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
//IMP-DEPENDENCY
import { TTabControlContentData, TTabControlTabData } from './types/tabControl';
import { useState } from 'react';
//---------------------------------------------------------------------------------

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface ITabControlProps {
  tabsData: Array<TTabControlTabData>;
  tabsContentData: Array<TTabControlContentData>;
  afterTab?: React.ReactNode;
  elevation?: number;
}

export default function TabControl(props: ITabControlProps) {
  const { tabsData, tabsContentData, afterTab, elevation } = props;
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper
      className='w-full !h-max  '
      elevation={elevation}>
      <Box className='!mx-auto w-full h-full' width={'100%'} height={'100%'}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', zIndex: 1 }} className="sticky top-0">
          <Tabs value={value} onChange={handleChange} variant='fullWidth'>
            {tabsData.map(
              ({ id, className, tabLabel, isDisabled = false }) => {
                return (
                  <Tab
                    key={id}
                    className={`text-md sm:text-xs lg:text-md font-semibold bg-gray-200 ${className}`}
                    label={tabLabel}
                    disabled={isDisabled}
                    {...a11yProps(id)}
                  />
                );
              },
            )}
          </Tabs>
        </Box>
        {afterTab ?? null}
        {tabsContentData.map(({ id, content },) => {
          return (
            <TabPanel key={id} value={value} index={id}>
              {content}
            </TabPanel>
          );
        })}
      </Box>
    </Paper>
  );
}
