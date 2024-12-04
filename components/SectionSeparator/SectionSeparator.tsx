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
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Card
        elevation={elevation || 0}
        {...others}>
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader
            className='px-10 pt-20 pb-14 text-center sm:text-start'
            sx={headerSX}
            titleTypographyProps={{ variant: 'h3' }}
            subheaderTypographyProps={{
              className: "mt-10 line-clamp-2 ",
              sx: {
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }
            }}
            title={

              title
            }
            action={secondary}
            subheader={subheader}
          />
        )}
        {darkTitle && title && (
          <CardHeader
            className='px-10'
            sx={headerSX}
            subheaderTypographyProps={{
              className: "mt-10 line-clamp-2",
              sx: {
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }
            }}
            title={
              <Typography variant='h3'>{title}</Typography>
            }
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
    </ThemeProvider>
  );
};

export default SectionSeparator;


