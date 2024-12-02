//NODE-MODULES
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {
  AccordionProps as MuiAccordionProps,
} from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// IMP-DEPENDENCY
//---------------------------------------------------------------------------------

interface AccordionProps {
  id: string;
  label: string;
  children: React.ReactElement;
  isExpandedDefault?: boolean;
  expanded: string | false;
  setExpanded: (input: string | false) => void;
}

/**
 * Renders an Accordion component with the provided props.
 *
 * @param {AccordionProps} props - The props for the Accordion component.
 * @return {JSX.Element} The rendered Accordion component.
 * NOTE: translation for label is handled inside of component
 */
const Accordion = (props: AccordionProps): JSX.Element => {
  const { label, children, id, expanded, setExpanded } = props;

  /**
   * Handles the change event for the given panel.
   * @param {string} panel - The panel identifier.
   * @return {void} No return value.
   */
  const handleChange =
    (panel: string) =>
    (event: React.SyntheticEvent, newExpanded: boolean): void => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <CustomAccordion
      key={id}
      expanded={expanded === id}
      onChange={handleChange(id)}>
      <AccordionSummary aria-controls={label} id={id}>
        <Typography variant='button'>{(label)}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </CustomAccordion>
  );
};

export default Accordion;

const CustomAccordion = styled((props: MuiAccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon className='text-sm' />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
