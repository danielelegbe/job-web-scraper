import { LoginForm } from "@/components/auth/login-form";
import { AuthTemplate } from "@/components/auth/auth-template";

const Page: React.FC<{ searchParams: { error?: string } }> = async ({
  searchParams,
}) => {
  const { error } = searchParams;

  return (
    <AuthTemplate>
      <LoginForm pageParamsError={error} />
    </AuthTemplate>
  );
};
export default Page;
