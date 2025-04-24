'use client';

import React, {useState, useEffect} from 'react';
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

interface DeliveryRequest {
  id: string;
  pickupLocation: string;
  packageDescription: string;
  senderContact: string;
}

interface AvailableRequestsProps {
  destination: string;
  onDestinationChange: (destination: string) => void;
}

const AvailableRequests: React.FC<AvailableRequestsProps> = ({destination, onDestinationChange}) => {
  const [deliveryRequests, setDeliveryRequests] = useState<DeliveryRequest[]>([]);

  useEffect(() => {
    // Simulate fetching delivery requests from an API
    const fetchDeliveryRequests = async () => {
      // Replace with actual API endpoint
      // const response = await fetch(`/api/delivery-requests?destination=${destination}`);
      // const data = await response.json();

      // Mock Data
      const mockData: DeliveryRequest[] = [
        {
          id: '1',
          pickupLocation: '123 Main St',
          packageDescription: 'Documents',
          senderContact: 'John Doe',
        },
        {
          id: '2',
          pickupLocation: '456 Elm St',
          packageDescription: 'Small package',
          senderContact: 'Jane Smith',
        },
      ];

      setDeliveryRequests(mockData);
    };

    if (destination) {
      fetchDeliveryRequests();
    } else {
      setDeliveryRequests([]);
    }
  }, [destination]);

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDestinationChange(e.target.value);
  };

  const handlePingSender = (requestId: string) => {
    // Implement logic to ping the sender (e.g., open chat)
    alert(`Ping sender for request ID: ${requestId}`);
  };

  const handleRemoveRequest = (requestId: string) => {
    // Implement logic to remove the request from the list
    setDeliveryRequests(deliveryRequests.filter((request) => request.id !== requestId));
  };

  return (
    <div className="swiftcarry-card">
      <h2 className="text-xl font-semibold mb-4">Available Delivery Requests</h2>
      <div className="mb-4">
        <Label htmlFor="destination">Enter Destination</Label>
        <Input
          type="text"
          id="destination"
          className="swiftcarry-input"
          placeholder="Enter destination"
          value={destination}
          onChange={handleDestinationChange}
        />
      </div>

      {deliveryRequests.length > 0 ? (
        <ul>
          {deliveryRequests.map((request) => (
            <li key={request.id} className="mb-4 p-4 border rounded-md">
              <p>
                <strong>Pickup Location:</strong> {request.pickupLocation}
              </p>
              <p>
                <strong>Package Description:</strong> {request.packageDescription}
              </p>
              <p>
                <strong>Sender Contact:</strong> {request.senderContact}
              </p>
              <div className="flex justify-end mt-2 space-x-2">
                <Button
                  className="swiftcarry-button"
                  onClick={() => handlePingSender(request.id)}
                >
                  Ping Sender
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleRemoveRequest(request.id)}
                >
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No delivery requests found for this destination.</p>
      )}
    </div>
  );
};

export default AvailableRequests;
