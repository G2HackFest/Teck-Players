import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sprout, Droplet, Cloud, AlertTriangle, Info, ArrowRight, DownloadCloud } from "lucide-react";

export default function RecommendationSystem() {
  // Sample recommendation data (in a real app, this would come from an API)
  const recommendations = {
    fertilizer: [
      {
        id: 1,
        name: "Nitrogen Supplement",
        application: "40 kg/hectare",
        timing: "Early Spring (pre-planting)",
        notes: "Apply when soil temperature reaches 10°C for optimal absorption.",
        priority: "high",
      },
      {
        id: 2,
        name: "Phosphorus Boost",
        application: "25 kg/hectare",
        timing: "Mid-Spring",
        notes: "Split application recommended for clay-heavy soils.",
        priority: "medium",
      },
      {
        id: 3,
        name: "Potassium Blend",
        application: "30 kg/hectare",
        timing: "Late Spring",
        notes: "Apply before anticipated rainfall for best results.",
        priority: "medium",
      },
      {
        id: 4,
        name: "Micronutrient Mix",
        application: "5 kg/hectare",
        timing: "Early Summer",
        notes: "Contains essential zinc, manganese and iron for crop development.",
        priority: "low",
      },
    ],
    cropRotation: [
      {
        id: 1,
        sequence: "Year 1",
        crop: "Corn",
        benefits: "High nitrogen demand, deep root system",
        notes: "Plant after soil temperature consistently above 12°C",
      },
      {
        id: 2,
        sequence: "Year 2",
        crop: "Soybeans",
        benefits: "Nitrogen fixation, moderate water requirement",
        notes: "Inoculate seeds for maximum nitrogen fixation benefit",
      },
      {
        id: 3,
        sequence: "Year 3",
        crop: "Winter Wheat",
        benefits: "Erosion control, weed suppression",
        notes: "Plant in early fall for optimal establishment",
      },
      {
        id: 4,
        sequence: "Year 4",
        crop: "Cover Crop Mix (Clover, Rye)",
        benefits: "Soil building, nitrogen addition, biodiversity",
        notes: "Terminate before planting corn in following year",
      },
    ],
    soilHealth: [
      {
        id: 1,
        practice: "Reduce Tillage",
        benefit: "Preserves soil structure and beneficial organisms",
        implementation: "Switch to no-till or minimum tillage practices",
        priority: "high",
      },
      {
        id: 2,
        practice: "Add Organic Matter",
        benefit: "Improves water retention and nutrient availability",
        implementation: "Apply compost at 5-10 tons/hectare annually",
        priority: "high",
      },
      {
        id: 3,
        practice: "Cover Cropping",
        benefit: "Prevents erosion and adds organic material",
        implementation: "Plant after harvest and terminate before spring planting",
        priority: "medium",
      },
      {
        id: 4,
        practice: "pH Adjustment",
        benefit: "Optimal nutrient availability and microbial activity",
        implementation: "Apply 2 tons/hectare agricultural lime",
        priority: "medium",
      },
    ],
  };

  // Helper function to get color based on priority
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-soil-green-dark">Personalized Recommendations</h2>
        <div className="flex items-center gap-2">
          <Button className="bg-soil-green-dark hover:bg-soil-green gap-2">
            <DownloadCloud className="h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>
      
      <div className="bg-soil-beige rounded-md p-4 flex items-start">
        <Info className="h-5 w-5 text-soil-brown-dark flex-shrink-0 mt-0.5 mr-3" />
        <div>
          <h3 className="font-medium text-soil-brown-dark">Recommendation Basis</h3>
          <p className="text-sm text-soil-brown mt-1">
            These recommendations are based on your soil test results from July 22, 2023, your location (Midwest region),
            and your primary crop (Corn). For more precise recommendations, consider updating your soil test data.
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="fertilizer">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="fertilizer" className="flex items-center">
            <Droplet className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Fertilizer</span>
            <span className="sm:hidden">Fert.</span>
          </TabsTrigger>
          <TabsTrigger value="rotation" className="flex items-center">
            <Cloud className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Crop Rotation</span>
            <span className="sm:hidden">Rotation</span>
          </TabsTrigger>
          <TabsTrigger value="practices" className="flex items-center">
            <Sprout className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Soil Practices</span>
            <span className="sm:hidden">Practices</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="fertilizer" className="space-y-4 pt-4">
          {recommendations.fertilizer.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <Badge className={getPriorityColor(item.priority)}>
                    {item.priority} priority
                  </Badge>
                </div>
                <CardDescription>Application: {item.application}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-soil-green-light p-1">
                      <Sprout className="h-4 w-4 text-soil-green-dark" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Timing</p>
                      <p className="text-sm text-muted-foreground">{item.timing}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-soil-beige p-1">
                      <Info className="h-4 w-4 text-soil-brown-dark" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Notes</p>
                      <p className="text-sm text-muted-foreground">{item.notes}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="rotation" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Crop Rotation Plan</CardTitle>
              <CardDescription>
                A 4-year rotation plan optimized for your soil conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-soil-brown-light"></div>
                <div className="space-y-8">
                  {recommendations.cropRotation.map((item, index) => (
                    <div key={item.id} className="relative pl-14">
                      <div className="absolute left-0 rounded-full bg-soil-green-dark h-12 w-12 flex items-center justify-center text-white font-bold">
                        {item.sequence.split(" ")[1]}
                      </div>
                      <div className="bg-soil-beige p-4 rounded-md">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-soil-brown-dark">{item.crop}</h3>
                          <Badge variant="outline" className="bg-white">
                            {item.sequence}
                          </Badge>
                        </div>
                        <p className="text-sm text-soil-brown-dark mb-2">
                          <span className="font-medium">Benefits:</span> {item.benefits}
                        </p>
                        <p className="text-sm text-soil-brown-dark">
                          <span className="font-medium">Notes:</span> {item.notes}
                        </p>
                      </div>
                      {index < recommendations.cropRotation.length - 1 && (
                        <div className="absolute left-6 ml-[-0.5px] mt-2">
                          <ArrowRight className="h-5 w-5 text-soil-brown-light rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 py-4">
              <div className="flex items-start gap-2 w-full">
                <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  This rotation plan is designed to balance nutrient needs, improve soil structure, and reduce pest and disease pressure. 
                  Adjustments may be needed based on market conditions and weather patterns.
                </p>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="practices" className="space-y-4 pt-4">
          {recommendations.soilHealth.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.practice}</CardTitle>
                  <Badge className={getPriorityColor(item.priority)}>
                    {item.priority} priority
                  </Badge>
                </div>
                <CardDescription>{item.benefit}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-3 rounded-md">
                  <p className="text-sm font-medium">Implementation</p>
                  <p className="text-sm text-muted-foreground">{item.implementation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
