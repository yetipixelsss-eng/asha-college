const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API: About Us content
app.get('/api/about', (req, res) => {
  res.json({
    title: 'About Asha School / College',
    description: `Asha School/College, established in 1997 and located in Kathmandu-31, is a premier educational institution
      committed to nurturing academic excellence, character development, and holistic growth in every student.
      With a legacy spanning over two decades, we have shaped thousands of bright minds and future leaders of Nepal.`,
    mission: 'To provide quality education that empowers students to become responsible, innovative, and globally competitive individuals.',
    vision: 'To be the leading educational institution in Nepal, recognized for academic excellence and character building.',
    stats: [
      { label: 'Students Enrolled', value: '5000+' },
      { label: 'Expert Faculty', value: '200+' },
      { label: 'Years of Excellence', value: '28+' },
      { label: 'Alumni Network', value: '20000+' }
    ]
  });
});

// API: Events / Blog
app.get('/api/events', (req, res) => {
  res.json([
    {
      id: 1,
      type: 'event',
      title: 'Annual Cultural Festival 2081',
      date: '2081-08-15',
      displayDate: 'Bhadra 15, 2081',
      description: 'Join us for a vibrant celebration of culture, arts, and talent showcased by our students.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop',
      category: 'Cultural'
    },
    {
      id: 2,
      type: 'event',
      title: 'Science Exhibition & Innovation Fair',
      date: '2081-09-01',
      displayDate: 'Ashwin 1, 2081',
      description: 'Students present their innovative projects and scientific discoveries at the annual exhibition.',
      image: 'https://images.unsplash.com/photo-1532094349884-543559053f46?w=400&h=250&fit=crop',
      category: 'Academic'
    },
    {
      id: 3,
      type: 'blog',
      title: 'Admission Open for 2081/82',
      date: '2081-07-20',
      displayDate: 'Shrawan 20, 2081',
      description: 'Admissions are now open for Grade 1 to 12 and +2 Science, Management, and Humanities streams.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop',
      category: 'Announcement'
    },
    {
      id: 4,
      type: 'blog',
      title: 'SEE Result: Asha Students Shine',
      date: '2081-07-10',
      displayDate: 'Shrawan 10, 2081',
      description: 'Our students achieved outstanding results in the SEE examinations with 95% scoring A and A+ grades.',
      image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=400&h=250&fit=crop',
      category: 'Achievement'
    },
    {
      id: 5,
      type: 'event',
      title: 'Sports Week 2081',
      date: '2081-09-15',
      displayDate: 'Ashwin 15, 2081',
      description: 'An exciting week of athletic competitions, teamwork, and sportsmanship across all grades.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=250&fit=crop',
      category: 'Sports'
    },
    {
      id: 6,
      type: 'blog',
      title: 'New Computer Lab Inaugurated',
      date: '2081-06-25',
      displayDate: 'Ashadh 25, 2081',
      description: 'State-of-the-art computer lab with 60 high-end systems inaugurated to enhance digital learning.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop',
      category: 'Infrastructure'
    }
  ]);
});

// API: Contact info
app.get('/api/contact', (req, res) => {
  res.json({
    address: 'Kathmandu-31, Bagmati Province, Nepal',
    phone: '+977-01-XXXXXXX',
    email: 'info@ashacollege.edu.np',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0!2d85.3!3d27.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzAwLjAiTiA4NcKwMTgnMDAuMCJF!5e0!3m2!1sen!2snp!4v1234567890',
    socialMedia: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
      twitter: 'https://twitter.com'
    }
  });
});

// API: School info
app.get('/api/school', (req, res) => {
  res.json({
    name: 'Asha School',
    tagline: 'Nurturing Young Minds Since 1997',
    description: 'Asha School offers quality education from Nursery to Grade 10 (SEE). Our curriculum blends academic rigor with creative development, sports, and moral values.',
    programs: [
      { name: 'Early Childhood Education (Nursery–KG)', icon: '🌱' },
      { name: 'Primary Level (Grade 1–5)', icon: '📚' },
      { name: 'Lower Secondary (Grade 6–8)', icon: '🔬' },
      { name: 'Secondary Level (Grade 9–10/SEE)', icon: '🎓' }
    ],
    facilities: ['Modern Classrooms', 'Science Labs', 'Computer Lab', 'Library', 'Playground', 'Cafeteria']
  });
});

// API: College info
app.get('/api/college', (req, res) => {
  res.json({
    name: 'Asha College',
    tagline: 'Your Gateway to Higher Education',
    description: 'Asha College provides +2 level education affiliated with the National Examination Board (NEB). We offer Science, Management, and Humanities faculties with experienced faculty and excellent infrastructure.',
    programs: [
      { name: 'Science (+2)', subjects: 'Physics, Chemistry, Biology/Math, Computer', icon: '🔬' },
      { name: 'Management (+2)', subjects: 'Accountancy, Economics, Business Studies, Finance', icon: '📊' },
      { name: 'Humanities (+2)', subjects: 'English, Nepali, Social Studies, Philosophy', icon: '📖' }
    ],
    facilities: ['Modern Lecture Halls', 'Physics & Chemistry Labs', 'Computer Lab', 'Library & Reading Room', 'Sports Complex', 'Counseling Center']
  });
});

// API: AIESEC info
app.get('/api/aiesec', (req, res) => {
  res.json({
    title: 'AIESEC at Asha',
    description: `AIESEC is the world's largest youth-run organization, present at Asha College to empower young people 
      through leadership development, international internships, and volunteering opportunities.`,
    opportunities: [
      { title: 'Global Volunteer', description: 'Volunteer abroad and make a difference in communities worldwide.', icon: '🌍' },
      { title: 'Global Talent', description: 'Gain international professional experience through paid internships.', icon: '💼' },
      { title: 'Global Teacher', description: 'Teach English and develop leadership skills globally.', icon: '📝' }
    ]
  });
});

// API: Community & Staff
app.get('/api/community', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Dr. Rameshwar Shrestha',
      role: 'Principal & Academic Director',
      category: 'leadership',
      credentials: 'Ph.D. in Educational Leadership, M.Sc. Physics (TU)',
      experience: '24+ Years of Educational Excellence',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop&crop=faces',
      thoughts: 'True education is not merely the filling of an empty vessel, but the kindling of a lifelong flame of curiosity, integrity, and social purpose in every child.',
      email: 'principal@ashacollege.edu.np'
    },
    {
      id: 2,
      name: 'Prof. Sunita Sharma',
      role: 'Vice Principal (+2 College Stream)',
      category: 'leadership',
      credentials: 'M.Phil in Management Studies, M.B.A.',
      experience: '18+ Years Experience',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop&crop=faces',
      thoughts: 'We prepare our students not just to succeed in board examinations, but to navigate complex real-world challenges with critical thinking and compassion.',
      email: 'vp.college@ashacollege.edu.np'
    },
    {
      id: 3,
      name: 'Bikram K. Thapa',
      role: 'Head of Science Department (+2)',
      category: 'college',
      credentials: 'M.Sc. Physics (Gold Medalist), TU',
      experience: '14+ Years in Teaching & Research',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=faces',
      thoughts: 'Science is best learned with our hands in the lab and our minds asking "why". My mission is to cultivate scientific rigor and groundbreaking innovation.',
      email: 'physics.hod@ashacollege.edu.np'
    },
    {
      id: 4,
      name: 'Deepa Karki Adhikari',
      role: 'Senior Coordinator (School Level Nursery–10)',
      category: 'school',
      credentials: 'M.Ed. in Child Development & Curriculum',
      experience: '16+ Years in School Pedagogy',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop&crop=faces',
      thoughts: 'Every child blossoms at their own pace. By creating a nurturing, supportive environment, we transform shy questions into confident discoveries.',
      email: 'school.coordinator@ashacollege.edu.np'
    },
    {
      id: 5,
      name: 'Anup Manandhar',
      role: 'Head of Management & Accounts',
      category: 'college',
      credentials: 'FCA (Chartered Accountant), M.B.S.',
      experience: '12+ Years Corporate & Academic Mentorship',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&crop=faces',
      thoughts: 'Modern business demands ethical financial stewardship, tech adaptability, and an entrepreneurial mindset. We instill these daily in our classrooms.',
      email: 'accounts.hod@ashacollege.edu.np'
    },
    {
      id: 6,
      name: 'Saraswati Poudel',
      role: 'Senior Faculty - Chemistry & Bio-Tech',
      category: 'college',
      credentials: 'M.Sc. Organic Chemistry, B.Ed.',
      experience: '11+ Years Laboratory Instruction',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop&crop=faces',
      thoughts: 'When students see chemical equations turn into real crystalline reactions before their eyes, a sense of wonder sparks that textbooks alone can never match.',
      email: 'chemistry@ashacollege.edu.np'
    },
    {
      id: 7,
      name: 'Narayan Prasad Bhattarai',
      role: 'Senior Mathematics & SEE Specialist',
      category: 'school',
      credentials: 'M.Sc. Mathematics, B.Ed.',
      experience: '15+ Years SEE Preparation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=faces',
      thoughts: 'Mathematics is not about memorizing formulas; it is about learning how to think clearly and solve puzzles that mirror everyday life.',
      email: 'math.school@ashacollege.edu.np'
    },
    {
      id: 8,
      name: 'Pratima Bajracharya',
      role: 'Director of Student Welfare & Counseling',
      category: 'leadership',
      credentials: 'M.A. Clinical Psychology & Counseling',
      experience: '10+ Years Student Mentorship',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&h=600&fit=crop&crop=faces',
      thoughts: 'Academic success and mental well-being go hand-in-hand. We provide an empathetic, safe space where every student feels seen, heard, and supported.',
      email: 'counseling@ashacollege.edu.np'
    }
  ]);
});

// API: Gallery & Memories
app.get('/api/gallery', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Annual Cultural Grand Showcase',
      category: 'cultural',
      date: 'Bhadra 2081',
      description: 'Students celebrating Nepal’s rich cultural heritage through traditional dance, musical ensembles, and dramatic performances.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&h=700&fit=crop'
    },
    {
      id: 2,
      title: 'Advanced Robotics & Science Fair',
      category: 'science',
      date: 'Ashwin 2081',
      description: 'Innovative scientific models, automated robotics projects, and sustainable environmental solutions presented by Asha inventors.',
      image: 'https://images.unsplash.com/photo-1532094349884-543559053f46?w=1000&h=700&fit=crop'
    },
    {
      id: 3,
      title: 'SEE & NEB Convocation & Graduation',
      category: 'graduation',
      date: 'Shrawan 2081',
      description: 'Proud graduating scholars receiving academic honors, merit awards, and stepping into bright higher education pathways.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&h=700&fit=crop'
    },
    {
      id: 4,
      title: 'Inter-House Sports Champions Meet',
      category: 'sports',
      date: 'Ashwin 2081',
      description: 'Spirited athletics, football championship finals, and basketball tournaments fostering teamwork and sportsmanship.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000&h=700&fit=crop'
    },
    {
      id: 5,
      title: 'Digital Smart Classroom Session',
      category: 'campus',
      date: 'Baisakh 2081',
      description: 'Interactive smart boards and collaborative digital workstations empowering daily engaging classroom experiences.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&h=700&fit=crop'
    },
    {
      id: 6,
      title: 'AIESEC Global Youth Leadership Summit',
      category: 'cultural',
      date: 'Jestha 2081',
      description: 'Cross-cultural discussions, SDG workshop roundtables, and international exchange presentations on campus.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&h=700&fit=crop'
    },
    {
      id: 7,
      title: 'Modern Chemistry Research Laboratory',
      category: 'campus',
      date: 'Ashadh 2081',
      description: 'Hands-on practical experiments with modern scientific equipment under expert teacher guidance.',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1000&h=700&fit=crop'
    },
    {
      id: 8,
      title: 'Annual Art & Literature Exhibition',
      category: 'cultural',
      date: 'Magh 2080',
      description: 'Expressive student paintings, calligraphic arts, and literary anthologies published by the creative writing club.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&h=700&fit=crop'
    },
    {
      id: 9,
      title: 'Campus Central Library & Reading Lounge',
      category: 'campus',
      date: 'Falgun 2080',
      description: 'A serene sanctuary housing over 15,000 academic titles, periodicals, and private research study carrels.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&h=700&fit=crop'
    }
  ]);
});

// API: Contact form submission
app.post('/api/contact/submit', (req, res) => {
  const { name, email, phone, message, subject } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
  }
  console.log('Contact form submission:', { name, email, phone, subject, message });
  res.json({ success: true, message: 'Thank you! Your message has been received. We will get back to you soon.' });
});

app.listen(PORT, () => {
  console.log(`Asha College API server running on http://localhost:${PORT}`);
});

