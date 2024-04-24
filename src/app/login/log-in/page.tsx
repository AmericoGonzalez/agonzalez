
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { login } from "./action";
import Footer from "@/components/ui/footer";

export default function LogInPage({ searchParams } : any) {
  const errorAlert = searchParams.error;

    return (
    <Card className="mx-auto max-w-sm">

      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
        { errorAlert }
      </CardHeader>


    <form action={login}>
        
        
        <CardContent>
        <div className="space-y-4">

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
             name="username" 
             id="username" 
             placeholder="m@example.com" 
             required type="email" />
          </div>

           <div className="space-y-2">

            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link className="ml-auto inline-block text-sm underline" href="#">
                Forgot your password?
              </Link>
            </div>
            <Input 
                name="password" 
                id="password" 
                required type="password" />
            </div>
            
            <Button className="w-full" type="submit">Login</Button>
            </div>

            <div className="mt-4 text-center text-sm">
            Dont have an account?
            <Link className="underline" href="#">Register</Link>
            </div>

        </CardContent>
        
    </form>
    <Footer /> 
    </Card>
  )
}

