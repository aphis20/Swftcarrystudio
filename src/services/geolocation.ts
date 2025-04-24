/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves the city name for a given location.
 *
 * @param location The location for which to retrieve the city name.
 * @returns A promise that resolves to a string containing city name.
 */
export async function getCityName(location: Location): Promise<string> {
  // TODO: Implement this by calling an API.

  return 'Lagos';
}

/**
 * Calculates the distance in kilometers between two geographical locations using the Haversine formula.
 *
 * @param location1 The first location.
 * @param location2 The second location.
 * @returns The distance in kilometers between the two locations.
 */
export function calculateDistance(location1: Location, location2: Location): number {
  // TODO: Implement this by calling an API.

  return 100;
}
