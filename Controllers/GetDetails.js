import { rooms, user } from "./CreateHallBooking.js"

//get all room details
export const roomRoute=(req,res)=>{
    res.status(200).json({data:rooms})
}

//get all user booking details
export const userRoute=(req,res)=>{
    res.status(200).send({data:user})
}

//get particular user data
export const getRoomdetail=(req,res)=>{
    const roomId=req.params.id
    console.log(BookedId);
    const roomDetail=user.find(ele=>ele.id==roomId)
    if(!roomDetail){
       return res.status(404).send("Room is not Booked yet")
    }
    res.status(200).json({data:roomDetail})
}

//get particular user data
export const getUserdetail=(req,res)=>{
    const BookedId=req.params.id
    console.log(BookedId);
    const userdata=user.find(ele=>ele.roomId==BookedId)
    if(!userdata){
       return res.status(404).send("Room is not Booked yet")
    }
    res.status(200).json({data:userdata})
}


export const roomsBookedDetails = (req, res) => {
    // Filter rooms that have bookings
    const room = rooms.filter(room => {
            const booking = user.find(book => book.roomId === room.id);
            return booking  // Filter out the booked rooms
        })
       const roomDetails=room.map(room => {
            const booking = user.find(book => book.roomId === room.id);
            return {
                hallName: room.hallName,
                bookedStatus: "Booked",
                customerName: booking.customerName,
                date: booking.date,
                startTime: booking.startTime,
                endTime: booking.endTime
            };
        });

    res.status(200).json({ data: roomDetails });
};


export const userBookedDetails=(req,res)=>{
    const room = rooms.filter(room => {
        const booking = user.find(book => book.roomId === room.id);
        return booking  // Filter out the booked rooms
    })
   const roomDetails=room.map(room => {
        const booking = user.find(book => book.roomId === room.id);
        return {
            customerName: booking.customerName,
            hallName: room.hallName,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime
        };
    });

res.status(200).json({ data: roomDetails });
    res.status(404).json({message:"There was no more booking available yet"})
    // res.status(200).json({ data: userDetails });
}

export const searchUser=(req,res)=>{
    // Get the 'name' parameter from req.query
    const name = req.query.name;

    const customer = user.filter(booking => 
        // Check booking customer name if exists and includes lowercase the name
        booking.customerName.toLowerCase().includes(name.toLowerCase())
    )
    const customerBookings =customer.map(booking => {
        const room = rooms.find(room => room.id === booking.roomId);
        return {
            customerName: booking.customerName,
            hallName:room.hallName ,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            bookedStatus: "Booked",
            bookingId: booking.bookingid,
            bookingDate: booking.date  // Assuming booking date is the same as the event date
        };
    });

      // If no bookings were found, it shows the data not found message
    if (customerBookings.length === 0) {
        return res.status(404).json({ message: "No bookings found for the customer" });
    }

    res.status(200).json({ data: customerBookings });
}