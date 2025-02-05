// hotel-service/data.js
const hotels = [
    {
      id: "1",
      name: "Grand Hotel",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      postalCode: "10001",
      description: "A luxurious hotel in the heart of the city.",
      rating: 4.5,
      rooms: [
        {
          id: "101",
          roomType: "Double",
          price: 150.00,
          capacity: 2,
          amenities: "Wi-Fi, TV, AC",
          availability: true
        },
        {
          id: "102",
          roomType: "Suite",
          price: 300.00,
          capacity: 4,
          amenities: "Wi-Fi, TV, AC, Mini Bar",
          availability: true
        }
      ]
    },
    {
      id: "2",
      name: "Beach Resort",
      address: "456 Ocean Ave",
      city: "Miami",
      state: "FL",
      country: "USA",
      postalCode: "33101",
      description: "A beautiful resort by the beach.",
      rating: 4.8,
      rooms: [
        {
          id: "201",
          roomType: "Ocean View Room",
          price: 250.00,
          capacity: 2,
          amenities: "Wi-Fi, TV, AC, Balcony",
          availability: true
        },
        {
          id: "202",
          roomType: "Family Suite",
          price: 500.00,
          capacity: 6,
          amenities: "Wi-Fi, TV, AC, Kitchenette",
          availability: true
        }
      ]
    },
    {
      id: "3",
      name: "Mountain Lodge",
      address: "789 Mountain Rd",
      city: "Aspen",
      state: "CO",
      country: "USA",
      postalCode: "81611",
      description: "A cozy lodge in the mountains.",
      rating: 4.2,
      rooms: [
        {
          id: "301",
          roomType: "Standard Room",
          price: 120.00,
          capacity: 2,
          amenities: "Wi-Fi, TV, Fireplace",
          availability: true
        },
        {
          id: "302",
          roomType: "Deluxe Room",
          price: 220.00,
          capacity: 4,
          amenities: "Wi-Fi, TV, AC, Mountain View",
          availability: true
        }
      ]
    },
    {
      id: "4",
      name: "City Center Inn",
      address: "321 City Plaza",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      postalCode: "90001",
      description: "Conveniently located in the city center.",
      rating: 4.0,
      rooms: [
        {
          id: "401",
          roomType: "Single Room",
          price: 100.00,
          capacity: 1,
          amenities: "Wi-Fi, TV",
          availability: true
        },
        {
          id: "402",
          roomType: "Double Room",
          price: 180.00,
          capacity: 2,
          amenities: "Wi-Fi, TV, AC",
          availability: true
        }
      ]
    },
    {
      id: "5",
      name: "Desert Oasis",
      address: "654 Desert Rd",
      city: "Phoenix",
      state: "AZ",
      country: "USA",
      postalCode: "85001",
      description: "A tranquil oasis in the desert.",
      rating: 4.6,
      rooms: [
        {
          id: "501",
          roomType: "King Room",
          price: 200.00,
          capacity: 2,
          amenities: "Wi-Fi, TV, Pool Access",
          availability: true
        },
        {
          id: "502",
          roomType: "Luxury Suite",
          price: 400.00,
          capacity: 4,
          amenities: "Wi-Fi, TV, AC, Private Pool",
          availability: true
        }
      ]
    }
  ];
  
  module.exports = { hotels };