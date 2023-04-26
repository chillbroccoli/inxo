import { SignIn } from "@clerk/nextjs";

import { AuthLayout } from "~/components/layouts/AuthLayout";

const SignInPage = () => (
  <AuthLayout>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </AuthLayout>
);

export default SignInPage;
