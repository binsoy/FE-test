export interface Position {
  row?: number;
  col?: number;
  direction?: 'north' | 'south' | 'east' | 'west';
}

export interface GridPropTypes {
  position: Position
}

export interface AlertPropTypes {
  error: boolean;
  message?: string;
}
