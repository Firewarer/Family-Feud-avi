// ───────────────────────────────────────────────────────
// 1) YOUR QUESTIONS: paste your 50 question‐objects BELOW
//    (make sure each object is comma-separated, no extra semicolons)

const QUESTIONS = [
  {
    prompt: "Example: Name something you bring to the beach",
    answers: [
      { text: "Towel",     points: 32 },
      { text: "Sunscreen", points: 28 },
      { text: "Umbrella",  points: 18 },
      { text: "Cooler",    points: 12 },
      { text: "Hat",       points: 10 }
    ]
  },
  {
    prompt: "Example: Name a popular pizza topping",
    answers: [
      { text: "Pepperoni",   points: 45 },
      { text: "Mushrooms",   points: 20 },
      { text: "Onions",      points: 15 },
      { text: "Sausage",     points: 12 },
      { text: "Extra cheese",points:  8 }
    ]
  },
  {
    prompt: "Name something you bring to the beach",
    answers: [
      { text: "Towel",     points: 32 },
      { text: "Sunscreen", points: 28 },
      { text: "Umbrella",  points: 18 },
      { text: "Cooler",    points: 12 },
      { text: "Hat",       points: 10 }
    ]
  },
  {
    prompt: "Name a popular pizza topping",
    answers: [
      { text: "Pepperoni",   points: 45 },
      { text: "Mushrooms",   points: 20 },
      { text: "Onions",      points: 15 },
      { text: "Sausage",     points: 12 },
      { text: "Extra cheese",points:  8 }
    ]
  },
  {
    prompt: "Name a street food famous in India.",
    answers: [
      { text: "Pani Puri",     points: 30 },
      { text: "Samosa", points: 20 },
      { text: "Pav Bhaji",  points: 15 },
      { text: "Vada pav",    points: 10 },
      { text: "Bhel Puri",       points: 8 }
    ]
  },
  {
    prompt: "Name a sport India loves.",
    answers: [
      { text: "Cricket",     points: 50 },
      { text: "Football", points: 20 },
      { text: "Kabaddi",  points: 15 },
      { text: "Badminton",    points: 10 },
      { text: "Hockey",    points: 8 },
      { text: "Wrestling",       points: 5 }
    ]
  },
  {
    prompt: "What is something you do first thing in the morning?",
    answers: [
      { text: "Brush teeth", points: 35 },
      { text: "Take a bath", points: 20 },
      { text: "Drink tea/coffee", points: 15 },
      { text: "Read newspaper", points: 10 },
      { text: "Pray", points: 8 },
      { text: "Check phone", points: 7 },
      { text: "Exercise", points: 5 }
    ]
  },
  {
    prompt: "Name a popular Indian festival.",
    answers: [
      { text: "Diwali", points: 40 },
      { text: "Holi", points: 25 },
      { text: "Navratri", points: 15 },
      { text: "Eid", points: 10 },
      { text: "Christmas", points: 5 },
      { text: "Pongal", points: 3 },
      { text: "Raksha Bandhan", points: 2 }
    ]
  },
  {
    prompt: "What is something you always find in an Indian kitchen?",
    answers: [
      { text: "Spices", points: 30 },
      { text: "Rice", points: 20 },
      { text: "Dal", points: 15 },
      { text: "Pressure cooker", points: 12 },
      { text: "Tea leaves", points: 10 },
      { text: "Ghee", points: 8 },
      { text: "Chakla-Belan", points: 5 }
    ]
  },
  {
    prompt: "Name a Bollywood actor everyone knows.",
    answers: [
      { text: "Shah Rukh Khan", points: 35 },
      { text: "Salman Khan", points: 25 },
      { text: "Amitabh Bachchan", points: 15 },
      { text: "Akshay Kumar", points: 10 },
      { text: "Ranbir Kapoor", points: 8 },
      { text: "Hrithik Roshan", points: 5 },
      { text: "Rajinikanth", points: 2 }
    ]
  },
  {
    prompt: "What do Indian parents expect their kids to become?",
    answers: [
      { text: "Doctor", points: 35 },
      { text: "Engineer", points: 25 },
      { text: "Government officer", points: 15 },
      { text: "Lawyer", points: 10 },
      { text: "MBA", points: 8 },
      { text: "Chartered Accountant", points: 5 },
      { text: "Teacher", points: 2 }
    ]
  },
  {
    prompt: "Name a street food famous in India.",
    answers: [
      { text: "Pani Puri", points: 30 },
      { text: "Samosa", points: 20 },
      { text: "Pav Bhaji", points: 15 },
      { text: "Vada Pav", points: 12 },
      { text: "Chole Bhature", points: 10 },
      { text: "Bhel Puri", points: 8 },
      { text: "Momos", points: 5 }
    ]
  },
  {
    prompt: "Name a sport India loves.",
    answers: [
      { text: "Cricket", points: 50 },
      { text: "Football", points: 20 },
      { text: "Kabaddi", points: 15 },
      { text: "Badminton", points: 10 },
      { text: "Hockey", points: 8 },
      { text: "Wrestling", points: 5 }
    ]
  },
  {
    prompt: "What do Indians give as gifts on festivals?",
    answers: [
      { text: "Sweets", points: 35 },
      { text: "Dry fruits", points: 25 },
      { text: "Money", points: 15 },
      { text: "Clothes", points: 10 },
      { text: "Jewelry", points: 8 },
      { text: "Silver items", points: 5 },
      { text: "Chocolates", points: 2 }
    ]
  },
  {
    prompt: "Name a thing that is always found in an Indian wedding.",
    answers: [
      { text: "Big fat crowd", points: 30 },
      { text: "Loud music/DJ", points: 25 },
      { text: "Food buffet", points: 15 },
      { text: "Bride’s lehenga", points: 12 },
      { text: "Baraat", points: 10 },
      { text: "Fireworks", points: 5 },
      { text: "Dance performances", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do at a railway station?",
    answers: [
      { text: "Buy tea/coffee", points: 30 },
      { text: "Look for seat", points: 25 },
      { text: "Buy snacks", points: 15 },
      { text: "Read newspaper", points: 12 },
      { text: "Talk to strangers", points: 10 },
      { text: "Complain about train delay", points: 5 },
      { text: "Take selfies", points: 3 }
    ]
  },
  {
    prompt: "What is something you do first thing in the morning?",
    answers: [
      { text: "Brush teeth", points: 35 },
      { text: "Take a bath", points: 20 },
      { text: "Drink tea/coffee", points: 15 },
      { text: "Read newspaper", points: 10 },
      { text: "Pray", points: 8 },
      { text: "Check phone", points: 7 },
      { text: "Exercise", points: 5 }
    ]
  },
  {
    prompt: "Name a popular Indian festival.",
    answers: [
      { text: "Diwali", points: 40 },
      { text: "Holi", points: 25 },
      { text: "Navratri", points: 15 },
      { text: "Eid", points: 10 },
      { text: "Christmas", points: 5 },
      { text: "Pongal", points: 3 },
      { text: "Raksha Bandhan", points: 2 }
    ]
  },
  {
    prompt: "What is something you always find in an Indian kitchen?",
    answers: [
      { text: "Spices", points: 30 },
      { text: "Rice", points: 20 },
      { text: "Dal", points: 15 },
      { text: "Pressure cooker", points: 12 },
      { text: "Tea leaves", points: 10 },
      { text: "Ghee", points: 8 },
      { text: "Chakla-Belan", points: 5 }
    ]
  },
  {
    prompt: "Name a Bollywood actor everyone knows.",
    answers: [
      { text: "Shah Rukh Khan", points: 35 },
      { text: "Salman Khan", points: 25 },
      { text: "Amitabh Bachchan", points: 15 },
      { text: "Akshay Kumar", points: 10 },
      { text: "Ranbir Kapoor", points: 8 },
      { text: "Hrithik Roshan", points: 5 },
      { text: "Rajinikanth", points: 2 }
    ]
  },
  {
    prompt: "What do Indian parents expect their kids to become?",
    answers: [
      { text: "Doctor", points: 35 },
      { text: "Engineer", points: 25 },
      { text: "Government officer", points: 15 },
      { text: "Lawyer", points: 10 },
      { text: "MBA", points: 8 },
      { text: "Chartered Accountant", points: 5 },
      { text: "Teacher", points: 2 }
    ]
  },
  {
    prompt: "Name a street food famous in India.",
    answers: [
      { text: "Pani Puri", points: 30 },
      { text: "Samosa", points: 20 },
      { text: "Pav Bhaji", points: 15 },
      { text: "Vada Pav", points: 12 },
      { text: "Chole Bhature", points: 10 },
      { text: "Bhel Puri", points: 8 },
      { text: "Momos", points: 5 }
    ]
  },
  {
    prompt: "Name a sport India loves.",
    answers: [
      { text: "Cricket", points: 50 },
      { text: "Football", points: 20 },
      { text: "Kabaddi", points: 15 },
      { text: "Badminton", points: 10 },
      { text: "Hockey", points: 8 },
      { text: "Wrestling", points: 5 }
    ]
  },
  {
    prompt: "What do Indians give as gifts on festivals?",
    answers: [
      { text: "Sweets", points: 35 },
      { text: "Dry fruits", points: 25 },
      { text: "Money", points: 15 },
      { text: "Clothes", points: 10 },
      { text: "Jewelry", points: 8 },
      { text: "Silver items", points: 5 },
      { text: "Chocolates", points: 2 }
    ]
  },
  {
    prompt: "Name a thing that is always found in an Indian wedding.",
    answers: [
      { text: "Big fat crowd", points: 30 },
      { text: "Loud music/DJ", points: 25 },
      { text: "Food buffet", points: 15 },
      { text: "Bride’s lehenga", points: 12 },
      { text: "Baraat", points: 10 },
      { text: "Fireworks", points: 5 },
      { text: "Dance performances", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do at a railway station?",
    answers: [
      { text: "Buy tea/coffee", points: 30 },
      { text: "Look for seat", points: 25 },
      { text: "Buy snacks", points: 15 },
      { text: "Read newspaper", points: 12 },
      { text: "Talk to strangers", points: 10 },
      { text: "Complain about train delay", points: 5 },
      { text: "Take selfies", points: 3 }
    ]
  },
  {
    prompt: "Name a famous Indian tourist destination.",
    answers: [
      { text: "Taj Mahal", points: 35 },
      { text: "Goa", points: 25 },
      { text: "Jaipur", points: 15 },
      { text: "Kerala", points: 12 },
      { text: "Manali", points: 10 },
      { text: "Rishikesh", points: 5 },
      { text: "Andaman & Nicobar", points: 3 }
    ]
  },
  {
    prompt: "What do people do when there is a power cut?",
    answers: [
      { text: "Complain", points: 35 },
      { text: "Use candle/emergency light", points: 25 },
      { text: "Go outside", points: 15 },
      { text: "Fan themselves", points: 10 },
      { text: "Check phone", points: 8 },
      { text: "Sleep early", points: 5 },
      { text: "Call the electricity board", points: 2 }
    ]
  },
  {
    prompt: "What do Indians do after dinner?",
    answers: [
      { text: "Eat sweets", points: 30 },
      { text: "Drink water", points: 25 },
      { text: "Talk with family", points: 15 },
      { text: "Watch TV", points: 10 },
      { text: "Take a walk", points: 8 },
      { text: "Check phone", points: 5 },
      { text: "Sleep", points: 2 }
    ]
  },
  {
    prompt: "What do Indian moms say the most?",
    answers: [
      { text: "Khaana kha liya?", points: 35 },
      { text: "Padhai ki?", points: 25 },
      { text: "Light band kar do", points: 15 },
      { text: "Main sab jaanati hoon", points: 10 },
      { text: "Pani pi lo", points: 8 },
      { text: "Phone chhodo", points: 5 },
      { text: "Main bol rahi hoon na!", points: 2 }
    ]
  },
  {
    prompt: "What is something people do at Indian weddings?",
    answers: [
      { text: "Eat food", points: 35 },
      { text: "Dance", points: 25 },
      { text: "Click selfies", points: 15 },
      { text: "Gossip", points: 12 },
      { text: "Compliment the bride", points: 10 },
      { text: "Compare weddings", points: 5 },
      { text: "Flirt", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians touch for good luck?",
    answers: [
      { text: "Feet of elders", points: 40 },
      { text: "Gods' idols", points: 30 },
      { text: "Religious books", points: 15 },
      { text: "Gold", points: 10 },
      { text: "New car", points: 5 },
      { text: "Sacred thread", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do while watching cricket?",
    answers: [
      { text: "Scream and cheer", points: 35 },
      { text: "Eat snacks", points: 25 },
      { text: "Pray", points: 15 },
      { text: "Abuse the umpire", points: 10 },
      { text: "Check stats on phone", points: 8 },
      { text: "Call friends", points: 5 },
      { text: "Discuss match strategies", points: 2 }
    ]
  },
  {
    prompt: "Name a common way Indians save money.",
    answers: [
      { text: "Fixed deposits", points: 30 },
      { text: "Buying gold", points: 25 },
      { text: "Piggy bank", points: 15 },
      { text: "Recurring deposits", points: 12 },
      { text: "Property investment", points: 10 },
      { text: "Hiding cash at home", points: 5 },
      { text: "Borrowing from friends", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do before starting a new business?",
    answers: [
      { text: "Perform pooja", points: 40 },
      { text: "Take elders’ blessings", points: 25 },
      { text: "Check horoscope", points: 15 },
      { text: "Consult a pandit", points: 10 },
      { text: "Buy new clothes", points: 5 },
      { text: "Make an offering", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians take as prasad?",
    answers: [
      { text: "Laddoo", points: 35 },
      { text: "Coconut", points: 25 },
      { text: "Jalebi", points: 15 },
      { text: "Fruits", points: 10 },
      { text: "Tulsi leaves", points: 8 },
      { text: "Khichdi", points: 5 },
      { text: "Panchamrit", points: 2 }
    ]
  },
  {
    prompt: "What do Indians do when visiting someone’s home?",
    answers: [
      { text: "Remove shoes", points: 35 },
      { text: "Touch elders’ feet", points: 25 },
      { text: "Bring sweets", points: 15 },
      { text: "Drink chai", points: 12 },
      { text: "Compliment house decor", points: 10 },
      { text: "Gossip", points: 5 },
      { text: "Ask for WiFi password", points: 3 }
    ]
  },
  {
    prompt: "What do Indians love to eat with tea?",
    answers: [
      { text: "Biscuits", points: 35 },
      { text: "Pakoras", points: 25 },
      { text: "Samosa", points: 15 },
      { text: "Rusk", points: 12 },
      { text: "Mathri", points: 10 },
      { text: "Namkeen", points: 5 },
      { text: "Cake", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do on trains?",
    answers: [
      { text: "Eat homemade food", points: 30 },
      { text: "Make friends with co-passengers", points: 25 },
      { text: "Look outside the window", points: 15 },
      { text: "Read newspaper", points: 12 },
      { text: "Sleep", points: 10 },
      { text: "Play cards", points: 5 },
      { text: "Charge phone", points: 3 }
    ]
  },
  {
    prompt: "Name a place where Indians remove their shoes.",
    answers: [
      { text: "Temple", points: 40 },
      { text: "Home", points: 25 },
      { text: "Gurudwara", points: 15 },
      { text: "Someone else’s home", points: 10 },
      { text: "Mosque", points: 8 },
      { text: "Yoga class", points: 5 },
      { text: "Schools", points: 2 }
    ]
  },
  {
    prompt: "What is something people do in a traffic jam?",
    answers: [
      { text: "Honk unnecessarily", points: 35 },
      { text: "Complain", points: 25 },
      { text: "Check phone", points: 15 },
      { text: "Listen to music", points: 12 },
      { text: "Abuse other drivers", points: 10 },
      { text: "Look at surroundings", points: 5 },
      { text: "Call someone", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians buy during Diwali?",
    answers: [
      { text: "Sweets", points: 35 },
      { text: "Clothes", points: 25 },
      { text: "Firecrackers", points: 15 },
      { text: "Gold", points: 10 },
      { text: "Diyas", points: 8 },
      { text: "Electronics", points: 5 },
      { text: "Silver coins", points: 2 }
    ]
  },
  {
    prompt: "What is something Indian kids do when guests come over?",
    answers: [
      { text: "Touch elders’ feet", points: 30 },
      { text: "Serve water", points: 25 },
      { text: "Hide in their room", points: 15 },
      { text: "Bring chairs", points: 12 },
      { text: "Show their report card", points: 10 },
      { text: "Play mobile games", points: 5 },
      { text: "Get extra pocket money", points: 3 }
    ]
  },
  {
    prompt: "What do Indians always carry in their wallets?",
    answers: [
      { text: "Cash", points: 35 },
      { text: "Aadhaar card", points: 25 },
      { text: "Credit/debit cards", points: 15 },
      { text: "Photos of family", points: 10 },
      { text: "Temple prasad", points: 8 },
      { text: "Business cards", points: 5 },
      { text: "Shopping bills", points: 2 }
    ]
  },
  {
    prompt: "What is a common excuse for being late in India?",
    answers: [
      { text: "Traffic jam", points: 40 },
      { text: "Car/bike breakdown", points: 25 },
      { text: "Alarm didn’t ring", points: 15 },
      { text: "No auto/rickshaw available", points: 10 },
      { text: "Weather was bad", points: 5 },
      { text: "Family emergency", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do on weekends?",
    answers: [
      { text: "Watch movies", points: 30 },
      { text: "Sleep", points: 25 },
      { text: "Go out with friends", points: 15 },
      { text: "Visit relatives", points: 12 },
      { text: "Eat out", points: 10 },
      { text: "Go shopping", points: 5 },
      { text: "Clean the house", points: 3 }
    ]
  },
  {
    prompt: "What do Indian parents do when they see kids on the phone?",
    answers: [
      { text: "Ask 'Kisse baat kar rahe ho?'", points: 35 },
      { text: "Say 'Kitni der se phone pe ho?'", points: 25 },
      { text: "Snatch the phone", points: 15 },
      { text: "Check WhatsApp messages", points: 12 },
      { text: "Reduce WiFi speed", points: 10 },
      { text: "Complain about eyesight", points: 5 },
      { text: "Compare with their childhood", points: 3 }
    ]
  },
  {
    prompt: "What is something found in every Indian grandmother’s home?",
    answers: [
      { text: "Homemade pickles", points: 35 },
      { text: "Knitting needles", points: 25 },
      { text: "Ayurvedic medicines", points: 15 },
      { text: "Old photographs", points: 12 },
      { text: "Swing/charpai", points: 10 },
      { text: "Religious books", points: 5 },
      { text: "An old radio", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do during a power cut?",
    answers: [
      { text: "Light candles", points: 35 },
      { text: "Complain about electricity board", points: 25 },
      { text: "Go to the terrace", points: 15 },
      { text: "Use mobile torch", points: 12 },
      { text: "Chat with family", points: 10 },
      { text: "Sleep early", points: 5 },
      { text: "Sing songs", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians always buy in bulk?",
    answers: [
      { text: "Rice", points: 35 },
      { text: "Wheat flour", points: 25 },
      { text: "Sugar", points: 15 },
      { text: "Spices", points: 12 },
      { text: "Oil", points: 10 },
      { text: "Soap", points: 5 },
      { text: "Tea leaves", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians never leave home without?",
    answers: [
      { text: "Mobile phone", points: 40 },
      { text: "Wallet", points: 25 },
      { text: "House keys", points: 15 },
      { text: "Handkerchief", points: 10 },
      { text: "ID card", points: 5 },
      { text: "Watch", points: 3 }
    ]
  },
  {
    prompt: "What do Indians always ask auto drivers?",
    answers: [
      { text: "'Meter se chalaoge?'", points: 35 },
      { text: "'Station chaloge?'", points: 25 },
      { text: "'Thoda kam kar lo'", points: 15 },
      { text: "'Traffic milega kya?'", points: 12 },
      { text: "'Kitna time lagega?'", points: 10 },
      { text: "'Bhaiya jaldi chalo'", points: 5 },
      { text: "'Change hai kya?'", points: 3 }
    ]
  },
  {
    prompt: "What do Indian students do before exams?",
    answers: [
      { text: "Pray", points: 35 },
      { text: "Pull an all-nighter", points: 25 },
      { text: "Drink tea/coffee", points: 15 },
      { text: "Revise notes", points: 12 },
      { text: "Ask friends for help", points: 10 },
      { text: "Panic", points: 5 },
      { text: "Make cheat sheets", points: 3 }
    ]
  },
  {
    prompt: "What is something people do at an Indian temple?",
    answers: [
      { text: "Offer prayers", points: 40 },
      { text: "Ring the bell", points: 25 },
      { text: "Take prasad", points: 15 },
      { text: "Touch feet of idols", points: 10 },
      { text: "Donate money", points: 8 },
      { text: "Walk barefoot", points: 5 },
      { text: "Apply tilak", points: 2 }
    ]
  },
  {
    prompt: "What do Indians eat for breakfast?",
    answers: [
      { text: "Paratha", points: 35 },
      { text: "Idli/Dosa", points: 25 },
      { text: "Poha", points: 15 },
      { text: "Upma", points: 12 },
      { text: "Bread and butter", points: 10 },
      { text: "Chai and biscuits", points: 5 },
      { text: "Eggs", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do on New Year's Eve?",
    answers: [
      { text: "Party with friends", points: 35 },
      { text: "Go to a temple", points: 25 },
      { text: "Watch TV countdown", points: 15 },
      { text: "Eat sweets", points: 10 },
      { text: "Make resolutions", points: 8 },
      { text: "Sleep early", points: 5 },
      { text: "Firecrackers", points: 2 }
    ]
  },
  {
    prompt: "What is something found in every Indian home?",
    answers: [
      { text: "Pressure cooker", points: 35 },
      { text: "Masala box", points: 25 },
      { text: "Agarbatti", points: 15 },
      { text: "Plastic containers", points: 12 },
      { text: "Ceiling fans", points: 10 },
      { text: "Extra mattresses", points: 5 },
      { text: "Old newspapers", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do during monsoon season?",
    answers: [
      { text: "Eat pakoras", points: 35 },
      { text: "Drink chai", points: 25 },
      { text: "Play in the rain", points: 15 },
      { text: "Use umbrellas", points: 12 },
      { text: "Complain about potholes", points: 10 },
      { text: "Get stuck in traffic", points: 5 },
      { text: "Dry clothes indoors", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do before leaving the house?",
    answers: [
      { text: "Touch elders’ feet", points: 35 },
      { text: "Look in the mirror", points: 25 },
      { text: "Check phone", points: 15 },
      { text: "Lock the door", points: 12 },
      { text: "Take their wallet", points: 10 },
      { text: "Wear footwear", points: 5 },
      { text: "Apply perfume", points: 3 }
    ]
  },
  {
    prompt: "What do Indians take for a train journey?",
    answers: [
      { text: "Home-cooked food", points: 35 },
      { text: "Extra luggage", points: 25 },
      { text: "Water bottle", points: 15 },
      { text: "Playing cards", points: 12 },
      { text: "A pillow", points: 10 },
      { text: "Newspaper", points: 5 },
      { text: "Charger", points: 3 }
    ]
  },
  {
    prompt: "What is something Indian parents compare their kids to?",
    answers: [
      { text: "Sharma Ji’s son/daughter", points: 40 },
      { text: "Their own childhood", points: 25 },
      { text: "Toppers in school", points: 15 },
      { text: "Relatives' kids", points: 10 },
      { text: "Bollywood actors", points: 8 },
      { text: "Engineers and doctors", points: 5 },
      { text: "Successful businesspeople", points: 2 }
    ]
  },
  {
    prompt: "What do Indians do at railway stations?",
    answers: [
      { text: "Look for the train", points: 35 },
      { text: "Buy tea", points: 25 },
      { text: "Check PNR status", points: 15 },
      { text: "Stand in long queues", points: 12 },
      { text: "Read newspaper", points: 10 },
      { text: "Talk to strangers", points: 5 },
      { text: "Eat snacks", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do when they get a government job?",
    answers: [
      { text: "Throw a party", points: 35 },
      { text: "Tell relatives", points: 25 },
      { text: "Buy sweets", points: 15 },
      { text: "Take elders' blessings", points: 12 },
      { text: "Post on social media", points: 10 },
      { text: "Plan marriage", points: 5 },
      { text: "Celebrate in a temple", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do when they find a rupee coin on the road?",
    answers: [
      { text: "Pick it up", points: 35 },
      { text: "Touch it to forehead", points: 25 },
      { text: "Consider it lucky", points: 15 },
      { text: "Give it to a beggar", points: 12 },
      { text: "Ignore it", points: 10 },
      { text: "Flip it for luck", points: 5 },
      { text: "Show it to friends", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do on New Year's Eve?",
    answers: [
      { text: "Party with friends", points: 35 },
      { text: "Go to a temple", points: 25 },
      { text: "Watch TV countdown", points: 15 },
      { text: "Eat sweets", points: 10 },
      { text: "Make resolutions", points: 8 },
      { text: "Sleep early", points: 5 },
      { text: "Firecrackers", points: 2 }
    ]
  },
  {
    prompt: "Name a place where Indians remove their shoes.",
    answers: [
      { text: "Temple", points: 40 },
      { text: "Home", points: 25 },
      { text: "Gurudwara", points: 15 },
      { text: "Someone else’s home", points: 10 },
      { text: "Mosque", points: 8 },
      { text: "Yoga class", points: 5 },
      { text: "Schools", points: 2 }
    ]
  },
  {
    prompt: "What do Indians eat for breakfast?",
    answers: [
      { text: "Paratha", points: 35 },
      { text: "Idli/Dosa", points: 25 },
      { text: "Poha", points: 15 },
      { text: "Upma", points: 12 },
      { text: "Bread and butter", points: 10 },
      { text: "Chai and biscuits", points: 5 },
      { text: "Eggs", points: 3 }
    ]
  },
  {
    prompt: "What do Indians always buy during festivals?",
    answers: [
      { text: "Sweets", points: 35 },
      { text: "Clothes", points: 25 },
      { text: "Firecrackers", points: 15 },
      { text: "Gold", points: 10 },
      { text: "Diyas", points: 8 },
      { text: "Electronics", points: 5 },
      { text: "Silver coins", points: 2 }
    ]
  },
  {
    prompt: "What is something Indians do before starting a new business?",
    answers: [
      { text: "Perform pooja", points: 40 },
      { text: "Take elders’ blessings", points: 25 },
      { text: "Check horoscope", points: 15 },
      { text: "Consult a pandit", points: 10 },
      { text: "Buy new clothes", points: 5 },
      { text: "Make an offering", points: 3 }
    ]
  },
  {
    prompt: "What is something found in every Indian grandmother’s home?",
    answers: [
      { text: "Homemade pickles", points: 35 },
      { text: "Knitting needles", points: 25 },
      { text: "Ayurvedic medicines", points: 15 },
      { text: "Old photographs", points: 12 },
      { text: "Swing/charpai", points: 10 },
      { text: "Religious books", points: 5 },
      { text: "An old radio", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians love to eat with tea?",
    answers: [
      { text: "Biscuits", points: 35 },
      { text: "Pakoras", points: 25 },
      { text: "Samosa", points: 15 },
      { text: "Rusk", points: 12 },
      { text: "Mathri", points: 10 },
      { text: "Namkeen", points: 5 },
      { text: "Cake", points: 3 }
    ]
  },
  {
    prompt: "What is something people do in a traffic jam?",
    answers: [
      { text: "Honk unnecessarily", points: 35 },
      { text: "Complain", points: 25 },
      { text: "Check phone", points: 15 },
      { text: "Listen to music", points: 12 },
      { text: "Abuse other drivers", points: 10 },
      { text: "Look at surroundings", points: 5 },
      { text: "Call someone", points: 3 }
    ]
  },
  {
    prompt: "What do Indians eat for festivals?",
    answers: [
      { text: "Laddoos", points: 40 },
      { text: "Dry fruits", points: 25 },
      { text: "Halwa", points: 15 },
      { text: "Jalebi", points: 10 },
      { text: "Tulsi leaves", points: 8 },
      { text: "Khichdi", points: 5 },
      { text: "Panchamrit", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do at the airport?",
    answers: [
      { text: "Take selfies", points: 35 },
      { text: "Look for a trolley", points: 25 },
      { text: "Shop at duty-free", points: 15 },
      { text: "Eat at food court", points: 10 },
      { text: "Sleep on chairs", points: 8 },
      { text: "Complain about high prices", points: 5 },
      { text: "Watch flights land", points: 2 }
    ]
  },
  {
    prompt: "Name a profession that earns a lot of money in India.",
    answers: [
      { text: "Doctor", points: 30 },
      { text: "Actor", points: 25 },
      { text: "Businessman", points: 20 },
      { text: "Cricketer", points: 15 },
      { text: "Software Engineer", points: 10 },
      { text: "Politician", points: 5 },
      { text: "Lawyer", points: 2 }
    ]
  },
  {
    prompt: "What do Indians do during monsoon season?",
    answers: [
      { text: "Eat pakoras", points: 35 },
      { text: "Drink chai", points: 25 },
      { text: "Play in the rain", points: 15 },
      { text: "Use umbrellas", points: 12 },
      { text: "Complain about potholes", points: 10 },
      { text: "Get stuck in traffic", points: 5 },
      { text: "Dry clothes indoors", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do on trains?",
    answers: [
      { text: "Eat homemade food", points: 30 },
      { text: "Make friends with co-passengers", points: 25 },
      { text: "Look outside the window", points: 15 },
      { text: "Read newspaper", points: 12 },
      { text: "Sleep", points: 10 },
      { text: "Play cards", points: 5 },
      { text: "Charge phone", points: 3 }
    ]
  },
  {
    prompt: "What is something Indian kids do when guests come over?",
    answers: [
      { text: "Touch elders’ feet", points: 30 },
      { text: "Serve water", points: 25 },
      { text: "Hide in their room", points: 15 },
      { text: "Bring chairs", points: 12 },
      { text: "Show their report card", points: 10 },
      { text: "Play mobile games", points: 5 },
      { text: "Get extra pocket money", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians always buy in bulk?",
    answers: [
      { text: "Rice", points: 35 },
      { text: "Wheat flour", points: 25 },
      { text: "Sugar", points: 15 },
      { text: "Spices", points: 12 },
      { text: "Oil", points: 10 },
      { text: "Soap", points: 5 },
      { text: "Tea leaves", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do when they get a government job?",
    answers: [
      { text: "Throw a party", points: 35 },
      { text: "Tell relatives", points: 25 },
      { text: "Buy sweets", points: 15 },
      { text: "Take elders' blessings", points: 12 },
      { text: "Post on social media", points: 10 },
      { text: "Plan marriage", points: 5 },
      { text: "Celebrate in a temple", points: 3 }
    ]
  },
  {
    prompt: "What do Indians always ask auto drivers?",
    answers: [
      { text: "'Meter se chalaoge?'", points: 35 },
      { text: "'Station chaloge?'", points: 25 },
      { text: "'Thoda kam kar lo'", points: 15 },
      { text: "'Traffic milega kya?'", points: 12 },
      { text: "'Kitna time lagega?'", points: 10 },
      { text: "'Bhaiya jaldi chalo'", points: 5 },
      { text: "'Change hai kya?'", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do at railway stations?",
    answers: [
      { text: "Look for the train", points: 35 },
      { text: "Buy tea", points: 25 },
      { text: "Check PNR status", points: 15 },
      { text: "Stand in long queues", points: 12 },
      { text: "Read newspaper", points: 10 },
      { text: "Talk to strangers", points: 5 },
      { text: "Eat snacks", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do after dinner?",
    answers: [
      { text: "Eat sweets", points: 30 },
      { text: "Drink water", points: 25 },
      { text: "Talk with family", points: 15 },
      { text: "Watch TV", points: 10 },
      { text: "Take a walk", points: 8 },
      { text: "Check phone", points: 5 },
      { text: "Sleep", points: 2 }
    ]
  },
  {
    prompt: "What is something Indians do before starting a new business?",
    answers: [
      { text: "Perform pooja", points: 40 },
      { text: "Take elders’ blessings", points: 25 },
      { text: "Check horoscope", points: 15 },
      { text: "Consult a pandit", points: 10 },
      { text: "Buy new clothes", points: 5 },
      { text: "Make an offering", points: 3 }
    ]
  },
  {
    prompt: "What is something people do at an Indian temple?",
    answers: [
      { text: "Offer prayers", points: 40 },
      { text: "Ring the bell", points: 25 },
      { text: "Take prasad", points: 15 },
      { text: "Touch feet of idols", points: 10 },
      { text: "Donate money", points: 8 },
      { text: "Walk barefoot", points: 5 },
      { text: "Apply tilak", points: 2 }
    ]
  },
  {
    prompt: "What do people do when there is a power cut?",
    answers: [
      { text: "Complain", points: 35 },
      { text: "Use candle/emergency light", points: 25 },
      { text: "Go outside", points: 15 },
      { text: "Fan themselves", points: 10 },
      { text: "Check phone", points: 8 },
      { text: "Sleep early", points: 5 },
      { text: "Call the electricity board", points: 2 }
    ]
  },
  {
    prompt: "What is something Indians take as prasad?",
    answers: [
      { text: "Laddoo", points: 35 },
      { text: "Coconut", points: 25 },
      { text: "Jalebi", points: 15 },
      { text: "Fruits", points: 10 },
      { text: "Tulsi leaves", points: 8 },
      { text: "Khichdi", points: 5 },
      { text: "Panchamrit", points: 2 }
    ]
  },
  {
    prompt: "What do Indian parents compare their kids to?",
    answers: [
      { text: "Sharma Ji’s son/daughter", points: 40 },
      { text: "Their own childhood", points: 25 },
      { text: "Toppers in school", points: 15 },
      { text: "Relatives' kids", points: 10 },
      { text: "Bollywood actors", points: 8 },
      { text: "Engineers and doctors", points: 5 },
      { text: "Successful businesspeople", points: 2 }
    ]
  },
  {
    prompt: "What do Indians do at a railway station?",
    answers: [
      { text: "Buy tea/coffee", points: 30 },
      { text: "Look for seat", points: 25 },
      { text: "Buy snacks", points: 15 },
      { text: "Read newspaper", points: 12 },
      { text: "Talk to strangers", points: 10 },
      { text: "Complain about train delay", points: 5 },
      { text: "Take selfies", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do while watching cricket?",
    answers: [
      { text: "Scream and cheer", points: 35 },
      { text: "Eat snacks", points: 25 },
      { text: "Pray", points: 15 },
      { text: "Abuse the umpire", points: 10 },
      { text: "Check stats on phone", points: 8 },
      { text: "Call friends", points: 5 },
      { text: "Discuss match strategies", points: 2 }
    ]
  },
  {
    prompt: "What is something Indians do before leaving the house?",
    answers: [
      { text: "Touch elders’ feet", points: 35 },
      { text: "Look in the mirror", points: 25 },
      { text: "Check phone", points: 15 },
      { text: "Lock the door", points: 12 },
      { text: "Take their wallet", points: 10 },
      { text: "Wear footwear", points: 5 },
      { text: "Apply perfume", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do during monsoon season?",
    answers: [
      { text: "Eat pakoras", points: 35 },
      { text: "Drink chai", points: 25 },
      { text: "Play in the rain", points: 15 },
      { text: "Use umbrellas", points: 12 },
      { text: "Complain about potholes", points: 10 },
      { text: "Get stuck in traffic", points: 5 },
      { text: "Dry clothes indoors", points: 3 }
    ]
  },
  {
    prompt: "What do Indians take for a train journey?",
    answers: [
      { text: "Home-cooked food", points: 35 },
      { text: "Extra luggage", points: 25 },
      { text: "Water bottle", points: 15 },
      { text: "Playing cards", points: 12 },
      { text: "A pillow", points: 10 },
      { text: "Newspaper", points: 5 },
      { text: "Charger", points: 3 }
    ]
  },
  {
  prompt: "What is something people do at an Indian wedding?",
  answers: [
    { text: "Dance at sangeet", points: 35 },
    { text: "Eat at buffet", points: 30 },
    { text: "Take selfies", points: 15 },
    { text: "Give gifts/envelopes", points: 10 },
    { text: "Gossip", points: 5 },
    { text: "Cry during bidaai", points: 3 },
    { text: "Flirt with guests", points: 2 }
  ]
},
{
  prompt: "What is something you find in an Indian kitchen?",
  answers: [
    { text: "Pressure cooker", points: 35 },
    { text: "Spice box (masala dabba)", points: 30 },
    { text: "Tava (flat pan)", points: 15 },
    { text: "Rolling pin (belan)", points: 10 },
    { text: "Oil containers", points: 5 },
    { text: "Pickle jars", points: 3 },
    { text: "Stainless steel plates", points: 2 }
  ]
},
{
  prompt: "What is something Indians do during festivals?",
  answers: [
    { text: "Light diyas/decorate house", points: 35 },
    { text: "Burst crackers", points: 30 },
    { text: "Wear new clothes", points: 15 },
    { text: "Make sweets", points: 10 },
    { text: "Visit relatives", points: 5 },
    { text: "Perform puja", points: 3 },
    { text: "Post on social media", points: 2 }
  ]
},
{
  prompt: "What do Indians commonly argue about at home?",
  answers: [
    { text: "TV remote", points: 35 },
    { text: "What to eat for dinner", points: 30 },
    { text: "Politics", points: 15 },
    { text: "Family gossip", points: 10 },
    { text: "House chores", points: 5 },
    { text: "Money matters", points: 3 },
    { text: "Wedding plans", points: 2 }
  ]
},
{
  prompt: "What do Indians carry when visiting someone’s home?",
  answers: [
    { text: "Sweets/mithai box", points: 35 },
    { text: "Fruits", points: 30 },
    { text: "Gift hamper", points: 15 },
    { text: "Dry fruits", points: 10 },
    { text: "Homemade snacks", points: 5 },
    { text: "Flower bouquet", points: 3 },
    { text: "Cash envelope", points: 2 }
  ]
},
{
  prompt: "What is something you hear at an Indian family gathering?",
  answers: [
    { text: "Loud laughter", points: 35 },
    { text: "Children shouting", points: 30 },
    { text: "Elders giving advice", points: 15 },
    { text: "Discussion on politics", points: 10 },
    { text: "Music/Dhol", points: 5 },
    { text: "Gossiping", points: 3 },
    { text: "Talks about marriage", points: 2 }
  ]
},
{
  prompt: "What is a popular street food in India?",
  answers: [
    { text: "Pani puri/Golgappa", points: 35 },
    { text: "Vada pav", points: 30 },
    { text: "Pav bhaji", points: 15 },
    { text: "Samosa", points: 10 },
    { text: "Chole bhature", points: 5 },
    { text: "Dosa", points: 3 },
    { text: "Kathi roll", points: 2 }
  ]
},
{
  prompt: "What do Indians do when visiting a relative's newborn baby?",
  answers: [
    { text: "Bring gifts", points: 35 },
    { text: "Take photos", points: 30 },
    { text: "Bless the baby", points: 15 },
    { text: "Offer money (shagun)", points: 10 },
    { text: "Give name suggestions", points: 5 },
    { text: "Pull baby’s cheeks", points: 3 },
    { text: "Talk about their own kids", points: 2 }
  ]
},
{
  prompt: "What is something Indians say when they see a relative after a long time?",
  answers: [
    { text: "Kitne bade ho gaye!", points: 35 },
    { text: "Pehchana nahi!", points: 30 },
    { text: "Shaadi kab karoge?", points: 15 },
    { text: "Mote ho gaye ho", points: 10 },
    { text: "Kaam kya karte ho?", points: 5 },
    { text: "Mujhe yaad hai jab tum chhote the", points: 3 },
    { text: "Tum bilkul apne papa jaise lagte ho", points: 2 }
  ]
},
{
  prompt: "What is something Indians do in a WhatsApp family group?",
  answers: [
    { text: "Send Good Morning messages", points: 35 },
    { text: "Share fake news", points: 30 },
    { text: "Post festival greetings", points: 15 },
    { text: "Send memes", points: 10 },
    { text: "Forward long videos", points: 5 },
    { text: "Ignore messages", points: 3 },
    { text: "Change group photo", points: 2 }
  ]
},
{
  prompt: "What is a reason an Indian wedding might get delayed?",
  answers: [
    { text: "Baarat dancing too much", points: 35 },
    { text: "Pandit coming late", points: 30 },
    { text: "Bride's makeup not done", points: 15 },
    { text: "Venue confusion", points: 10 },
    { text: "Traffic jam", points: 5 },
    { text: "Missing shoes during Joota Chupai", points: 3 },
    { text: "Family arguing about rituals", points: 2 }
  ]
},
{
  prompt: "What do Indians do during long traffic jams?",
  answers: [
    { text: "Honk non-stop", points: 35 },
    { text: "Call family", points: 30 },
    { text: "Eat snacks in car", points: 15 },
    { text: "Fight with other drivers", points: 10 },
    { text: "Listen to music", points: 5 },
    { text: "Update WhatsApp status", points: 3 },
    { text: "Sleep in the car", points: 2 }
  ]
},
{
  prompt: "What do Indians pack too much of while traveling abroad?",
  answers: [
    { text: "Pickles", points: 35 },
    { text: "Maggie noodles", points: 30 },
    { text: "Homemade snacks", points: 15 },
    { text: "Pressure cooker", points: 10 },
    { text: "Spices", points: 5 },
    { text: "Religious idols", points: 3 },
    { text: "Masala chai powder", points: 2 }
  ]
},
{
  prompt: "What do Indians believe brings good luck?",
  answers: [
    { text: "Seeing a cow", points: 35 },
    { text: "Finding money on the road", points: 30 },
    { text: "First rain of the season", points: 15 },
    { text: "Breaking coconut before event", points: 10 },
    { text: "Left eye twitching", points: 5 },
    { text: "Peacock feather in house", points: 3 },
    { text: "Touching feet of elders", points: 2 }
  ]
},
{
  prompt: "What is something you find on a roadside dhaba menu?",
  answers: [
    { text: "Aloo paratha", points: 30 },
    { text: "Chai", points: 25 },
    { text: "Paneer butter masala", points: 15 },
    { text: "Dal fry", points: 10 },
    { text: "Tandoori roti", points: 8 },
    { text: "Maggi", points: 5 },
    { text: "Egg bhurji", points: 2 }
  ]
},
{
  prompt: "What is a reason an Indian might wake up early?",
  answers: [
    { text: "Catch a train/flight", points: 30 },
    { text: "Exam day", points: 25 },
    { text: "Religious rituals", points: 15 },
    { text: "Work deadline", points: 10 },
    { text: "Family trip", points: 8 },
    { text: "Temple visit", points: 5 },
    { text: "Walk/yoga", points: 2 }
  ]
},
{
  prompt: "Name a traditional Indian musical instrument.",
  answers: [
    { text: "Tabla", points: 30 },
    { text: "Sitar", points: 25 },
    { text: "Dholak", points: 15 },
    { text: "Veena", points: 10 },
    { text: "Harmonium", points: 8 },
    { text: "Mridangam", points: 5 },
    { text: "Shehnai", points: 2 }
  ]
},
{
  prompt: "Name a city famous for its food in India.",
  answers: [
    { text: "Delhi", points: 30 },
    { text: "Amritsar", points: 25 },
    { text: "Lucknow", points: 15 },
    { text: "Kolkata", points: 10 },
    { text: "Hyderabad", points: 8 },
    { text: "Mumbai", points: 5 },
    { text: "Chennai", points: 2 }
  ]
},
{
  prompt: "Name a place where Indians remove their footwear.",
  answers: [
    { text: "Temple", points: 40 },
    { text: "Home", points: 30 },
    { text: "Friend’s house", points: 15 },
    { text: "Some shops", points: 10 },
    { text: "Classroom (during break)", points: 5 }
  ]
},
{
  prompt: "What is the first thing an Indian does in the morning?",
  answers: [
    { text: "Check phone", points: 40 },
    { text: "Drink chai", points: 30 },
    { text: "Complain about back pain", points: 15 },
    { text: "Stretch/yawn", points: 10 },
    { text: "Open WhatsApp", points: 5 }
  ]
},
{
  prompt: "Name something Indian moms always say.",
  answers: [
    { text: "Padhai karlo!", points: 40 },
    { text: "Sabzi khao!", points: 30 },
    { text: "Phone kam chalaya karo", points: 15 },
    { text: "Shaadi kab karoge?", points: 10 },
    { text: "Main tumhare liye kya kya karti hoon", points: 5 }
  ]
},
{
  prompt: "What do Indians blame when something goes wrong?",
  answers: [
    { text: "Nazar lag gayi", points: 40 },
    { text: "Karma", points: 30 },
    { text: "Government", points: 15 },
    { text: "Neighbors", points: 10 },
    { text: "Mobile network", points: 5 }
  ]
},
{
  prompt: "Name something you should NOT do at an Indian wedding.",
  answers: [
    { text: "Eat before bride arrives", points: 35 },
    { text: "Wear white clothes", points: 30 },
    { text: "Flirt with the groom", points: 15 },
    { text: "Steal sweets", points: 10 },
    { text: "Fall asleep during rituals", points: 5 },
    { text: "Bring your tiffin box", points: 3 }
  ]
},
{
  prompt: "What would happen if an Indian forgot to offer chai to a guest?",
  answers: [
    { text: "Massive insult", points: 35 },
    { text: "Guest gets angry", points: 30 },
    { text: "Family drama starts", points: 15 },
    { text: "WhatsApp gossip begins", points: 10 },
    { text: "Neighbor finds out", points: 5 },
    { text: "Blacklisted from future weddings", points: 3 }
  ]
},
{
  prompt: "Name a hilarious reason Indians miss their train.",
  answers: [
    { text: "Too busy eating samosa", points: 35 },
    { text: "Bargaining with porter", points: 30 },
    { text: "Lost in WhatsApp videos", points: 15 },
    { text: "Family photo session at station", points: 10 },
    { text: "Confused platform number", points: 5 },
    { text: "Buying extra water bottles", points: 3 }
  ]
},
{
  prompt: "What is something you find in an Indian kitchen?",
  answers: [
    { text: "Pressure cooker", points: 35 },
    { text: "Spices masala box", points: 30 },
    { text: "Gas stove", points: 15 },
    { text: "Tava (flat pan)", points: 10 },
    { text: "Steel utensils", points: 8 },
    { text: "Pickle jar", points: 5 },
    { text: "Chimta (tongs)", points: 2 }
  ]
},
{
  prompt: "What is something Indian students do before exams?",
  answers: [
    { text: "Pull an all-nighter", points: 35 },
    { text: "Pray", points: 30 },
    { text: "Revise last minute", points: 15 },
    { text: "Drink coffee/tea", points: 10 },
    { text: "Panic", points: 8 },
    { text: "Forget hall ticket", points: 5 },
    { text: "Copy notes", points: 2 }
  ]
},
{
  prompt: "What is something Indians love to bargain for?",
  answers: [
    { text: "Clothes", points: 35 },
    { text: "Vegetables", points: 30 },
    { text: "Auto fare", points: 15 },
    { text: "Furniture", points: 10 },
    { text: "Electronics", points: 8 },
    { text: "Tour packages", points: 5 },
    { text: "Jewelry", points: 2 }
  ]
},
{
  prompt: "What is something you see at an Indian wedding?",
  answers: [
    { text: "Dancing baraat", points: 35 },
    { text: "Heavy jewelry", points: 30 },
    { text: "Food stalls", points: 15 },
    { text: "Relatives gossiping", points: 10 },
    { text: "Long rituals", points: 8 },
    { text: "Kids running around", points: 5 },
    { text: "Photographers blocking view", points: 2 }
  ]
},
{
  prompt: "What is something Indian kids fear?",
  answers: [
    { text: "Math exam", points: 35 },
    { text: "Parent-teacher meeting", points: 30 },
    { text: "Dad's belt", points: 15 },
    { text: "Neighbour aunties", points: 10 },
    { text: "Losing tiffin box", points: 8 },
    { text: "No internet", points: 5 },
    { text: "Doctor visit", points: 2 }
  ]
},
{
  prompt: "Name something Indians do during a power cut.",
  answers: [
    { text: "Light candles", points: 35 },
    { text: "Use emergency lamp", points: 30 },
    { text: "Go outside for breeze", points: 15 },
    { text: "Complain to neighbors", points: 10 },
    { text: "Sleep early", points: 8 },
    { text: "Play antakshari", points: 5 },
    { text: "Fan themselves with newspaper", points: 2 }
  ]
},
{
  prompt: "What is something you associate with Indian summer?",
  answers: [
    { text: "Mangoes", points: 35 },
    { text: "Heat waves", points: 30 },
    { text: "AC not working", points: 15 },
    { text: "Water shortage", points: 10 },
    { text: "Street lassi shops", points: 8 },
    { text: "Sweating profusely", points: 5 },
    { text: "Cooling off under tree", points: 2 }
  ]
},
{
  prompt: "What is something Indians take on a picnic?",
  answers: [
    { text: "Home-cooked food", points: 35 },
    { text: "Water bottles", points: 30 },
    { text: "Blanket/mat", points: 15 },
    { text: "Frisbee/ball", points: 10 },
    { text: "Guitar", points: 8 },
    { text: "Snakes and ladders game", points: 5 },
    { text: "First-aid box", points: 2 }
  ]
},
{
  prompt: "What is something Indians do before entering a temple?",
  answers: [
    { text: "Remove footwear", points: 35 },
    { text: "Ring the bell", points: 30 },
    { text: "Bow their head", points: 15 },
    { text: "Take a bath", points: 10 },
    { text: "Touch the idol's feet", points: 8 },
    { text: "Say a prayer", points: 5 },
    { text: "Apply tilak", points: 2 }
  ]
},
{
  prompt: "What is something you’ll find in every Indian home?",
  answers: [
    { text: "Tea/coffee cups", points: 35 },
    { text: "Tupperware", points: 30 },
    { text: "Religious idols", points: 15 },
    { text: "Cushions/pillows", points: 10 },
    { text: "Mops/brooms", points: 8 },
    { text: "Clothesline", points: 5 },
    { text: "A stack of magazines", points: 2 }
  ]
},
{
  prompt: "What’s an Indian parent’s go-to excuse for being late?",
  answers: [
    { text: "Traffic", points: 35 },
    { text: "Looking for the keys", points: 30 },
    { text: "Had to make a phone call", points: 15 },
    { text: "Neighbour stopped us", points: 10 },
    { text: "Lost track of time", points: 8 },
    { text: "Waiting for someone else", points: 5 },
    { text: "Not feeling well", points: 2 }
  ]
},
{
  prompt: "What’s a common Indian habit at the dinner table?",
  answers: [
    { text: "Eating with hands", points: 35 },
    { text: "Offering food to elders first", points: 30 },
    { text: "Bargaining over the last piece", points: 15 },
    { text: "Talking while eating", points: 10 },
    { text: "Serving multiple dishes", points: 8 },
    { text: "Sharing food", points: 5 },
    { text: "Drinking buttermilk", points: 2 }
  ]
},
{
  prompt: "What do Indians usually do when someone visits their house?",
  answers: [
    { text: "Offer tea/coffee", points: 35 },
    { text: "Give sweets", points: 30 },
    { text: "Show them around", points: 15 },
    { text: "Ask about their health", points: 10 },
    { text: "Offer food", points: 8 },
    { text: "Compliment their outfit", points: 5 },
    { text: "Talk about relatives", points: 2 }
  ]
},
{
  prompt: "What’s something Indians usually do when someone gets engaged?",
  answers: [
    { text: "Throw a party", points: 35 },
    { text: "Buy a gift", points: 30 },
    { text: "Announce it to relatives", points: 15 },
    { text: "Exchange rings", points: 10 },
    { text: "Throw rice and flowers", points: 8 },
    { text: "Go shopping", points: 5 },
    { text: "Start planning the wedding", points: 2 }
  ]
},
{
  prompt: "What’s something Indians love to eat with rice?",
  answers: [
    { text: "Dal", points: 35 },
    { text: "Curry", points: 30 },
    { text: "Raita", points: 15 },
    { text: "Pickle", points: 10 },
    { text: "Papad", points: 8 },
    { text: "Kadhi", points: 5 },
    { text: "Coconut chutney", points: 2 }
  ]
},
{
  prompt: "What’s something Indian kids are told to do by their parents?",
  answers: [
    { text: "Study", points: 35 },
    { text: "Eat vegetables", points: 30 },
    { text: "Help at home", points: 15 },
    { text: "Clean your room", points: 10 },
    { text: "Be respectful", points: 8 },
    { text: "Wake up early", points: 5 },
    { text: "Wear warm clothes", points: 2 }
  ]
},
{
  prompt: "What is something Indians do during Diwali?",
  answers: [
    { text: "Play with firecrackers", points: 35 },
    { text: "Clean the house (again)", points: 30 },
    { text: "Complain about noise", points: 15 },
    { text: "Get distracted by sweets", points: 10 },
    { text: "Visit every relative’s house", points: 8 },
    { text: "Look for parking for 30 minutes", points: 5 },
    { text: "Lose track of time because of WhatsApp wishes", points: 2 }
  ]
},
{
  prompt: "What is something an Indian parent says when you’re late for school?",
  answers: [
    { text: "Don't know how to wake up on time?", points: 35 },
    { text: "You’re going to become a doctor/lawyer!", points: 30 },
    { text: "Your friends are already there", points: 15 },
    { text: "I used to walk 5 miles to school!", points: 10 },
    { text: "Don't blame the alarm clock", points: 8 },
    { text: "Go study, don’t be lazy", points: 5 },
    { text: "Why do you need sleep?", points: 2 }
  ]
},
{
  prompt: "What happens if you leave food on the plate in front of an Indian mom?",
  answers: [
    { text: "She forces you to finish it", points: 35 },
    { text: "She calls you ungrateful", points: 30 },
    { text: "She makes you sit in front of the plate until you finish", points: 15 },
    { text: "She says, 'There are starving children in the world!'", points: 10 },
    { text: "She asks you to eat it the next day", points: 8 },
    { text: "She gives you the ‘look’", points: 5 },
    { text: "She makes you clean the kitchen", points: 2 }
  ]
},
{
  prompt: "What’s something you definitely should NOT do in an Indian family gathering?",
  answers: [
    { text: "Say no to food", points: 35 },
    { text: "Argue with the elders", points: 30 },
    { text: "Show up in casual clothes", points: 15 },
    { text: "Look at your phone", points: 10 },
    { text: "Criticize the food", points: 8 },
    { text: "Talk about politics", points: 5 },
    { text: "Talk about how expensive weddings are", points: 2 }
  ]
},
{
  prompt: "What would an Indian auntie most likely say when you’re single?",
  answers: [
    { text: "When are you getting married?", points: 35 },
    { text: "Sharma Ji’s son/daughter is already married", points: 30 },
    { text: "Beta, you’re too young for this!", points: 15 },
    { text: "Do you have someone in mind?", points: 10 },
    { text: "I have a perfect match for you", points: 8 },
    { text: "Why are you still at home?", points: 5 },
    { text: "It’s time to settle down", points: 2 }
  ]
},
{
  prompt: "What happens when Indians don’t get the seat they wanted on a train?",
  answers: [
    { text: "They complain loudly", points: 35 },
    { text: "They try to bribe the ticket collector", points: 30 },
    { text: "They argue with the person sitting there", points: 15 },
    { text: "They silently stare at the seat", points: 10 },
    { text: "They start asking for upgrades", points: 8 },
    { text: "They check for another seat in another compartment", points: 5 },
    { text: "They stand the entire journey", points: 2 }
  ]
},
{
  prompt: "What would an Indian uncle likely say at a family event?",
  answers: [
    { text: "Beta, do you want to be an engineer or doctor?", points: 35 },
    { text: "I remember when I was your age", points: 30 },
    { text: "Have you been to America?", points: 15 },
    { text: "How’s the stock market?", points: 10 },
    { text: "You should start investing in gold", points: 8 },
    { text: "Get married soon, you’re too old now", points: 5 },
    { text: "Let me tell you how to run a business", points: 2 }
  ]
},
{
  prompt: "What’s the first thing Indians do after a power cut?",
  answers: [
    { text: "Complain to everyone within earshot", points: 35 },
    { text: "Check for a backup generator", points: 30 },
    { text: "Start looking for candles", points: 15 },
    { text: "Check their phone battery", points: 10 },
    { text: "Call the electricity board", points: 8 },
    { text: "Blame the neighbors", points: 5 },
    { text: "Sit in the dark and wait", points: 2 }
  ]
},
{
  prompt: "What’s something that would definitely make an Indian mom angry?",
  answers: [
    { text: "Forget to eat the food she made", points: 35 },
    { text: "Bring home bad marks", points: 30 },
    { text: "Complain about the weather", points: 15 },
    { text: "Leave the house without telling her", points: 10 },
    { text: "Not taking her advice", points: 8 },
    { text: "Talk loudly on the phone", points: 5 },
    { text: "Not wear a sweater when it's cold", points: 2 }
  ]
},
{
  prompt: "What would you never expect to hear from an Indian father?",
  answers: [
    { text: "You don’t need to study for the exam", points: 35 },
    { text: "I’m proud of you for failing", points: 30 },
    { text: "Take a break, you deserve it", points: 15 },
    { text: "Just go to the movies instead of school", points: 10 },
    { text: "You don’t need to become a doctor or engineer", points: 8 },
    { text: "I’ll get you a pet monkey", points: 5 },
    { text: "Go play video games all day", points: 2 }
  ]
},
{
  prompt: "What would you NEVER find in an Indian home?",
  answers: [
    { text: "No shoes at the entrance", points: 35 },
    { text: "Uncluttered fridge", points: 30 },
    { text: "A completely clean bathroom", points: 15 },
    { text: "A non-chipped plate", points: 10 },
    { text: "A single item of furniture without a cushion on it", points: 8 },
    { text: "An empty bookshelf", points: 5 },
    { text: "A tidy TV remote", points: 2 }
  ]
},
{
  prompt: "What would an Indian relative most likely say when you get a job offer?",
  answers: [
    { text: "Make sure it’s in a big company", points: 35 },
    { text: "What’s the salary?", points: 30 },
    { text: "Can you ask for a promotion already?", points: 15 },
    { text: "Is there room for growth?", points: 10 },
    { text: "I know a better job opportunity", points: 8 },
    { text: "Is it in your hometown?", points: 5 },
    { text: "You’re too young to be working", points: 2 }
  ]
},
{
  prompt: "What would be a completely unexpected thing to hear from an Indian auntie?",
  answers: [
    { text: "You should move out and live on your own", points: 35 },
    { text: "Don't get married anytime soon", points: 30 },
    { text: "I’ve booked a solo trip for you", points: 15 },
    { text: "You should eat more junk food", points: 10 },
    { text: "Go make a career in fashion", points: 8 },
    { text: "You’re getting too many likes on Facebook", points: 5 },
    { text: "Get a tattoo!", points: 2 }
  ]
},
{
  prompt: "What’s something an Indian family would NEVER do on a Sunday?",
  answers: [
    { text: "Sleep past 10 AM", points: 35 },
    { text: "Order take-out", points: 30 },
    { text: "Relax without chores", points: 15 },
    { text: "Not visit relatives", points: 10 },
    { text: "Let the kids watch TV all day", points: 8 },
    { text: "Go out without dressing up", points: 5 },
    { text: "Forget to have lunch at 1 PM", points: 2 }
  ]
},
{
  prompt: "What would make an Indian household instantly uncomfortable?",
  answers: [
    { text: "Taking shoes inside the house", points: 35 },
    { text: "Eating with your hands at the dinner table", points: 30 },
    { text: "Saying ‘I don’t like this food’", points: 15 },
    { text: "Not greeting elders first", points: 10 },
    { text: "Being on the phone at the dinner table", points: 8 },
    { text: "Sitting cross-legged in front of elders", points: 5 },
    { text: "Not offering chai to a guest", points: 2 }
  ]
},
{
  prompt: "What is the last thing an Indian father would say before sending you off to school?",
  answers: [
    { text: "Don't forget to take your lunch", points: 35 },
    { text: "You better study for the whole day", points: 30 },
    { text: "You’ll be a great engineer", points: 15 },
    { text: "Did you pack your bag?", points: 10 },
    { text: "Call me as soon as you reach school", points: 8 },
    { text: "I’ll talk to your teacher if you get low marks", points: 5 },
    { text: "Stay away from the class bully", points: 2 }
  ]
},
{
  prompt: "What would you never see at an Indian wedding?",
  answers: [
    { text: "A low-key reception", points: 35 },
    { text: "Simple clothing", points: 30 },
    { text: "An empty dance floor", points: 15 },
    { text: "The bride and groom not being surrounded by relatives", points: 10 },
    { text: "A quiet, intimate ceremony", points: 8 },
    { text: "Not enough food", points: 5 },
    { text: "A wedding without gossip", points: 2 }
  ]
}

];  // ← **THIS** closing bracket and semicolon must be here, exactly once!

// ───────────────────────────────────────────────────────
// 2) APPLICATION LOGIC (leave this exactly as‐is):

let questions  = shuffle([...QUESTIONS]);
let current    = 0;
let crossCount = 0;   // tracks cycle 1→2→3→1…

// These will be set on DOMContentLoaded:
let ding, buzz, cross;

document.addEventListener('DOMContentLoaded', () => {
  // grab audio & overlay
  ding  = document.getElementById('ding-sound');
  buzz  = document.getElementById('buzz-sound');
  cross = document.getElementById('cross-overlay');

  // Next Question button
  const nextBtn = document.getElementById('next-btn');
  nextBtn.disabled = false;
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % questions.length;
    renderQuestion();
  });

  // Buzzer button
  document.getElementById('buzzer-btn').addEventListener('click', () => {
    // cycle 1→2→3→1…
    crossCount = (crossCount % 3) + 1;
    // show that many ❌
    cross.innerText = '❌'.repeat(crossCount);

    buzz.currentTime = 0;
    buzz.play();
    cross.classList.add('show');
    setTimeout(() => cross.classList.remove('show'), 1000);
  });

  // initial render
  renderQuestion();
});

// 3) Fisher–Yates shuffle
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 4) Render question & reveal animation
function renderQuestion() {
  const promptEl = document.getElementById('prompt');
  const board    = document.getElementById('board');
  const q        = questions[current];

  promptEl.textContent = q.prompt;
  board.innerHTML = ''; // clear old tiles

  q.answers.forEach(ans => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.innerHTML = `
      <div class="answer"><span>${ans.text}</span> — <span>${ans.points}</span></div>
      <div class="cover"></div>
    `;
    const coverEl = tile.querySelector('.cover');
    coverEl.addEventListener('click', () => {
      tile.classList.add('flipped');
      ding.currentTime = 0;
      ding.play();
    });
    board.appendChild(tile);
  });
}