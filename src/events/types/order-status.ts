export enum OrderStatus {
  // Order created, but ticket hasn't been reserved
  Created = 'created',

  // Case 1: Ticket has been reserved by others
  // Case 2: User cancels order
  // Case 3: Or order expires before payment completes
  Cancelled = 'cancelled',

  // Order has reserved ticket
  PendingPayment = 'pending:payment',

  // Order has reserved ticket, and been paid
  Complete = 'complete',
}
