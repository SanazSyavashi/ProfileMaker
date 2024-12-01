/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
//-------------------------------------------------------
//DEPENDENCY
import LoadingComponent from "@/components/Loading/LoadingComponent";
import Page from "@/components/Pages/Page";
import Row from "@/components/Row/Row";
import MultiRow from "@/components/Row/MultiRow";
import useFileContent from "../util/useFileContent";
import getRowByType from "./getRowByType ";
//-------------------------------------------------------

interface InfoPageProps {
  fileName: string;
  type: 'basic' | 'personal' | 'professional' | 'social';
  multiRow?: boolean; 
  title?:string
}
//----------------------------------------------------------

const InfoPage = ({ fileName, type, multiRow = false ,title}: InfoPageProps) => {
  const { fileContent, fetchFileContent } = useFileContent(fileName);

  
  useEffect(() => {
    fetchFileContent(); 
  }, [fetchFileContent]);

  const rows = getRowByType(type);

  return (
    <Page title={title}>
      {Object.keys(fileContent).length === 0 ? (
        <LoadingComponent />
      ) : (
        rows.map((row) => {
          const RowComponent = multiRow ? MultiRow : Row;
          return (
            <RowComponent label={row.label} value={fileContent[row.name]} key={row.name} />
          );
        })
      )}
    </Page>
  );
};

export default InfoPage;
