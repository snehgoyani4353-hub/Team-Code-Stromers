/**
 * CIVICA Tactical Command Center & Geospatial Radar Engine
 * High-performance tactical processing system for municipal operations
 * State Integrated Command & Control Centre (ICCC), Gujarat
 */

class CivicaTacticalCommandSystem {
  constructor(config = {}) {
    this.operatorProfile = null;
    this.incidents = [];
    this.fleets = [];
    this.telemetryInterval = null;
    this.radarAngle = 0;
    this.audioContext = null;
    this.sirenActive = false;
    this.selectedCity = config.defaultCity || 'AMC';
    this.listeners = new Map();
    
    // Gujarat Municipal Centers
    this.cityCenters = {
      'AMC': { name: 'AMC Ahmedabad', coords: [23.0375, 72.5625], zoom: 13 },
      'SMC': { name: 'SMC Surat', coords: [21.1702, 72.8311], zoom: 13 },
      'VMC': { name: 'VMC Vadodara', coords: [22.3072, 73.1812], zoom: 13 },
      'RMC': { name: 'RMC Rajkot', coords: [22.3039, 70.8022], zoom: 13 },
      'GMC': { name: 'GMC Gandhinagar', coords: [23.2156, 72.6369], zoom: 13 }
    };
  }

  async initialize() {
    try {
      const [opRes, incRes, fltRes] = await Promise.all([
        fetch('command_center/operator_commander_profile.json').then(r => r.json()).catch(() => null),
        fetch('command_center/tactical_incidents.json').then(r => r.json()).catch(() => null),
        fetch('command_center/fleet_units.json').then(r => r.json()).catch(() => null)
      ]);

      if (opRes) this.operatorProfile = opRes;
      if (incRes) this.incidents = incRes;
      if (fltRes) this.fleets = fltRes;

      this.startRealtimeSimulation();
      this.emit('initialized', { operator: this.operatorProfile, totalIncidents: this.incidents.length });
      return true;
    } catch (err) {
      console.warn('Tactical system init offline fallback mode:', err);
      return false;
    }
  }

  on(event, callback) {
    if (!this.listeners.has(event)) this.listeners.set(event, []);
    this.listeners.get(event).push(callback);
  }

  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(cb => {
        try { cb(data); } catch (e) { console.error('Listener err:', e); }
      });
    }
  }

  /**
   * Haversine formula for exact distance between geospatial points in Kilometers
   */
  calculateHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's mean radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return parseFloat((R * c).toFixed(2));
  }

  /**
   * Dispatches nearest optimal fleet based on Euclidean & Haversine heuristics
   */
  findOptimalFleetForIncident(incident) {
    if (!incident || !incident.coords) return null;
    const [incLat, incLon] = incident.coords;
    
    const available = this.fleets.filter(f => f.city === incident.city || f.status !== 'engaged');
    if (available.length === 0) return this.fleets[0] || null;

    let closest = null;
    let minDistance = Infinity;

    for (const fleet of available) {
      const dist = this.calculateHaversineDistance(incLat, incLon, fleet.currentCoords[0], fleet.currentCoords[1]);
      if (dist < minDistance) {
        minDistance = dist;
        closest = { fleet, distanceKm: dist, etaMinutes: Math.max(3, Math.round((dist / 35) * 60)) };
      }
    }

    return closest;
  }

  /**
   * Finish an incident state machine
   * Directly change status to 'resolved' (Finish)
   */
  finishIncidentStatus(incidentId) {
    const inc = this.incidents.find(i => i.id === incidentId || i.shortId === incidentId);
    if (!inc) return null;

    inc.status = 'resolved';
    inc.escrowStatus = 'refunded';
    inc.slaHoursRemaining = 0;
    this.emit('incidentUpdated', inc);
    return inc;
  }

  advanceIncidentStatus(incidentId) {
    return this.finishIncidentStatus(incidentId);
  }

  /**
   * Sound synthesized tactical siren alert using HTML5 Web Audio API
   */
  playTacticalAlertTone(type = 'critical') {
    try {
      if (!this.audioContext) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.audioContext = new AudioCtx();
      }
      if (!this.audioContext) return;

      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.type = type === 'critical' ? 'sawtooth' : 'sine';

      const now = this.audioContext.currentTime;
      const freq = type === 'critical' ? 880 : 440;
      
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(freq, now + 0.3);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.45);

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {
      console.warn('Audio synthesis bypassed:', e);
    }
  }

  /**
   * Real-time Simulation Engine: Simulates GPS telemetry drift & sensor fluctuations
   */
  startRealtimeSimulation() {
    if (this.telemetryInterval) clearInterval(this.telemetryInterval);
    this.telemetryInterval = setInterval(() => {
      // Small simulated coordinate micro-drift for moving fleets
      this.fleets.forEach(fleet => {
        if (fleet.status === 'en_route') {
          const deltaLat = (Math.random() - 0.5) * 0.0003;
          const deltaLon = (Math.random() - 0.5) * 0.0003;
          fleet.currentCoords[0] += deltaLat;
          fleet.currentCoords[1] += deltaLon;
          fleet.speedKmh = Math.floor(25 + Math.random() * 15);
          if (fleet.etaMinutes > 1) fleet.etaMinutes -= 0.1;
        }
      });

      // Micro sensor fluctuations
      this.incidents.forEach(inc => {
        if (inc.sensorTelemetry && inc.sensorTelemetry.waterDepthCm) {
          inc.sensorTelemetry.waterDepthCm = Math.max(10, Math.min(100, inc.sensorTelemetry.waterDepthCm + (Math.random() - 0.48) * 1.5));
          inc.sensorTelemetry.waterDepthCm = parseFloat(inc.sensorTelemetry.waterDepthCm.toFixed(1));
        }
      });

      this.emit('telemetryTick', {
        timestamp: new Date().toISOString(),
        activeIncidents: this.incidents.filter(i => i.status !== 'resolved').length,
        fleetsInTransit: this.fleets.filter(f => f.status === 'en_route').length
      });
    }, 4000);
  }

  stopSimulation() {
    if (this.telemetryInterval) {
      clearInterval(this.telemetryInterval);
      this.telemetryInterval = null;
    }
  }

  /**
   * Generate CSV format audit report of tactical incidents
   */
  exportTelemetryCSV() {
    const headers = ['Incident ID', 'City', 'Ward', 'Category', 'Severity', 'Status', 'Location', 'Latitude', 'Longitude', 'Assigned Unit', 'Escrow Status', 'Reported At'];
    const rows = this.incidents.map(i => [
      i.id,
      `"${i.city}"`,
      `"${i.ward}"`,
      i.category,
      i.severity,
      i.status,
      `"${i.locationName}"`,
      i.coords[0],
      i.coords[1],
      `"${i.assignedUnit || 'Unassigned'}"`,
      i.escrowStatus,
      i.reportedAt
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CIVICA_Tactical_Telemetry_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
}

// Export as global singleton
window.CivicaTacticalCommandSystem = CivicaTacticalCommandSystem;
window.tacticalEngine = new CivicaTacticalCommandSystem();
