import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';

export function useErrorToast(error: unknown) {
  const toast = useToast();
  useEffect(() => {
    if (axios.isAxiosError<string[]>(error)) {
      if (!error.response?.data) {
        return;
      }

      Object.entries(error.response?.data).forEach(([errorTitle, errorMessagesMap]) => {
        toast({
          title: errorTitle,
          description: errorMessagesMap,
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });
      });
    }
  }, [error, toast]);
}
