import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaAward, FaUsers, FaDownload, FaStar } from "react-icons/fa"

export default function WhySchoolsChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Schools in India Trust MyLeading Campus®
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaAward className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-blue-600">50+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Reputed schools across Kolkata and beyond</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-green-600">50,000+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Daily active users</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <FaDownload className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-purple-600">20,000+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">App downloads on Android & iOS</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <FaStar className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-yellow-600">4.5★</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Rated in Play Store & App Store</p>
            </CardContent>
          </Card>
        </div>

       
      </div>
    </section>
  )
}
