import DefaultLayout from '~/layouts/DefaultLayout';
import {json, LoaderFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';

type LoaderData = {
  message: string;
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({message: 'Loader works successful!'});
};

const Index = () => {
  const {message} = useLoaderData<LoaderData>();

  return (
    <DefaultLayout>
      <section className="p-4">
        <h1 className="text-xl">Initial configuration completed</h1>
        <p>Message from loader: {message}</p>
      </section>
    </DefaultLayout>
  );
};

export default Index;
