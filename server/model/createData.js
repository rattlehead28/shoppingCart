var productDetails = require('./mongoose.js');
var mongoose = require('mongoose');
var newProduct = productDetails(


	{
	"mobiles": [{
			"id": 1,
			"name": "Moto G5s Plus",
			"description": "dual back camera with good features ",
			"image": "images/moto.jpg",
			"price": "13999",
			"details": "13+13MP dual back camera (f\/2.0, dual LED flash) and 8MP front facing camera with flash\r\n4GB RAM and 64GB internal memory expandable up to 128GB\r\n13.97cms (5.5-inch) Full HD (1080 x 1920) capacitive touchscreen with Gorilla Glass 3 protection\r\nDual nano hybrid SIM with dual-standby (4G+4G); Metal body with fingerprint reader\r\nAndroid v7.1 Nougat operating system with 2.0GHz Snapdragon 625 octa-core processor\r\n3000mAH Lithium-ion battery with 15W Turbo Charging"
		},
		{
			"id": 2,
			"name": "OnePlus 5T",
			"description": "dual back camera with good features ",
			"image": "images/5t.jpg",
			"price": "32999",
			"details": "20MP+16MP primary dual camera and 16MP front facing camera\r\n15.26 centimeters (6.01-inch) capacitive touchscreen FHD Full Optic AMOLED 18:9 display with 2160 x 1080 pixels resolution. Cover Glass:2.5D Corning Gorilla Glass 5\r\nOxygenOS based on Android 7.1.1 Nougat with Qualcomm Snapdragon 835 octa core processor\r\n6 GB RAM, 64 GB internal memory and dual nano SIM dual-standby (4G+4G)\r\n3300mAH lithium Polymer battery with Dash Charge technology\r\nFace Unlock, Fingerprint scanner, all-metal unibody and NFC enabled"

		},
		{
			"id": 3,
			"name": "Samsung Galaxy S8",
			"description": "Explore a world of endless possibilities with the Samsung Galaxy S8",
			"image": "images/galaxys8.jpg",
			"price": "51990",
			"details": "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB\r\n5.8 inch Quad HD+ Display\r\n12MP Rear Camera | 8MP Front Camera\r\n3000 mAh Battery\r\nExynos 8895 Processor"
		}],
	

	"laptops": [{
			"id": 1,
			"name": "Apple MacBook Air MQD32HN/A",
			"description": "MacBook Air lasts up to ....",
			"image": "images/macbook.jpg",
			"price": "57299",
			"details":"All new 2017 Apple MacBook Air\r\n1.8GHz Intel Core i5 processor\r\n8GB LPDDR3 RAM, 128GB Solid State hard drive\r\n13.3-inch screen, Intel HD Graphics 6000\r\nMacOS Sierra operating system\r\n1.35kg laptop\r\n1440x900 pixels per inch with support for millions of colors, 720p FaceTime HD camera"
			
		},
		{
			"id": 2,
			"name": "Dell Alienware 13 Y560901IN9",
			"description":"The Dell Alienware 13 is a great product with....",
			"image": "images/dell.jpg",
			"price": "117299",
			"details":"Upto 2.7GHz Intel Core i5 5200U processor\r\n8GB DDRL3 RAM\r\n1TB hard drive\r\n13 inch screen, Nvidia GeForce GTX 960M with 2GB GDDR5 Graphics\r\nWindows 8.1, 64Bit operating system"
			
		},
		{
			"id": 3,
			"name": "HP Omen 15-ce072tx",
			"description":"Reinvent Dominion When the competition is relentless, greatness is achieved by those heroes who rise to the occasion.",
			"image": "images/hpomen.png",
			"price": "105990",
			"details": "Display: 15.6\" (39.62 cm) LED Backlit(120Hz) Anti-Glare 1920 x 1080 Full HD Widescreen (1080p) IPS Display\r\nProcessor: Intel Core i7-7700HQ (2.8 GHz, up to 3.8 GHz with Intel Turbo Boost Technology, 6 MB cache, 4 cores)\r\nRAM and Hard Drive: 16 GB(2 x 8 GB) DDR4-2400 SDRAM (19.2 GB\/s), 128GB PCIe NVMe M.2 SSD + 1TB HDD 7200 rpm SATA\r\nOperating System and Graphics: Windows 10 Home(64-bit), NVIDIA GeForce GTX 1050Ti (4 GB GDDR5 dedicated)\r\nKeyboard: Dragon Red Backlit Full Island-style Keyboard with Numeric keypad(Special Highlight WASD Keys)\r\nAudio: by Bang and Olufsen, HP Audio Boost 2.0 w\/ discrete amplifier, Dual Speakers\r\nDimensions (HxWxD) and Weight: 0.98 x 15.30 x 10.85 inches | Weight: 2.6 kgs\r\nPorts: 1 USB 3.1 Type-C, 3 USB 3.1, 1 HDMI, 1 RJ-45, 1 headphone\/microphone combo, 1 Mini DisplayPort"
		}
	]

});
console.log(newProduct)


module.exports = newProduct