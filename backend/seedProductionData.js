import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Hotel from './models/Hotel.js';
import Room from './models/Room.js';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'HomeStay'
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

const hotelsData = [
    {
        name: "The Grand Palace Hotel",
        address: "123 Royal Avenue, Downtown",
        contact: "+1-555-0101",
        city: "New York",
        rooms: [
            {
                roomType: "Luxury Room",
                pricePerNight: 450,
                amenities: ["Free WiFi", "Room Service", "Mini Bar", "Balcony", "City View"],
                images: [
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                ]
            },
            {
                roomType: "Double Bed",
                pricePerNight: 320,
                amenities: ["Free WiFi", "Room Service", "Work Desk", "City View"],
                images: [
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
                ]
            }
        ]
    },
    {
        name: "Oceanview Resort & Spa",
        address: "456 Beachfront Boulevard",
        contact: "+1-555-0102",
        city: "Miami",
        rooms: [
            {
                roomType: "Family Suite",
                pricePerNight: 520,
                amenities: ["Free WiFi", "Room Service", "Ocean View", "Balcony", "Spa Access"],
                images: [
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
                ]
            },
            {
                roomType: "Double Bed",
                pricePerNight: 380,
                amenities: ["Free WiFi", "Garden View", "Private Terrace", "Mini Bar"],
                images: [
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                ]
            }
        ]
    },
    {
        name: "Mountain Peak Lodge",
        address: "789 Alpine Ridge Road",
        contact: "+1-555-0103",
        city: "Denver",
        rooms: [
            {
                roomType: "Single Bed",
                pricePerNight: 280,
                amenities: ["Free WiFi", "Mountain View", "Fireplace", "Balcony"],
                images: [
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
                ]
            }
        ]
    },
    {
        name: "Urban Boutique Hotel",
        address: "321 Metropolitan Street",
        contact: "+1-555-0104",
        city: "San Francisco",
        rooms: [
            {
                roomType: "Luxury Room",
                pricePerNight: 350,
                amenities: ["Free WiFi", "City View", "Modern Design", "Work Space"],
                images: [
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                ]
            },
            {
                roomType: "Family Suite",
                pricePerNight: 650,
                amenities: ["Free WiFi", "City View", "Private Elevator", "Rooftop Access", "Butler Service"],
                images: [
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                ]
            }
        ]
    },
    {
        name: "Taj Palace Mumbai",
        address: "Apollo Bunder, Colaba",
        contact: "+91-22-6665-3366",
        city: "Mumbai",
        rooms: [
            {
                roomType: "Family Suite",
                pricePerNight: 180,
                amenities: ["Free WiFi", "Sea View", "Heritage Design", "Butler Service", "Mini Bar"],
                images: [
                    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                ]
            },
            {
                roomType: "Double Bed",
                pricePerNight: 120,
                amenities: ["Free WiFi", "City View", "Room Service", "Mini Bar"],
                images: [
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                ]
            }
        ]
    },
    {
        name: "The Leela Palace Bangalore",
        address: "23 Airport Road, HAL 3rd Stage",
        contact: "+91-80-2521-1234",
        city: "Bangalore",
        rooms: [
            {
                roomType: "Luxury Room",
                pricePerNight: 220,
                amenities: ["Free WiFi", "Garden View", "Palace Design", "Spa Access", "Butler Service"],
                images: [
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
                    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
                ]
            }
        ]
    },
    {
        name: "Goa Marriott Resort",
        address: "Miramar Beach, Panaji",
        contact: "+91-832-246-3333",
        city: "Goa",
        rooms: [
            {
                roomType: "Family Suite",
                pricePerNight: 150,
                amenities: ["Free WiFi", "Beach Access", "Private Pool", "Garden View"],
                images: [
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
                ]
            },
            {
                roomType: "Single Bed",
                pricePerNight: 95,
                amenities: ["Free WiFi", "Ocean View", "Balcony", "Room Service"],
                images: [
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                ]
            }
        ]
    },
    {
        name: "The Oberoi Udaivilas",
        address: "Haridasji Ki Magri, Udaipur",
        contact: "+91-294-243-3300",
        city: "Udaipur",
        rooms: [
            {
                roomType: "Luxury Room",
                pricePerNight: 280,
                amenities: ["Free WiFi", "Lake View", "Palace Design", "Boat Transfer", "Spa Access"],
                images: [
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
                ]
            }
        ]
    }
];

const seedProductionData = async () => {
    try {
        await connectDB();

        // Find or create a hotel owner user
        let owner = await User.findOne({ role: "hotelOwner" });
        if (!owner) {
            // Create a default hotel owner
            owner = await User.create({
                _id: "hotel_owner_001",
                email: "owner@homestay.com",
                username: "Hotel Owner",
                image: "",
                role: "hotelOwner",
                recentSearchedCities: []
            });
            console.log("Created default hotel owner");
        }

        console.log("Starting to seed production data...");

        // Clear existing hotels and rooms
        await Hotel.deleteMany({});
        await Room.deleteMany({});
        console.log("Cleared existing hotels and rooms");

        let totalRooms = 0;

        // Create hotels and rooms
        for (const hotelData of hotelsData) {
            const hotel = await Hotel.create({
                name: hotelData.name,
                address: hotelData.address,
                contact: hotelData.contact,
                city: hotelData.city,
                owner: owner._id
            });

            console.log(`Created hotel: ${hotel.name}`);

            // Create rooms for this hotel
            for (const roomData of hotelData.rooms) {
                await Room.create({
                    roomType: roomData.roomType,
                    pricePerNight: roomData.pricePerNight,
                    amenities: roomData.amenities,
                    images: roomData.images,
                    hotel: hotel._id
                });
                totalRooms++;
                console.log(`  Created room: ${roomData.roomType} - $${roomData.pricePerNight}/night`);
            }
        }

        console.log(`\n✅ Successfully seeded production data!`);
        console.log(`📊 Summary:`);
        console.log(`   - Hotels created: ${hotelsData.length}`);
        console.log(`   - Rooms created: ${totalRooms}`);
        console.log(`   - Cities covered: ${[...new Set(hotelsData.map(h => h.city))].join(', ')}`);

        process.exit(0);
    } catch (error) {
        console.error("Error seeding production data:", error);
        process.exit(1);
    }
};

seedProductionData();
