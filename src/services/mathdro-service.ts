import axios from 'axios';

export interface Result {
  data: string;
}

export type Fetch = {
  meninggal: number | null;
  sembuh: number | null;
  perawatan: number | null;
  jumlahKasus: number | null;
  perKasus: any | null;
  perProvinsi: any | null;
  perHari: any | null;
  wismaAtlet: any | null;
};

export const loadData = async () => {
  const result = await axios.get('https://indonesia-covid-19.mathdro.id/api');
  return result.data;
};
