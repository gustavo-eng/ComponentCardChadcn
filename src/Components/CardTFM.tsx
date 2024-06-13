import { useState } from 'react';
import { Button } from '../lib/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle } from '../lib/ui/card';

import {  Select,
SelectContent,
SelectGroup,
SelectItem,
SelectLabel,
SelectScrollDownButton,
SelectScrollUpButton,
SelectSeparator,
SelectTrigger,
SelectValue } from  '../lib/ui/select';  


import { Label } from '../lib/ui/label';
import { Input } from '../lib/ui/input'

import { cn } from '../lib/shadcnUtils';


interface Notifications {
    title?: string;
    description?: string;

}
interface Options {
  name?: string;
  description?: string; 
}

type CardProps = React.ComponentProps<typeof Card> & {
    notifications?: Notifications[];
    selectOptions?: Options[];
    description?: any;
    titleCard: string;
};

function CardTFM({ className, notifications, selectOptions, description, titleCard ,...props }: CardProps) {

    return (
        <>          
              <Card className={cn("w-[410px] m-4 ", className)} {...props} >
                <CardHeader>
                  <CardTitle> {titleCard} </CardTitle>
                  {description && 
                    <CardDescription>
                      <p className="font-normal text-gray-700">{description}</p>
                    </CardDescription>
                  }
                </CardHeader>
                <CardContent>
                  <form>
                      <div className="grid  items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name of your project" />
                        </div>
                          <Label htmlFor="framework">Framework</Label>
                          <Select>
                            <SelectTrigger id="framework" className={cn("w-[360px] mb-4 ", className)}>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper"  className={cn("bg-white", className)}>
                              {selectOptions && selectOptions.map((option, index) => 
                                <SelectItem key={index} value={String(option.name) || "Select" } className={cn("hover:bg-gray-200", className)}>{option.name}</SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                      </div>
                    </form>

                    <div className='mt-4'> 
                      {notifications  && notifications.map((notification, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-[5px_1fr] items-start pb-5 last:mb-0 last:pb-0"
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

     </>
    )

}

export default CardTFM;