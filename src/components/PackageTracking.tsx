import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const PackageTracking: React.FC = () => {
  return (
    <div className="swiftcarry-card">
      <h2 className="text-xl font-semibold mb-4">Track Your Package</h2>
      <form>
        <div className="mb-4">
          <Label htmlFor="trackingId">Tracking ID</Label>
          <Input type="text" id="trackingId" className="swiftcarry-input" placeholder="Enter tracking ID" />
        </div>
        <Button className="swiftcarry-button" type="submit">Track</Button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Live Status Updates</h3>
        <p><strong>Status:</strong> In Transit</p>
        <p><strong>Location:</strong> Lagos</p>
        <p><strong>Estimated Arrival:</strong> July 28, 2024</p>
      </div>
    </div>
  );
};

export default PackageTracking;
