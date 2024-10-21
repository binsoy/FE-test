import { CARDINAL_DIRECTION, Position } from "../utils/Types";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArrowIcon: React.FC<{ direction: Position['direction'] }> = ({ direction }) => {
  switch (direction) {
    case CARDINAL_DIRECTION.NORTH: return <ArrowUpwardIcon />;
    case CARDINAL_DIRECTION.SOUTH: return <ArrowDownwardIcon />;
    case CARDINAL_DIRECTION.EAST: return <ArrowForwardIcon />;
    case CARDINAL_DIRECTION.WEST: return <ArrowBackIcon />;
  }
};

export default ArrowIcon;