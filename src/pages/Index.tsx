
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Leaf, Database, BarChart3, Users, CheckCircle } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-soil-green-light px-3 py-1 text-sm text-soil-green-dark">
                Soil Health Management
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-soil-green-dark">
                Nourish Your Soil, Grow Your Success
              </h1>
              <p className="text-soil-brown-dark md:text-xl">
                Our platform helps farmers analyze soil health, get personalized 
                recommendations, and implement sustainable practices for better yields.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/login">
                  <Button className="bg-soil-green-dark hover:bg-soil-green text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/soil-test">
                  <Button variant="outline" className="border-soil-brown-dark text-soil-brown-dark hover:bg-soil-beige">
                    Upload Soil Test
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
                  alt="Healthy soil in farmer's hands"
                  className="object-cover h-full w-full rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/90">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-soil-green-dark" />
                    <p className="text-sm font-medium text-soil-green-dark">
                      Trusted by over 500+ farmers across the country
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-soil-beige">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-soil-green-dark md:text-3xl mb-4">
              Everything You Need for Soil Management
            </h2>
            <p className="text-soil-brown-dark md:text-lg max-w-3xl mx-auto">
              Our platform combines advanced soil analysis with expert recommendations 
              to help you make informed decisions for your farm.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-soil-green-light p-3 w-fit mb-4">
                <Database className="h-6 w-6 text-soil-green-dark" />
              </div>
              <h3 className="text-xl font-bold text-soil-green-dark mb-2">Soil Data Analysis</h3>
              <p className="text-soil-brown-dark">
                Upload your soil test results or enter them manually for instant analysis 
                against regional benchmarks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-soil-green-light p-3 w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-soil-green-dark" />
              </div>
              <h3 className="text-xl font-bold text-soil-green-dark mb-2">Smart Recommendations</h3>
              <p className="text-soil-brown-dark">
                Get personalized fertilizer recommendations and crop rotation plans based 
                on your specific soil conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-soil-green-light p-3 w-fit mb-4">
                <Leaf className="h-6 w-6 text-soil-green-dark" />
              </div>
              <h3 className="text-xl font-bold text-soil-green-dark mb-2">Sustainable Practices</h3>
              <p className="text-soil-brown-dark">
                Learn proven techniques to improve soil health, increase organic matter, 
                and promote long-term sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-soil-green-dark">
                Ready to Improve Your Soil Health?
              </h2>
              <p className="text-soil-brown-dark md:text-lg">
                Join hundreds of farmers who are using data-driven approaches to 
                improve soil health, increase yields, and build sustainable farming operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-soil-green mr-2" />
                  <span>Analyze soil test results in minutes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-soil-green mr-2" />
                  <span>Get customized fertilizer recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-soil-green mr-2" />
                  <span>Develop optimal crop rotation plans</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-soil-green mr-2" />
                  <span>Track soil health improvements over time</span>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/login">
                  <Button className="bg-soil-green-dark hover:bg-soil-green text-white">
                    Create Free Account
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                  alt="Healthy crops"
                  className="rounded-lg h-56 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
                  alt="Farm field"
                  className="rounded-lg h-56 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Sustainable farming"
                  className="rounded-lg h-56 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
                  alt="Agriculture landscape"
                  className="rounded-lg h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-soil-beige">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-soil-green-dark md:text-3xl">
              What Farmers Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-soil-brown flex items-center justify-center text-white font-bold mr-3">
                  J
                </div>
                <div>
                  <h3 className="font-bold">John D.</h3>
                  <p className="text-sm text-muted-foreground">Corn & Soybean Farmer</p>
                </div>
              </div>
              <p className="text-soil-brown-dark">
                "This platform revolutionized how I approach soil management. The recommendations
                were spot-on and helped me reduce fertilizer costs while improving yields."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-soil-brown flex items-center justify-center text-white font-bold mr-3">
                  S
                </div>
                <div>
                  <h3 className="font-bold">Sarah M.</h3>
                  <p className="text-sm text-muted-foreground">Organic Vegetable Grower</p>
                </div>
              </div>
              <p className="text-soil-brown-dark">
                "As an organic farmer, soil health is everything to me. This tool helped me identify 
                key deficiencies and create a plan that aligned with my organic certification requirements."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-soil-brown flex items-center justify-center text-white font-bold mr-3">
                  R
                </div>
                <div>
                  <h3 className="font-bold">Robert J.</h3>
                  <p className="text-sm text-muted-foreground">Wheat & Barley Farmer</p>
                </div>
              </div>
              <p className="text-soil-brown-dark">
                "The crop rotation planner saved me countless hours of research. I've implemented the 
                recommended 4-year plan and already seeing improvements in soil structure."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
