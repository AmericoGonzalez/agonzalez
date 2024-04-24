

import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export default function Component() {
  return (
 <div>   
    <div className="max-w-md mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below and we will get back to you as soon as possible.
        </p>
      </div>

      <form className="space-y-4">

        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" required type="email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Enter your message" required />
        </div>

        <Button className="w-full" type="submit">
          Submit
        </Button>
      
      </form>

    </div>


    <Footer /> 
</div>   
  )
}

 
