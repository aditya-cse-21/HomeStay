import express from 'express';
import { checkAvailabilityAPI, createBookings, getHotelBookings, getUserBookings, stripePayment } from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailabilityAPI);
bookingRouter.post('/book', protect, createBookings);
bookingRouter.get('/user', protect, getUserBookings);
bookingRouter.get('/hotel', protect, getHotelBookings);
//stripe payment route
bookingRouter.post('/stripe-payment', protect, stripePayment);

export default bookingRouter;