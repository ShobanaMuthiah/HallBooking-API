import express from 'express';
import { createRooms, createUser } from '../Controllers/CreateHallBooking.js';


const router=express.Router();

//post the details of users who booked the room
router.post('/users',createUser)

//post the details of room which booked
router.post('/rooms',createRooms)

export default router;
