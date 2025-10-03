import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import districtsData from "../../data/districts.json";

// custom marker icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Helper component to fly map to selected district
const FlyToLocation = ({ district }) => {
  const map = useMap();
  useEffect(() => {
    if (district) {
      map.flyTo([district.latitude, district.longitude], 10, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [district, map]);
  return null;
};

const Coverage = () => {
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const markerRef = useRef(null);

  // Filter করা districts
  const filteredDistricts = districtsData.filter(
    (item) =>
      item.district.toLowerCase().includes(search.toLowerCase()) ||
      item.city.toLowerCase().includes(search.toLowerCase()) ||
      item.covered_area.some((area) =>
        area.toLowerCase().includes(search.toLowerCase())
      )
  );

  // Group by division
  const groupedByDivision = filteredDistricts.reduce((acc, district) => {
    if (!acc[district.division]) {
      acc[district.division] = [];
    }
    acc[district.division].push(district);
    return acc;
  }, {});

  // Auto open popup when selectedDistrict changes
  useEffect(() => {
    if (selectedDistrict && markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [selectedDistrict]);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-6">
        We are available in 64 districts
      </h2>

      {/* Search Box */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by district, city or area..."
          className="input input-bordered w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* === Left side: District List === */}
        <div className="bg-base-200 rounded-lg p-6 shadow-md max-h-[600px] mt-10 w-[350px] overflow-y-auto">
          {Object.keys(groupedByDivision).map((division) => (
            <div key={division} className="mb-6">
              <h3 className="text-xl font-extrabold mb-2">{division}</h3>
              <ul className="list-disc list-inside space-y-1">
                {groupedByDivision[division]
                  .sort((a, b) => a.district.localeCompare(b.district))
                  .map((district, index) => (
                    <li key={index}>
                      <button
                        className="text-left hover:underline text-blue-600 cursor-pointer"
                        onClick={() => setSelectedDistrict(district)}
                      >
                        {district.district}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/* === Right side: Map === */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-start mb-4">
            We deliver almost all over Bangladesh
          </h3>
          <div className="-ml-90">
            <MapContainer
              center={[23.685, 90.3563]} // Bangladesh center
              zoom={8}
              style={{ height: "600px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />

              {/* Fly animation */}
              <FlyToLocation district={selectedDistrict} />

              {/* Show markers */}
              {(selectedDistrict ? [selectedDistrict] : filteredDistricts).map(
                (district, index) => (
                  <Marker
                    key={index}
                    position={[district.latitude, district.longitude]}
                    icon={customIcon}
                    ref={
                      selectedDistrict &&
                      selectedDistrict.district === district.district
                        ? markerRef
                        : null
                    }
                  >
                    <Popup>
                      <div className="text-sm">
                        <h4 className="font-bold">{district.city}</h4>
                        <p>
                          <strong>District:</strong> {district.district}
                        </p>
                        <p>
                          <strong>Division:</strong> {district.division}
                        </p>
                        <p>
                          <strong>Covered areas:</strong>{" "}
                          {district.covered_area.join(", ")}
                        </p>
                        {district.flowchart && (
                          <img
                            src={district.flowchart}
                            alt={district.city}
                            className="w-40 mt-2 rounded"
                          />
                        )}
                      </div>
                    </Popup>
                  </Marker>
                )
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
