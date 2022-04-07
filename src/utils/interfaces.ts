interface IObjectKeys {
  [key: string]: string | number;
}

export interface Block extends IObjectKeys {
  height: number;
  gasUsed: number;
  hash: string;
  precommitsCount: number;
  proposerAddress: string;
  time: string;
  timeTaken: number;
  transNum: number;
  validatorsCount: number;
}
