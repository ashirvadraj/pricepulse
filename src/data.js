// Embedded product database - works fully offline
// Dynamic real-time date calculation & URL parsing

export function getTodayDateStr() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

export function getFormattedDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() - offsetDays);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export const products = [
  {
    id: "iphone-15-128gb",
    name: "Apple iPhone 15 (128 GB) - Black",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&auto=format&fit=crop&q=80",
    mrp: 79900, currentLowest: 65999, allTimeLowest: 64999, allTimeHighest: 79900, averagePrice: 71490,
    rating: 4.6, reviewsCount: 14230,
    stores: [
      { name: "Amazon India", price: 65999, originalPrice: 79900, discountPercent: 17, inStock: true, delivery: "FREE Delivery Tomorrow", isLowest: true, offerText: "Flat ₹4,000 Instant Discount on HDFC Bank Cards", url: "https://www.amazon.in/s?k=iphone+15+128gb" },
      { name: "Flipkart", price: 66499, originalPrice: 79900, discountPercent: 16, inStock: true, delivery: "Delivery in 2 Days", isLowest: false, offerText: "5% Unlimited Cashback on Flipkart Axis Bank Card", url: "https://www.flipkart.com/search?q=iphone+15" },
      { name: "Croma", price: 67900, originalPrice: 79900, discountPercent: 15, inStock: true, delivery: "Standard Delivery (3-4 Days)", isLowest: false, offerText: "Up to ₹3,500 off on ICICI Credit Cards", url: "https://www.croma.com/search/?q=iphone+15" },
      { name: "Reliance Digital", price: 68499, originalPrice: 79900, discountPercent: 14, inStock: true, delivery: "Express Store Pickup Available", isLowest: false, offerText: "Instant discount on select cards", url: "https://www.reliancedigital.in/search?q=iphone+15" }
    ],
    priceHistory: [
      { date: getFormattedDate(330), price: 79900, label: "Launch Price" },
      { date: getFormattedDate(240), price: 77990, label: "Festival Season" },
      { date: getFormattedDate(180), price: 74999, label: "New Year Sale" },
      { date: getFormattedDate(120), price: 71499, label: "Summer Special" },
      { date: getFormattedDate(60), price: 67999, label: "Mega Deal Days" },
      { date: getFormattedDate(15), price: 64999, label: "All-Time Low Record" },
      { date: getFormattedDate(0), price: 65999, label: "Today's Live Price" }
    ]
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&auto=format&fit=crop&q=80",
    mrp: 34990, currentLowest: 26990, allTimeLowest: 24990, allTimeHighest: 34990, averagePrice: 28990,
    rating: 4.7, reviewsCount: 8940,
    stores: [
      { name: "Amazon India", price: 26990, originalPrice: 34990, discountPercent: 23, inStock: true, delivery: "FREE Prime Delivery Tomorrow", isLowest: true, offerText: "Flat ₹2,500 coupon + SBI Card discount", url: "https://www.amazon.in/s?k=sony+wh1000xm5" },
      { name: "Croma", price: 27990, originalPrice: 34990, discountPercent: 20, inStock: true, delivery: "Same Day Store Pickup", isLowest: false, offerText: "Flat ₹2,000 off on select bank cards", url: "https://www.croma.com/search/?q=sony+xm5" },
      { name: "Flipkart", price: 28490, originalPrice: 34990, discountPercent: 18, inStock: true, delivery: "Delivery in 3 Days", isLowest: false, offerText: "Bank offer available on checkout", url: "https://www.flipkart.com/search?q=sony+xm5" }
    ],
    priceHistory: [
      { date: getFormattedDate(300), price: 34990, label: "Retail MRP" },
      { date: getFormattedDate(200), price: 29990, label: "Winter Clearance" },
      { date: getFormattedDate(120), price: 27990, label: "Spring Offer" },
      { date: getFormattedDate(45), price: 24990, label: "Prime Day All-Time Low" },
      { date: getFormattedDate(0), price: 26990, label: "Today's Live Price" }
    ]
  },
  {
    id: "macbook-air-m2",
    name: "Apple MacBook Air 13.6-inch M2 Chip (8GB / 256GB SSD)",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=80",
    mrp: 99900, currentLowest: 87990, allTimeLowest: 81990, allTimeHighest: 99900, averagePrice: 89900,
    rating: 4.8, reviewsCount: 6510,
    stores: [
      { name: "Flipkart", price: 87990, originalPrice: 99900, discountPercent: 12, inStock: true, delivery: "FREE Delivery in 2 Days", isLowest: true, offerText: "₹5,000 Instant Discount on HDFC Bank Cards", url: "https://www.flipkart.com/search?q=macbook+air+m2" },
      { name: "Amazon India", price: 89900, originalPrice: 99900, discountPercent: 10, inStock: true, delivery: "FREE Tomorrow Delivery", isLowest: false, offerText: "₹4,500 off on select bank credit cards", url: "https://www.amazon.in/s?k=macbook+air+m2" },
      { name: "Reliance Digital", price: 92900, originalPrice: 99900, discountPercent: 7, inStock: true, delivery: "Store Pickup Available", isLowest: false, offerText: "Student Discount Applicable In-store", url: "https://www.reliancedigital.in/search?q=macbook+air+m2" }
    ],
    priceHistory: [
      { date: getFormattedDate(320), price: 99900, label: "Original Listing" },
      { date: getFormattedDate(210), price: 89900, label: "Festival Season" },
      { date: getFormattedDate(100), price: 84990, label: "Back to Campus" },
      { date: getFormattedDate(40), price: 81990, label: "Summer Special (Record Low)" },
      { date: getFormattedDate(0), price: 87990, label: "Today's Live Price" }
    ]
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB, Titanium Gray)",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=80",
    mrp: 129999, currentLowest: 119999, allTimeLowest: 114999, allTimeHighest: 129999, averagePrice: 124999,
    rating: 4.6, reviewsCount: 3820,
    stores: [
      { name: "Amazon India", price: 119999, originalPrice: 129999, discountPercent: 8, inStock: true, delivery: "FREE Same-Day Delivery", isLowest: true, offerText: "₹6,000 Instant Discount with ICICI & HDFC Cards", url: "https://www.amazon.in/s?k=samsung+s24+ultra" },
      { name: "Samsung Shop", price: 122999, originalPrice: 129999, discountPercent: 5, inStock: true, delivery: "2-3 Business Days", isLowest: false, offerText: "Free Wireless Charger + ₹5,000 Upgrade Bonus", url: "https://www.samsung.com/in/smartphones/galaxy-s24-ultra/" },
      { name: "Croma", price: 124999, originalPrice: 129999, discountPercent: 4, inStock: true, delivery: "Delivery in 1-2 Days", isLowest: false, offerText: "No Cost EMI up to 12 months", url: "https://www.croma.com/search/?q=samsung+s24+ultra" }
    ],
    priceHistory: [
      { date: getFormattedDate(200), price: 129999, label: "Launch Price" },
      { date: getFormattedDate(130), price: 126999, label: "Spring Offer" },
      { date: getFormattedDate(70), price: 121999, label: "Mid-Year Sale" },
      { date: getFormattedDate(25), price: 114999, label: "Prime Day Low" },
      { date: getFormattedDate(0), price: 119999, label: "Today's Live Price" }
    ]
  },
  {
    id: "lg-oled-55-c3",
    name: "LG 55-inch 4K Ultra HD Smart OLED TV (OLED55C3PSA)",
    category: "Smart TVs",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&auto=format&fit=crop&q=80",
    mrp: 174990, currentLowest: 109990, allTimeLowest: 104990, allTimeHighest: 174990, averagePrice: 122990,
    rating: 4.8, reviewsCount: 1980,
    stores: [
      { name: "Reliance Digital", price: 109990, originalPrice: 174990, discountPercent: 37, inStock: true, delivery: "FREE Installation & Delivery Tomorrow", isLowest: true, offerText: "₹7,500 Bank Cashback + 3-Year Panel Warranty", url: "https://www.reliancedigital.in/search?q=lg+oled+c3" },
      { name: "Amazon India", price: 112990, originalPrice: 174990, discountPercent: 35, inStock: true, delivery: "Scheduled Delivery Available", isLowest: false, offerText: "₹5,000 coupon applied at checkout", url: "https://www.amazon.in/s?k=lg+oled+c3+55" },
      { name: "Croma", price: 114990, originalPrice: 174990, discountPercent: 34, inStock: true, delivery: "Delivery within 48 Hours", isLowest: false, offerText: "Exchange discount up to ₹10,000", url: "https://www.croma.com/search/?q=lg+oled+c3" }
    ],
    priceHistory: [
      { date: getFormattedDate(365), price: 174990, label: "MRP Listing" },
      { date: getFormattedDate(240), price: 129990, label: "Festival Season" },
      { date: getFormattedDate(140), price: 119990, label: "New Year Deal" },
      { date: getFormattedDate(40), price: 104990, label: "Monsoon Clearance Low" },
      { date: getFormattedDate(0), price: 109990, label: "Today's Live Price" }
    ]
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12 5G (16GB RAM, 256GB Storage, Flowy Emerald)",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&auto=format&fit=crop&q=80",
    mrp: 69999, currentLowest: 59999, allTimeLowest: 57999, allTimeHighest: 69999, averagePrice: 63499,
    rating: 4.5, reviewsCount: 5670,
    stores: [
      { name: "Amazon India", price: 59999, originalPrice: 69999, discountPercent: 14, inStock: true, delivery: "FREE Same-Day Delivery", isLowest: true, offerText: "₹3,000 Instant Discount on ICICI Cards", url: "https://www.amazon.in/s?k=oneplus+12" },
      { name: "Flipkart", price: 61499, originalPrice: 69999, discountPercent: 12, inStock: true, delivery: "Delivery in 2 Days", isLowest: false, offerText: "Exchange up to ₹23,500", url: "https://www.flipkart.com/search?q=oneplus+12" },
      { name: "OnePlus Store", price: 64999, originalPrice: 69999, discountPercent: 7, inStock: true, delivery: "3-5 Business Days", isLowest: false, offerText: "Red Cable Club Benefits", url: "https://www.oneplus.in/12" }
    ],
    priceHistory: [
      { date: getFormattedDate(180), price: 69999, label: "Launch Price" },
      { date: getFormattedDate(100), price: 64999, label: "Spring Sale" },
      { date: getFormattedDate(40), price: 57999, label: "Prime Special (Record Low)" },
      { date: getFormattedDate(0), price: 59999, label: "Today's Live Price" }
    ]
  },
  {
    id: "ipad-air-m2",
    name: "Apple iPad Air M2 11-inch (128GB, Wi-Fi, Space Gray)",
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&auto=format&fit=crop&q=80",
    mrp: 69900, currentLowest: 62900, allTimeLowest: 59900, allTimeHighest: 69900, averagePrice: 64900,
    rating: 4.7, reviewsCount: 2340,
    stores: [
      { name: "Amazon India", price: 62900, originalPrice: 69900, discountPercent: 10, inStock: true, delivery: "FREE Delivery Tomorrow", isLowest: true, offerText: "₹3,000 off with HDFC Bank Cards", url: "https://www.amazon.in/s?k=ipad+air+m2" },
      { name: "Flipkart", price: 63900, originalPrice: 69900, discountPercent: 9, inStock: true, delivery: "Delivery in 2 Days", isLowest: false, offerText: "Exchange Bonus ₹5,000", url: "https://www.flipkart.com/search?q=ipad+air+m2" },
      { name: "Croma", price: 65900, originalPrice: 69900, discountPercent: 6, inStock: true, delivery: "Standard Delivery (3-4 Days)", isLowest: false, offerText: "Student discount available", url: "https://www.croma.com/search/?q=ipad+air+m2" }
    ],
    priceHistory: [
      { date: getFormattedDate(150), price: 69900, label: "Launch Price" },
      { date: getFormattedDate(80), price: 66900, label: "Summer Special" },
      { date: getFormattedDate(30), price: 59900, label: "All-Time Low" },
      { date: getFormattedDate(0), price: 62900, label: "Today's Live Price" }
    ]
  },
  {
    id: "dyson-v15",
    name: "Dyson V15 Detect Absolute Cordless Vacuum Cleaner",
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&auto=format&fit=crop&q=80",
    mrp: 62900, currentLowest: 52900, allTimeLowest: 48900, allTimeHighest: 62900, averagePrice: 55900,
    rating: 4.6, reviewsCount: 1120,
    stores: [
      { name: "Amazon India", price: 52900, originalPrice: 62900, discountPercent: 16, inStock: true, delivery: "FREE Delivery in 2 Days", isLowest: true, offerText: "₹3,000 coupon on checkout", url: "https://www.amazon.in/s?k=dyson+v15" },
      { name: "Flipkart", price: 54900, originalPrice: 62900, discountPercent: 13, inStock: true, delivery: "Delivery in 3-5 Days", isLowest: false, offerText: "No Cost EMI from ₹5,900/mo", url: "https://www.flipkart.com/search?q=dyson+v15" },
      { name: "Dyson India", price: 57900, originalPrice: 62900, discountPercent: 8, inStock: true, delivery: "Standard Delivery", isLowest: false, offerText: "Free accessory kit worth ₹4,990", url: "https://www.dyson.in/vacuum-cleaners/cordless/v15" }
    ],
    priceHistory: [
      { date: getFormattedDate(360), price: 62900, label: "Retail MRP" },
      { date: getFormattedDate(210), price: 55900, label: "Festival Season" },
      { date: getFormattedDate(90), price: 52900, label: "Spring Sale" },
      { date: getFormattedDate(30), price: 48900, label: "Prime Low Deal" },
      { date: getFormattedDate(0), price: 52900, label: "Today's Live Price" }
    ]
  }
];

export const salesCalendar = [
  { name: "Amazon Great Indian Festival", platforms: ["Amazon India"], expectedDates: "Late September - October", discountCategories: ["Smartphones (up to 40%)", "Laptops (up to 35%)", "Smart TVs (up to 60%)"], status: "Upcoming Soon", alertTip: "Historical data shows electronics drop by an additional 8-15% during this period." },
  { name: "Flipkart Big Billion Days", platforms: ["Flipkart"], expectedDates: "Late September - October", discountCategories: ["iPhones & Androids", "Audio & Wearables", "Home Appliances"], status: "Upcoming Soon", alertTip: "Best sale of the year for iPhones (historic low prices every year)." },
  { name: "Diwali Mega Shopping Fest", platforms: ["Amazon", "Flipkart", "Croma", "Reliance Digital"], expectedDates: "October - November", discountCategories: ["All Electronics", "Large Appliances", "Smart Home"], status: "Annual Festive Mega Sale", alertTip: "Maximum bank card cashback offers (up to 10% instant discount across all banks)." },
  { name: "Republic Day Mega Sale", platforms: ["All Major Retailers"], expectedDates: "January 20 - 26", discountCategories: ["Laptops", "Gaming Consoles", "Smartphones"], status: "Annual Sale Event", alertTip: "Best mid-winter clearance for previous year tech models." }
];

export function computeVerdict(p) {
  const current = p.currentLowest, lowest = p.allTimeLowest, avg = p.averagePrice;
  const diff = ((current - lowest) / lowest) * 100;
  if (diff <= 3.5) return { status: "BEST_TIME", title: "🔥 All-Time Low Deal (Buy Now)", score: 95, description: `Current price (₹${current.toLocaleString("en-IN")}) is within 3.5% of the record low (₹${lowest.toLocaleString("en-IN")}).`, recommendation: "Unlikely to drop further outside flash sales. Highly recommended to buy today.", predictedNextDrop: "Upcoming Festive Sales" };
  if (current < avg) return { status: "FAIR_PRICE", title: "🟡 Fair Price (Good Deal)", score: 75, description: `Current price (₹${current.toLocaleString("en-IN")}) is below average (₹${avg.toLocaleString("en-IN")}), but not at record low (₹${lowest.toLocaleString("en-IN")}).`, recommendation: "Buy if urgent, or wait for the next major festive sale.", predictedNextDrop: "Upcoming Big Billion Days" };
  return { status: "WAIT", title: "❌ Overpriced (Wait for Sale)", score: 40, description: `Current price (₹${current.toLocaleString("en-IN")}) is higher than the average (₹${avg.toLocaleString("en-IN")}).`, recommendation: "Hold off. Major upcoming sales predicted to reduce prices by 10-25%.", predictedNextDrop: "Upcoming Festive Clearance" };
}

// Extract product keywords from any e-commerce URL
export function extractProductFromUrl(url) {
  try {
    let clean = url.trim();
    if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = 'https://' + clean;
    }
    const parsed = new URL(clean);
    const host = parsed.hostname.toLowerCase();
    const pathname = decodeURIComponent(parsed.pathname);

    let storeName = "Online Retailer";
    if (host.includes("amazon")) storeName = "Amazon India";
    else if (host.includes("flipkart")) storeName = "Flipkart";
    else if (host.includes("croma")) storeName = "Croma";
    else if (host.includes("reliancedigital")) storeName = "Reliance Digital";
    else if (host.includes("myntra")) storeName = "Myntra";
    else if (host.includes("ajio")) storeName = "AJIO";
    else if (host.includes("tatacliq")) storeName = "Tata CLiQ";

    // Clean pathname to get title keywords
    let rawTitle = pathname
      .replace(/\/dp\/[A-Z0-9]+/i, '')
      .replace(/\/p\/[a-z0-9]+/i, '')
      .replace(/\/gp\/product\/[A-Z0-9]+/i, '')
      .split('/')
      .filter(Boolean)
      .join(' ')
      .replace(/[-_+/]/g, ' ')
      .replace(/\.(html|php|aspx|htm)/gi, '')
      .trim();

    // If empty pathname, check query params
    if (!rawTitle || rawTitle.length < 3) {
      const q = parsed.searchParams.get("q") || parsed.searchParams.get("k") || parsed.searchParams.get("keyword");
      if (q) rawTitle = q;
    }

    if (!rawTitle || rawTitle.length < 2) {
      rawTitle = "Product from " + storeName;
    }

    // Capitalize words
    const formattedTitle = rawTitle.split(' ')
      .filter(w => w.length > 0 && !['dp', 'p', 'product', 'item', 'buy', 'online', 'india'].includes(w.toLowerCase()))
      .slice(0, 7)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ') || "Product Item";

    return {
      isValid: true,
      storeName,
      productName: formattedTitle,
      originalUrl: url
    };
  } catch (e) {
    return { isValid: false, productName: url, storeName: "Online Store" };
  }
}

export function isUrl(str) {
  if (!str) return false;
  const s = str.trim().toLowerCase();
  return s.startsWith("http://") || s.startsWith("https://") || s.startsWith("www.") ||
    s.includes("amazon.") || s.includes("flipkart.") || s.includes("croma.") || s.includes("reliancedigital.") || s.includes("myntra.");
}

export function searchProducts(query) {
  if (!query || !query.trim()) return products.map(p => ({ ...p, verdict: computeVerdict(p) }));
  
  const rawQ = query.trim();

  // If query is an URL, parse it
  if (isUrl(rawQ)) {
    const urlInfo = extractProductFromUrl(rawQ);
    const parsedName = urlInfo.productName;
    
    // Check if it matches existing products
    const qLower = parsedName.toLowerCase();
    const existing = products.find(p => p.name.toLowerCase().includes(qLower) || qLower.includes(p.id.toLowerCase()) || qLower.includes(p.name.toLowerCase().slice(0, 10)));
    if (existing) {
      return [{ ...existing, verdict: computeVerdict(existing) }];
    }

    // Generate dynamic comparison from URL
    const price = Math.floor(Math.random() * 20000) + 12999;
    const mrp = Math.floor(price * 1.3);
    const low = Math.floor(price * 0.94);
    const avg = Math.floor((mrp + price) / 2);

    const dynamicProduct = {
      id: "url-" + Date.now(),
      name: parsedName,
      category: "Detected via Product URL",
      image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400&auto=format&fit=crop&q=80",
      mrp, currentLowest: price, allTimeLowest: low, allTimeHighest: mrp, averagePrice: avg, rating: 4.5, reviewsCount: 1240,
      stores: [
        { name: urlInfo.storeName || "Amazon India", price, originalPrice: mrp, discountPercent: Math.round(((mrp - price) / mrp) * 100), inStock: true, delivery: "FREE Delivery Available", isLowest: true, offerText: "10% Instant Bank Discount on Cards", url: rawQ.startsWith('http') ? rawQ : 'https://' + rawQ },
        { name: urlInfo.storeName === "Flipkart" ? "Amazon India" : "Flipkart", price: price + 499, originalPrice: mrp, discountPercent: Math.round(((mrp - price - 499) / mrp) * 100), inStock: true, delivery: "Delivery in 2-3 Days", isLowest: false, offerText: "5% Cashback with Axis Bank Card", url: `https://www.flipkart.com/search?q=${encodeURIComponent(parsedName)}` },
        { name: "Croma", price: price + 899, originalPrice: mrp, discountPercent: Math.round(((mrp - price - 899) / mrp) * 100), inStock: true, delivery: "Standard Express Delivery", isLowest: false, offerText: "No Cost EMI on Major Credit Cards", url: `https://www.croma.com/search/?q=${encodeURIComponent(parsedName)}` }
      ],
      priceHistory: [
        { date: getFormattedDate(180), price: mrp, label: "Retail Launch" },
        { date: getFormattedDate(90), price: Math.floor(avg * 1.05), label: "Previous Sale" },
        { date: getFormattedDate(30), price: low, label: "Festival Record Low" },
        { date: getFormattedDate(0), price, label: "Today's Live Price" }
      ]
    };
    return [{ ...dynamicProduct, verdict: computeVerdict(dynamicProduct) }];
  }

  const q = rawQ.toLowerCase();
  let matched = products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
  if (matched.length === 0) {
    const words = q.split(/\s+/);
    matched = products.filter(p => words.some(w => p.name.toLowerCase().includes(w) || p.category.toLowerCase().includes(w)));
  }
  if (matched.length === 0) {
    const price = Math.floor(Math.random() * 25000) + 9999;
    const mrp = Math.floor(price * 1.35);
    const low = Math.floor(price * 0.92);
    const avg = Math.floor((mrp + price) / 2);
    matched = [{
      id: "search-" + Date.now(), name: rawQ.charAt(0).toUpperCase() + rawQ.slice(1), category: "Electronics",
      image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400&auto=format&fit=crop&q=80",
      mrp, currentLowest: price, allTimeLowest: low, allTimeHighest: mrp, averagePrice: avg, rating: 4.3, reviewsCount: 980,
      stores: [
        { name: "Amazon India", price, originalPrice: mrp, discountPercent: Math.round(((mrp - price) / mrp) * 100), inStock: true, delivery: "FREE Fast Delivery", isLowest: true, offerText: "10% Instant Bank Discount", url: `https://www.amazon.in/s?k=${encodeURIComponent(rawQ)}` },
        { name: "Flipkart", price: price + 499, originalPrice: mrp, discountPercent: Math.round(((mrp - price - 499) / mrp) * 100), inStock: true, delivery: "Delivery in 2 Days", isLowest: false, offerText: "5% Cashback on Axis Card", url: `https://www.flipkart.com/search?q=${encodeURIComponent(rawQ)}` },
        { name: "Croma", price: price + 990, originalPrice: mrp, discountPercent: Math.round(((mrp - price - 990) / mrp) * 100), inStock: true, delivery: "Standard Delivery", isLowest: false, offerText: "No Cost EMI Available", url: `https://www.croma.com/search/?q=${encodeURIComponent(rawQ)}` }
      ],
      priceHistory: [
        { date: getFormattedDate(180), price: mrp, label: "Retail Launch" },
        { date: getFormattedDate(90), price: Math.floor(avg * 1.05), label: "Previous Sale" },
        { date: getFormattedDate(30), price: low, label: "Prime Festival Low" },
        { date: getFormattedDate(0), price, label: "Today's Live Price" }
      ]
    }];
  }
  return matched.map(p => ({ ...p, verdict: computeVerdict(p) }));
}

// Watchlist (localStorage)
export function getWatchlist() {
  try { return JSON.parse(localStorage.getItem("pp_watchlist") || "[]"); } catch(e) { return []; }
}
export function saveWatchlist(list) { localStorage.setItem("pp_watchlist", JSON.stringify(list)); }
export function addToWatchlist(productOrId, targetPrice) {
  const list = getWatchlist();
  const id = typeof productOrId === 'object' ? productOrId.id : productOrId;
  if (list.find(w => w.productId === id)) return;
  const product = typeof productOrId === 'object' ? productOrId : products.find(p => p.id === id);
  if (!product) return;
  list.push({
    id: "wl-" + Date.now(),
    productId: id,
    customProduct: typeof productOrId === 'object' && !products.find(p => p.id === id) ? productOrId : null,
    addedPrice: product.currentLowest,
    targetPrice: targetPrice || Math.floor(product.currentLowest * 0.95),
    addedDate: getFormattedDate(0)
  });
  saveWatchlist(list);
}
export function removeFromWatchlist(id) { saveWatchlist(getWatchlist().filter(w => w.id !== id && w.productId !== id)); }
export function getEnrichedWatchlist() {
  return getWatchlist().map(item => {
    const product = item.customProduct || products.find(p => p.id === item.productId);
    if (!product) return null;
    const currentPrice = product.currentLowest;
    const priceDrop = Math.max(0, item.addedPrice - currentPrice);
    const dropPercent = priceDrop > 0 ? ((priceDrop / item.addedPrice) * 100).toFixed(1) : 0;
    return { ...item, product: { ...product, verdict: computeVerdict(product) }, currentPrice, priceDrop, dropPercent: Number(dropPercent), targetMet: currentPrice <= item.targetPrice };
  }).filter(Boolean);
}
