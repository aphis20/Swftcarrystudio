'use client';

import React, {useState} from 'react';
import TripPosting from '@/components/TripPosting';
import DeliveryRequest from '@/components/DeliveryRequest';
import PackageTracking from '@/components/PackageTracking';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import AvailableRequests from '@/components/AvailableRequests';

export default function Home() {
  const [destination, setDestination] = useState('');

  return (
    <div className="swiftcarry-container">
      <h1 className="text-2xl font-bold mb-4">Welcome to SwiftCarry</h1>

      <Tabs defaultValue="trip-posting" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="trip-posting">Trip Posting</TabsTrigger>
          <TabsTrigger value="delivery-request">Delivery Request</TabsTrigger>
          <TabsTrigger value="package-tracking">Package Tracking</TabsTrigger>
          <TabsTrigger value="available-requests">Available Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="trip-posting">
          <TripPosting />
        </TabsContent>
        <TabsContent value="delivery-request">
          <DeliveryRequest />
        </TabsContent>
        <TabsContent value="package-tracking">
          <PackageTracking />
        </TabsContent>
        <TabsContent value="available-requests">
          <AvailableRequests destination={destination} onDestinationChange={setDestination} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
