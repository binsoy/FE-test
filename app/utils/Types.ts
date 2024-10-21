export enum CARDINAL_DIRECTION {
  NORTH = "north",
  SOUTH = "south",
  EAST = "east",
  WEST = "west"
};

export interface Position {
  row?: number;
  col?: number;
  direction?: CARDINAL_DIRECTION;
}

export interface GridPropTypes {
  position: Position
}

export interface AlertPropTypes {
  error: boolean;
  message: string;
}

export interface ValidationReturnTypes {
  invalid: boolean;
  message: string;
  position: Position;
}