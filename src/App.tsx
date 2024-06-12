import { useState } from 'react';
import { Button } from './lib/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './lib/ui/card';
import './App.css';
import { cn } from './lib/shadcnUtils';

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];



type CardProps = React.ComponentProps<typeof Card>;


function App({ className, ...props }: CardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen from-stone-400 via-stone-700 to-stone-900 bg-gradient-to-br">
      <div className="max-w-lg px-10 py-8 mx-auto rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          {
            Array.from({length: 2}, () => {
              return (
                <Card className={cn("w-[410px]", className)} {...props}>
                  <CardHeader>
                    <CardTitle>Card</CardTitle>
                    <CardDescription>
                      <p className="font-normal text-gray-700">Looking For Free premium components?</p>
                      <p className="font-normal text-gray-700">Looking for premium themes and landing pages?</p>
                      <p className="font-normal text-gray-700">Looking for Awesome cheatsheet for Tailwind CSS?</p>
                      <p className="font-normal text-gray-700">Want to dig deeper into Tailwind CSS?</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="hoverColor">Deploy</Button>
                  </CardFooter>
                </Card>
              )
            })
          }
         
        </div>
      </div>
    </div>
  );
}

export default App;
