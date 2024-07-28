import { SignedIn, SignedOut, SignInButton, UserButton , SignIn, RedirectToSignIn} from "@clerk/clerk-react";

const Login = () => {
  
  return (
    <header>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Login;