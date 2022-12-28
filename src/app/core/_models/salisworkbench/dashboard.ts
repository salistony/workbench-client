export interface Dashboard {
  id: number;
  judet: string;
  tehnician: string;
  status: string;
  locatie: string;
  timing: number;
  client: string;
  sistem: string;
  ticketeAsteptare: number;
  mptotal: number;
  mpramas: number;
  activitateMc: number;
  activitateMp: number;
  nexusId: number;
  prestatorId: number;
  lastUpdatedAt: Date;
  isActive: boolean;
  tipInactivitate: string;
  colorTiming: string;
  colorMp: string;
}
