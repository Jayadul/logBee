# Use the official .NET Core runtime image as the base image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5008

# Copy the published files from the host machine into the container
COPY . .

# Command to run the application
ENTRYPOINT ["dotnet", "logBee.Frontend.AspNetCore.dll", "--urls", "http://localhost:5008"]
