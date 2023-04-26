import { SignUp } from "@clerk/nextjs";

import { AuthLayout } from "~/components/layouts/AuthLayout";

const SignUpPage = () => (
  <AuthLayout>
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </AuthLayout>
);

export default SignUpPage;
