'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-gray-100 p-4 relative overflow-hidden">
      <style jsx>{`
        .glow-button {
          transition: all 0.3s ease;
        }
        .glow-button:hover {
          background-color: #5c4535;
          box-shadow: 0 0 8px #5c4535;
        }
        .tilt-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tilt-card:hover {
          transform: perspective(1000px) rotateX(4deg) rotateY(-4deg);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
        }
        .parallax-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(-45deg, #2a221b, #3b2f25, #1a120c, #2a221b);
          background-size: 400% 400%;
          z-index: -1;
          animation: gradientShift 15s ease infinite, float 10s ease-in-out infinite alternate;
        }

        @keyframes float {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-30px);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <div className="parallax-bg"></div>

      {/* Hero Section */}
      <section className="text-center py-16">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
          <h1>Hi, I'm Harsh Das 👋</h1>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-lg max-w-xl mx-auto">
          B.Tech AIML student, aspiring app developer & UI/UX designer. I love turning ideas into interactive, human-centered experiences.
        </motion.p>
      </section>

      {/* About Me */}
      <section className="max-w-3xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm currently a 2nd-year B.Tech student specializing in Artificial Intelligence & Machine Learning. I've been exploring app development and UI/UX design using tools like Figma and Android Studio. I'm also diving into game development. Passionate about building smart, user-friendly products.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
        <div className="flex justify-center">
          
          <Card className="tilt-card bg-[#4a3b30]/80 text-gray-100 backdrop-blur-md shadow-lg w-full md:w-2/3">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">🤖 Zomato restaurant rating prediction</h3>
              <p className="text-sm text-gray-300 mb-2">Python + scikit-learn (or your stack)</p>
              <p>
                Predict restaurant ratings using machine learning on the Zomato dataset.
              </p>
              <div className="mt-4 space-x-2">
                <Button size="sm" className="bg-[#3b2f25] text-gray-100 glow-button">
                  <a href="https://github.com/hrshdas/Zomato-restaurant-rating-prediction" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
        <p className="mb-6">Feel free to reach out to me through any of the platforms below!</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:harsh95hd@gmail.com" aria-label="Email"><Mail className="w-6 h-6" /></a>
          <a href="https://github.com/hrshdas" target="_blank" aria-label="GitHub"><Github className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/harsh-das-6a19211a4/" target="_blank" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
        </div>
      </section>
    </div>
  );
}