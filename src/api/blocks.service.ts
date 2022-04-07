import fetchWithErrorHandler from '.';
import { Block } from '../utils/interfaces';

export type ResponseType = {
  data: {
    data: Block[];
  };
  success: boolean;
};

export const fetchListOfBlocks = async () => {
  const response: Response = await fetchWithErrorHandler(process.env.REACT_APP_API_URL ?? '');
  const data: ResponseType = await response.json();
  const blocks: Block[] = data.data.data;
  return blocks;
};
