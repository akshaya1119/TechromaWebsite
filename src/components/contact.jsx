"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  companyName: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Please select an industry"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      industry: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your pigment requirements? Get in touch with our team
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-blue p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="First Name" 
                            {...field}
                            className="bg-white border-gray-300 focus:border-brand-yellow"
                          />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Last Name" 
                            {...field}
                            className="bg-white border-gray-300 focus:border-brand-yellow"
                          />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="Email Address" 
                          {...field}
                          className="bg-white border-gray-300 focus:border-brand-yellow"
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Company Name" 
                          {...field}
                          className="bg-white border-gray-300 focus:border-brand-yellow"
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white border-gray-300 focus:border-brand-yellow">
                            <SelectValue placeholder="Select Industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="paints-coatings">Paints & Coatings</SelectItem>
                          <SelectItem value="textiles">Textiles</SelectItem>
                          <SelectItem value="plastics">Plastics</SelectItem>
                          <SelectItem value="printing-inks">Printing Inks</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Your Message" 
                          {...field}
                          className="bg-white border-gray-300 focus:border-brand-yellow resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  <Send className="mr-2" size={20} />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Grey cards for contact details */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-brand-grey p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <MapPin className="text-white text-xl" size={24} />
                </motion.div>
                <div>
                  <h5 className="text-xl font-semibold text-gray-800 mb-2">Our Office</h5>
                  <p className="text-gray-600">
                    Industrial Complex, Sector 15<br />
                    Manufacturing Hub, Gujarat 380015<br />
                    India
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-brand-grey p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Phone className="text-white text-xl" size={24} />
                </motion.div>
                <div>
                  <h5 className="text-xl font-semibold text-gray-800 mb-2">Phone & Email</h5>
                  <p className="text-gray-600">
                    +91 (0) 123 456 7890<br />
                    info@techroma.com<br />
                    export@techroma.com
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-brand-grey p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Clock className="text-white text-xl" size={24} />
                </motion.div>
                <div>
                  <h5 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h5>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
              alt="Quality testing equipment" 
              className="w-full h-48 object-cover rounded-xl shadow-lg cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


