using AutoMapper;
using AvataxDemo.Dtos;
using AvataxDemo.Entities;
 
namespace AvataxDemo.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Item, ItemDto>();
            CreateMap<ItemDto, Item>();
        }
    }
}
