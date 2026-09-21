"use client";

import React, { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PopularRoutesSection from "@/components/home/PopularRoutesSection";
import ServiceModelSection from "@/components/home/ServiceModelSection";
import BookingSection from "@/components/home/BookingSection";
import LocationSection from "@/components/home/LocationSection";
import ReviewSection from "@/components/home/ReviewSection";
import FAQSection from "@/components/home/FAQSection";
import FilterBar from "@/components/cars/FilterBar";
import CarGrid from "@/components/cars/CarGrid";
import MapView from "@/components/cars/MapView";
import Pagination from "@/components/common/Pagination";
import Footer from "@/components/layout/Footer";
import CarModal from "@/components/cars/CarModal";
import ListCarModal from "@/components/cars/ListCarModal";
import SettingsModal from "@/components/common/SettingsModal";
import { initialCarsData } from "@/lib/data/mockCars";
import { Car, FilterState } from "@/types";
import { Language } from "@/lib/i18n/translations";

export default function HomePage() {
  // Language state (defaults to Thai)
  const [lang, setLang] = useState<Language>("th");

  // Cars data state (Frontend Mock Data)
  const [cars, setCars] = useState<Car[]>(initialCarsData);
  const [favorites, setFavorites] = useState<string[]>(["car-sedan-1", "car-suv-1", "car-van-1"]);
  const [loading, setLoading] = useState(false);

  // UI state
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [showListCarModal, setShowListCarModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const CARS_PER_PAGE = 8;

  // Filter state for SR Travel Rental & Fleet
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    location: "",
    carTypes: [],
    fuelTypes: [],
    minPrice: 0,
    maxPrice: 200000,
    transmission: [],
    seats: [],
    condition: "",
    sortBy: "recommended",
  });

  // Filter cars based on filter state
  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const carPrice = car.price || car.price_per_day || 1500;

      // Search term (name, brand, category, description)
      if (filters.searchTerm) {
        const query = filters.searchTerm.toLowerCase();
        const matchesName = car.name.toLowerCase().includes(query);
        const matchesBrand = car.brand.toLowerCase().includes(query);
        const matchesLocation = car.location_address.toLowerCase().includes(query);
        const matchesCategory = car.category.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesLocation && !matchesCategory) return false;
      }

      // Location filter
      if (filters.location) {
        const query = filters.location.toLowerCase();
        const matchesLocation = car.location_address.toLowerCase().includes(query);
        if (!matchesLocation) return false;
      }

      // Car Types (Sedan, SUV, EV, Van)
      if (filters.carTypes.length > 0) {
        const matchesCategory = filters.carTypes.some((type) => {
          if (type === "EV" || type === "Electric") {
            return car.category === "EV" || car.category === "Electric" || car.fuel_type === "Electric";
          }
          return car.category === type;
        });

        if (!matchesCategory) {
          return false;
        }
      }

      // Fuel Types
      if (filters.fuelTypes.length > 0) {
        if (!filters.fuelTypes.includes(car.fuel_type)) {
          return false;
        }
      }

      // Max price filter
      if (carPrice > filters.maxPrice) {
        return false;
      }

      return true;
    });
  }, [cars, filters]);

  // Compute pagination
  const totalPages = Math.max(1, Math.ceil(filteredCars.length / CARS_PER_PAGE));

  // Current page sliced cars
  const paginatedCars = useMemo(() => {
    const startIndex = (currentPage - 1) * CARS_PER_PAGE;
    return filteredCars.slice(startIndex, startIndex + CARS_PER_PAGE);
  }, [filteredCars, currentPage]);

  // Handle filter changes and reset to page 1
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  // Handle Search submit from Hero section
  const handleHeroSearch = (params: {
    pickup: string;
    dropoff: string;
    dates: string;
    isDifferentDropoff: boolean;
  }) => {
    setFilters((prev) => ({
      ...prev,
      searchTerm: params.pickup === "City or Airport" ? "" : params.pickup,
      location: params.dropoff === "City or Airport" ? "" : params.dropoff,
    }));

    // Smooth scroll down to car-type fleet
    const fleetEl = document.getElementById("car-type");
    if (fleetEl) {
      fleetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle favorite
  const handleToggleFavorite = (carId: string) => {
    setFavorites((prev) => {
      if (prev.includes(carId)) {
        return prev.filter((id) => id !== carId);
      } else {
        return [...prev, carId];
      }
    });
  };

  // Add new car from ListCarModal
  const handleCarAdded = (newCar: Car) => {
    setCars((prev) => [newCar, ...prev]);
  };

  const handleResetFilters = () => {
    setFilters({
      searchTerm: "",
      location: "",
      carTypes: [],
      fuelTypes: [],
      minPrice: 0,
      maxPrice: 200000,
      transmission: [],
      seats: [],
      condition: "",
      sortBy: "recommended",
    });
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Header / Navbar with complete requested menu */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
      />

      {/* 2. Hero Section */}
      <HeroSection 
        lang={lang}
        onSearch={handleHeroSearch} 
      />

      {/* 3. บริการของเรา (Services Section) */}
      <ServicesSection lang={lang} />

      {/* 4. เส้นทางยอดนิยม 🚗 (Popular Routes) */}
      <PopularRoutesSection lang={lang} />

      {/* 5. Service Model (Self-drive, Chauffeur, Airport Transfer) */}
      <ServiceModelSection lang={lang} />

      {/* 5. Car Type (Fleet Catalog & Filters) */}
      <section id="car-type" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3 border border-indigo-100">
            <span>Our Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === "th" ? "Car Type • ประเภทรถเช่าพร้อมให้บริการ" : "Car Type • Available Fleet"}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {lang === "th" ? "เลือกรถที่ใช่สำหรับทริปท่องเที่ยวและการเดินทางของคุณ ตรวจเช็กสภาพพร้อมประกันชั้น 1 ทุกคัน" : "Choose the perfect vehicle for your journey with full insurance and 24/7 assistance."}
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          totalCount={filteredCars.length}
          filters={filters}
          onFilterChange={handleFilterChange}
          showMap={showMap}
          onToggleMap={() => setShowMap(!showMap)}
          onOpenSettings={() => setShowSettingsModal(true)}
          lang={lang}
        />

        {/* Optional Map View */}
        {showMap && (
          <MapView
            cars={filteredCars}
            onSelectCar={(car) => setSelectedCar(car)}
            onClose={() => setShowMap(false)}
          />
        )}

        {/* Cars Grid */}
        <CarGrid
          cars={paginatedCars}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectCar={(car) => setSelectedCar(car)}
          onResetFilters={handleResetFilters}
          lang={lang}
        />

        {/* Dynamic Pagination Bar */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>

      {/* 6. Booking Section */}
      <BookingSection lang={lang} />

      {/* 7. Location Section */}
      <LocationSection lang={lang} />

      {/* 8. Review Section */}
      <ReviewSection lang={lang} />

      {/* 9. FAQ ? Section */}
      <FAQSection lang={lang} />

      {/* 10. Footer */}
      <Footer lang={lang} />

      {/* Car Modal */}
      <CarModal
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
        onBookingSuccess={() => {}}
      />

      {/* List Car Modal (Optional Admin/Host Listing) */}
      <ListCarModal
        isOpen={showListCarModal}
        onClose={() => setShowListCarModal(false)}
        onCarAdded={handleCarAdded}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />
    </div>
  );
}
