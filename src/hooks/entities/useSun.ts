import { useQuery } from '@tanstack/react-query';

import { EntityName, FilterByDomain, SunEntity } from '../../types';
import instance from '../../utils/requests';

export const useSun = (entityId: FilterByDomain<EntityName, 'sun'> = 'sun.sun') => {
  const { data } = useQuery({
    queryKey: ['sun', entityId],
    queryFn: async (): Promise<SunEntity> => {
      return await instance.get(`/api/states/${entityId}`).then(res => res.data);
    },
  });

  return { data };
};
