//NODE_MODULES
import React from 'react';
//DEPENDENCY
//----------------------------------------------------------
import TabControl from '@/components/Tabs/TabControl';
import { TTabControlContentData, TTabControlTabData } from '@/components/Tabs/types/tabControl';
import { tabConfigs } from './util/tabConfigs';
import Page from '@/components/Pages/Page';
import GenericFormPage from './components/GenericFormPage';
import LinkPreviewButton from './components/LinkPreviewButton';
//----------------------------------------------------------

const Edit: React.FC = () => {


  // GET TABS CONTENT
  const getTabsContent: () => TTabControlContentData[] = () => {
    return tabConfigs.map((tab, index) => ({
      id: index,
      content: (
        <Page title={tab.title} key={tab.title} titleComponent={<LinkPreviewButton />}>
          <GenericFormPage fileName={tab.fileName}  />
        </Page>
      ),
    }));
  };

  //TABS DATA
  const tabsData: Array<TTabControlTabData> = [
    {
      id: 0,
      tabLabel: 'Basic Info',
    },
    {
      id: 1,
      tabLabel: 'Personal Info',
    },
    {
      id: 2,
      tabLabel: 'Professional Info'
    },
    {
      id: 2,
      tabLabel: 'Social Media Info',
    },
  ];


  return (
      <TabControl tabsContentData={getTabsContent()} tabsData={tabsData} />
  );
};

export default Edit;