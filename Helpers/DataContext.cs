using Microsoft.EntityFrameworkCore;
using AvataxDemo.Entities;

namespace AvataxDemo.Helpers
{
    public class DataContext : DbContext
    {
        public DbSet<Item> Items { get; set; }
        public DataContext(DbContextOptions<DataContext> options) : base(options) { 
            Database.EnsureCreated();
        }
    }
}