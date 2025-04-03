document.addEventListener('DOMContentLoaded', function() {
    // Sample data for bookings
    const bookings = [
        {
            id: "BK001",
            guestName: "John Doe",
            hotel: "Grand Hotel",
            checkIn: "2024-02-01",
            checkOut: "2024-02-05",
            status: "confirmed"
        },
        {
            id: "BK002",
            guestName: "Jane Smith",
            hotel: "Seaside Resort",
            checkIn: "2024-02-03",
            checkOut: "2024-02-07",
            status: "pending"
        },
        {
            id: "BK003",
            guestName: "Mike Johnson",
            hotel: "City View Hotel",
            checkIn: "2024-02-04",
            checkOut: "2024-02-06",
            status: "cancelled"
        }
    ];

    // Populate bookings table
    const tableBody = document.getElementById('bookingsTableBody');
    
    function populateBookingsTable(bookings) {
        tableBody.innerHTML = '';
        
        bookings.forEach(booking => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${booking.id}</td>
                <td>${booking.guestName}</td>
                <td>${booking.hotel}</td>
                <td>${booking.checkIn}</td>
                <td>${booking.checkOut}</td>
                <td><span class="status-badge status-${booking.status}">${booking.status}</span></td>
                <td class="action-buttons">
                    <button class="action-btn" onclick="editBooking('${booking.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn" onclick="deleteBooking('${booking.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Initialize table
    populateBookingsTable(bookings);

    // Menu item click handling
    const menuItems = document.querySelectorAll('.admin-menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Date filter functionality
    const filterBtn = document.querySelector('.filter-btn');
    filterBtn.addEventListener('click', function() {
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        
        // Filter logic would go here
        console.log('Filtering between:', startDate, 'and', endDate);
    });
});

// Booking actions
function editBooking(id) {
    console.log('Editing booking:', id);
    // Add edit booking logic here
}

function deleteBooking(id) {
    if(confirm('Are you sure you want to delete this booking?')) {
        console.log('Deleting booking:', id);
        // Add delete booking logic here
    }
}

// Add real-time stats update (example)
function updateStats() {
    // This would typically fetch real data from your backend
    const stats = {
        bookings: Math.floor(Math.random() * 2000) + 1000,
        revenue: Math.floor(Math.random() * 100000) + 40000,
        users: Math.floor(Math.random() * 500) + 200,
        rating: (Math.random() * 0.5 + 4.5).toFixed(1)
    };

    document.querySelectorAll('.stat-number').forEach((el, index) => {
        const key = Object.keys(stats)[index];
        if(key === 'revenue') {
            el.textContent = `$${stats[key].toLocaleString()}`;
        } else {
            el.textContent = stats[key];
        }
    });
}

// Update stats every 5 minutes
setInterval(updateStats, 300000);