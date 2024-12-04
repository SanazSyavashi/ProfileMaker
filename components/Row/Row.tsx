// NODE_MODULES
import { Box, Typography } from "@mui/material"
import dayjs, { Dayjs } from "dayjs"

//-------------------------------------------------------------

const formatValue = (value: rowProps['value']) => {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value)) {
    return dayjs(value).format("YYYY . MM . DD");
  }
  if (dayjs.isDayjs(value)) {
    return value.format("YYYY-MM-DD");
  }

  return value;
};

const Row = ({ label, value }: rowProps) => {
  const displayValue = formatValue(value);
  
  return (
    <Box className="flex flex-col sm:flex-row w-full justify-between my-6 sm:my-8 sm:space-x-4">
      <Typography 
        className="font-bold sm:font-bold text-base md:text-lg text-gray-700 sm:w-4/12 mb-2 sm:mb-0"
      >
        {label}
      </Typography>
      
      <Typography 
        className="break-words sm:text-base text-lg sm:w-8/12 text-gray-800 sm:font-medium break-all"
      >
        {displayValue || "--------------------"}
      </Typography>
    </Box>
  );
};

export default Row;

//-------------------------------------------------------------
type rowProps = {
  label: string,
  value: string | number | Dayjs | string[],
}