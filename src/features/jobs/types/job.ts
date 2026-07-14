export interface IJob {
  id: string;
  title: string; // fe
  description: string; // fe
  company: string; // fe
  role: string;
  experience: {
    min: number | null;
    max: number | null;
  };
  keywords: string[];
  location: string; // fe
  created_at: string;
  company_type: 'PRODUCT' | 'SERVICES';
  source_url: string; // fe
}

export type TJobListItem = Pick<IJob, 'id' | 'company' | 'title' | 'description' | 'experience' | 'created_at' | 'company_type' | 'source_url'>;
