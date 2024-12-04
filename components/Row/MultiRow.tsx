// NODE_MODULES
import { Box, Typography } from "@mui/material"

//-------------------------------------------------------------
const MultiRow = ({ label, value }: rowProps) => {
  const valueArray = Array.isArray(value) ? value : [value];

  return (
    <Box className="flex flex-col sm:flex-row w-full justify-between my-6 sm:my-8 sm:space-x-4">
      {/* Label */}
      <Typography 
        className="font-bold sm:font-bold text-base md:text-lg text-gray-700 sm:w-4/12 mb-2 sm:mb-0"
      >
        {label}
      </Typography>

      {/* Value */}
      <Box className="sm:text-base text-lg sm:w-8/12 text-gray-800 sm:font-medium flex flex-wrap sm:whitespace-nowrap">
        {valueArray && valueArray.map((row, index) => (
          <Typography
            className="font-medium text-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-2 sm:mb-4 mx-2" 
            key={index}
          >
            {row}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default MultiRow;

//-------------------------------------------------------------
type rowProps = {
  label: string,
  value: string[],
}
