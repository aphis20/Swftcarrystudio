'use client';

import React from 'react';
import {Calendar} from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ModeOfTransport, PackageSize } from './types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

const TripPosting: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [modeOfTransport, setModeOfTransport] = React.useState<ModeOfTransport>("car");
  const [packageSize, setPackageSize] = React.useState<PackageSize>("envelope");

  return (
    <div className="swiftcarry-card">
      <h2 className="text-xl font-semibold mb-4">Post Your Trip</h2>
      <form>
        <div className="mb-4">
          <Label htmlFor="departure">Departure Location</Label>
          <Input type="text" id="departure" className="swiftcarry-input" placeholder="e.g., Lagos" />
        </div>
        <div className="mb-4">
          <Label htmlFor="arrival">Arrival Location</Label>
          <Input type="text" id="arrival" className="swiftcarry-input" placeholder="e.g., Ibadan" />
        </div>

        <div className="mb-4">
          <Label>Date of Departure</Label>
           <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) =>
                    date < new Date()
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
        </div>

        <div className="mb-4">
          <Label htmlFor="departureTime">Departure Time</Label>
          <Input type="time" id="departureTime" className="swiftcarry-input" />
        </div>

         <div className="mb-4">
          <Label htmlFor="modeOfTransport">Mode of Travel</Label>
          <Select value={modeOfTransport} onValueChange={(value) => setModeOfTransport(value as ModeOfTransport)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="flight">Flight</SelectItem>
              <SelectItem value="bus">Bus</SelectItem>
            </SelectContent>
          </Select>
        </div>

         <div className="mb-4">
          <Label htmlFor="packageSize">Package Size</Label>
          <Select value={packageSize} onValueChange={(value) => setPackageSize(value as PackageSize)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="envelope">Envelope</SelectItem>
              <SelectItem value="box">Box</SelectItem>
              <SelectItem value="luggage">Luggage Room</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <Label htmlFor="contact">Contact Option</Label>
          <Input type="text" id="contact" className="swiftcarry-input" value="In-app chat only" readOnly />
        </div>

        <Button className="swiftcarry-button" type="submit">Post Trip</Button>
      </form>
    </div>
  );
};

export default TripPosting;
