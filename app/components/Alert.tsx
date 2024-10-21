import { Alert } from "@mui/material";
import { AlertPropTypes } from "../utils/Types";

const CustomAlert: React.FC<AlertPropTypes> = ({ error, message }) => {
  return (error ? <Alert severity="error">{message}</Alert> : <></>)
}

export default CustomAlert;