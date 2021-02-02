<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<table style="style: auto; border: 1">
		<caption>Product List</caption>
		<c:forEach var="p" items="${requestScope.product }">
			<tr>
				<td>Enter user mail::</td>
				<td>${p.firstName}</td>
				<td>${p.lastName}</td>
				<td>${p.Dob}</td>
				<td>${p.address}</td>
			</tr>
		</c:forEach>
</body>
</html>