import { useState } from 'react';
import { Button } from './lib/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle } from './lib/ui/card';

import {  Select,
SelectContent,
SelectGroup,
SelectItem,
SelectLabel,
SelectScrollDownButton,
SelectScrollUpButton,
SelectSeparator,
SelectTrigger,
SelectValue } from  './lib/ui/select';  


import { Label } from './lib/ui/label';
import { Input } from './lib/ui/input'

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

];

type CardProps = React.ComponentProps<typeof Card>;

function App({ className, ...props }: CardProps) {
  
  return (

    <div className=" flex items-center justify-center min-h-screen from-stone-400 via-stone-700 to-stone-900 bg-gradient-to-br">
      <div className="max-w-lg py-4 px-4 mx-auto rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">

          {
            Array.from({length: 1}, () => {
              return (

                <Card className={cn("w-[410px]", className)} {...props}>
                  <CardHeader>
                    <CardTitle> Card </CardTitle>
                    <CardDescription>
                      <p className="font-normal text-gray-700">Looking For Free premium components?</p>
                      <p className="font-normal text-gray-700">Looking for premium themes and landing pages?</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                          <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Name</Label>
                              <Input id="name" placeholder="Name of your project" />
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            {/* <Label htmlFor="framework">Framework</Label> */}
                            <Label htmlFor="framework">Framework</Label>
                            <Select>
                              <SelectTrigger id="framework" className={cn("w-[360px] mb-10 ", className)}>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger> {/*hover:bg-weg-2 */ }
                              <SelectContent position="popper"  className={cn("bg-white", className)}>
                                <SelectItem value="next" className={cn("hover:bg-gray-200", className)}>Next.js</SelectItem>
                                <SelectItem value="sveltekit" className={cn("hover:bg-gray-200", className)}>SvelteKit</SelectItem>
                                <SelectItem value="astro" className={cn("hover:bg-gray-200", className)}>Astro</SelectItem>
                                <SelectItem value="nuxt" className={cn("hover:bg-gray-200", className)}>Nuxt.js</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </form>

                      <div className='mt-4'> 
                        {notifications.map((notification, index) => (
                            <div
                              key={index}
                              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-6 last:mb-0 last:pb-0"
                            >
                              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                              <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                  {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {notification.description}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>

                  </CardContent>
                  <CardFooter>
                    <Button variant="hoverColor" className={cn("w-[410px]", className)}>Salvar</Button>
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
