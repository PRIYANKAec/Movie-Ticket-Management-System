import { 
  SignedIn, 
  SignedOut,  
  UserButton,  
  RedirectToSignIn
} from "@clerk/clerk-react";

const Login = () => {
  
  return (
    <header >
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