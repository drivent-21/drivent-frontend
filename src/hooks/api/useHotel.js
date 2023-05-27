import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelsApi from '../../services/hotelsApi';

function useGetHotels() {
  const token = useToken();

  const { data } = useAsync(() => hotelsApi.getHotels(token));

  return data;
};

function useRegisterBookings(body) {
  const token = useToken();

  const { data } = useAsync(() => hotelsApi.registerBooking(body, token)); 

  return data;
};

const useHotels = { useGetHotels, useRegisterBookings };

export default useHotels;
