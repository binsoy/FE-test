import { ConstantValues, ErrorMessages } from "./Constants";
import { CARDINAL_DIRECTION, Position, ValidationReturnTypes } from "./Types";

/**
 * validator function
 * @param input string
 * @returns ValidationReturnTypes 
 */
export const validateInput = (input: string): ValidationReturnTypes  => {
  const ret: ValidationReturnTypes = {
    invalid: true,
    message: ConstantValues.EMPTY_STRING,
    position: {}
  }

  if (input) {
    const [coordStr, direction] = input.split(ConstantValues.SPACE);
    const [row, col] = coordStr.split(ConstantValues.COMMA).map(val => (val.length > 1) || (val.trim() === ConstantValues.EMPTY_STRING) ? NaN : Number(val));
    console.log(col)
    // Validate that the coordinates are within the grid bounds
    if ((!isNaN(row) && !isNaN(col) && row >= 0 && row < ConstantValues.COLS && col >= 0 && col < ConstantValues.ROWS)) {
      if (!(coordStr.split(ConstantValues.COMMA).length === 2)) { /** check if format is correct for coordinates */
        ret.message = ErrorMessages.ERR04;
      } else if (input.split(ConstantValues.SPACE).length > 2) { /** check if format is correct for direction */
        ret.message = ErrorMessages.ERR05;
      } else if (direction) {
        if (Object.values(CARDINAL_DIRECTION).includes(direction.toLowerCase() as CARDINAL_DIRECTION)) { /** check if direction is valid */
          ret.invalid = false;
          ret.position = { row, col, direction: direction.toLowerCase() as Position['direction'] }
        } else {
          ret.message = ErrorMessages.ERR01;
        }
      } else {
        ret.message = ErrorMessages.ERR02;
      }
    } else {
      ret.message = ErrorMessages.ERR03;
    }
  } else {
    // consider valid if input field is empty
    ret.invalid = false;
  }

  return ret;
}