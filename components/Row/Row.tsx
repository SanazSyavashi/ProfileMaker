import { Box, Typography } from "@mui/material"
import dayjs, { Dayjs } from "dayjs"

const Row=({label,value}:rowProps)=>{
  const displayValue = dayjs.isDayjs(value) ? value.format("YYYY-MM-DD") : value;
  return(
    <Box className="flex w-8/12 flex-row justify-between my-10">
    <Typography className="sm:font-semibold text-md md:font-bold text-lg ">{label}</Typography>
    <Typography  className="sm:text-md w-6/12 md:font-medium text-lg w-8/12">{displayValue}</Typography>
    </Box>
  )
}
export default Row

type rowProps={
label:string,
value:string|number|Dayjs|string[],
}