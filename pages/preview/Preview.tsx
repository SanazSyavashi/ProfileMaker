// //DEPENDENCY
import formsRow from './util/formsRow';

import SectionSeparator from '@/components/SectionSeparator/SectionSeparator';
import InfoPage from './components/InfoPage ';
import ImageListComponent from '@/components/ImageList/ImageListComponent';
import LinkEditButton from './components/LinkEditButton';
//------------------------------------------------------------------------------

const Preview: React.FC = () => {



  return (

    <SectionSeparator title={"Preview Profile"} subheader={
      <div className="w-full flex flex-col  items-center sm:items-start mb-5">
            <div className="w-60 flex flex-col  justify-center items-center mb-5">
            <ImageListComponent />
            <LinkEditButton />
            </div>
            </div>
    }>
      {
        formsRow.map((row) => <InfoPage fileName={row.fileName} type={row.type} multiRow={row.multiRow} title={row.title} key={row.type} />)
      }
    </SectionSeparator>
  );
};

export default Preview;