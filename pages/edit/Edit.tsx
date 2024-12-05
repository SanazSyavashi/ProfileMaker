//NODE_MODULES
import React, { useState } from 'react';
//DEPENDENCY
//----------------------------------------------------------
import TabControl from '@/components/Tabs/TabControl';
import { TTabControlContentData, TTabControlTabData } from '@/components/Tabs/types/tabControl';
import Page from '@/components/Pages/Page';
import GenericFormPage from './components/GenericFormPage';
import LinkPreviewButton from './components/LinkPreviewButton';
import { normalTabConfigs, specialTabConfigs } from './util/tabConfigs';
import Accordion from '@/components/Accordion/Accordion';
import ImageListComponent from '@/components/ImageList/ImageListComponent';
//----------------------------------------------------------

const Edit: React.FC = () => {

  

  const [expanded, setExpanded] = useState<string | false>(false);

  // GET TABS CONTENT
  const getTabsContent: () => TTabControlContentData[] = () => {
    const normalPart :TTabControlContentData[]= normalTabConfigs.map((tab, index) => ({
      id: index+1,
      content:(
        <Page title={tab.title} key={tab.title} titleComponent={
          <div className="w-full flex flex-col  items-center sm:items-start mb-5 ">
            <div className="w-60 flex flex-col  justify-center items-center mb-5">
            <ImageListComponent />
            <LinkPreviewButton />
            </div>
          </div>
        }>
          <GenericFormPage fileName={tab.fileName}  />
        </Page>
      ),
    }));

    const specialPart :TTabControlContentData[]=[{
      id :0,
      content:(
        <Page title={'Personal Information'} key={'Personal Information'} titleComponent={
          <div className="w-full flex flex-col  items-center sm:items-start mb-5">
            <div className="w-60 flex flex-col  justify-center items-center mb-5">
            <ImageListComponent />
            <LinkPreviewButton />
            </div>
          </div>
          }>
          {specialTabConfigs.map((tab)=>{return(
            <Accordion id={`${tab.title}`} label={`${tab.title}`} 
            expanded={expanded} 
              setExpanded={setExpanded} 
              key={`${tab.title}`}
            ><GenericFormPage fileName={tab.fileName}  /></Accordion>)}
               )}    </Page>
      ),
  }]
    return [...specialPart,...normalPart]
  };

  //TABS DATA
  const tabsData: Array<TTabControlTabData> = [
    {
      id: 0,
      tabLabel: 'Personal Info',
    },
    {
      id: 1,
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