import { GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import { NextPageWithLayout } from "../_app";
import type { Provider } from "next-auth/providers";
import Image from "next/future/image";
import Logo from "@/components/Logo";

const SignInPage: NextPageWithLayout<{
  providers: ReturnType<typeof getProviders>;
}> = ({ providers }) => {
  return (
    <div className="flex flex-col gap-10 items-center h-screen w-screen absolute top-0 left-0 justify-center">
      <Logo />
      <p className="font-serif">
        This website is created for learning purposes
      </p>
      {Object.values(providers).map((provider: Provider) => (
        <div key={provider.name}>
          <button
            className="btn bg-red-400 hover:bg-red-500"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "/",
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};

export default SignInPage;
