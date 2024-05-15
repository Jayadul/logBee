# LogBee

LogBee is a logging aggregator, exceptions tracking, and Application Performance Monitoring server. It provides an intuitive user interface, allowing developers to access information and other useful metrics in real-time.

The application can be used online, can be installed locally, or it can run as a Docker container.

## Features

- **Centralized Logging**: Aggregate log data from multiple applications into a central location.
- **Real-time Monitoring**: Monitor logs, exceptions, and performance metrics in real-time.
- **Customizable Dashboards**: Create custom dashboards to visualize log data and performance metrics.
- **Search and Filter**: Quickly search and filter log entries and exceptions to find relevant information.
- **Alerting**: Set up alerts for specific log events and performance thresholds.
- **Cross-platform**: Works on Windows, Linux, and Docker environments.
- **Data Storage**: Supports MongoDB 6.0 or Azure Cosmos DB for data storage.


## Technology

- Built on .NET 6
- Works on Windows, Linux, and Docker
- Uses MongoDB 6.0 or Azure Cosmos DB (when hosted on Microsoft Azure)


## Requirements

- [.NET 6 Runtime](https://dotnet.microsoft.com/download/dotnet/6.0)
- [MongoDB 6.0](https://www.mongodb.com/try/download/community) or [Azure Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/) (when hosted on Azure)


## Installation and Setup

### Install Package

    dotnet add package SLS.TRACKER.LOGGER --version 1.0.0

### Update appsettings.json

    { 
    "LogTracker": { 
    "OrganizationId": "aec74b36-d2da-4cd4-9cd1-abde7d23553c", 
    "ApplicationId": "f0d91e36-95c6-42fd-93be-2b2e7bc066d0", 
    "ApiUrl": "[http://localhost:5006/](http://localhost:5006/)" } 
    }

### Update Program.cs

    builder.Host.UseSerilog();
    builder.Services.AddSerilog((services, lc) => lc 
    .WriteTo.Console() // Write logs to console 
    .AddSeliseLogTracker(builder.Configuration, services)  //Write logs to logBee
    );


## Usage

1.  **Logging Integration**: Integrate LogBee with your applications by adding the necessary logging provider.
    
2.  **Custom Dashboards**: Create custom dashboards within the LogBee interface to visualize log data and performance metrics.
    
3.  **Alerting**: Set up alerts within LogBee to receive notifications for specific log events and performance thresholds.
    

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
