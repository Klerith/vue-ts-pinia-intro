import { computed, ref, watch } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';

import clientsApi from '@/api/clients-api';
import type { Client } from '@/clients/interfaces/client';

const getClient = async( id: number  ):Promise<Client> => {
    const { data } = await clientsApi.get(`/clients/${ id }`);
    return data;
}

const updateClient = async( client: Client ):Promise<Client> => {
    const { data } = await clientsApi.patch<Client>(`/clients/${ client.id }`, client );   
    return data;
}


const useClient = ( id: number ) => {

    const client = ref<Client>();

    
    const { isLoading, data, isError } = useQuery(
        [ 'client', id ],
        () => getClient(id),
        { retry: false }
    );

    const clientMutation = useMutation( updateClient );
    

    watch( data, () => {
        if ( data.value )
            client.value = {...data.value};
    },{ immediate: true });
   

    return {
        client,
        clientMutation,
        isError,
        isLoading,

        // Method
        updateClient:      clientMutation.mutate,
        isUpdating:        computed( () => clientMutation.isLoading.value ),
        isUpdatingSuccess: computed( () => clientMutation.isSuccess.value ),
        isErrorUpdating:   computed( () => clientMutation.isError.value ),
        
    }
}

export default useClient;

