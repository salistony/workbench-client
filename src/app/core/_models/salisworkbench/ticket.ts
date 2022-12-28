export interface TicketingResult {
  client: any[];
  location: any[];
  product_id: any[];
  create_date: string;
  notes: string;
}

export interface Ticket {
  result: TicketingResult[];
}


