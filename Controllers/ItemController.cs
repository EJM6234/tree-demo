using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using AvataxDemo.Services;
using AvataxDemo.Dtos;
using AutoMapper;
using AvataxDemo.Helpers;
using Microsoft.Extensions.Options;
using AvataxDemo.Entities;

namespace AvataxDemo.Controllers
{
    [Route("[controller]")]
    public class ItemsController : Controller
    {
        readonly IItemsService _itemService;
        readonly IMapper _mapper;
        readonly AppSettings _appSettings;

        public ItemsController(
            IItemsService itemService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _itemService = itemService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        // Get all items /items
        [HttpGet]
        public IActionResult GetAll()
        {
            var items = _itemService.GetAll();
            var itemDtos = _mapper.Map<IList<ItemDto>>(items);
            return Ok(itemDtos);
        }

        // Get item by id /items/:id
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var item = _itemService.GetById(id);
            var itemDto = _mapper.Map<ItemDto>(item);
            return Ok(itemDto);
        }

        // Create a new item /items/create
        [HttpPost("create")]
        public IActionResult Register([FromBody]ItemDto itemDto)
        {
            // map dto to entity
            var item = _mapper.Map<Item>(itemDto);
            try
            {
                // save 
                _itemService.Create(item);
                return Ok(item);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        // Update item price /items/:id
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]ItemDto itemDto)
        {
            // map dto to entity and set id
            var item = _mapper.Map<Item>(itemDto);
            item.Id = id;

            try
            {
                // save 
                _itemService.Update(item);
                var items = _itemService.GetAll();
                var itemDtos = _mapper.Map<IList<ItemDto>>(items);
                return Ok(itemDtos);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        // Delete item /items/:id
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _itemService.Delete(id);
            var items = _itemService.GetAll();
            var itemDtos = _mapper.Map<IList<ItemDto>>(items);
            return Ok(itemDtos);
        }
    }
}