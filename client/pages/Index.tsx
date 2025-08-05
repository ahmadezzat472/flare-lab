import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Users,
  Shield,
  Heart,
  Award,
  Calendar,
  MessageCircle,
  Eye,
  Share2,
  PlayCircle,
  AlertCircle,
  Bookmark,
  PhoneCall,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="">
              <img
                src="/images/logos/noBgColor.png"
                alt="Logo"
                className="w-[190px]"
              />
            </div>
            <Button
              variant="outline"
              className="text-purple-600 border-purple-600 hover:bg-purple-50"
            >
              Claim This Center
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="text-purple-100">
                    123 Harbor St, Baltimore, MD 21231
                  </span>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white text-purple-700 hover:bg-purple-50"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View on map
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white text-purple-700 hover:bg-purple-50"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Rating and Availability */}
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600">
                      4.6
                    </div>
                    <div className="flex items-center gap-1 justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">37 reviews</div>
                  </div>
                  <Separator orientation="vertical" className="h-16" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600">3</div>
                    <div className="text-sm text-gray-600 mt-1">Open seats</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fast Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Award className="w-5 h-5" />
                  Fast Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-purple-600 font-medium mb-2">
                      <Shield className="w-4 h-4" />
                      License
                    </div>
                    <div className="text-sm text-gray-600">
                      Child Care Center
                    </div>
                    <div className="text-sm text-gray-600">BHC-CC-99765</div>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      Active
                    </Badge>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-purple-600 font-medium mb-2">
                      <Users className="w-4 h-4" />
                      Ages Served
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      {["Infant", "Toddler", "Preschool", "Pre-K"].map(
                        (age) => (
                          <Badge
                            key={age}
                            variant="outline"
                            className="text-xs"
                          >
                            {age}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-purple-600 font-medium mb-2">
                      <Calendar className="w-4 h-4" />
                      Capacity
                    </div>
                    <div className="text-sm text-gray-600">3 classrooms</div>
                    <div className="text-sm text-gray-600">3 open seats</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-purple-600 font-medium mb-2">
                      <Shield className="w-4 h-4" />
                      Last Verified
                    </div>
                    <div className="text-sm text-gray-600">2 weeks ago</div>
                    <div className="text-sm text-gray-600">7/15/2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours and Contact */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Clock className="w-5 h-5" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">
                    Monday-Friday: 7:00 AM – 6:00 PM
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Phone className="w-5 h-5" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">(410) 555-0123</div>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-purple-600 text-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Message School
                  </Button>
                  <div className="text-xs text-gray-500 mt-1">
                    Send a message or contact after hours
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Program & Capacity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">
                  Program & Capacity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Infant A</span>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-green-100 text-green-700">
                      1 open
                    </Badge>
                    <span className="text-sm text-gray-600">Capacity: 8</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Total Capacity: 8 children, Available Seats: 1 seats,
                  Availability updated 7/15/2025
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Toddler A</span>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">Full</Badge>
                    <span className="text-sm text-gray-600">Capacity: 10</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Preschool A</span>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-green-100 text-green-700">
                      2 open
                    </Badge>
                    <span className="text-sm text-gray-600">Capacity: 12</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parent Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Star className="w-5 h-5" />
                  Parent Reviews
                  <div className="flex items-center gap-1 ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      4.6 (37 reviews)
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/images/person-1.jpg" alt="Parent A" />
                    <AvatarFallback>PA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="font-medium">Great teachers</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      By Parent A • 6/8/2025
                    </div>
                    <p className="text-sm text-gray-700">
                      The teachers are amazing and my child loves going to
                      school here. Great communication and very caring staff.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/images/person-2.jpg" alt="Parent B" />
                    <AvatarFallback>PB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                      <span className="font-medium">Good facilities</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      By Parent B • 5/14/2025
                    </div>
                    <p className="text-sm text-gray-700">
                      Nice clean facilities with good outdoor play area. Would
                      recommend to other parents.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Outdoor play", "Meals included", "Spanish immersion"].map(
                    (amenity) => (
                      <Badge
                        key={amenity}
                        variant="secondary"
                        className="text-xs"
                      >
                        {amenity}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tuition Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">
                  Tuition Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">Parent-reported</div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Preschool</span>
                    <span className="text-lg font-bold text-purple-600">
                      $1200/month
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust & Compliance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Shield className="w-5 h-5" />
                  Trust & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Verified</div>
                    <div className="text-xs text-gray-600">
                      Last confirmed by the center on 7/15/2025.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Unclaimed</div>
                    <div className="text-xs text-gray-600">
                      Awaiting owner verification.
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Reviews are parent-submitted and moderated for quality.
                </div>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-purple-700">
                    Help other parents evaluate this school
                  </span>
                </div>
                <p className="text-sm text-purple-600 mb-4">
                  Share pricing, amenities, and your experience to help other
                  families make informed decisions.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  + Leave a Review
                </Button>
              </CardContent>
            </Card>

            {/* QR Code Section */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <img src="/images/qr-code.png" alt="QR Code" />
                </div>
                <div className="font-medium text-sm mb-2">
                  On-site Review Capture
                </div>
                <div className="text-xs text-gray-600 mb-4">
                  Generate a QR code for parents to easily leave reviews during
                  pickup/dropoff.
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-600 border-purple-600"
                >
                  Generate QR Code
                </Button>
                <div className="text-xs text-gray-500 mt-3">
                  All reviews are moderated for authenticity and helpfulness
                  before publication.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <Card className="mt-8 bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <h3 className="font-semibold text-lg text-gray-900">
                Bright Start Academy – Fells Point
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Calendar className="w-4 h-4 mr-2" />
                Book Tour
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <Heart className="w-4 h-4 mr-2" />
                Waitlist
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <AlertCircle className="w-4 h-4 mr-2" />
                Alerts
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <Bookmark className="w-4 h-4 mr-2" />
                Claim
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
