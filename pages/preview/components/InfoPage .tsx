/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
//-------------------------------------------------------
//DEPENDENCY
import Page from "@/components/Pages/Page";
import Row from "@/components/Row/Row";
import MultiRow from "@/components/Row/MultiRow";
import useFileContent from "../util/useFileContent";
import FormSkeleton from "@/components/FormSkeleton/FormSkeleton";
import getRowByType from "../util/getRowByType ";
//-------------------------------------------------------

interface InfoPageProps {
  fileName: string;
  type: "basic" | "personal" | "professional" | "social";
  multiRow?: boolean;
  title?: string;
}
//----------------------------------------------------------

const InfoPage = ({ fileName, type, multiRow = false, title }: InfoPageProps) => {
  const { fileContent, fetchFileContent } = useFileContent(fileName);

  const [isSkeletonVisible, setIsSkeletonVisible] = useState(true);

  useEffect(() => {
    fetchFileContent();

    const timer = setTimeout(() => {
      setIsSkeletonVisible(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, [fetchFileContent]);

  const rows = getRowByType(type);

  return (
    <Page title={title}>
      {isSkeletonVisible || Object.keys(fileContent).length === 0 ? (
        <FormSkeleton rows={rows} isSingleLine={true} />
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
