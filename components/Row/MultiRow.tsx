import { Box, Typography } from "@mui/material"

const MultiRow=({label,value}:rowProps)=>{
  const valueArray = Array.isArray(value) ? value : [value];
  return(
    <Box className="flex w-8/12 flex-row justify-between my-10">
    <Typography className="sm:font-normal text-base md:font-bold text-lg ">{label}</Typography>
    <Box className="sm:font-normal text-base text-md flex flex-row w-6/12 md:w-8/12 justify-start flex-wrap ">
    {valueArray&&valueArray?.map((row)=><Typography  className="font-medium text-lg w-4/12 " key={row}>{row}</Typography>)}
    </Box>
    </Box>
  )
}
export default MultiRow

type rowProps={
label:string,
value:string[],
}