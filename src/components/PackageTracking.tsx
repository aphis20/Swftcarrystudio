'use client';

import React, {useState, useEffect} from 'react';
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

const PackageTracking: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
  const [estimatedArrival, setEstimatedArrival] = useState('');
  const [pickupProximity, setPickupProximity] = useState('');
  const [isCloseToPickup, setIsCloseToPickup] = useState(false);

  useEffect(() => {
    // Simulate fetching package status from an API
    const fetchPackageStatus = async () => {
      // Replace with actual API endpoint
      // const response = await fetch(`/api/package-status?id=${trackingId}`);
      // const data = await response.json();

      // Mock Data
      const mockData = {
        status: 'In Transit',
        location: 'Lagos',
        estimatedArrival: 'July 29, 2024 18:00',
        pickupProximity: 'Pickup available in 2 hours',
        isCloseToPickup: true,
      };

      setStatus(mockData.status);
      setLocation(mockData.location);
      setEstimatedArrival(mockData.estimatedArrival);
      setPickupProximity(mockData.pickupProximity);
      setIsCloseToPickup(mockData.isCloseToPickup);
    };

    if (trackingId) {
      fetchPackageStatus();
    }
  }, [trackingId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger useEffect by updating state
    setTrackingId(trackingId);
  };

  return (
    <div className="swiftcarry-card">
      <h2 className="text-xl font-semibold mb-4">Track Your Package</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="trackingId">Tracking ID</Label>
          <Input
            type="text"
            id="trackingId"
            className="swiftcarry-input"
            placeholder="Enter tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
        </div>
        <Button className="swiftcarry-button" type="submit">
          Track
        </Button>
      </form>

      {trackingId && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Live Status Updates</h3>
          {status ? (
            <>
              <p>
                <strong>Status:</strong> {status}
              </p>
              <p>
                <strong>Location:</strong> {location}
              </p>
              <p>
                <strong>Estimated Arrival:</strong> {estimatedArrival}
              </p>
              {isCloseToPickup && (
                <Alert>
                  <AlertTitle>Pickup Available Soon!</AlertTitle>
                  <AlertDescription>{pickupProximity}</AlertDescription>
                </Alert>
              )}
            </>
          ) : (
            <p>No tracking information found for this ID.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PackageTracking;
