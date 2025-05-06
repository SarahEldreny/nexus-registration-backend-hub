
# Medical Nexus Portal Backend

This document provides guidance on setting up the ASP.NET Core Web API backend for the Medical Nexus Portal.

## Project Setup Instructions

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Visual Studio Code](https://code.visualstudio.com/)
- [C# Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

### Steps to Create the ASP.NET Core Backend

1. Create a new ASP.NET Core Web API project:

```bash
mkdir MedicalNexusApi
cd MedicalNexusApi
dotnet new webapi
```

2. Install required NuGet packages:

```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.EntityFrameworkCore.Design
```

3. Create the project structure:

```
/MedicalNexusApi
  /Controllers
    AuthController.cs
    UserController.cs
  /Models
    ApplicationUser.cs
    MedicalSpecialty.cs
    RegistrationRequest.cs
    LoginRequest.cs
    AuthResponse.cs
  /Data
    ApplicationDbContext.cs
  /Services
    AuthService.cs
    IAuthService.cs
  /Helpers
    JwtHelper.cs
  appsettings.json
  Program.cs
```

4. Implement the models, controllers, and services as shown in the sample code below.

## Sample Implementation

### ApplicationUser.cs
```csharp
namespace MedicalNexusApi.Models
{
    public class ApplicationUser
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Specialty { get; set; }
        public string LicenseNumber { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
```

### RegistrationRequest.cs
```csharp
namespace MedicalNexusApi.Models
{
    public class RegistrationRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Specialty { get; set; }
        public string LicenseNumber { get; set; }
    }
}
```

### AuthController.cs
```csharp
using Microsoft.AspNetCore.Mvc;
using MedicalNexusApi.Models;
using MedicalNexusApi.Services;
using System.Threading.Tasks;

namespace MedicalNexusApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegistrationRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _authService.Register(request);
            
            if (!result.Success)
                return BadRequest(new { message = result.Message });

            return Ok(new { message = "Registration successful", token = result.Token });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _authService.Login(request.Email, request.Password);
            
            if (!result.Success)
                return BadRequest(new { message = result.Message });

            return Ok(new { token = result.Token });
        }
    }
}
```

## CORS Configuration
To allow requests from your React frontend, configure CORS in Program.cs:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("http://localhost:8080")
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

// Make sure to use the CORS policy in your app
app.UseCors("AllowSpecificOrigin");
```

## Connecting the Frontend
Update your React frontend to point to your ASP.NET Core API endpoints once deployed. The endpoints will be:

- Register: POST /api/auth/register
- Login: POST /api/auth/login

## Database Migrations
Once your models and DbContext are set up:

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## Running the API
```bash
dotnet run
```

This will start your API at https://localhost:5001 and http://localhost:5000.
