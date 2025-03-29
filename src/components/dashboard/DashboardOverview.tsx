
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Droplet, Thermometer, Leaf, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function DashboardOverview() {
  // Sample data for the dashboard (in a real app, this would come from an API)
  const soilMetrics = {
    soilHealth: 78,
    moisture: 65,
    temperature: 22,
    nutrients: {
      nitrogen: 64,
      phosphorus: 48,
      potassium: 82,
    },
    organicMatter: 3.8,
    nextTest: "2023-08-15",
    lastUpdated: "2023-07-22",
  };

  // Helper function to determine color based on value
  const getHealthColor = (value: number) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 60) return "bg-yellow-500";
    if (value >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-soil-green-dark">Soil Health Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall Soil Health */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Sprout className="mr-2 h-4 w-4 text-soil-green-dark" />
              Overall Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{soilMetrics.soilHealth}%</div>
            <Progress value={soilMetrics.soilHealth} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Good condition overall</p>
          </CardContent>
        </Card>

        {/* Soil Moisture */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Droplet className="mr-2 h-4 w-4 text-blue-500" />
              Moisture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{soilMetrics.moisture}%</div>
            <Progress value={soilMetrics.moisture} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Adequate moisture level</p>
          </CardContent>
        </Card>

        {/* Soil Temperature */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Thermometer className="mr-2 h-4 w-4 text-red-500" />
              Temperature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{soilMetrics.temperature}°C</div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${(soilMetrics.temperature / 40) * 100}%` }}></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Optimal temperature range</p>
          </CardContent>
        </Card>

        {/* Organic Matter */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Leaf className="mr-2 h-4 w-4 text-soil-green" />
              Organic Matter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{soilMetrics.organicMatter}%</div>
            <Progress value={soilMetrics.organicMatter * 20} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Good organic content</p>
          </CardContent>
        </Card>
      </div>

      {/* Nutrient Levels */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Nutrient Levels</CardTitle>
          <CardDescription>Key nutrients in your soil</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Nitrogen (N)</span>
                <span className="text-sm font-medium">{soilMetrics.nutrients.nitrogen}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`${getHealthColor(soilMetrics.nutrients.nitrogen)} h-2.5 rounded-full`} 
                  style={{ width: `${soilMetrics.nutrients.nitrogen}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Phosphorus (P)</span>
                <span className="text-sm font-medium">{soilMetrics.nutrients.phosphorus}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`${getHealthColor(soilMetrics.nutrients.phosphorus)} h-2.5 rounded-full`} 
                  style={{ width: `${soilMetrics.nutrients.phosphorus}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Potassium (K)</span>
                <span className="text-sm font-medium">{soilMetrics.nutrients.potassium}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`${getHealthColor(soilMetrics.nutrients.potassium)} h-2.5 rounded-full`} 
                  style={{ width: `${soilMetrics.nutrients.potassium}%` }}
                ></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Last Updated Info */}
      <div className="flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
        <div className="flex items-center">
          <Activity className="mr-2 h-4 w-4" />
          Last soil data updated: {soilMetrics.lastUpdated}
        </div>
        <div>Next recommended soil test: {soilMetrics.nextTest}</div>
      </div>
    </div>
  );
}
