import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/r/_authenticated')({
  beforeLoad: async () => {
    // const data = await context.queryClient.fetchQuery(getUserDetailsOptions());
    // if (data.status === 'ERROR') {
    //   throw new Error('Failed to get user details!');
    // }
    // return { auth: data.data.details };
  },
  // loader: ({ context }) => ({ auth: context.auth }),
  pendingComponent: () => {
    // TODO: have a loading component later
    return <p>loading...</p>;
  },
  errorComponent: ({ error }) => {
    // TODO: have a error component later
    console.log('Error: ', error);
  },
  pendingMs: 0,
});
