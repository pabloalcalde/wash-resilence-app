import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function WASHClimateResilience() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [riskScore, setRiskScore] = useState(null);

  const handleRiskAssessment = () => {
    const calculatedRisk = Math.floor(Math.random() * 100);
    setRiskScore(calculatedRisk);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Planificador de Resiliencia Climática WASH</h1>
      
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-lg font-semibold">Evaluación de Riesgo</h2>
          <Input
            type="text"
            placeholder="Ingrese coordenadas o seleccione en el mapa"
            onChange={(e) => setLocation({ lat: parseFloat(e.target.value.split(",")[0]), lng: parseFloat(e.target.value.split(",")[1]) })}
          />
          <Button onClick={handleRiskAssessment}>Calcular Riesgo</Button>
          {riskScore !== null && <p className="text-lg">Puntuación de Riesgo: {riskScore}</p>}
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Mapa de Riesgo</h2>
          <MapContainer center={[location.lat, location.lng]} zoom={5} className="h-64 w-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[location.lat, location.lng]}>
              <Popup>Ubicación Seleccionada</Popup>
            </Marker>
          </MapContainer>
        </CardContent>
      </Card>
    </div>
  );
}
