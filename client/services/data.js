myApp.service('images', function() {

    this.slides = [{
        url: '/images/bag_1.png',
        productid: "1",
        titlecard: "Luxur Backpack",
        price: 1500,
        discounted: 1200,
        name: "F Gear Luxur Laptop Backpack",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", "Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }, {
        url: '/images/bag_2.png',
        titlecard: "Arthur Backpack",
        productid: "2",
        price: 1500,
        discounted: 1200,
        name: "F Gear Arthur Laptop Backpack",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", " Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }, {
        url: '/images/bag_3.png',
        titlecard: "Flex Backpack",
        productid: "3",
        price: 1500,
        discounted: 1200,
        name: "F Gear Flex Laptop Backpack",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", " Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }, {
        url: '/images/bag_4.png',
        titlecard: "Crist Backpack",
        productid: "4",
        price: 1500,
        discounted: 1200,
        name: "F Gear Crist Laptop Backpack",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", " Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }, {
        url: '/images/bag_5.png',
        titlecard: "Reebok Backpack",
        productid: "5",
        price: 1500,
        discounted: 1200,
        name: "F Gear Reebok Laptop Backpack",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", " Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }, {
        url: '/images/bag_6.png',
        titlecard: "Tesla Backpack",
        productid: "6",
        price: 1500,
        discounted: 1200,
        name: "F Gear Tesla Laptop Backpack",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", " Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }, {
        url: '/images/bag_7.png',
        titlecard: "Carvan Backpack",
        productid: "7",
        price: 1500,
        discounted: 1200,
        name: "F Gear Carvan Laptop Backpack",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", " Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }, {
        url: '/images/bag_8.png',
        titlecard: "Luxur Backpack",
        productid: "8",
        price: 1500,
        discounted: 1200,
        name: "F Gear Luxur Laptop Backpack",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", " Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }]


    this.phones = [{
        url: '/images/phone_1.jpg',
        titlecard: "Honor 6",
        productid: "9",
        price: 15000,
        discounted: 1100,
        name: "Honor 6 (Mirror Black, 6GB RAM, 64GB Storage)",
        details: ["Camera: 20+16 MP Dual rear camera with Optical image stabilization, Super slow motion, Portrait mode | 16 MP front camera", "Display: 15.95 centimeters (6.28-inch) Full HD+ Optic AMOLED display with 2280x1080 pixels and 19:9 aspect ratio | 2.5D Corning Gorilla Glass 5 ", "Memory, Storage & SIM: 6GB RAM | 64GB storage | Dual nano SIM with dual standby (4G+4G)", "Operating System and Processor: Android Oreo 8.1 Oxygen operating system based on with Qualcomm Snapdragon 845 octa core processor", "Battery: 3300 mAH lithium Polymer battery with Dash Charge technology"]
    }, {
        url: '/images/phone_2.jpg',
        titlecard: "OnePlus 6",
        productid: "10",
        price: 1400,
        discounted: 1200,
        name: "OnePlus 6 (Mirror Black, 6GB RAM, 64GB Storage)",
        details: ["Camera: 20+16 MP Dual rear camera with Optical image stabilization, Super slow motion, Portrait mode | 16 MP front camera", "Display: 15.95 centimeters (6.28-inch) Full HD+ Optic AMOLED display with 2280x1080 pixels and 19:9 aspect ratio | 2.5D Corning Gorilla Glass 5 ", "Memory, Storage & SIM: 6GB RAM | 64GB storage | Dual nano SIM with dual standby (4G+4G)", "Operating System and Processor: Android Oreo 8.1 Oxygen operating system based on with Qualcomm Snapdragon 845 octa core processor", "Battery: 3300 mAH lithium Polymer battery with Dash Charge technology"]
    }, {
        url: '/images/phone_3.jpg',
        productid: "11",
        titlecard: "honor 5",
        price: 1300,
        discounted: 1400,
        name: "honor 5 (Mirror Black, 6GB RAM, 64GB Storage)",
        details: ["Camera: 20+16 MP Dual rear camera with Optical image stabilization, Super slow motion, Portrait mode | 16 MP front camera", "Display: 15.95 centimeters (6.28-inch) Full HD+ Optic AMOLED display with 2280x1080 pixels and 19:9 aspect ratio | 2.5D Corning Gorilla Glass 5 ", "Memory, Storage & SIM: 6GB RAM | 64GB storage | Dual nano SIM with dual standby (4G+4G)", "Operating System and Processor: Android Oreo 8.1 Oxygen operating system based on with Qualcomm Snapdragon 845 octa core processor", "Battery: 3300 mAH lithium Polymer battery with Dash Charge technology"]
    }, {
        url: '/images/phone_4.jpg',
        productid: "12",
        titlecard: "OnePlus 3",
        price: 16000,
        discounted: 1200,
        name: "OnePlus 3 (Mirror Black, 6GB RAM, 64GB Storage)",
        details: ["Camera: 20+16 MP Dual rear camera with Optical image stabilization, Super slow motion, Portrait mode | 16 MP front camera", "Display: 15.95 centimeters (6.28-inch) Full HD+ Optic AMOLED display with 2280x1080 pixels and 19:9 aspect ratio | 2.5D Corning Gorilla Glass 5 ", "Memory, Storage & SIM: 6GB RAM | 64GB storage | Dual nano SIM with dual standby (4G+4G)", "Operating System and Processor: Android Oreo 8.1 Oxygen operating system based on with Qualcomm Snapdragon 845 octa core processor", "Battery: 3300 mAH lithium Polymer battery with Dash Charge technology"]
    }, {
        url: '/images/phone_5.jpg',
        productid: "13",
        titlecard: "OnePlus 3",
        price: 13500,
        discounted: 1200,
        name: "OnePlus 6 (Mirror Black, 6GB RAM, 64GB Storage)",
        details: ["Camera: 20+16 MP Dual rear camera with Optical image stabilization, Super slow motion, Portrait mode | 16 MP front camera", "Display: 15.95 centimeters (6.28-inch) Full HD+ Optic AMOLED display with 2280x1080 pixels and 19:9 aspect ratio | 2.5D Corning Gorilla Glass 5 ", "Memory, Storage & SIM: 6GB RAM | 64GB storage | Dual nano SIM with dual standby (4G+4G)", "Operating System and Processor: Android Oreo 8.1 Oxygen operating system based on with Qualcomm Snapdragon 845 octa core processor", "Battery: 3300 mAH lithium Polymer battery with Dash Charge technology"]
    }, {
        url: '/images/phone_6.jpg',
        productid: "14",
        titlecard: "OnePlus 3",
        price: 15400,
        discounted: 3200,
        name: "OnePlus 6 (Mirror Black, 6GB RAM, 64GB Storage)",
        details: ["Camera: 20+16 MP Dual rear camera with Optical image stabilization, Super slow motion, Portrait mode | 16 MP front camera", "Display: 15.95 centimeters (6.28-inch) Full HD+ Optic AMOLED display with 2280x1080 pixels and 19:9 aspect ratio | 2.5D Corning Gorilla Glass 5 ", "Memory, Storage & SIM: 6GB RAM | 64GB storage | Dual nano SIM with dual standby (4G+4G)", "Operating System and Processor: Android Oreo 8.1 Oxygen operating system based on with Qualcomm Snapdragon 845 octa core processor", "Battery: 3300 mAH lithium Polymer battery with Dash Charge technology"]
    }, {
        url: '/images/phone_7.jpg',
        productid: "15",
        titlecard: "OnePlus 2",
        price: 18000,
        discounted: 1200,
        name: "OnePlus 2 (Mirror Black, 6GB RAM, 64GB Storage)",
        details: ["Camera: 20+16 MP Dual rear camera with Optical image stabilization, Super slow motion, Portrait mode | 16 MP front camera", "Display: 15.95 centimeters (6.28-inch) Full HD+ Optic AMOLED display with 2280x1080 pixels and 19:9 aspect ratio | 2.5D Corning Gorilla Glass 5 ", "Memory, Storage & SIM: 6GB RAM | 64GB storage | Dual nano SIM with dual standby (4G+4G)", "Operating System and Processor: Android Oreo 8.1 Oxygen operating system based on with Qualcomm Snapdragon 845 octa core processor", "Battery: 3300 mAH lithium Polymer battery with Dash Charge technology"]
    }]


    this.images = [{
        url: '/images/iphone_1.jpg',
        titlecard: "Iphone 6",
        productid: "16",
        price: 1500,
        discounted: 1200,
        name: "Iphone 6",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", "Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }, {
        url: '/images/gold_1.jpg',
        productid: "17",
        titlecard: "Gold Bar",
        price: 1500,
        discounted: 1200,
        name: "Gold Bar ",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", " Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }, {
        url: '/images/oneplus_1.jpg',
        titlecard: "Iphone 3",
        productid: "18",
        price: 1500,
        discounted: 1200,
        name: "Iphone 3",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", " Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }, {
        url: '/images/gold_2.jpg',
        titlecard: "Gold Bar ",
        productid: "19",
        price: 1500,
        discounted: 1200,
        name: "Gold Bar ",
        details: ["Outer Material: Nylon, Color: Blue", "Capacity: 42 liters; Weight: 830 grams;", " Dimensions: 53 cms x 20.5 cms x 34.5 cms (LxWxH)", "Number of compartments: 3", "Warranty type: Manufacturer; 12 Months international"]
    }]

    this.breakpoints = [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 1000,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }]

    this.getbreakpoints = function() {
        return this.breakpoints
    }

    this.getimages = function() {
        return this.images
    }

    this.getslides = function() {
        return this.slides
    }

    this.getphones = function() {
        return this.phones
    }

})