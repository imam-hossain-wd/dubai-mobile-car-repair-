import { RiFacebookCircleFill, RiInstagramFill, RiMailLine, RiMapPinLine, RiPhoneLine, RiPinterestFill, RiTwitterXFill, RiYoutubeFill } from "@remixicon/react";

export const SiteConfig = {
    authorName: "Md Zahid",
    brandName: "Dubai Mobile Car Repair Mechanic",
    url: "https://www.dubaimobilecarrepair.com",
    email: "dubaicarrepair@gmail.com",
    description: "Dubai Mobile Car Repair Mechanic delivers 24/7 doorstep car repair across Dubai. Certified mechanics, transparent pricing, and a 5–15 minute response time wherever your car breaks down, we come to you.",
    displayNumber: "+971 50 941 1265",
    ogImage:"/ogImage.png",
    foundedYear:"2020",
    phoneNumber: "+971509411265",
    numberCallLink: "tel:+971509411265",
    whatsappCallLink: "https://wa.me/971509411265",
    location: "Al Jadaf",
    streetAddress: "Barajeel Residencey , Al Khail Rd",
    city: "Dubai",
    country: "UAE",
    founded: 2020,
    responseTime: "5-30 min",
    GMB: {
        PlaceID: "",
        CID: "",
        BusinessProfileID: "",
        mapsLink: "https://maps.app.goo.gl/dLsaugzb6CU8uTXe6",
        embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.9458923209845!2d55.33330470722492!3d25.221941412945103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d58ea319037%3A0x3d42d7e708650cd0!2sMandi%20Man!5e0!3m2!1sen!2sbd!4v1789829861878!5m2!1sen!2sbd",
        latitude: "25.2219414",
        longitude: "55.3333047",
    },
    serviceAreas: [
        {
            "name": "Dubailand",
            "slug": "dubailand"
        },
        {
            "name": "Arabian Ranches",
            "slug": "arabian-ranches"
        },
        {
            "name": "Dubai Silicon Oasis",
            "slug": "dubai-silicon-oasis"
        },
        {
            "name": "Dubai Motor City",
            "slug": "dubai-motor-city"
        },
        {
            "name": "Jumeirah Village Circle",
            "slug": "jumeirah-village-circle"
        },
        {
            "name": "Dubai Hills Estate",
            "slug": "dubai-hills-estate"
        },
        {
            "name": "Business Bay",
            "slug": "business-bay"
        },
        {
            "name": "Al Barsha",
            "slug": "al-barsha"
        },
        {
            "name": "Al Quoz",
            "slug": "al-quoz"
        },
        {
            "name": "Downtown Dubai",
            "slug": "downtown-dubai"
        }
    ],

    operatingHours: [
        { day: "Saturday", hours: "24 Hours" },
        { day: "Sunday", hours: "24 Hours" },
        { day: "Monday", hours: "24 Hours" },
        { day: "Tuesday", hours: "24 Hours" },
        { day: "Wednesday", hours: "24 Hours" },
        { day: "Thursday", hours: "24 Hours" },
        { day: "Friday", hours: "24 Hours" },
    ],

    navItems: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Areas We Serve", href: "/area-we-serve" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],

    footerhrefs: [
        { title: "About Us", href: "/about" },
        { title: "Contact", href: "/contact" },
        { title: "Services", href: "/services" },
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Sitemap", href: "/sitemap.xml" }
    ],

    socialLinks: [
        { name: "Facebook", icon: RiFacebookCircleFill, href: "https://www.facebook.com" },
        { name: "Instagram", icon: RiInstagramFill, href: "https://www.instagram.com" },
        { name: "Pinterest", icon: RiPinterestFill, href: "https://www.pinterest.com" },
        { name: "YouTube", icon: RiYoutubeFill, href: "https://www.youtube.com" },
        { name: "Twitter", icon: RiTwitterXFill, href: "https://x.com" },
    ],

    contactLinks: [
        { name: "Map", icon: RiMapPinLine, href: "" },
        { name: "Phone", icon: RiPhoneLine, href: "tel:+971509411265" },
        { name: "Email", icon: RiMailLine, href: "mailto:dubaicarrepair@gmail.com" }
    ]
};

export const {
    contactLinks,
    socialLinks,
    footerhrefs,
    navItems,
    serviceAreas,
    location,
    streetAddress,
    GMB,
    numberCallLink,
    whatsappCallLink,
    operatingHours,
    displayNumber,
    description,
    email,
    url,
    brandName,
    authorName,
    city,
    country
} = SiteConfig;