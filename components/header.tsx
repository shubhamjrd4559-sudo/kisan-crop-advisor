"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌾</span>
            </div>
            <span className="font-bold text-lg text-foreground">CropAdvisor</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition">
              Crops
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              Resources
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              About
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#" className="text-foreground hover:text-primary transition">
              Crops
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              Resources
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              About
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
