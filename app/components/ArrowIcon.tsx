import { Position } from "../utils/Types";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArrowIcon: React.FC<{ direction: Position['direction'] }> = ({ direction }) => {
  switch (direction) {
    case 'north': return <ArrowUpwardIcon />;
    case 'south': return <ArrowDownwardIcon />;
    case 'east': return <ArrowForwardIcon />;
    case 'west': return <ArrowBackIcon />;
  }
};

export default ArrowIcon;