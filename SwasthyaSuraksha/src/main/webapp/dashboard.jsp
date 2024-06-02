<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%
Connection conn = null;
Statement stmt = null;
ResultSet rs = null;

try {
    // Establish connection to the MySQL database
    Class.forName("com.mysql.jdbc.Driver");
    conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/health_monitoring");

    // Execute query to fetch data
    stmt = conn.createStatement();
    rs = stmt.executeQuery("SELECT disease, cases FROM health_data");

    // Display data in the dashboard
    out.println("<h2>Real-Time Data Dashboard</h2>");
    while (rs.next()) {
        String disease = rs.getString("disease");
        int cases = rs.getInt("cases");
        out.println("<p>Disease: " + disease + "</p>");
        out.println("<p>Cases: " + cases + "</p>");
    }
} catch (Exception e) {
    out.println("Error: " + e.getMessage());
} finally {
    // Close connections
    if (rs != null) {
        try {
            rs.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    if (stmt != null) {
        try {
            stmt.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    if (conn != null) {
        try {
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
%>
