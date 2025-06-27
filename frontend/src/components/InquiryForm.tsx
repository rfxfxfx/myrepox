import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

const InquiryForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://formspree.io/f/yourformid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          address: "",
          location: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Formspree submission failed:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 min-h-screen flex items-center overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="vid4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-base font-semibold text-purple-400 mb-2">
                Get in Touch
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                Let's Discuss Your{" "}
                <span className="bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text">
                  Project
                </span>
              </h2>
              <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-300 leading-relaxed">
                Ready to transform your digital presence? Fill out the form and
                we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col space-y-6 text-white items-center lg:items-start">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-md">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">09770927090/09202768751</p>
                  <p className="text-sm text-gray-300">Globe/Smart</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-md">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">dev@rfxstudios.com</p>
                  <p className="text-sm text-gray-300">Send us a message</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-md">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Quezon City, Philippines</p>
                  <p className="text-sm text-gray-300">Find us here</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <Card className="w-full max-w-md p-6 md:p-8 rounded-xl shadow-xl border border-gray-700 dark:border-gray-600 bg-white/10 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-white">
                  Inquire Now
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center">
                    <CheckCircle className="h-16 w-16 text-green-400" />
                    <h3 className="text-xl font-medium text-white">
                      Thank You!
                    </h3>
                    <p className="text-gray-300">
                      Your inquiry has been submitted successfully. We'll
                      contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { id: "name", type: "text", label: "Full Name", placeholder: "John Doe" },
                      { id: "email", type: "email", label: "Email", placeholder: "john@example.com" },
                      { id: "company", type: "text", label: "Company", placeholder: "Your Company" },
                      { id: "address", type: "text", label: "Address", placeholder: "123 Main St" },
                      { id: "location", type: "text", label: "Location", placeholder: "City, Country" },
                    ].map(({ id, type, label, placeholder }) => (
                      <div className="space-y-2" key={id}>
                        <Label htmlFor={id} className="text-white">{label}</Label>
                        <Input
                          id={id}
                          name={id}
                          type={type}
                          placeholder={placeholder}
                          required={id === "name" || id === "email"}
                          value={formData[id]}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                        />
                      </div>
                    ))}

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Project Details
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        className="min-h-[100px] w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 resize-y"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full px-6 py-3 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none text-white"
                    >
                      <Send className="mr-2 h-4 w-4" /> Submit Inquiry
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
