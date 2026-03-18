export interface StoreState {
  user: string | null;     
  allUsers: any[];          
  history: any[];          
  registerUser: (newUser: any) => void;
  login: (email: string) => void;
  logout: () => void;
  saveInvoice: (invoice: any) => void;
}