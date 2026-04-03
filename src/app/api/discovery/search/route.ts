import { NextRequest } from 'next/server';
import { ApiResponse } from '@/lib/response';
import { ApiError } from '@/lib/error';
import { DiscoveryService } from '@/services/discovery/discovery.service';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const lat = parseFloat(searchParams.get('lat') || '28.4595'); // Default: Gurgaon
    const lon = parseFloat(searchParams.get('lon') || '77.0266'); // Default: Gurgaon
    const radius = parseFloat(searchParams.get('radius') || '10');
    const skill = searchParams.get('skill') || undefined;

    if (isNaN(lat || lon)) {
      throw ApiError.BadRequest('Invalid GPS coordinates', 'INVALID_COORDS');
    }

    // 1. Fetch hyper-local workers using PostGIS
    const workers = await DiscoveryService.findNearbyWorkers({
      latitude: lat,
      longitude: lon,
      radiusInKm: radius,
      skill,
    });

    return ApiResponse.success({
      count: (workers as any[]).length,
      workers,
    });
  } catch (error) {
    return ApiResponse.error(error);
  }
}
