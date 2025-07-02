export default function calculateDistance(coord1, coord2) {
  const lat1 = toRadians(coord1[0]);
  const lon1 = toRadians(coord1[1]);
  const lat2 = toRadians(coord2[0]);
  const lon2 = toRadians(coord2[1]);

  const deltaLon = lon2 - lon1;
  const deltaLat = lat2 - lat1;

  const { sin, cos, sqrt, atan2 } = Math;

  const R = 6371;

  const a =
    sin(deltaLat / 2) * sin(deltaLat / 2) +
    cos(lat1) * cos(lat2) * sin(deltaLon / 2) * sin(deltaLon / 2);
  const c = 2 * atan2(sqrt(a), sqrt(1 - a));
  const d = R * c;
  return d;
}

function toRadians(angle) {
  const pi = Math.PI;
  return angle * (pi / 180);
}
