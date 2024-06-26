import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Get()
  getAllLists(): Promise<List[]> {
    return this.listsService.getAllLists();
  }
  @Post()
  createList(@Body() createListDto: CreateListDto) {
    return this.listsService.createList(createListDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listsService.findOne(+id);
  }

  @Patch(':id')
  updateList(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.listsService.updateList(+id, updateListDto);
  }

  @Delete(':id')
  async deleteList(@Param('id') id: string) {
    await this.listsService.deleteList(+id);
    return { message: 'List deleted successfully' };
  }
}
