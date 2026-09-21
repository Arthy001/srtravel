import { initialCarsData } from "@/lib/data/mockCars";
import { CarDetailClient } from "@/components/cars/CarDetailClient";

export async function generateStaticParams() {
  return initialCarsData.map((car) => ({
    id: car.id,
  }));
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  return <CarDetailClient carId={resolvedParams.id} />;
}
