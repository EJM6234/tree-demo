using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AvataxDemo.Entities;
using AvataxDemo.Helpers;

namespace AvataxDemo.Services
{
    public interface IItemsService
    {
        IEnumerable<Item> GetAll();
        Item GetById(int id);
        Item Create(Item item);
        void Update(Item item);
        void Delete(int id);
    }

    public class ItemService : IItemsService
    {
        DataContext _context;

        public ItemService(DataContext context)
        {
            _context = context;
        }

        public IEnumerable<Item> GetAll()
        {
            return _context.Items;
        }

        public Item GetById(int id)
        {
            return _context.Items.Find(id);
        }

        public Item Create(Item item)
        {
            if (_context.Items.Any(x => x.Path == item.Path))
                throw new AppException("Item path with name " + item.Path + " is already taken");

            _context.Items.Add(item);
            _context.SaveChanges();

            return item;
        }

        public void Update(Item itemParam)
        {
            var item = _context.Items.Find(itemParam.Id);

            if (item == null)
                throw new AppException("Item not found");

            // update user properties
            item.Price = itemParam.Price;

            _context.Items.Update(item);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var item = _context.Items.Find(id);
            if (item != null)
            {
                _context.Items.Remove(item);
                _context.SaveChanges();
            }
        }
    }
}
