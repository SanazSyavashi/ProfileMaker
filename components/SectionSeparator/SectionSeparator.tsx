/* eslint-disable @typescript-eslint/no-explicit-any */
//NODE-MODULES
import { CSSProperties, ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  CardProps,
  CardHeaderProps,
  CardContentProps,
} from '@mui/material';
//IMP-DEPENDENCY
//---------------------------------------------------------------------------------

const headerSX = {
  p: 1,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' },
};

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

export interface SeparatorProps extends KeyedObject {
  border?: boolean;
  boxShadow?: boolean;
  children: ReactNode | string;
  subheader?: ReactNode | string;
  style?: CSSProperties;
  content?: boolean;
  contentSX?: CardContentProps['sx'];
  darkTitle?: boolean;
  divider?: boolean;
  sx?: CardProps['sx'];
  secondary?: CardHeaderProps['action'];
  shadow?: string;
  elevation?: number;
  title?: ReactNode | string;
  codeHighlight?: boolean;
  codeString?: string;
  modal?: boolean;
}

// eslint-disable-next-line react/display-name
const SectionSeparator = ({
  children,
  subheader,
  content = true,
  contentSX = {},
  darkTitle,
  divider = true,
  elevation,
  secondary,
  title,
  ...others
}: SeparatorProps) => {

  

  return (
    <Card
      elevation={elevation || 0}
      {...others}>
      {/* card header and action */}
      {!darkTitle && title && (
        <CardHeader
          className='px-10 pt-20 pb-14'
          sx={headerSX}
          titleTypographyProps={{ variant: 'h3' }}
          title={title}
          action={secondary}
          subheader={subheader}
        />
      )}
      {darkTitle && title && (
        <CardHeader
          className='px-10'
          sx={headerSX}
          title={<Typography variant='h3'>{title}</Typography>}
          action={secondary}
        />
      )}

      {/* content & header divider */}
      {title && divider && <Divider />}

      {/* card content */}
      {content && (
        <CardContent className='px-10 !pb-10 pt-15' sx={contentSX}>
          {children}
        </CardContent>
      )}
      {!content && children}
    </Card>
  );
};

export default SectionSeparator;
