export const user=[
    {
        bookingid:1,
        customerName: "John Doe",
        date: "2024-06-15",
        startTime: "09:00",
        endTime: "11:00",
        roomId: 1
    },
    {
        bookingid:2,
        customerName: "Jane Smith",
        date: "2024-06-16",
        startTime: "13:00",
        endTime: "15:00",
        roomId: 3
    },
    {
        bookingid:3,
        customerName: "Alice Johnson",
        date: "2024-06-17",
        startTime: "10:00",
        endTime: "12:00",
        roomId: 2
    },
    {
        bookingid:4,
        customerName: "Bob Brown",
        date: "2024-06-18",
        startTime: "14:00",
        endTime: "16:00",
        roomId: 7
    },
    {
        bookingid:5,
        customerName: "Charlie Davis",
        date: "2024-06-19",
        startTime: "08:00",
        endTime: "10:00",
        roomId: 2
    }
]

export const rooms=[
    {
        id:1,
        hallName: "Grand Conference Room",
        location: "789 Business Plaza, Metropolis",
        numberOfSeats: 150,
        amenities: ["Projector", "WiFi", "Whiteboard", "Sound System", "Air Conditioning"],
       pricePerHour: 200,
       bookedStatus:'available'
    },
    {
        id:2,
        hallName: "Executive Meeting Room",
        location: "123 Corporate Blvd, Capital City",
        numberOfSeats: 50,
        amenities: ["Projector", "WiFi", "Whiteboard", "Video Conferencing", "Air Conditioning"],
       pricePerHour: 150,
       bookedStatus:'available'
    },
    {
        id:3,
        hallName: "Boardroom Deluxe",
        location: "456 Finance Street, Downtown",
        numberOfSeats: 20,
        amenities: ["Projector", "WiFi", "Whiteboard", "Conference Phone", "Air Conditioning"],
       pricePerHour: 100,
       bookedStatus:'available'
    },
    {
        id:4,
        hallName: "Innovation Hub",
        location: "789 Tech Park, Silicon Valley",
        numberOfSeats: 80,
        amenities: ["Projector", "WiFi", "Whiteboard", "Sound System", "Video Conferencing"],
       pricePerHour: 180,
       bookedStatus:'available'
    },
    {
        id:5,
        hallName: "Creative Space",
        location: "321 Arts District, Metropolis",
        numberOfSeats: 60,
        amenities: ["Projector", "WiFi", "Whiteboard", "Sound System", "Breakout Rooms"],
       pricePerHour: 170,
       bookedStatus:'available'
    },
    {
        id:6,
        hallName: "Corporate Suite",
        location: "654 Commerce Way, Uptown",
        numberOfSeats: 40,
        amenities: ["Projector", "WiFi", "Whiteboard", "Air Conditioning", "Coffee Machine"],
       pricePerHour: 120,
       bookedStatus:'available'
    },
    {
        id:7,
        hallName: "Prestige Room",
        location: "987 Prestige Lane, City Center",
        numberOfSeats: 100,
        amenities: ["Projector", "WiFi", "Whiteboard", "Sound System", "Catering Services"],
       pricePerHour: 220,
       bookedStatus:'available'
    },
    {
        id:8,
        hallName: "Elite Conference Hall",
        location: "159 Elite Ave, Downtown",
        numberOfSeats: 200,
        amenities: ["Projector", "WiFi", "Whiteboard", "Sound System", "Stage"],
       pricePerHour: 300,
       bookedStatus:'available'
    },
    {
        id:9,
        hallName: "Strategy Room",
        location: "753 Strategic Rd, Business District",
        numberOfSeats: 30,
        amenities: ["Projector", "WiFi", "Whiteboard", "Video Conferencing", "Conference Phone"],
       pricePerHour: 110,
       bookedStatus:'available'
    },
    {
        id:10,
        hallName: "Collaboration Corner",
        location: "852 Innovation Drive, Silicon Valley",
        numberOfSeats: 70,
        amenities: ["Projector", "WiFi", "Whiteboard", "Sound System", "Breakout Rooms"],
       pricePerHour: 160,
       bookedStatus:'available'
    }
]



//create user /books hall with user datail
export const createRooms=(req,res)=>{
    const {hallName,location,numberOfSeats,amenities,pricePerHour}=req.body
    const newRooms={
        id:rooms.length+1,
       hallName:hallName,
        location:location,
        numberOfSeats:numberOfSeats,
        amenities:amenities,
        pricePerHour:pricePerHour
    }
    rooms.push(newRooms);

    res.status(200).json({message:"your details submitted successfully",data:newRooms})
}


//create user /books hall with user datail
export const createUser=(req,res)=>{
    const {customerName,date,startTime,endTime,roomId}=req.body;
    const newUserdetail={
        bookingid:user.length+1,
        customerName:customerName,
        date:date,
        startTime:startTime,
        endTime:endTime,
        roomId:roomId
    }
    user.push(newUserdetail)

    res.status(200).json({message:"your details submitted successfully",data:newUserdetail})
}
