import { forwardRef, ReactNode } from 'react';

// next
import Head from 'next/head';

// material-ui
import { Box, Typography } from '@mui/material';

// ==============================|| Page - SET TITLE & META TAGS ||============================== //

const Page = forwardRef<HTMLDivElement, PageProps>(({ children,title, meta,titleComponent, ...other }, ref) => (
  <Box className="flex flex-col justify-center ">
    <Head>
      {meta}
    </Head>
    <Box className="sm:my-16 flex h-20 text-md font-semibold my-5 flex-col w-full md:my-5 ">
      <Typography className={'text-3xl font-semibold'}>{title}</Typography>
      {titleComponent}
    </Box>
    <Box ref={ref} {...other}>
      {children}
    </Box>
  </Box>
));


interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  title?:string;
  meta?: ReactNode;
  titleComponent?:ReactNode;
}

Page.displayName = 'Page';

export default Page;
