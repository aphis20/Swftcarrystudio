'use client';

import React from 'react';
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { PackageSize, TransportMode } from './types';
import {Calendar} from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

const DeliveryRequest: React.FC = () => {
  const [packageSize, setPackageSize] = React.useState<PackageSize>("envelope");
  const [transportMode, setTransportMode] = React.useState<TransportMode>("car");
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="swiftcarry-card">
      <h2 className="text-xl font-semibold mb-4">Request Delivery</h2>
      <form>
        <div className="mb-4">
          <Label htmlFor="destination">Destination</Label>
          <Input type="text" id="destination" className="swiftcarry-input" placeholder="Enter destination" />
        </div>

         <div className="mb-4">
          <Label>Estimated Delivery Deadline</Label>
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
          <Label htmlFor="packageType">Package Type</Label>
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
          <Label htmlFor="transportMode">Transport Mode</Label>
          <Select value={transportMode} onValueChange={(value) => setTransportMode(value as TransportMode)}>
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
          <Label htmlFor="pickupLocation">Pickup Location</Label>
          <Input type="text" id="pickupLocation" className="swiftcarry-input" placeholder="Enter pickup location" />
        </div>
        <div className="mb-4">
          <Label htmlFor="dropoffContact">Drop-off Contact</Label>
          <Input type="text" id="dropoffContact" className="swiftcarry-input" placeholder="Enter drop-off contact" />
        </div>
        <div className="mb-4">
          <Label htmlFor="packageDescription">Package Description</Label>
          <Input type="text" id="packageDescription" className="swiftcarry-input" placeholder="Enter package description" />
        </div>
        <div className="mb-4">
          <Label htmlFor="photos">Photos (optional)</Label>
          <Input type="file" id="photos" className="swiftcarry-input" />
        </div>
        <Button className="swiftcarry-button" type="submit">Submit Request</Button>
      </form>
    </div>
  );
};

export default DeliveryRequest;
