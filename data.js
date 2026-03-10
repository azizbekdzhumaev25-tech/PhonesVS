// ==================== PHONES DATABASE ====================
const phones =[
    // ===== APPLE =====
    {
        id: "iphone16promax", name: "iPhone 16 Pro Max", brand: "Apple", emoji: "🍎", 
        category: "flagship", year: 2024, series: "iphone-pro-max",
        specs: {
            screenSize: 6.9, screenType: '6.9" OLED LTPO', refreshRate: 120, brightness: 2000, ppi: 460,
            resolution: "2868×1320", resValue: 3785760,
            processor: "A18 Pro", processorScore: 98, antutu: 1850000, processNm: 3,
            ram: 8, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "48+48+12 МП", cameraScore: 96, cameraMain: 48, opticalZoom: 5, videoMax: "4K 120fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 4685, charging: 25, chargingWireless: 25,
            weight: 227, height: 163.0, width: 77.6, thickness: 8.25,
            os: "iOS 18", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.3, nfc: true, usb: "USB-C 3.0", usbVersion: 3.0,
            faceId: true, fingerprint: false, stereo: true, jack35: false, sdCard: false,
            material: "Титан + керамика", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 134990, priceStr: "от 134 990 ₽",
            buyLink: "https://ya.ru"
        }
    },
    {
        id: "iphone16pro", name: "iPhone 16 Pro", brand: "Apple", emoji: "🍎",
        category: "flagship", year: 2024, series: "iphone-pro",
        specs: {
            screenSize: 6.3, screenType: '6.3" OLED LTPO', refreshRate: 120, brightness: 2000, ppi: 460,
            resolution: "2622×1206", resValue: 3162132,
            processor: "A18 Pro", processorScore: 98, antutu: 1850000, processNm: 3,
            ram: 8, ramType: "LPDDR5X", storage: "128GB-1TB", storageMax: 1024,
            mainCamera: "48+48+12 МП", cameraScore: 95, cameraMain: 48, opticalZoom: 5, videoMax: "4K 120fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 3582, charging: 25, chargingWireless: 25,
            weight: 199, height: 149.6, width: 71.5, thickness: 8.25,
            os: "iOS 18", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.3, nfc: true, usb: "USB-C 3.0", usbVersion: 3.0,
            faceId: true, fingerprint: false, stereo: true, jack35: false, sdCard: false,
            material: "Титан + керамика", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 119990, priceStr: "от 119 990 ₽"
        }
    },
    {
        id: "iphone16", name: "iPhone 16", brand: "Apple", emoji: "🍎",
        category: "flagship", year: 2024, series: "iphone",
        specs: {
            screenSize: 6.1, screenType: '6.1" OLED', refreshRate: 60, brightness: 2000, ppi: 460,
            resolution: "2556×1179", resValue: 3013524,
            processor: "A18", processorScore: 92, antutu: 1650000, processNm: 3,
            ram: 8, ramType: "LPDDR5X", storage: "128-512GB", storageMax: 512,
            mainCamera: "48+12 МП", cameraScore: 85, cameraMain: 48, opticalZoom: 2, videoMax: "4K 60fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 3561, charging: 25, chargingWireless: 15,
            weight: 170, height: 147.6, width: 71.6, thickness: 7.8,
            os: "iOS 18", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.3, nfc: true, usb: "USB-C 2.0", usbVersion: 2.0,
            faceId: true, fingerprint: false, stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + стекло", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 79990, priceStr: "от 79 990 ₽"
        }
    },
    {
        id: "iphone15promax", name: "iPhone 15 Pro Max", brand: "Apple", emoji: "🍎",
        category: "flagship", year: 2023, series: "iphone-pro-max",
        specs: {
            screenSize: 6.7, screenType: '6.7" OLED LTPO', refreshRate: 120, brightness: 2000, ppi: 460,
            resolution: "2796×1290", resValue: 3606840,
            processor: "A17 Pro", processorScore: 94, antutu: 1600000, processNm: 3,
            ram: 8, ramType: "LPDDR5", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "48+12+12 МП", cameraScore: 93, cameraMain: 48, opticalZoom: 5, videoMax: "4K 60fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 4441, charging: 27, chargingWireless: 15,
            weight: 221, height: 159.9, width: 76.7, thickness: 8.25,
            os: "iOS 17", waterproof: "IP68", waterScore: 68,
            wifi: 6, bluetooth: 5.3, nfc: true, usb: "USB-C 3.0", usbVersion: 3.0,
            faceId: true, fingerprint: false, stereo: true, jack35: false, sdCard: false,
            material: "Титан + стекло", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 114990, priceStr: "от 114 990 ₽"
        }
    },
    {
        id: "iphone14promax", name: "iPhone 14 Pro Max", brand: "Apple", emoji: "🍎",
        category: "flagship", year: 2022, series: "iphone-pro-max",
        specs: {
            screenSize: 6.7, screenType: '6.7" OLED LTPO', refreshRate: 120, brightness: 2000, ppi: 460,
            resolution: "2796×1290", resValue: 3606840,
            processor: "A16 Bionic", processorScore: 88, antutu: 1400000, processNm: 4,
            ram: 6, ramType: "LPDDR5", storage: "128GB-1TB", storageMax: 1024,
            mainCamera: "48+12+12 МП", cameraScore: 89, cameraMain: 48, opticalZoom: 3, videoMax: "4K 60fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 4323, charging: 27, chargingWireless: 15,
            weight: 240, height: 160.7, width: 77.6, thickness: 7.85,
            os: "iOS 16", waterproof: "IP68", waterScore: 68,
            wifi: 6, bluetooth: 5.3, nfc: true, usb: "Lightning", usbVersion: 2.0,
            faceId: true, fingerprint: false, stereo: true, jack35: false, sdCard: false,
            material: "Сталь + стекло", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 99990, priceStr: "от 99 990 ₽"
        }
    },
    {
        id: "iphone15", name: "iPhone 15", brand: "Apple", emoji: "🍎",
        category: "flagship", year: 2023, series: "iphone",
        specs: {
            screenSize: 6.1, screenType: '6.1" OLED', refreshRate: 60, brightness: 2000, ppi: 460,
            resolution: "2556×1179", resValue: 3013524,
            processor: "A16 Bionic", processorScore: 88, antutu: 1350000, processNm: 4,
            ram: 6, ramType: "LPDDR5", storage: "128-512GB", storageMax: 512,
            mainCamera: "48+12 МП", cameraScore: 82, cameraMain: 48, opticalZoom: 2, videoMax: "4K 60fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 3349, charging: 27, chargingWireless: 15,
            weight: 171, height: 147.6, width: 71.6, thickness: 7.8,
            os: "iOS 17", waterproof: "IP68", waterScore: 68,
            wifi: 6, bluetooth: 5.3, nfc: true, usb: "USB-C 2.0", usbVersion: 2.0,
            faceId: true, fingerprint: false, stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + стекло", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 69990, priceStr: "от 69 990 ₽"
        }
    },

    // ===== SAMSUNG =====
    {
        id: "s25ultra", name: "Galaxy S25 Ultra", brand: "Samsung", emoji: "💎",
        category: "flagship", year: 2025, series: "galaxy-s-ultra",
        specs: {
            screenSize: 6.9, screenType: '6.9" AMOLED LTPO', refreshRate: 120, brightness: 2600, ppi: 505,
            resolution: "3120×1440", resValue: 4492800,
            processor: "Snapdragon 8 Elite", processorScore: 99, antutu: 2400000, processNm: 3,
            ram: 12, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "200+50+10+50 МП", cameraScore: 97, cameraMain: 200, opticalZoom: 5, videoMax: "8K 30fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 5000, charging: 45, chargingWireless: 25,
            weight: 218, height: 162.8, width: 77.6, thickness: 8.2,
            os: "Android 15, One UI 7", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Титан + Gorilla Armor 2", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 129990, priceStr: "от 129 990 ₽"
        }
    },
    {
        id: "s24ultra", name: "Galaxy S24 Ultra", brand: "Samsung", emoji: "💎",
        category: "flagship", year: 2024, series: "galaxy-s-ultra",
        specs: {
            screenSize: 6.8, screenType: '6.8" AMOLED LTPO', refreshRate: 120, brightness: 2600, ppi: 505,
            resolution: "3120×1440", resValue: 4492800,
            processor: "Snapdragon 8 Gen 3", processorScore: 95, antutu: 2050000, processNm: 4,
            ram: 12, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "200+12+10+50 МП", cameraScore: 95, cameraMain: 200, opticalZoom: 5, videoMax: "8K 30fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 5000, charging: 45, chargingWireless: 15,
            weight: 232, height: 162.3, width: 79.0, thickness: 8.6,
            os: "Android 14, One UI 6.1", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.3, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Титан + Gorilla Armor", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 99990, priceStr: "от 99 990 ₽"
        }
    },
    {
        id: "s23ultra", name: "Galaxy S23 Ultra", brand: "Samsung", emoji: "💎",
        category: "flagship", year: 2023, series: "galaxy-s-ultra",
        specs: {
            screenSize: 6.8, screenType: '6.8" AMOLED LTPO', refreshRate: 120, brightness: 1750, ppi: 500,
            resolution: "3088×1440", resValue: 4446720,
            processor: "Snapdragon 8 Gen 2", processorScore: 89, antutu: 1550000, processNm: 4,
            ram: 12, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "200+12+10+10 МП", cameraScore: 92, cameraMain: 200, opticalZoom: 10, videoMax: "8K 30fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 5000, charging: 45, chargingWireless: 15,
            weight: 234, height: 163.4, width: 78.1, thickness: 8.9,
            os: "Android 13, One UI 5.1", waterproof: "IP68", waterScore: 68,
            wifi: 6, bluetooth: 5.3, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + Gorilla Glass Victus 2", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 84990, priceStr: "от 84 990 ₽"
        }
    },
    {
        id: "s25plus", name: "Galaxy S25+", brand: "Samsung", emoji: "💎",
        category: "flagship", year: 2025, series: "galaxy-s-plus",
        specs: {
            screenSize: 6.7, screenType: '6.7" AMOLED LTPO', refreshRate: 120, brightness: 2600, ppi: 513,
            resolution: "3120×1440", resValue: 4492800,
            processor: "Snapdragon 8 Elite", processorScore: 99, antutu: 2400000, processNm: 3,
            ram: 12, ramType: "LPDDR5X", storage: "256-512GB", storageMax: 512,
            mainCamera: "50+12+10 МП", cameraScore: 90, cameraMain: 50, opticalZoom: 3, videoMax: "8K 30fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 4900, charging: 45, chargingWireless: 25,
            weight: 190, height: 158.4, width: 75.7, thickness: 7.3,
            os: "Android 15, One UI 7", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + Gorilla Glass Victus 2", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 99990, priceStr: "от 99 990 ₽"
        }
    },
    {
        id: "s25", name: "Galaxy S25", brand: "Samsung", emoji: "💎",
        category: "flagship", year: 2025, series: "galaxy-s",
        specs: {
            screenSize: 6.2, screenType: '6.2" AMOLED LTPO', refreshRate: 120, brightness: 2600, ppi: 416,
            resolution: "2340×1080", resValue: 2527200,
            processor: "Snapdragon 8 Elite", processorScore: 99, antutu: 2400000, processNm: 3,
            ram: 12, ramType: "LPDDR5X", storage: "128-512GB", storageMax: 512,
            mainCamera: "50+12+10 МП", cameraScore: 88, cameraMain: 50, opticalZoom: 3, videoMax: "8K 30fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 4000, charging: 25, chargingWireless: 15,
            weight: 162, height: 146.9, width: 70.5, thickness: 7.2,
            os: "Android 15, One UI 7", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + Gorilla Glass Victus 2", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 74990, priceStr: "от 74 990 ₽"
        }
    },
    {
        id: "zfold6", name: "Galaxy Z Fold 6", brand: "Samsung", emoji: "📱",
        category: "foldable", year: 2024, series: "galaxy-fold",
        specs: {
            screenSize: 7.6, screenType: '7.6" + 6.3" AMOLED', refreshRate: 120, brightness: 2600, ppi: 374,
            resolution: "2160×1856", resValue: 4008960,
            processor: "Snapdragon 8 Gen 3", processorScore: 95, antutu: 2050000, processNm: 4,
            ram: 12, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "50+12+10 МП", cameraScore: 85, cameraMain: 50, opticalZoom: 3, videoMax: "8K 30fps",
            frontCamera: 10, frontCameraStr: "10+4 МП",
            battery: 4400, charging: 25, chargingWireless: 15,
            weight: 239, height: 153.5, width: 132.6, thickness: 12.1,
            os: "Android 14, One UI 6.1", waterproof: "IP48", waterScore: 48,
            wifi: 6, bluetooth: 5.3, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "Боковой", stereo: true, jack35: false, sdCard: false,
            material: "Armor Aluminum", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 179990, priceStr: "от 179 990 ₽"
        }
    },
    {
        id: "a55", name: "Galaxy A55", brand: "Samsung", emoji: "💎",
        category: "midrange", year: 2024, series: "galaxy-a",
        specs: {
            screenSize: 6.6, screenType: '6.6" Super AMOLED', refreshRate: 120, brightness: 1000, ppi: 390,
            resolution: "2340×1080", resValue: 2527200,
            processor: "Exynos 1480", processorScore: 65, antutu: 720000, processNm: 4,
            ram: 8, ramType: "LPDDR5", storage: "128-256GB", storageMax: 256,
            mainCamera: "50+12+5 МП", cameraScore: 72, cameraMain: 50, opticalZoom: 1, videoMax: "4K 30fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 5000, charging: 25, chargingWireless: 0,
            weight: 213, height: 161.1, width: 77.4, thickness: 8.2,
            os: "Android 14, One UI 6.1", waterproof: "IP67", waterScore: 67,
            wifi: 6, bluetooth: 5.3, nfc: true, usb: "USB-C 2.0", usbVersion: 2.0,
            faceId: true, fingerprint: "В экране (оптич.)", stereo: true, jack35: false, sdCard: true,
            material: "Алюминий + Gorilla Glass Victus+", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 34990, priceStr: "от 34 990 ₽"
        }
    },

    // ===== XIAOMI =====
    {
        id: "xiaomi15ultra", name: "Xiaomi 15 Ultra", brand: "Xiaomi", emoji: "🟠",
        category: "flagship", year: 2025, series: "xiaomi-ultra",
        specs: {
            screenSize: 6.73, screenType: '6.73" AMOLED LTPO', refreshRate: 120, brightness: 3200, ppi: 521,
            resolution: "3200×1440", resValue: 4608000,
            processor: "Snapdragon 8 Elite", processorScore: 99, antutu: 2500000, processNm: 3,
            ram: 16, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "50+50+200 МП", cameraScore: 98, cameraMain: 50, opticalZoom: 5, videoMax: "8K 30fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 6000, charging: 90, chargingWireless: 80,
            weight: 225, height: 161.3, width: 75.3, thickness: 8.7,
            os: "Android 15, HyperOS 2", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Керамика + Leica", simType: "Dual Nano-SIM", fiveG: true,
            price: 99990, priceStr: "от 99 990 ₽"
        }
    },
    {
        id: "xiaomi14ultra", name: "Xiaomi 14 Ultra", brand: "Xiaomi", emoji: "🟠",
        category: "flagship", year: 2024, series: "xiaomi-ultra",
        specs: {
            screenSize: 6.73, screenType: '6.73" AMOLED LTPO', refreshRate: 120, brightness: 3000, ppi: 521,
            resolution: "3200×1440", resValue: 4608000,
            processor: "Snapdragon 8 Gen 3", processorScore: 95, antutu: 2100000, processNm: 4,
            ram: 16, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "50+50+50+50 МП", cameraScore: 96, cameraMain: 50, opticalZoom: 5, videoMax: "8K 24fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 5300, charging: 90, chargingWireless: 80,
            weight: 219, height: 161.4, width: 75.3, thickness: 9.2,
            os: "Android 14, HyperOS", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Керамика + Leica", simType: "Dual Nano-SIM", fiveG: true,
            price: 89990, priceStr: "от 89 990 ₽"
        }
    },
    {
        id: "xiaomi15pro", name: "Xiaomi 15 Pro", brand: "Xiaomi", emoji: "🟠",
        category: "flagship", year: 2024, series: "xiaomi-pro",
        specs: {
            screenSize: 6.73, screenType: '6.73" AMOLED LTPO', refreshRate: 120, brightness: 3200, ppi: 521,
            resolution: "3200×1440", resValue: 4608000,
            processor: "Snapdragon 8 Elite", processorScore: 99, antutu: 2400000, processNm: 3,
            ram: 16, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "50+50+50 МП", cameraScore: 93, cameraMain: 50, opticalZoom: 3, videoMax: "8K 24fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 6100, charging: 90, chargingWireless: 50,
            weight: 213, height: 161.3, width: 75.0, thickness: 8.35,
            os: "Android 15, HyperOS 2", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + Gorilla Glass Victus 2", simType: "Dual Nano-SIM", fiveG: true,
            price: 69990, priceStr: "от 69 990 ₽"
        }
    },
    {
        id: "xiaomi15", name: "Xiaomi 15", brand: "Xiaomi", emoji: "🟠",
        category: "flagship", year: 2024, series: "xiaomi",
        specs: {
            screenSize: 6.36, screenType: '6.36" AMOLED LTPO', refreshRate: 120, brightness: 3100, ppi: 460,
            resolution: "2670×1200", resValue: 3204000,
            processor: "Snapdragon 8 Elite", processorScore: 99, antutu: 2400000, processNm: 3,
            ram: 12, ramType: "LPDDR5X", storage: "256-512GB", storageMax: 512,
            mainCamera: "50+50+50 МП", cameraScore: 90, cameraMain: 50, opticalZoom: 3, videoMax: "8K 24fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 5400, charging: 90, chargingWireless: 50,
            weight: 191, height: 152.3, width: 71.2, thickness: 8.08,
            os: "Android 15, HyperOS 2", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + Gorilla Glass Victus 2", simType: "Dual Nano-SIM", fiveG: true,
            price: 54990, priceStr: "от 54 990 ₽"
        }
    },
    {
        id: "xiaomi14", name: "Xiaomi 14", brand: "Xiaomi", emoji: "🟠",
        category: "flagship", year: 2024, series: "xiaomi",
        specs: {
            screenSize: 6.36, screenType: '6.36" AMOLED LTPO', refreshRate: 120, brightness: 3000, ppi: 460,
            resolution: "2670×1200", resValue: 3204000,
            processor: "Snapdragon 8 Gen 3", processorScore: 95, antutu: 2050000, processNm: 4,
            ram: 12, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "50+50+50 МП", cameraScore: 91, cameraMain: 50, opticalZoom: 3, videoMax: "8K 24fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 4610, charging: 90, chargingWireless: 50,
            weight: 193, height: 152.8, width: 71.5, thickness: 8.2,
            os: "Android 14, HyperOS", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + Gorilla Glass Victus", simType: "Dual Nano-SIM", fiveG: true,
            price: 54990, priceStr: "от 54 990 ₽"
        }
    },
    {
        id: "redminote14proplus", name: "Redmi Note 14 Pro+", brand: "Xiaomi", emoji: "🟠",
        category: "midrange", year: 2024, series: "redmi-note",
        specs: {
            screenSize: 6.67, screenType: '6.67" AMOLED', refreshRate: 120, brightness: 2100, ppi: 446,
            resolution: "2712×1220", resValue: 3308640,
            processor: "Snapdragon 7s Gen 3", processorScore: 72, antutu: 850000, processNm: 4,
            ram: 12, ramType: "LPDDR5", storage: "256-512GB", storageMax: 512,
            mainCamera: "200+8+2 МП", cameraScore: 78, cameraMain: 200, opticalZoom: 1, videoMax: "4K 30fps",
            frontCamera: 20, frontCameraStr: "20 МП",
            battery: 5110, charging: 120, chargingWireless: 0,
            weight: 205, height: 162.5, width: 74.3, thickness: 8.5,
            os: "Android 14, HyperOS", waterproof: "IP68", waterScore: 68,
            wifi: 6, bluetooth: 5.3, nfc: true, usb: "USB-C 2.0", usbVersion: 2.0,
            faceId: true, fingerprint: "В экране (оптич.)", stereo: true, jack35: false, sdCard: true,
            material: "Стекло + пластик", simType: "Dual Nano-SIM", fiveG: true,
            price: 34990, priceStr: "от 34 990 ₽"
        }
    },
    {
        id: "pocof6pro", name: "POCO F6 Pro", brand: "Xiaomi", emoji: "🟡",
        category: "flagship", year: 2024, series: "poco",
        specs: {
            screenSize: 6.67, screenType: '6.67" AMOLED', refreshRate: 120, brightness: 4000, ppi: 526,
            resolution: "3200×1440", resValue: 4608000,
            processor: "Snapdragon 8 Gen 2", processorScore: 90, antutu: 1650000, processNm: 4,
            ram: 16, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "50+8+2 МП", cameraScore: 82, cameraMain: 50, opticalZoom: 1, videoMax: "8K 24fps",
            frontCamera: 16, frontCameraStr: "16 МП",
            battery: 5000, charging: 120, chargingWireless: 0,
            weight: 209, height: 160.9, width: 74.9, thickness: 8.2,
            os: "Android 14, HyperOS", waterproof: "IP64", waterScore: 64,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 2.0", usbVersion: 2.0,
            faceId: true, fingerprint: "В экране (оптич.)", stereo: true, jack35: false, sdCard: false,
            material: "Стекло + алюминий", simType: "Dual Nano-SIM", fiveG: true,
            price: 44990, priceStr: "от 44 990 ₽"
        }
    },

    // ===== ONEPLUS =====
    {
        id: "oneplus13", name: "OnePlus 13", brand: "OnePlus", emoji: "🔴",
        category: "flagship", year: 2024, series: "oneplus",
        specs: {
            screenSize: 6.82, screenType: '6.82" AMOLED LTPO', refreshRate: 120, brightness: 4500, ppi: 510,
            resolution: "3168×1440", resValue: 4561920,
            processor: "Snapdragon 8 Elite", processorScore: 99, antutu: 2500000, processNm: 3,
            ram: 16, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "50+50+50 МП", cameraScore: 92, cameraMain: 50, opticalZoom: 3, videoMax: "8K 30fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 6000, charging: 100, chargingWireless: 50,
            weight: 213, height: 162.9, width: 76.5, thickness: 8.5,
            os: "Android 15, OxygenOS 15", waterproof: "IP69", waterScore: 69,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + стекло", simType: "Dual Nano-SIM", fiveG: true,
            price: 59990, priceStr: "от 59 990 ₽"
        }
    },
    {
        id: "oneplus12", name: "OnePlus 12", brand: "OnePlus", emoji: "🔴",
        category: "flagship", year: 2024, series: "oneplus",
        specs: {
            screenSize: 6.82, screenType: '6.82" AMOLED LTPO', refreshRate: 120, brightness: 4500, ppi: 510,
            resolution: "3168×1440", resValue: 4561920,
            processor: "Snapdragon 8 Gen 3", processorScore: 95, antutu: 2100000, processNm: 4,
            ram: 16, ramType: "LPDDR5X", storage: "256-512GB", storageMax: 512,
            mainCamera: "50+48+64 МП", cameraScore: 90, cameraMain: 50, opticalZoom: 3, videoMax: "8K 24fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 5400, charging: 100, chargingWireless: 50,
            weight: 220, height: 164.3, width: 75.8, thickness: 9.2,
            os: "Android 14, OxygenOS 14", waterproof: "IP65", waterScore: 65,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + стекло", simType: "Dual Nano-SIM", fiveG: true,
            price: 74990, priceStr: "от 74 990 ₽"
        }
    },
    {
        id: "oneplus13r", name: "OnePlus 13R", brand: "OnePlus", emoji: "🔴",
        category: "flagship", year: 2025, series: "oneplus-r",
        specs: {
            screenSize: 6.78, screenType: '6.78" AMOLED LTPO', refreshRate: 120, brightness: 4500, ppi: 450,
            resolution: "2780×1264", resValue: 3513920,
            processor: "Snapdragon 8 Gen 3", processorScore: 95, antutu: 2000000, processNm: 4,
            ram: 12, ramType: "LPDDR5X", storage: "256-512GB", storageMax: 512,
            mainCamera: "50+50+8 МП", cameraScore: 85, cameraMain: 50, opticalZoom: 2, videoMax: "4K 60fps",
            frontCamera: 16, frontCameraStr: "16 МП",
            battery: 6000, charging: 80, chargingWireless: 0,
            weight: 206, height: 161.7, width: 75.8, thickness: 8.0,
            os: "Android 15, OxygenOS 15", waterproof: "IP65", waterScore: 65,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 2.0", usbVersion: 2.0,
            faceId: true, fingerprint: "В экране (оптич.)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + стекло", simType: "Dual Nano-SIM", fiveG: true,
            price: 49990, priceStr: "от 49 990 ₽"
        }
    },

    // ===== GOOGLE =====
    {
        id: "pixel9proxl", name: "Pixel 9 Pro XL", brand: "Google", emoji: "🔵",
        category: "flagship", year: 2024, series: "pixel-pro",
        specs: {
            screenSize: 6.8, screenType: '6.8" LTPO OLED', refreshRate: 120, brightness: 3000, ppi: 486,
            resolution: "2992×1344", resValue: 4021248,
            processor: "Tensor G4", processorScore: 85, antutu: 1150000, processNm: 4,
            ram: 16, ramType: "LPDDR5X", storage: "128GB-1TB", storageMax: 1024,
            mainCamera: "50+48+48 МП", cameraScore: 95, cameraMain: 50, opticalZoom: 5, videoMax: "4K 60fps",
            frontCamera: 42, frontCameraStr: "42 МП",
            battery: 5060, charging: 37, chargingWireless: 23,
            weight: 221, height: 162.8, width: 76.6, thickness: 8.5,
            os: "Android 14", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.3, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (оптич.)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + Gorilla Glass Victus 2", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 109990, priceStr: "от 109 990 ₽"
        }
    },
    {
        id: "pixel9pro", name: "Pixel 9 Pro", brand: "Google", emoji: "🔵",
        category: "flagship", year: 2024, series: "pixel-pro",
        specs: {
            screenSize: 6.3, screenType: '6.3" LTPO OLED', refreshRate: 120, brightness: 3000, ppi: 495,
            resolution: "2856×1280", resValue: 3655680,
            processor: "Tensor G4", processorScore: 85, antutu: 1150000, processNm: 4,
            ram: 16, ramType: "LPDDR5X", storage: "128GB-1TB", storageMax: 1024,
            mainCamera: "50+48+48 МП", cameraScore: 94, cameraMain: 50, opticalZoom: 5, videoMax: "4K 60fps",
            frontCamera: 42, frontCameraStr: "42 МП",
            battery: 4700, charging: 27, chargingWireless: 21,
            weight: 199, height: 152.8, width: 72.0, thickness: 8.5,
            os: "Android 14", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.3, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (оптич.)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + Gorilla Glass Victus 2", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 89990, priceStr: "от 89 990 ₽"
        }
    },
    {
        id: "pixel9", name: "Pixel 9", brand: "Google", emoji: "🔵",
        category: "flagship", year: 2024, series: "pixel",
        specs: {
            screenSize: 6.3, screenType: '6.3" OLED', refreshRate: 120, brightness: 2700, ppi: 422,
            resolution: "2424×1080", resValue: 2617920,
            processor: "Tensor G4", processorScore: 85, antutu: 1150000, processNm: 4,
            ram: 12, ramType: "LPDDR5X", storage: "128-256GB", storageMax: 256,
            mainCamera: "50+48 МП", cameraScore: 88, cameraMain: 50, opticalZoom: 1, videoMax: "4K 60fps",
            frontCamera: 10.5, frontCameraStr: "10.5 МП",
            battery: 4700, charging: 27, chargingWireless: 15,
            weight: 198, height: 152.8, width: 72.0, thickness: 8.5,
            os: "Android 14", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.3, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (оптич.)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + Gorilla Glass Victus 2", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 69990, priceStr: "от 69 990 ₽"
        }
    },

    // ===== OTHERS =====
    {
        id: "nothing2a", name: "Nothing Phone (2a)", brand: "Nothing", emoji: "⚪",
        category: "midrange", year: 2024, series: "nothing",
        specs: {
            screenSize: 6.7, screenType: '6.7" AMOLED', refreshRate: 120, brightness: 1300, ppi: 394,
            resolution: "2412×1084", resValue: 2614608,
            processor: "Dimensity 7200 Pro", processorScore: 68, antutu: 680000, processNm: 4,
            ram: 12, ramType: "LPDDR5", storage: "128-256GB", storageMax: 256,
            mainCamera: "50+50 МП", cameraScore: 72, cameraMain: 50, opticalZoom: 1, videoMax: "4K 30fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 5000, charging: 45, chargingWireless: 0,
            weight: 190, height: 161.7, width: 76.3, thickness: 8.55,
            os: "Android 14, Nothing OS 2.5", waterproof: "IP54", waterScore: 54,
            wifi: 6, bluetooth: 5.3, nfc: true, usb: "USB-C 2.0", usbVersion: 2.0,
            faceId: true, fingerprint: "В экране (оптич.)", stereo: true, jack35: false, sdCard: false,
            material: "Пластик + Glyph Interface", simType: "Dual Nano-SIM", fiveG: true,
            price: 27990, priceStr: "от 27 990 ₽"
        }
    },
    {
        id: "nothing2", name: "Nothing Phone (2)", brand: "Nothing", emoji: "⚪",
        category: "flagship", year: 2023, series: "nothing",
        specs: {
            screenSize: 6.7, screenType: '6.7" LTPO OLED', refreshRate: 120, brightness: 1600, ppi: 394,
            resolution: "2412×1080", resValue: 2604960,
            processor: "Snapdragon 8+ Gen 1", processorScore: 82, antutu: 1150000, processNm: 4,
            ram: 12, ramType: "LPDDR5", storage: "128-512GB", storageMax: 512,
            mainCamera: "50+50 МП", cameraScore: 78, cameraMain: 50, opticalZoom: 1, videoMax: "4K 60fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 4700, charging: 45, chargingWireless: 15,
            weight: 201, height: 162.1, width: 76.4, thickness: 8.6,
            os: "Android 14, Nothing OS 2", waterproof: "IP54", waterScore: 54,
            wifi: 6, bluetooth: 5.3, nfc: true, usb: "USB-C 2.0", usbVersion: 2.0,
            faceId: true, fingerprint: "В экране (оптич.)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + Glyph Interface", simType: "Dual Nano-SIM", fiveG: true,
            price: 49990, priceStr: "от 49 990 ₽"
        }
    },
    {
        id: "honormagic7pro", name: "Honor Magic 7 Pro", brand: "Honor", emoji: "💙",
        category: "flagship", year: 2024, series: "honor-magic",
        specs: {
            screenSize: 6.8, screenType: '6.8" LTPO OLED', refreshRate: 120, brightness: 5000, ppi: 452,
            resolution: "2800×1280", resValue: 3584000,
            processor: "Snapdragon 8 Elite", processorScore: 99, antutu: 2450000, processNm: 3,
            ram: 16, ramType: "LPDDR5X", storage: "256GB-1TB", storageMax: 1024,
            mainCamera: "50+50+200 МП", cameraScore: 94, cameraMain: 50, opticalZoom: 3, videoMax: "4K 60fps",
            frontCamera: 50, frontCameraStr: "50 МП",
            battery: 5850, charging: 100, chargingWireless: 80,
            weight: 223, height: 162.7, width: 77.1, thickness: 8.8,
            os: "Android 15, MagicOS 9", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.1", usbVersion: 3.1,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Алюминий + стекло", simType: "Dual Nano-SIM", fiveG: true,
            price: 79990, priceStr: "от 79 990 ₽"
        }
    },
    {
        id: "honor200pro", name: "Honor 200 Pro", brand: "Honor", emoji: "💙",
        category: "flagship", year: 2024, series: "honor-200",
        specs: {
            screenSize: 6.78, screenType: '6.78" OLED', refreshRate: 120, brightness: 4000, ppi: 437,
            resolution: "2700×1224", resValue: 3304800,
            processor: "Snapdragon 8s Gen 3", processorScore: 88, antutu: 1500000, processNm: 4,
            ram: 12, ramType: "LPDDR5X", storage: "512GB", storageMax: 512,
            mainCamera: "50+50+12 МП", cameraScore: 86, cameraMain: 50, opticalZoom: 2.5, videoMax: "4K 60fps",
            frontCamera: 50, frontCameraStr: "50 МП",
            battery: 5200, charging: 100, chargingWireless: 66,
            weight: 199, height: 163.3, width: 75.2, thickness: 8.2,
            os: "Android 14, MagicOS 8", waterproof: "IP65", waterScore: 65,
            wifi: 6, bluetooth: 5.3, nfc: true, usb: "USB-C 2.0", usbVersion: 2.0,
            faceId: true, fingerprint: "В экране (оптич.)", stereo: true, jack35: false, sdCard: false,
            material: "Стекло + алюминий", simType: "Dual Nano-SIM", fiveG: true,
            price: 59990, priceStr: "от 59 990 ₽"
        }
    },
    {
        id: "realmegt7pro", name: "Realme GT 7 Pro", brand: "Realme", emoji: "🟢",
        category: "flagship", year: 2024, series: "realme-gt",
        specs: {
            screenSize: 6.78, screenType: '6.78" AMOLED LTPO', refreshRate: 120, brightness: 6500, ppi: 450,
            resolution: "2780×1264", resValue: 3513920,
            processor: "Snapdragon 8 Elite", processorScore: 99, antutu: 2500000, processNm: 3,
            ram: 16, ramType: "LPDDR5X", storage: "256-512GB", storageMax: 512,
            mainCamera: "50+50+8 МП", cameraScore: 85, cameraMain: 50, opticalZoom: 3, videoMax: "4K 60fps",
            frontCamera: 16, frontCameraStr: "16 МП",
            battery: 6500, charging: 120, chargingWireless: 50,
            weight: 222, height: 162.5, width: 76.9, thickness: 8.5,
            os: "Android 15, Realme UI 6", waterproof: "IP69", waterScore: 69,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Стекло + алюминий", simType: "Dual Nano-SIM", fiveG: true,
            price: 54990, priceStr: "от 54 990 ₽"
        }
    },
    {
        id: "vivox200pro", name: "Vivo X200 Pro", brand: "Vivo", emoji: "🔷",
        category: "flagship", year: 2024, series: "vivo-x",
        specs: {
            screenSize: 6.78, screenType: '6.78" LTPO AMOLED', refreshRate: 120, brightness: 4500, ppi: 452,
            resolution: "2800×1260", resValue: 3528000,
            processor: "Dimensity 9400", processorScore: 97, antutu: 2350000, processNm: 3,
            ram: 16, ramType: "LPDDR5X", storage: "256-512GB", storageMax: 512,
            mainCamera: "50+50+200 МП", cameraScore: 95, cameraMain: 50, opticalZoom: 3.7, videoMax: "8K 30fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 6000, charging: 90, chargingWireless: 30,
            weight: 228, height: 164.1, width: 75.9, thickness: 8.5,
            os: "Android 15, Funtouch OS 15", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: false, sdCard: false,
            material: "Стекло + Zeiss оптика", simType: "Dual Nano-SIM", fiveG: true,
            price: 79990, priceStr: "от 79 990 ₽"
        }
    },
    {
        id: "rogphone9pro", name: "ROG Phone 9 Pro", brand: "ASUS", emoji: "🎮",
        category: "gaming", year: 2024, series: "rog-phone",
        specs: {
            screenSize: 6.78, screenType: '6.78" AMOLED', refreshRate: 185, brightness: 2500, ppi: 388,
            resolution: "2400×1080", resValue: 2592000,
            processor: "Snapdragon 8 Elite", processorScore: 99, antutu: 2600000, processNm: 3,
            ram: 24, ramType: "LPDDR5X", storage: "512GB-1TB", storageMax: 1024,
            mainCamera: "50+13+5 МП", cameraScore: 78, cameraMain: 50, opticalZoom: 1, videoMax: "8K 24fps",
            frontCamera: 32, frontCameraStr: "32 МП",
            battery: 5800, charging: 65, chargingWireless: 15,
            weight: 227, height: 163.8, width: 77.0, thickness: 8.9,
            os: "Android 15, ROG UI", waterproof: "IP54", waterScore: 54,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: true, fingerprint: "В экране (УЗ)", stereo: true, jack35: true, sdCard: false,
            material: "Стекло + AeroActive Cooler", simType: "Dual Nano-SIM", fiveG: true,
            price: 99990, priceStr: "от 99 990 ₽"
        }
    },
    {
        id: "sonyxperia1vi", name: "Sony Xperia 1 VI", brand: "Sony", emoji: "🟣",
        category: "flagship", year: 2024, series: "xperia",
        specs: {
            screenSize: 6.5, screenType: '6.5" LTPO OLED', refreshRate: 120, brightness: 1500, ppi: 396,
            resolution: "2340×1080", resValue: 2527200,
            processor: "Snapdragon 8 Gen 3", processorScore: 95, antutu: 2050000, processNm: 4,
            ram: 12, ramType: "LPDDR5X", storage: "256-512GB", storageMax: 512,
            mainCamera: "48+12+12 МП", cameraScore: 90, cameraMain: 48, opticalZoom: 7.1, videoMax: "4K 120fps",
            frontCamera: 12, frontCameraStr: "12 МП",
            battery: 5000, charging: 30, chargingWireless: 15,
            weight: 192, height: 162.0, width: 74.0, thickness: 8.2,
            os: "Android 14", waterproof: "IP68", waterScore: 68,
            wifi: 7, bluetooth: 5.4, nfc: true, usb: "USB-C 3.2", usbVersion: 3.2,
            faceId: false, fingerprint: "Боковой", stereo: true, jack35: true, sdCard: true,
            material: "Gorilla Glass Victus 2", simType: "Nano-SIM + eSIM", fiveG: true,
            price: 119990, priceStr: "от 119 990 ₽"
        }
    }
];

// ===== SPEC CATEGORIES =====
const specCategories =[
    {
        id: "display", name: { ru: "Дисплей", en: "Display" }, icon: "📺",
        specs:[
            { key: "screenType", label: { ru: "Экран", en: "Screen" }, icon: "📱", compare: "screenSize", higher: true },
            { key: "resolution", label: { ru: "Разрешение", en: "Resolution" }, icon: "🔲", compare: "resValue", higher: true },
            { key: "ppi", label: { ru: "Плотность пикселей", en: "PPI" }, icon: "🔍", compare: "ppi", higher: true, suffix: " ppi" },
            { key: "refreshRate", label: { ru: "Частота обновления", en: "Refresh Rate" }, icon: "⚡", compare: "refreshRate", higher: true, suffix: " Гц" },
            { key: "brightness", label: { ru: "Яркость", en: "Brightness" }, icon: "☀️", compare: "brightness", higher: true, suffix: " нит" }
        ]
    },
    {
        id: "performance", name: { ru: "Производительность", en: "Performance" }, icon: "🚀",
        specs:[
            { key: "processor", label: { ru: "Процессор", en: "Processor" }, icon: "⚙️", compare: "processorScore", higher: true },
            { key: "antutu", label: { ru: "AnTuTu", en: "AnTuTu" }, icon: "📊", compare: "antutu", higher: true, format: "antutu" },
            { key: "processNm", label: { ru: "Техпроцесс", en: "Process" }, icon: "🔬", compare: "processNm", higher: false, suffix: " нм" },
            { key: "ram", label: { ru: "ОЗУ", en: "RAM" }, icon: "🧠", compare: "ram", higher: true, suffix: " ГБ" },
            { key: "ramType", label: { ru: "Тип ОЗУ", en: "RAM Type" }, icon: "💿" }
        ]
    },
    {
        id: "storage", name: { ru: "Память", en: "Storage" }, icon: "💾",
        specs:[
            { key: "storage", label: { ru: "Накопитель", en: "Storage" }, icon: "📦", compare: "storageMax", higher: true },
            { key: "sdCard", label: { ru: "Карта памяти", en: "SD Card" }, icon: "💳", format: "bool" }
        ]
    },
    {
        id: "camera", name: { ru: "Камера", en: "Camera" }, icon: "📷",
        specs:[
            { key: "mainCamera", label: { ru: "Основная камера", en: "Main Camera" }, icon: "📸", compare: "cameraScore", higher: true },
            { key: "opticalZoom", label: { ru: "Оптический зум", en: "Optical Zoom" }, icon: "🔭", compare: "opticalZoom", higher: true, suffix: "x" },
            { key: "videoMax", label: { ru: "Макс. видео", en: "Max Video" }, icon: "🎬" },
            { key: "frontCameraStr", label: { ru: "Фронтальная", en: "Front Camera" }, icon: "🤳", compare: "frontCamera", higher: true }
        ]
    },
    {
        id: "battery", name: { ru: "Батарея", en: "Battery" }, icon: "🔋",
        specs:[
            { key: "battery", label: { ru: "Ёмкость", en: "Capacity" }, icon: "🔋", compare: "battery", higher: true, suffix: " мАч" },
            { key: "charging", label: { ru: "Проводная зарядка", en: "Wired Charging" }, icon: "🔌", compare: "charging", higher: true, suffix: " Вт" },
            { key: "chargingWireless", label: { ru: "Беспроводная", en: "Wireless" }, icon: "📶", compare: "chargingWireless", higher: true, suffix: " Вт" }
        ]
    },
    {
        id: "design", name: { ru: "Дизайн", en: "Design" }, icon: "✨",
        specs:[
            { key: "weight", label: { ru: "Вес", en: "Weight" }, icon: "⚖️", compare: "weight", higher: false, suffix: " г" },
            { key: "height", label: { ru: "Высота", en: "Height" }, icon: "📏", compare: "height", higher: false, suffix: " мм" },
            { key: "thickness", label: { ru: "Толщина", en: "Thickness" }, icon: "📐", compare: "thickness", higher: false, suffix: " мм" },
            { key: "material", label: { ru: "Материалы", en: "Materials" }, icon: "🏗️" },
            { key: "waterproof", label: { ru: "Защита от воды", en: "Water Resistance" }, icon: "💧", compare: "waterScore", higher: true }
        ]
    },
    {
        id: "connectivity", name: { ru: "Связь", en: "Connectivity" }, icon: "📡",
        specs:[
            { key: "fiveG", label: { ru: "5G", en: "5G" }, icon: "🌐", format: "bool" },
            { key: "wifi", label: { ru: "Wi-Fi", en: "Wi-Fi" }, icon: "📶", compare: "wifi", higher: true, prefix: "Wi-Fi " },
            { key: "bluetooth", label: { ru: "Bluetooth", en: "Bluetooth" }, icon: "🔵", compare: "bluetooth", higher: true },
            { key: "nfc", label: { ru: "NFC", en: "NFC" }, icon: "💳", format: "bool" },
            { key: "usb", label: { ru: "USB", en: "USB" }, icon: "🔗", compare: "usbVersion", higher: true }
        ]
    },
    {
        id: "features", name: { ru: "Особенности", en: "Features" }, icon: "⭐",
        specs:[
            { key: "os", label: { ru: "ОС", en: "OS" }, icon: "📱" },
            { key: "fingerprint", label: { ru: "Отпечаток", en: "Fingerprint" }, icon: "👆" },
            { key: "faceId", label: { ru: "Face ID", en: "Face ID" }, icon: "😊", format: "bool" },
            { key: "stereo", label: { ru: "Стерео динамики", en: "Stereo" }, icon: "🔊", format: "bool" },
            { key: "jack35", label: { ru: "3.5 мм разъём", en: "3.5mm Jack" }, icon: "🎧", format: "bool" }
        ]
    },
    {
        id: "price", name: { ru: "Цена", en: "Price" }, icon: "💰",
        specs:[
            { key: "priceStr", label: { ru: "Цена", en: "Price" }, icon: "💵", compare: "price", higher: false }
        ]
    }
];

// ===== GENERATION SERIES =====
const generationSeries =[
    { id: "iphone-pro-max", name: "iPhone Pro Max", emoji: "🍎", phones:["iphone14promax", "iphone15promax", "iphone16promax"] },
    { id: "galaxy-s-ultra", name: "Galaxy S Ultra", emoji: "💎", phones:["s23ultra", "s24ultra", "s25ultra"] },
    { id: "xiaomi-ultra", name: "Xiaomi Ultra", emoji: "🟠", phones:["xiaomi14ultra", "xiaomi15ultra"] },
    { id: "oneplus", name: "OnePlus", emoji: "🔴", phones:["oneplus12", "oneplus13"] },
    { id: "pixel-pro", name: "Pixel Pro", emoji: "🔵", phones:["pixel9pro", "pixel9proxl"] }
];


// ===== QUICK PRESETS =====
const quickPresets =[
    { p1: "iphone16promax", p2: "s25ultra", tag: "🔥 ТОП" },
    { p1: "iphone16pro", p2: "pixel9pro", tag: "📷 Камеры" },
    { p1: "s25ultra", p2: "xiaomi15ultra", tag: "🏆 Флагманы" },
    { p1: "oneplus13", p2: "xiaomi15pro", tag: "⚡ Быстрые" },
    { p1: "oneplus13", p2: "realmegt7pro", tag: "💰 Цена/качество" },
    { p1: "iphone16", p2: "pixel9", tag: "📱 Компактные" },
    { p1: "rogphone9pro", p2: "pocof6pro", tag: "🎮 Игровые" },
    { p1: "nothing2a", p2: "a55", tag: "💵 Бюджет" }
];

// ===== TRADE-IN CONFIG =====
const tradeinCoeffs = { excellent: 0.55, good: 0.45, fair: 0.30 };
const depreciationByYear = { 2025: 0.95, 2024: 0.85, 2023: 0.65, 2022: 0.50, 2021: 0.35 };


// ===== TRANSLATIONS =====
const translations = {
    ru: {
        heroTitle: "📱 Полное сравнение смартфонов",
        heroDesc: "35+ характеристик, 30+ смартфонов, Trade-In калькулятор, тепловая карта, сравнение размеров и поколений",
        phones: "Смартфонов", specs: "Характеристик", brands: "Брендов",
        tabCompare: "Сравнение", tabTradein: "Trade-In", tabHeatmap: "Тепловая карта",
        tabSizes: "Размеры", tabGenerations: "Поколения",
        quickCompare: "Популярные сравнения", phone1: "Смартфон 1", phone2: "Смартфон 2",
        btnCompare: "Сравнить", btnRandom: "Случайное", btnClear: "Очистить",
        selectPhones: "Выберите смартфоны для сравнения",
        selectDesc: "Используйте выпадающие списки или популярные сравнения",
        history: "История сравнений", favorites: "Избранное", phoneDetails: "Детали смартфона",
        tradeinTitle: "Калькулятор Trade-In",
        tradeinDesc: "Узнайте сколько стоит ваш смартфон и сколько нужно доплатить за новый",
        yourPhone: "Ваш текущий смартфон", newPhone: "Желаемый смартфон",
        selectPhone: "Выберите смартфон", condition: "Состояние:",
        condExcellent: "Отличное", condGood: "Хорошее", condFair: "Среднее",
        tradeinCalc: "Расчёт Trade-In", yourPhoneValue: "Оценка вашего смартфона",
        newPhonePrice: "Стоимость нового", toPay: "Доплата",
        heatmapTitle: "Тепловая карта характеристик",
        heatmapDesc: "Визуальное сравнение всех смартфонов по ключевым параметрам",
        excellent: "Отлично", good: "Хорошо", average: "Средне", belowAvg: "Ниже среднего", weak: "Слабо",
        sizesTitle: "Визуальное сравнение размеров",
        sizesDesc: "Выберите до 4 смартфонов для сравнения их реальных размеров",
        selectPhones4: "Выберите смартфоны (до 4):", selectToCompare: "Выберите смартфоны для сравнения размеров",
        genTitle: "Сравнение поколений",
        genDesc: "Эволюция смартфонов: как изменились характеристики от поколения к поколению",
        selectSeries: "Выберите линейку смартфонов выше",
        footerText: "Полное сравнение смартфонов",
        allBrands: "Все бренды", all: "Все", flagships: "Флагманы", midrange: "Средний класс",
        foldable: "Складные", gaming: "Игровые",
        wins: "побеждает в", outOf: "из", categories: "категорий",
        winner: "Победитель", score: "Счёт", draw: "Ничья",
        copied: "Скопировано!", addedFav: "Добавлено в избранное", removedFav: "Удалено из избранного",
        selectBoth: "Выберите оба смартфона", selectDiff: "Выберите разные смартфоны",
        noFavorites: "Нет избранных смартфонов", maxPhones: "Максимум 4 смартфона",
        wallpaperSettings: "🖼️ Настройки обоев",
        wallpaperUrl: "Установить по ссылке (URL):",
        apply: "Применить",
        remove: "Сбросить",
        presets: "Готовые обои:",
        wallpaperApplied: "Обои установлены!",
        wallpaperRemoved: "Обои сброшены"
    },
    en: {
        heroTitle: "📱 Complete Smartphone Comparison",
        heroDesc: "35+ specs, 30+ smartphones, Trade-In calculator, heatmap, size and generation comparison",
        phones: "Smartphones", specs: "Specifications", brands: "Brands",
        tabCompare: "Compare", tabTradein: "Trade-In", tabHeatmap: "Heatmap",
        tabSizes: "Sizes", tabGenerations: "Generations",
        quickCompare: "Popular Comparisons", phone1: "Smartphone 1", phone2: "Smartphone 2",
        btnCompare: "Compare", btnRandom: "Random", btnClear: "Clear",
        selectPhones: "Select smartphones to compare",
        selectDesc: "Use dropdowns or popular comparisons",
        history: "Comparison History", favorites: "Favorites", phoneDetails: "Phone Details",
        tradeinTitle: "Trade-In Calculator",
        tradeinDesc: "Find out how much your smartphone is worth and how much you need to pay",
        yourPhone: "Your current smartphone", newPhone: "Desired smartphone",
        selectPhone: "Select smartphone", condition: "Condition:",
        condExcellent: "Excellent", condGood: "Good", condFair: "Fair",
        tradeinCalc: "Trade-In Calculation", yourPhoneValue: "Your phone value",
        newPhonePrice: "New phone price", toPay: "To pay",
        heatmapTitle: "Specifications Heatmap",
        heatmapDesc: "Visual comparison of all smartphones by key parameters",
        excellent: "Excellent", good: "Good", average: "Average", belowAvg: "Below average", weak: "Weak",
        sizesTitle: "Visual Size Comparison",
        sizesDesc: "Select up to 4 smartphones to compare their actual sizes",
        selectPhones4: "Select smartphones (up to 4):", selectToCompare: "Select smartphones to compare sizes",
        genTitle: "Generation Comparison",
        genDesc: "Smartphone evolution: how specs changed from generation to generation",
        selectSeries: "Select smartphone series above",
        footerText: "Complete smartphone comparison",
        allBrands: "All Brands", all: "All", flagships: "Flagships", midrange: "Midrange",
        foldable: "Foldable", gaming: "Gaming",
        wins: "wins in", outOf: "out of", categories: "categories",
        winner: "Winner", score: "Score", draw: "Draw",
        copied: "Copied!", addedFav: "Added to favorites", removedFav: "Removed from favorites",
        selectBoth: "Select both smartphones", selectDiff: "Select different smartphones",
        noFavorites: "No favorite smartphones", maxPhones: "Maximum 4 smartphones",
        wallpaperSettings: "🖼️ Wallpaper Settings",
        wallpaperUrl: "Set via Image URL:",
        apply: "Apply",
        remove: "Reset",
        presets: "Presets:",
        wallpaperApplied: "Wallpaper applied!",
        wallpaperRemoved: "Wallpaper reset"
    }
};

// Пресеты обоев
const wallpaperPresets =[
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1531297172864-ff73d6118b66?q=80&w=2000&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2000&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1558470598-a5dda9640f68?q=80&w=2000&auto=format&fit=crop'
];

