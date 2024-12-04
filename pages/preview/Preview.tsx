// //DEPENDENCY
import formsRow from './util/formsRow';

import SectionSeparator from '@/components/SectionSeparator/SectionSeparator';
import InfoPage from './components/InfoPage ';
import ImageListComponent from '@/components/ImageList/ImageListComponent';
import LinkEditButton from './components/LinkEditButton';
//------------------------------------------------------------------------------

const Preview: React.FC = () => {



  return (

    <SectionSeparator title={"Preview Profile"} subheader={<LinkEditButton />}>
      <ImageListComponent/>
      {
        formsRow.map((row) => <InfoPage fileName={row.fileName} type={row.type} multiRow={row.multiRow} title={row.title} key={row.type} />)
      }
    </SectionSeparator>
  );
};

export default Preview;