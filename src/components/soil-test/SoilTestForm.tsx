
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, FileUp, FileText, Upload } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function SoilTestForm() {
  const [activeTab, setActiveTab] = useState("manual");
  const [loading, setLoading] = useState(false);
  const [fileProgress, setFileProgress] = useState(0);
  const [formData, setFormData] = useState({
    location: "",
    cropType: "",
    ph: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    organicMatter: "",
    texture: "",
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Soil data submitted",
        description: "Your soil test data has been saved successfully.",
      });
    }, 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      setLoading(true);
      
      // Simulate file upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFileProgress(progress);
        
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            toast({
              title: "File uploaded",
              description: `${file.name} has been processed successfully.`,
            });
          }, 500);
        }
      }, 300);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-soil-green-dark">Soil Test Data Input</h2>
      
      <Tabs defaultValue="manual" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="manual">Manual Entry</TabsTrigger>
          <TabsTrigger value="upload">Upload File</TabsTrigger>
        </TabsList>
        
        <TabsContent value="manual">
          <Card>
            <CardHeader>
              <CardTitle>Enter Soil Test Results</CardTitle>
              <CardDescription>
                Input your soil test lab results or field measurements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location/Field Name</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g. North Field"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cropType">Current/Planned Crop</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange("cropType", value)}
                      value={formData.cropType}
                    >
                      <SelectTrigger id="cropType">
                        <SelectValue placeholder="Select crop type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corn">Corn</SelectItem>
                        <SelectItem value="wheat">Wheat</SelectItem>
                        <SelectItem value="soybean">Soybean</SelectItem>
                        <SelectItem value="cotton">Cotton</SelectItem>
                        <SelectItem value="rice">Rice</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ph">Soil pH</Label>
                    <Input
                      id="ph"
                      name="ph"
                      type="number"
                      step="0.1"
                      min="0"
                      max="14"
                      placeholder="e.g. 6.5"
                      value={formData.ph}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nitrogen">Nitrogen (ppm)</Label>
                    <Input
                      id="nitrogen"
                      name="nitrogen"
                      type="number"
                      min="0"
                      placeholder="e.g. 45"
                      value={formData.nitrogen}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phosphorus">Phosphorus (ppm)</Label>
                    <Input
                      id="phosphorus"
                      name="phosphorus"
                      type="number"
                      min="0"
                      placeholder="e.g. 30"
                      value={formData.phosphorus}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="potassium">Potassium (ppm)</Label>
                    <Input
                      id="potassium"
                      name="potassium"
                      type="number"
                      min="0"
                      placeholder="e.g. 200"
                      value={formData.potassium}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organicMatter">Organic Matter (%)</Label>
                    <Input
                      id="organicMatter"
                      name="organicMatter"
                      type="number"
                      step="0.1"
                      min="0"
                      max="100"
                      placeholder="e.g. 3.5"
                      value={formData.organicMatter}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="texture">Soil Texture</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange("texture", value)}
                      value={formData.texture}
                    >
                      <SelectTrigger id="texture">
                        <SelectValue placeholder="Select texture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clay">Clay</SelectItem>
                        <SelectItem value="silt">Silt</SelectItem>
                        <SelectItem value="sand">Sand</SelectItem>
                        <SelectItem value="loam">Loam</SelectItem>
                        <SelectItem value="clay-loam">Clay Loam</SelectItem>
                        <SelectItem value="sandy-loam">Sandy Loam</SelectItem>
                        <SelectItem value="silty-loam">Silty Loam</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit" 
                    className="bg-soil-green-dark hover:bg-soil-green" 
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Soil Data"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload Soil Test File</CardTitle>
              <CardDescription>
                Upload your soil test results from a CSV or JSON file
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-soil-brown-light rounded-lg p-8 text-center">
                  <FileUp className="h-10 w-10 mx-auto text-soil-brown" />
                  <h3 className="mt-2 text-sm font-semibold">Upload your file</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    CSV, JSON, or Excel files up to 10MB
                  </p>
                  
                  <div className="mt-4 flex justify-center">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="inline-flex items-center px-4 py-2 bg-soil-green-dark hover:bg-soil-green text-white text-sm font-medium rounded-md">
                        <Upload className="mr-2 h-4 w-4" />
                        Browse Files
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        accept=".csv,.json,.xlsx,.xls"
                        className="sr-only"
                        onChange={handleFileUpload}
                        disabled={loading}
                      />
                    </label>
                  </div>
                  
                  {loading && (
                    <div className="mt-4">
                      <Progress value={fileProgress} className="h-2" />
                      <p className="mt-2 text-xs text-muted-foreground">
                        Uploading and processing... {fileProgress}%
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-soil-beige p-4 rounded-md flex items-start">
                  <AlertCircle className="h-5 w-5 text-soil-brown-dark mr-2 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-soil-brown-dark">
                    <p className="font-semibold">File Format Tips:</p>
                    <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                      <li>Make sure your file has headers for each soil parameter</li>
                      <li>Required columns: pH, nitrogen, phosphorus, potassium</li>
                      <li>You can download our <a href="#" className="text-soil-green-dark underline">template file</a> for the correct format</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-soil-brown" />
                  <span className="text-sm text-soil-brown-dark">View previously uploaded files</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
