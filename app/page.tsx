'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfizo8h6h/image/upload/v1749027208/duong_2_qdyrb1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay để làm tối background một chút */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 p-8">
        {/* Title */}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-80">
          <Button
            variant="default"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold min-w-[150px]"
            onClick={() => {
              router.push('/react');
            }}
          >
            React
          </Button>

          <Button
            variant="default"
            size="lg"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg font-semibold min-w-[150px]"
            onClick={() => {
              router.push('/javascript');
            }}
          >
            JavaScript
          </Button>

          <Button
            variant="default"
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold min-w-[150px]"
            onClick={() => {
              router.push('/html');
            }}
          >
            HTML
          </Button>
        </div>
      </div>
    </div>
  );
}
