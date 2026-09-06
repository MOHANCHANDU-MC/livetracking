// src/components/LiveTracking.jsx
import { useRef, useState, useEffect } from "react";
import Map from "./Map";

function LiveTracking({ phoneNumber, onReset }) {
  const [isTracking, setIsTracking] = useState(false);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const watchId = useRef(null);

  // Convert lat/lon to human‑readable address using OSM Nominatim
  const fetchAddress = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );
      if (!res.ok) throw new Error("Geocoding failed");
      const data = await res.json();
      const { road, neighbourhood, city, state, country } = data.address || {};
      const parts = [road, neighbourhood, city, state, country].filter(Boolean);
      setAddress(parts.join(", ")); // e.g. "123 Main St, Downtown, London, England, UK"
    } catch (e) {
      console.error(e);
      setAddress("Unable to fetch address");
    }
  };

  const startTracking = () => {
    setError("");
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }
    if (watchId.current !== null) return; // already tracking
    setIsTracking(true);
    watchId.current = navigator.geolocation.watchPosition(
      async (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        const locationData = {
          latitude,
          longitude,
          accuracy,
          timestamp: new Date().toISOString(),
          phoneNumber,
        };
        setLocation(locationData);
        fetchAddress(latitude, longitude);
        // Send to backend (placeholder URL will just log errors)
        try {
          const response = await fetch(
            "https://YOUR-BACKEND-URL/api/geotag",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(locationData),
            }
          );
          if (!response.ok) throw new Error("Failed to send location");
          console.log("Location sent successfully");
        } catch (err) {
          console.warn("Backend error:", err);
        }
      },
      (geoError) => {
        setIsTracking(false);
        switch (geoError.code) {
          case geoError.PERMISSION_DENIED:
            setError("Location permission was denied.");
            break;
          case geoError.POSITION_UNAVAILABLE:
            setError("Location information is unavailable.");
            break;
          case geoError.TIMEOUT:
            setError("Location request timed out.");
            break;
          default:
            setError("Unable to get employee location.");
        }
      },
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
    );
  };

  const stopTracking = () => {
    if (watchId.current !== null) {
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }
    setIsTracking(false);
    setLocation(null);
    setAddress("");
    console.log("Tracking stopped");
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (watchId.current !== null) {
        navigator.geolocation.clearWatch(watchId.current);
      }
    };
  }, []);

  return (
    <div className="container">
      <h3>Live Tracking for {phoneNumber}</h3>
      {!isTracking ? (
        <button onClick={startTracking}>Start Tracking</button>
      ) : (
        <button onClick={stopTracking}>Stop Tracking</button>
      )}

      {isTracking && <p className="status">🟢 Live tracking is active</p>}

      {error && <p className="error">{error}</p>}

      {location && (
        <>
          <div className="map-container">
            <Map latitude={location.latitude} longitude={location.longitude} />
          </div>
          <address>
            <strong>Address:</strong> {address || "Fetching…"}
          </address>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Accuracy: {location.accuracy.toFixed(2)} m</p>
          <p>Last Updated: {location.timestamp}</p>
        </>
      )}

      {isTracking && (
        <button onClick={onReset} style={{ marginTop: "1rem" }}>
          Reset Demo
        </button>
      )}
    </div>
  );
}

export default LiveTracking;
