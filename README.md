# Online Attendance System for College

This is an online attendance system built for college students and teachers. The system provides separate login access for students, teachers, and an administrator. It manages attendance for different departments, including BSc CS (1st to 3rd year), BCom, BSc IT, BAAF, BSc Zoology, and other classes. The system also includes IP address access control to block students using proxies.

## Features

- **Role-Based Login System**: Separate login portals for students, teachers, and administrators.
- **Attendance Management**: Teachers can mark attendance for their respective courses.
- **Course Management**: Supports multiple courses and departments.
- **Proxy IP Blocking**: Blocks access from students using proxy servers for attendance manipulation.
- **Admin Dashboard**: Administrators can manage courses, students, and teachers.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB/Firebase (You can choose based on your implementation)
- **IP Proxy Blocking**: Custom middleware to detect proxy IPs
- **Deployment**: Local or Cloud (Heroku, etc.)

## Project Setup

### Prerequisites

- **Node.js** installed on your machine.
- **Git** for version control.
- **MongoDB** or **Firebase** for the database.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/YOUR_USERNAME/online-attendance-system.git
    ```

2. Navigate into the project directory:

    ```bash
    cd online-attendance-system
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

The server will run on `http://localhost:3000`.

### Frontend Pages

- **Login Pages**: For students, teachers, and admins.
- **Dashboard**: Different dashboards for students, teachers, and administrators.

### Backend Routes

- `/login`: Handles user authentication (POST).
- `/attendance`: For marking attendance (POST).
- `/admin`: Admin dashboard to manage users and courses.

### IP Blocking

- Proxy detection middleware is used to block access for students trying to use proxy servers.

### Customization

You can customize the system to support other departments or modify the attendance format according to the requirements.

## Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Name**: Yash Pawar
- **Email**: kingash1530@gmail.com
- **Website**: [AppHavan](https://apphaven.great-site.net)
