using System;
using System.Linq;
using AvataxDemo.Entities;

namespace AvataxDemo.Helpers
{
    public static class DataContextExtensions
    {
    //     public static void CreateSeedData
    //         (this DataContext context)
    //     {
    //         if (context.Candidates.Any())
    //             return;

    //         var user = new Candidate()
    //         {
    //             Username = "ejmorgan",
    //             IsCandidate = true
    //         };

    //         byte[] passwordHash, passwordSalt;
    //         CreatePasswordHash("ejmorgan", out passwordHash, out passwordSalt);

    //         user.PasswordHash = passwordHash;
    //         user.PasswordSalt = passwordSalt;

    //         context.Candidates.Add(user);
    //         context.SaveChanges();
    //     }

    //     static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    //     {
    //         if (password == null) throw new ArgumentNullException(nameof(password));
    //         if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

    //         using (var hmac = new System.Security.Cryptography.HMACSHA512())
    //         {
    //             passwordSalt = hmac.Key;
    //             passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
    //         }
    //     }
    }
}