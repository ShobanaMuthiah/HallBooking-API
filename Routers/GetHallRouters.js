import express from 'express';
import { getRoomdetail, getUserdetail, roomRoute, roomsBookedDetails, searchUser, userBookedDetails, userRoute } from '../Controllers/GetDetails.js';

const router=express.Router();

//get all details of the rooms
router.get('/rooms',roomRoute)

//get the particular room details by specifying the id in the api
router.get('/rooms/:id',getRoomdetail)

//get all details of rooms  which have been booked
router.get('/roombookDetails',roomsBookedDetails)

//get all details of users who were booked the rooms
router.get('/userBookDetails',userBookedDetails)

//get details of specific user who booked room by search their name 
router.get('/search-user',searchUser)

//get all details of the customers
router.get('/users',userRoute)

//get the particular customer details by checking by their id
router.get('/users/:id',getUserdetail)

export default router;
