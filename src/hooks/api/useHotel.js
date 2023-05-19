import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelsApi from '../../services/hotelsApi';

export default function useGetHotels() {
  const token = useToken();

  const { data } = useAsync(() => hotelsApi.getHotels(token));

  return data;
};
