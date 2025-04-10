// Sample data for the Dashboard

// Resources data
const resourcesData = [
    {
      title: "day -1 Intro about professional ",
      description: "Learn the basics of resource management and organization.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      type: "Article",
      date: "Today"
    },
    
   
    
   ];
    
    
    // Score data
    const scoreData = {
      badges: [
      { name: "Fast Learner", icon: "fa-bolt", color: "bg-yellow-500", unlocked: true },
      { name: "Resource Pro", icon: "fa-book", color: "bg-blue-500", unlocked: true },
      { name: "Dedicated", icon: "fa-calendar-check", color: "bg-green-500", unlocked: true },
      { name: "Inspired", icon: "fa-lightbulb", color: "bg-purple-500", unlocked: true },
      { name: "Top Performer", icon: "fa-trophy", color: "bg-orange-500", unlocked: false },
      { name: "Expert", icon: "fa-star", color: "bg-red-500", unlocked: false }],
    
      activities: [
      {
        name: "Completed Course",
        resource: "Time Management Essentials",
        date: "Today, 9:30 AM",
        points: 250,
        status: "Completed",
        icon: "fa-check-circle",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        statusBg: "bg-green-100",
        statusColor: "text-green-800"
      },
      {
        name: "Started Course",
        resource: "Advanced Productivity Techniques",
        date: "Yesterday, 3:15 PM",
        points: 50,
        status: "In Progress",
        icon: "fa-play-circle",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        statusBg: "bg-blue-100",
        statusColor: "text-blue-800"
      },
      {
        name: "Earned Badge",
        resource: "Dedicated Badge",
        date: "2 days ago, 11:20 AM",
        points: 100,
        status: "Awarded",
        icon: "fa-award",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        statusBg: "bg-purple-100",
        statusColor: "text-purple-800"
      },
      {
        name: "Completed Quiz",
        resource: "Resource Management Quiz",
        date: "3 days ago, 2:45 PM",
        points: 150,
        status: "Completed",
        icon: "fa-clipboard-check",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        statusBg: "bg-green-100",
        statusColor: "text-green-800"
      },
      {
        name: "Saved Quote",
        resource: "Daily Motivation Quote",
        date: "4 days ago, 9:10 AM",
        points: 25,
        status: "Saved",
        icon: "fa-bookmark",
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600",
        statusBg: "bg-yellow-100",
        statusColor: "text-yellow-800"
      }]
    
    };
    
    // Quotes data
    const quotesData = {
      weekly: [
      { id: 1, text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { id: 2, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { id: 3, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { id: 4, text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }],
    
      motivational: [
      { id: 5, text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
      { id: 6, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
      { id: 7, text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
      { id: 8, text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }],
    
      all: [
      { id: 9, text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "Action" },
      { id: 10, text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "Life" },
      { id: 11, text: "The purpose of our lives is to be happy.", author: "Dalai Lama", category: "Happiness" },
      { id: 12, text: "You only live once, but if you do it right, once is enough.", author: "Mae West", category: "Life" },
      { id: 13, text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison", category: "Success" },
      { id: 14, text: "The mind is everything. What you think you become.", author: "Buddha", category: "Mindset" }]
    
    };