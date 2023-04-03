import { useEffect, useState } from 'react';
import z from 'zod';
import dataFile from './data.json';

const dataScheme = z.array(
  z.object({
    name: z.string(),
    device: z.string(),
    path: z.string(),
    status: z.enum(['scheduled', 'available']),
  })
);

export type DataItem = (typeof dataScheme._type)[number];

export function useData(skipLoading: boolean) {
  const [data, setData] = useState<DataItem[]>(() => {
    if (skipLoading) {
      return dataScheme.parse(dataFile);
    }

    return [];
  });
  const [isLoading, setIsLoading] = useState(!skipLoading);

  useEffect(() => {
    if (skipLoading) return;

    const fetchData = () => {
      setIsLoading(true);

      try {
        const data = dataScheme.parse(dataFile);

        setData(data);
      } catch (error) {
        console.error(error);
        setData([]);
        setIsLoading(false);

        throw error;
      }

      setIsLoading(false);
    };

    // Simulate data fetching from an api with a timeout
    const timeout = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [skipLoading]);

  return { data, isLoading };
}
